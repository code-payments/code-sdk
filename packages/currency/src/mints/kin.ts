import { PublicKey } from '@code-wallet/keys';

/**
 * Represents the Kin cryptocurrency with operations to handle whole and fractional units.
 */
class Kin {
  /** The whole part of the Kin amount. */
  whole: bigint;

  /** The fractional part (quarks) of the Kin amount. */
  quarks: bigint;

  /**
   * Constructs a new Kin instance.
   * @param whole - The whole part of the Kin amount.
   * @param quarks - The fractional part (quarks) of the Kin amount. Default is 0.
   */
  constructor(whole: number, quarks: number = 0) {
    this.whole = BigInt(whole);
    this.quarks = BigInt(quarks);
    this.normalize();
  }

  /**
   * Normalizes the Kin values ensuring the `quarks` value is within the valid range.
   * Any overflow is added to the `whole` value.
   */
  private normalize() {
    const extraWhole = this.quarks / Kin.quarksPerKin;
    this.whole += extraWhole;
    this.quarks %= Kin.quarksPerKin;
  }

  /**
   * Converts the Kin amount to its equivalent in quarks.
   * @returns The total value in quarks.
   */
  toQuarks(): bigint {
    return this.whole * Kin.quarksPerKin + this.quarks;
  }

  /**
   * Converts the Kin amount to a decimal representation.
   * @returns The Kin value as a decimal number.
   */
  toDecimal(): number {
    return Number(this.whole) + Number(this.quarks) / Number(Kin.quarksPerKin);
  }

  /**
   * Creates a Kin instance from a given quarks value.
   * @param quarks - The value in quarks.
   * @returns A new Kin instance.
   */
  static fromQuarks(quarks: bigint): Kin {
    const whole = Number(quarks / Kin.quarksPerKin);
    const remainingQuarks = Number(quarks % Kin.quarksPerKin);
    return new Kin(whole, remainingQuarks);
  }

  /**
   * Creates a Kin instance from a decimal value.
   * @param decimal - The decimal value to convert.
   * @returns A new Kin instance.
   */
  static fromDecimal(decimal: number): Kin {
    const quarks = BigInt(Math.round(decimal * Number(Kin.quarksPerKin)));
    return Kin.fromQuarks(quarks);
  }

  /**
   * Adds another Kin value to the current one.
   * @param other - The other Kin value to add.
   * @returns A new Kin instance with the summed value.
   */
  add(other: Kin): Kin {
    const resultQuarks = this.toQuarks() + other.toQuarks();
    return Kin.fromQuarks(resultQuarks);
  }

  /**
   * Subtracts another Kin value from the current one.
   * @param other - The other Kin value to subtract.
   * @returns A new Kin instance with the difference.
   */
  subtract(other: Kin): Kin {
    const resultQuarks = this.toQuarks() - other.toQuarks();
    return Kin.fromQuarks(resultQuarks);
  }

  /**
   * Multiplies the current Kin value by a factor.
   * @param factor - The multiplication factor.
   * @returns A new Kin instance with the multiplied value.
   */
  multiply(factor: number): Kin {
    const resultQuarks = this.toQuarks() * BigInt(factor);
    return Kin.fromQuarks(resultQuarks);
  }

  /**
   * Divides the current Kin value by a divisor.
   * @param divisor - The divisor.
   * @returns A new Kin instance with the divided value.
   */
  divide(divisor: number): Kin {
    // Note: Using integer division which truncates towards zero.
    const resultQuarks = this.toQuarks() / BigInt(divisor);
    return Kin.fromQuarks(resultQuarks);
  }

  /** The number of decimals to be used in calculations. */
  static readonly decimals = 5n;

  /**
   * Defines the conversion rate between whole Kin and quarks.
   * Note: Using 100000n instead of (10n ** Kin.decimals) to avoid a bug in babel.
   * See https://github.com/facebook/create-react-app/issues/10785#issuecomment-838310427
   */
  static readonly quarksPerKin = 100000n; // (10n ** Kin.decimals);

  /** The mint address for the Kin cryptocurrency. */
  static readonly mintAddress = "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6";

  /** Represents the PublicKey for the Kin mint. */
  static readonly mint = PublicKey.fromBase58(Kin.mintAddress)

  /** Represents the value of zero in Kin. */
  static readonly zero = new Kin(0, 0);

  /** Represents the value of one in Kin. */
  static readonly one = new Kin(1, 0);

  /** Represents the maximum possible value of Kin. */
  static readonly max = new Kin(Number.MAX_SAFE_INTEGER, Number(Kin.quarksPerKin - 1n));

  /** Represents the minimum possible value of Kin. */
  static readonly min = new Kin(Number.MIN_SAFE_INTEGER, 0);
}

export {
    Kin
}