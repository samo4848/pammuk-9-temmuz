declare namespace BP3D.Items {
    /**
     * A Wall Item is an entity to be placed related to a wall.
     */
    abstract class WallItem extends Item {
        /** The currently applied wall edge. */
        protected currentWallEdge: Model.HalfEdge;
        /** used for finding rotations */
        private refVec;
        /** */
        private wallOffsetScalar;
        /** */
        private sizeX;
        /** */
        private sizeY;
        /** */
        protected addToWall: boolean;
        /** */
        protected boundToFloor: boolean;
        /** */
        protected frontVisible: boolean;
        /** */
        protected backVisible: boolean;
        constructor(model: Model.Model, metadata: Metadata, geometry: THREE.Geometry, material: THREE.MeshFaceMaterial, position: THREE.Vector3, rotation: number, scale: THREE.Vector3);
        /** Get the closet wall edge.
         * @returns The wall edge.
         */
        closestWallEdge(): Model.HalfEdge;
        /** */
        removed(): void;
        /** */
        private redrawWall;
        /** */
        private updateEdgeVisibility;
        /** */
        private updateSize;
        /** */
        resized(): void;
        /** */
        placeInRoom(): void;
        /** */
        moveToPosition(vec3: any, intersection: any): void;
        /** */
        protected getWallOffset(): number;
        /** */
        private changeWallEdge;
        /** Returns an array of planes to use other than the ground plane
         * for passing intersection to clickPressed and clickDragged */
        customIntersectionPlanes(): THREE.Mesh[];
        /** takes the move vec3, and makes sure object stays bounded on plane */
        private boundMove;
    }
}
