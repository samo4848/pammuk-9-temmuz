declare namespace BP3D.Floorplanner {
    /** */
    const floorplannerModes: {
        MOVE: number;
        DRAW: number;
        DELETE: number;
    };
    /**
     * The View to be used by a Floorplanner to render in/interact with.
     */
    class FloorplannerView {
        private floorplan;
        private viewmodel;
        private canvas;
        /** The canvas element. */
        private canvasElement;
        /** The 2D context. */
        private context;
        /** */
        constructor(floorplan: Model.Floorplan, viewmodel: Floorplanner, canvas: string);
        /** */
        handleWindowResize(): void;
        /** */
        draw(): void;
        /** */
        private drawWallLabels;
        /** */
        private drawWall;
        /** */
        private drawEdgeLabel;
        /** */
        private drawEdge;
        /** */
        private drawRoom;
        /** */
        private drawCorner;
        /** */
        private drawTarget;
        /** */
        private drawLine;
        /** */
        private drawPolygon;
        /** */
        private drawCircle;
        /** returns n where -gridSize/2 < n <= gridSize/2  */
        private calculateGridOffset;
        /** */
        private drawGrid;
    }
}
