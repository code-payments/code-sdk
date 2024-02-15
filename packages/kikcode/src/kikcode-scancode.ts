const ErrGenerateKikCode = (err: KikCodeError) => new Error(`Error generating Kik Code: ${err}`);

export interface KikCodePayload {
    data: Uint8Array;
}

export interface KikCodeDescription {
    size: { width: number; height: number };
    center: string;
    dots: string[];
    arcs: string[];
    dotDimension: number;
}

enum KikCodeError {
    InvalidSize,
    EmptyData,
    DataTooLong,
}

const KikCode = {
    innerRingRatio: 0.32,
    firstRingRatio: 0.425,
    lastRingRatio: 0.95,
    scaleFactor: 8.0,
    ringCount: 6,

    generateDescription: function (
        size: { width: number; height: number },
        data: Uint8Array
    ): KikCodeDescription {
        const payload = createKikCodePayload(data);
        const dimension = Math.min(size.width, size.height);

        if (dimension <= 0) {
            throw ErrGenerateKikCode(KikCodeError.InvalidSize);
        }

        if (payload.data.length === 0) {
            throw ErrGenerateKikCode(KikCodeError.EmptyData);
        }

        if (payload.data.length >= 40) {
            throw ErrGenerateKikCode(KikCodeError.DataTooLong);
        }

        const byteArray = payload.data;

        const center = {
            x: dimension * 0.5,
            y: dimension * 0.5,
        };

        const outerRingWidth = dimension * 0.5;
        const innerRingWidth = KikCode.innerRingRatio * outerRingWidth;
        const firstRingWidth = KikCode.firstRingRatio * outerRingWidth;
        const lastRingWidth = KikCode.lastRingRatio * outerRingWidth;

        let dots: string[] = [];
        let arcs: string[] = [];

        // Store the center SVG path string
        const centerPathString = `M${center.x},${center.y} m-${innerRingWidth},0 a${innerRingWidth},${innerRingWidth} 0 1,0 ${innerRingWidth * 2},0 a${innerRingWidth},${innerRingWidth} 0 1,0 -${innerRingWidth * 2},0`;
        const ringWidth = (lastRingWidth - firstRingWidth) / KikCode.ringCount;
        const dotSize = (ringWidth * 3) / 4;

        let offset = 0;

        for (let ring = 0; ring < KikCode.ringCount; ring++) {
            let r = ringWidth * ring + firstRingWidth;
            if (ring === 0) {
                r -= innerRingWidth / 10;
            }

            const n = KikCode.scaleFactor * ring + 32;
            const delta = (Math.PI * 2) / n;

            const startOffset = offset;

            for (let a = 0; a < n; a++) {
                const angle = a * delta - Math.PI / 2;

                const bitMask = 0x1 << (offset % 8);
                const byteIndex = Math.floor(offset / 8);
                const currentBit = byteIndex < byteArray.length && (byteArray[byteIndex] & bitMask) !== 0;

                if (currentBit) {
                    const radius = r + ringWidth / 2;
                    const xc = center.x + radius * Math.cos(angle);
                    const yc = center.y + radius * Math.sin(angle);
                    const arcCenter = { x: xc, y: yc };

                    const nextOffset = ((offset - startOffset + 1) % n) + startOffset;
                    const nextBitMask = 0x1 << (nextOffset % 8);
                    const nextIndex = Math.floor(nextOffset / 8);
                    const nextBit = nextIndex < byteArray.length && (byteArray[nextIndex] & nextBitMask) !== 0;

                    if (nextBit) {
                        // Store the arc SVG path string
                        const arcPathString = `M${center.x + radius * Math.cos(angle)},${center.y + radius * Math.sin(angle)} A${radius},${radius} 0 0,1 ${center.x + radius * Math.cos(angle + delta)},${center.y + radius * Math.sin(angle + delta)}`;
                        arcs.push(arcPathString);
                    } else {
                        // Store the dot SVG path string
                        const dotPathString = `M${arcCenter.x},${arcCenter.y} m-${dotSize * 0.5},0 a${dotSize * 0.5},${dotSize * 0.5} 0 1,0 ${dotSize},0 a${dotSize * 0.5},${dotSize * 0.5} 0 1,0 -${dotSize},0`;
                        dots.push(dotPathString);
                    }
                }

                offset += 1;
            }
        }

        return {
            size: { width: dimension, height: dimension },
            center: centerPathString,
            dots: dots,
            arcs: arcs,
            dotDimension: dotSize,
        };
    },
};

const createKikCodePayload = (data: Uint8Array): KikCodePayload => {
    const finderBytes = new Uint8Array([0xb2, 0xcb, 0x25, 0xc6]);
    const payload = new Uint8Array(data.length + finderBytes.length);
    payload.set(finderBytes);
    payload.set(data, finderBytes.length);
    return { data: payload };
};

export {
    KikCode,
    KikCodeError,
}