declare namespace BP3D.Model {
    /**
     * A Wall is the basic element to create Rooms.
     *
     * Walls consists of two half edges.
     */
    class Wall {
        private start;
        private end;
        /** The unique id of each wall. */
        private id;
        /** Front is the plane from start to end. */
        frontEdge: HalfEdge;
        /** Back is the plane from end to start. */
        backEdge: HalfEdge;
        /** */
        orphan: boolean;
        /** Items attached to this wall */
        items: Items.Item[];
        /** */
        onItems: Items.Item[];
        /** The front-side texture. */
        frontTexture: {
            url: string;
            stretch: boolean;
            scale: number;
        };
        /** The back-side texture. */
        backTexture: {
            url: string;
            stretch: boolean;
            scale: number;
        };
        /** Wall thickness. */
        thickness: number;
        /** Wall height. */
        height: number;
        /** Actions to be applied after movement. */
        private moved_callbacks;
        /** Actions to be applied on removal. */
        private deleted_callbacks;
        /** Actions to be applied explicitly. */
        private action_callbacks;
        /**
         * Constructs a new wall.
         * @param start Start corner.
         * @param end End corner.
         */
        constructor(start: Corner, end: Corner);
        private getUuid;
        resetFrontBack(): void;
        private snapToAxis;
        fireOnMove(func: any): void;
        fireOnDelete(func: any): void;
        dontFireOnDelete(func: any): void;
        fireOnAction(func: any): void;
        fireAction(action: any): void;
        private relativeMove;
        fireMoved(): void;
        fireRedraw(): void;
        getStart(): Corner;
        getEnd(): Corner;
        getStartX(): number;
        getEndX(): number;
        getStartY(): number;
        getEndY(): number;
        remove(): void;
        setStart(corner: Corner): void;
        setEnd(corner: Corner): void;
        distanceFrom(x: number, y: number): number;
        /** Return the corner opposite of the one provided.
         * @param corner The given corner.
         * @returns The opposite corner.
         */
        private oppositeCorner;
    }
}
