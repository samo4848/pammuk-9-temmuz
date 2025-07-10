declare namespace BP3D.Core {
    /** Dimensioning in Inch. */
    const dimInch: string;
    /** Dimensioning in Meter. */
    const dimMeter: string;
    /** Dimensioning in Centi Meter. */
    const dimCentiMeter: string;
    /** Dimensioning in Milli Meter. */
    const dimMilliMeter: string;
    /** Dimensioning functions. */
    class Dimensioning {
        /** Converts cm to dimensioning string.
         * @param cm Centi meter value to be converted.
         * @returns String representation.
         */
        static cmToMeasure(cm: number): string;
    }
}
