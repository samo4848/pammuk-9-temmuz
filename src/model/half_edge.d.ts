declare namespace BP3D.Model {
    /**
     * Half Edges are created by Room.
     *
     * Once rooms have been identified, Half Edges are created for each interior wall.
     *
     * A wall can have two half edges if it is visible from both sides.
     */
    class HalfEdge {
        private room;
        wall: Wall;
        private front;
        /** The successor edge in CCW ??? direction. */
        next: HalfEdge;
        /** The predecessor edge in CCW ??? direction. */
        prev: HalfEdge;
        /** */
        offset: number;
        /** */
        height: number;
        /** used for intersection testing... not convinced this belongs here */
        plane: THREE.Mesh;
        /** transform from world coords to wall planes (z=0) */
        interiorTransform: THREE.Matrix4;
        /** transform from world coords to wall planes (z=0) */
        invInteriorTransform: THREE.Matrix4;
        /** transform from world coords to wall planes (z=0) */
        private exteriorTransform;
        /** transform from world coords to wall planes (z=0) */
        private invExteriorTransform;
        /** */
        redrawCallbacks: JQuery.Callbacks<Function>;
        /**
         * Constructs a half edge.
         * @param room The associated room.
         * @param wall The corresponding wall.
         * @param front True if front side.
         */
        constructor(room: Room, wall: Wall, front: boolean);
        /**
         *
         */
        getTexture(): {
            url: string;
            stretch: boolean;
            scale: number;
        };
        /**
         *
         */
        setTexture(textureUrl: string, textureStretch: boolean, textureScale: number): void;
        /**
         * this feels hacky, but need wall items
         */
        generatePlane: () => void;
        interiorDistance(): number;
        private computeTransforms;
        /** Gets the distance from specified point.
         * @param x X coordinate of the point.
         * @param y Y coordinate of the point.
         * @returns The distance.
         */
        distanceTo(x: number, y: number): number;
        private getStart;
        private getEnd;
        private getOppositeEdge;
        interiorEnd(): {
            x: number;
            y: number;
        };
        interiorStart(): {
            x: number;
            y: number;
        };
        interiorCenter(): {
            x: number;
            y: number;
        };
        exteriorEnd(): {
            x: number;
            y: number;
        };
        exteriorStart(): {
            x: number;
            y: number;
        };
        /** Get the corners of the half edge.
         * @returns An array of x,y pairs.
         */
        corners(): {
            x: number;
            y: number;
        }[];
        /**
         * Gets CCW angle from v1 to v2
         */
        private halfAngleVector;
    }
}
