declare namespace BP3D.Floorplanner {
    /**
     * The Floorplanner implements an interactive tool for creation of floorplans.
     */
    class Floorplanner {
        private floorplan;
        /** */
        mode: number;
        /** */
        activeWall: any;
        /** */
        activeCorner: any;
        /** */
        originX: number;
        /** */
        originY: number;
        /** drawing state */
        targetX: number;
        /** drawing state */
        targetY: number;
        /** drawing state */
        lastNode: any;
        /** */
        private wallWidth;
        /** */
        private modeResetCallbacks;
        /** */
        private canvasElement;
        /** */
        private view;
        /** */
        private mouseDown;
        /** */
        private mouseMoved;
        /** in ThreeJS coords */
        private mouseX;
        /** in ThreeJS coords */
        private mouseY;
        /** in ThreeJS coords */
        private rawMouseX;
        /** in ThreeJS coords */
        private rawMouseY;
        /** mouse position at last click */
        private lastX;
        /** mouse position at last click */
        private lastY;
        /** */
        private cmPerPixel;
        /** */
        private pixelsPerCm;
        /** */
        constructor(canvas: string, floorplan: Model.Floorplan);
        /** */
        private escapeKey;
        /** */
        private updateTarget;
        /** */
        private mousedown;
        /** */
        private mousemove;
        /** */
        private mouseup;
        /** */
        private mouseleave;
        /** */
        private reset;
        /** */
        private resizeView;
        /** */
        private setMode;
        /** Sets the origin so that floorplan is centered */
        private resetOrigin;
        /** Convert from THREEjs coords to canvas coords. */
        convertX(x: number): number;
        /** Convert from THREEjs coords to canvas coords. */
        convertY(y: number): number;
    }
}
