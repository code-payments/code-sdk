import { ErrInvalidCurrency } from "./errors";
import { CurrencyCode } from "./types";

/**
 * Index of currency codes in the lookup table.
 */
const lookupTable = [
// Crypto
    "kin",
// Fiat
    "aed", "afn", "all", "amd", "ang", "aoa", "ars", "aud", "awg", "azn", "bam",
    "bbd", "bdt", "bgn", "bhd", "bif", "bmd", "bnd", "bob", "brl", "bsd", "btn",
    "bwp", "byn", "bzd", "cad", "cdf", "chf", "clp", "cny", "cop", "crc", "cup",
    "cve", "czk", "djf", "dkk", "dop", "dzd", "egp", "ern", "etb", "eur", "fjd",
    "fkp", "gbp", "gel", "ghs", "gip", "gmd", "gnf", "gtq", "gyd", "hkd", "hnl",
    "hrk", "htg", "huf", "idr", "ils", "inr", "iqd", "irr", "isk", "jmd", "jod",
    "jpy", "kes", "kgs", "khr", "kmf", "kpw", "krw", "kwd", "kyd", "kzt", "lak",
    "lbp", "lkr", "lrd", "lyd", "mad", "mdl", "mga", "mkd", "mmk", "mnt", "mop",
    "mru", "mur", "mvr", "mwk", "mxn", "myr", "mzn", "nad", "ngn", "nio", "nok",
    "npr", "nzd", "omr", "pab", "pen", "pgk", "php", "pkr", "pln", "pyg", "qar",
    "ron", "rsd", "rub", "rwf", "sar", "sbd", "scr", "sdg", "sek", "sgd", "shp",
    "sll", "sos", "srd", "ssp", "stn", "syp", "szl", "thb", "tjs", "tmt", "tnd",
    "top", "try", "ttd", "twd", "tzs", "uah", "ugx", "usd", "uyu", "uzs", "ves",
    "vnd", "vuv", "wst", "xaf", "xcd", "xof", "xpf", "yer", "zar", "zmw"
];

/**
 * Converts a currency code to its index in the lookup table.
 * @param currency 
 * @returns The index of the currency code in the lookup table.
 */
function currencyCodeToIndex(currency: CurrencyCode): number {
    const index = lookupTable.indexOf(currency);
    if (index === -1) {
        throw ErrInvalidCurrency();
    }

    return index;
}

/**
 * Converts an index in the lookup table to a currency code.
 * @param index
 * @returns The currency code at the given index.
 */
function indexToCurrencyCode(index: number): CurrencyCode {
    if (index < 0 || index >= lookupTable.length) {
        throw ErrInvalidCurrency();
    }

    return lookupTable[index] as CurrencyCode;
}

/**
 * Checks if the given currency code is valid.
 * @param currency 
 * @returns True if the currency code is valid, false otherwise.
 */
function isValidCurrency(currency: string): boolean {
    return lookupTable.indexOf(currency) !== -1;
}

/**
 * Converts a currency code to its region code. This is useful for displaying
 * the currency code flag and formatting the currency number based on the
 * region.
 * 
 * @param currency 
 * @returns The region code of the currency code.
 */
function currencyCodeToRegion(currency: CurrencyCode) : string | undefined {
    switch (currency) {
        case 'usd': { return 'us'; }
        case 'eur': { return 'eu'; }
        case 'chf': { return 'ch'; }
        case 'nzd': { return 'nz'; }
        case 'xcd': { return 'ag'; }
        case 'zar': { return 'za'; }
        case 'dkk': { return 'dk'; }
        case 'gbp': { return 'gb'; }
        case 'ang': { return 'cw'; }
        case 'xpf': { return 'pf'; }
        case 'mad': { return 'ma'; }
        case 'xaf': { return 'il'; }
        case 'aud': { return 'au'; }
        case 'nok': { return 'no'; }
        case 'ils': { return 'il'; }
        case 'xof': { return 'il'; }
        case 'bdt': { return 'bd'; }
        case 'gtq': { return 'gt'; }
        case 'gyd': { return 'gy'; }
        case 'afn': { return 'af'; }
        case 'kyd': { return 'ky'; }
        case 'bbd': { return 'bb'; }
        case 'kes': { return 'ke'; }
        case 'mvr': { return 'mv'; }
        case 'egp': { return 'eg'; }
        case 'crc': { return 'cr'; }
        case 'hrk': { return 'hr'; }
        case 'sgd': { return 'sg'; }
        case 'brl': { return 'br'; }
        case 'kgs': { return 'kg'; }
        case 'ssp': { return 'ss'; }
        case 'btn': { return 'bt'; }
        case 'pkr': { return 'pk'; }
        case 'mmk': { return 'mm'; }
        case 'mru': { return 'mr'; }
        case 'uzs': { return 'uz'; }
        case 'stn': { return 'st'; }
        case 'lyd': { return 'ly'; }
        case 'mzn': { return 'mz'; }
        case 'sll': { return 'sl'; }
        case 'tjs': { return 'tj'; }
        case 'hkd': { return 'hk'; }
        case 'shp': { return 'sh'; }
        case 'mxn': { return 'mx'; }
        case 'wst': { return 'ws'; }
        case 'bob': { return 'bo'; }
        case 'idr': { return 'id'; }
        case 'cdf': { return 'cd'; }
        case 'bsd': { return 'bs'; }
        case 'bmd': { return 'bm'; }
        case 'huf': { return 'hu'; }
        case 'azn': { return 'az'; }
        case 'pab': { return 'pa'; }
        case 'kzt': { return 'kz'; }
        case 'cop': { return 'co'; }
        case 'rub': { return 'ru'; }
        case 'qar': { return 'qa'; }
        case 'cup': { return 'cu'; }
        case 'amd': { return 'am'; }
        case 'top': { return 'to'; }
        case 'sar': { return 'sa'; }
        case 'kpw': { return 'kp'; }
        case 'nio': { return 'ni'; }
        case 'aoa': { return 'ao'; }
        case 'isk': { return 'is'; }
        case 'mnt': { return 'mn'; }
        case 'mga': { return 'mg'; }
        case 'thb': { return 'th'; }
        case 'byn': { return 'by'; }
        case 'bwp': { return 'bw'; }
        case 'rsd': { return 'rs'; }
        case 'clp': { return 'cl'; }
        case 'gmd': { return 'gm'; }
        case 'aed': { return 'ae'; }
        case 'tzs': { return 'tz'; }
        case 'all': { return 'al'; }
        case 'khr': { return 'kh'; }
        case 'irr': { return 'ir'; }
        case 'etb': { return 'et'; }
        case 'php': { return 'ph'; }
        case 'mdl': { return 'md'; }
        case 'sbd': { return 'sb'; }
        case 'sdg': { return 'sd'; }
        case 'vuv': { return 'vu'; }
        case 'mkd': { return 'mk'; }
        case 'htg': { return 'ht'; }
        case 'srd': { return 'sr'; }
        case 'bzd': { return 'bz'; }
        case 'bif': { return 'bi'; }
        case 'myr': { return 'my'; }
        case 'pen': { return 'pe'; }
        case 'bhd': { return 'bh'; }
        case 'ron': { return 'ro'; }
        case 'uah': { return 'ua'; }
        case 'pyg': { return 'py'; }
        case 'ttd': { return 'tt'; }
        case 'cad': { return 'ca'; }
        case 'scr': { return 'sc'; }
        case 'try': { return 'tr'; }
        case 'ves': { return 've'; }
        case 'fkp': { return 'fk'; }
        case 'hnl': { return 'hn'; }
        case 'gnf': { return 'gn'; }
        case 'ngn': { return 'ng'; }
        case 'mwk': { return 'mw'; }
        case 'ern': { return 'er'; }
        case 'szl': { return 'sz'; }
        case 'bgn': { return 'bg'; }
        case 'mop': { return 'mo'; }
        case 'sek': { return 'se'; }
        case 'bnd': { return 'bn'; }
        case 'fjd': { return 'fj'; }
        case 'kwd': { return 'kw'; }
        case 'czk': { return 'cz'; }
        case 'twd': { return 'tw'; }
        case 'dop': { return 'do'; }
        case 'djf': { return 'dj'; }
        case 'jpy': { return 'jp'; }
        case 'omr': { return 'om'; }
        case 'lrd': { return 'lr'; }
        case 'kmf': { return 'km'; }
        case 'mur': { return 'mu'; }
        case 'jmd': { return 'jm'; }
        case 'tnd': { return 'tn'; }
        case 'lbp': { return 'lb'; }
        case 'tmt': { return 'tm'; }
        case 'jod': { return 'jo'; }
        case 'lkr': { return 'lk'; }
        case 'ugx': { return 'ug'; }
        case 'sos': { return 'so'; }
        case 'nad': { return 'na'; }
        case 'pln': { return 'pl'; }
        case 'awg': { return 'aw'; }
        case 'rwf': { return 'rw'; }
        case 'lak': { return 'la'; }
        case 'dzd': { return 'dz'; }
        case 'yer': { return 'ye'; }
        case 'syp': { return 'sy'; }
        case 'uyu': { return 'uy'; }
        case 'cny': { return 'cn'; }
        case 'krw': { return 'kr'; }
        case 'ars': { return 'ar'; }
        case 'ghs': { return 'gh'; }
        case 'npr': { return 'np'; }
        case 'inr': { return 'in'; }
        case 'iqd': { return 'iq'; }
        case 'bam': { return 'ba'; }
        case 'cve': { return 'cv'; }
        case 'gel': { return 'ge'; }
        case 'zmw': { return 'zm'; }
        case 'gip': { return 'gi'; }
        case 'vnd': { return 'vn'; }
        case 'pgk': { return 'pg'; }
    }
}

export {
    currencyCodeToIndex,
    currencyCodeToRegion,
    indexToCurrencyCode,
    isValidCurrency
};
