declare namespace BP3D {
    /** Startup options. */
    interface Options {
        /** */
        widget?: boolean;
        /** */
        threeElement?: string;
        /** */
        threeCanvasElement?: string;
        /** */
        floorplannerElement?: string;
        /** The texture directory. */
        textureDir?: string;
    }
    /** Blueprint3D core application. */
    class Blueprint3d {
        private model;
        private three;
        private floorplanner;
        /** Creates an instance.
         * @param options The initialization options.
         */
        constructor(options: Options);
    }
}
