declare namespace BP3D.Model {
    /**
     * A Room is the combination of a Floorplan with a floor plane.
     */
    class Room {
        private floorplan;
        corners: Corner[];
        /** */
        interiorCorners: Corner[];
        /** */
        private edgePointer;
        /** floor plane for intersection testing */
        floorPlane: THREE.Mesh;
        /** */
        private customTexture;
        /** */
        private floorChangeCallbacks;
        /**
         *  ordered CCW
         */
        constructor(floorplan: Floorplan, corners: Corner[]);
        private getUuid;
        fireOnFloorChange(callback: any): void;
        private getTexture;
        /**
         * textureStretch always true, just an argument for consistency with walls
         */
        private setTexture;
        private generatePlane;
        private cycleIndex;
        private updateInteriorCorners;
        /**
         * Populates each wall's half edge relating to this room
         * this creates a fancy doubly connected edge list (DCEL)
         */
        private updateWalls;
    }
}
