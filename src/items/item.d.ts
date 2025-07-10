declare namespace BP3D.Items {
    /**
     * An Item is an abstract entity for all things placed in the scene,
     * e.g. at walls or on the floor.
     */
    abstract class Item extends THREE.Mesh {
        protected model: Model.Model;
        metadata: Metadata;
        /** */
        private scene;
        /** */
        private errorGlow;
        /** */
        private hover;
        /** */
        private selected;
        /** */
        private highlighted;
        /** */
        private error;
        /** */
        private emissiveColor;
        /** */
        private errorColor;
        /** */
        private resizable;
        /** Does this object affect other floor items */
        protected obstructFloorMoves: boolean;
        /** */
        protected position_set: boolean;
        /** Show rotate option in context menu */
        protected allowRotate: boolean;
        /** */
        fixed: boolean;
        /** dragging */
        private dragOffset;
        /** */
        protected halfSize: THREE.Vector3;
        /** Constructs an item.
         * @param model TODO
         * @param metadata TODO
         * @param geometry TODO
         * @param material TODO
         * @param position TODO
         * @param rotation TODO
         * @param scale TODO
         */
        constructor(model: Model.Model, metadata: Metadata, geometry: THREE.Geometry, material: THREE.MeshFaceMaterial, position: THREE.Vector3, rotation: number, scale: THREE.Vector3);
        /** */
        remove(): void;
        /** */
        resize(height: number, width: number, depth: number): void;
        /** */
        setScale(x: number, y: number, z: number): void;
        /** */
        setFixed(fixed: boolean): void;
        /** Subclass can define to take action after a resize. */
        protected abstract resized(): any;
        /** */
        getHeight: () => number;
        /** */
        getWidth: () => number;
        /** */
        getDepth: () => number;
        /** */
        abstract placeInRoom(): any;
        /** */
        initObject: () => void;
        /** */
        removed(): void;
        /** on is a bool */
        updateHighlight(): void;
        /** */
        mouseOver(): void;
        /** */
        mouseOff(): void;
        /** */
        setSelected(): void;
        /** */
        setUnselected(): void;
        /** intersection has attributes point (vec3) and object (THREE.Mesh) */
        clickPressed(intersection: any): void;
        /** */
        clickDragged(intersection: any): void;
        /** */
        rotate(intersection: any): void;
        /** */
        moveToPosition(vec3: any, intersection: any): void;
        /** */
        clickReleased(): void;
        /**
         * Returns an array of planes to use other than the ground plane
         * for passing intersection to clickPressed and clickDragged
         */
        customIntersectionPlanes(): any[];
        /**
         * returns the 2d corners of the bounding polygon
         *
         * offset is Vector3 (used for getting corners of object at a new position)
         *
         * TODO: handle rotated objects better!
         */
        getCorners(xDim: any, yDim: any, position: any): {
            x: number;
            y: number;
        }[];
        /** */
        abstract isValidPosition(vec3: any): boolean;
        /** */
        showError(vec3: any): void;
        /** */
        hideError(): void;
        /** */
        private objectHalfSize;
        /** */
        createGlow(color: any, opacity: any, ignoreDepth: any): THREE.Mesh;
    }
}
