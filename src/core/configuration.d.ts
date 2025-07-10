declare namespace BP3D.Core {
    /** The dimensioning unit for 2D floorplan measurements. */
    const configDimUnit = "dimUnit";
    /** The initial wall height in cm. */
    const configWallHeight = "wallHeight";
    /** The initial wall thickness in cm. */
    const configWallThickness = "wallThickness";
    /** Global configuration to customize the whole system.  */
    class Configuration {
        /** Configuration data loaded from/stored to extern. */
        private static data;
        /** Set a configuration parameter. */
        static setValue(key: string, value: string | number): void;
        /** Get a string configuration parameter. */
        static getStringValue(key: string): string;
        /** Get a numeric configuration parameter. */
        static getNumericValue(key: string): number;
    }
}
