declare namespace BP3D.Model {
    /**
     * Corners are used to define Walls.
     */
    class Corner {
        private floorplan;
        x: number;
        y: number;
        id?: string;
        /** Array of start walls. */
        private wallStarts;
        /** Array of end walls. */
        private wallEnds;
        /** Callbacks to be fired on movement. */
        private moved_callbacks;
        /** Callbacks to be fired on removal. */
        private deleted_callbacks;
        /** Callbacks to be fired in case of action. */
        private action_callbacks;
        /** Constructs a corner.
         * @param floorplan The associated floorplan.
         * @param x X coordinate.
         * @param y Y coordinate.
         * @param id An optional unique id. If not set, created internally.
         */
        constructor(floorplan: Floorplan, x: number, y: number, id?: string);
        /** Add function to moved callbacks.
         * @param func The function to be added.
        */
        fireOnMove(func: any): void;
        /** Add function to deleted callbacks.
         * @param func The function to be added.
         */
        fireOnDelete(func: any): void;
        /** Add function to action callbacks.
         * @param func The function to be added.
         */
        fireOnAction(func: any): void;
        /**
         * @returns
         * @deprecated
         */
        getX(): number;
        /**
         * @returns
         * @deprecated
         */
        getY(): number;
        /**
         *
         */
        snapToAxis(tolerance: number): {
            x: boolean;
            y: boolean;
        };
        /** Moves corner relatively to new position.
         * @param dx The delta x.
         * @param dy The delta y.
         */
        relativeMove(dx: number, dy: number): void;
        private fireAction;
        /** Remove callback. Fires the delete callbacks. */
        remove(): void;
        /** Removes all walls. */
        private removeAll;
        /** Moves corner to new position.
         * @param newX The new x position.
         * @param newY The new y position.
         */
        private move;
        /** Gets the adjacent corners.
         * @returns Array of corners.
         */
        adjacentCorners(): Corner[];
        /** Checks if a wall is connected.
         * @param wall A wall.
         * @returns True in case of connection.
         */
        private isWallConnected;
        /**
         *
         */
        distanceFrom(x: number, y: number): number;
        /** Gets the distance from a wall.
         * @param wall A wall.
         * @returns The distance.
         */
        distanceFromWall(wall: Wall): number;
        /** Gets the distance from a corner.
         * @param corner A corner.
         * @returns The distance.
         */
        distanceFromCorner(corner: Corner): number;
        /** Detaches a wall.
         * @param wall A wall.
         */
        detachWall(wall: Wall): void;
        /** Attaches a start wall.
         * @param wall A wall.
         */
        attachStart(wall: Wall): void;
        /** Attaches an end wall.
         * @param wall A wall.
         */
        attachEnd(wall: Wall): void;
        /** Get wall to corner.
         * @param corner A corner.
         * @return The associated wall or null.
         */
        wallTo(corner: Corner): Wall;
        /** Get wall from corner.
         * @param corner A corner.
         * @return The associated wall or null.
         */
        wallFrom(corner: Corner): Wall;
        /** Get wall to or from corner.
         * @param corner A corner.
         * @return The associated wall or null.
         */
        wallToOrFrom(corner: Corner): Wall;
        /**
         *
         */
        private combineWithCorner;
        mergeWithIntersected(): boolean;
        /** Ensure we do not have duplicate walls (i.e. same start and end points) */
        private removeDuplicateWalls;
    }
}
