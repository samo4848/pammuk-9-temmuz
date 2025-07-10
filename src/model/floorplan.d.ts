declare namespace BP3D.Model {
    /**
     * A Floorplan represents a number of Walls, Corners and Rooms.
     */
    class Floorplan {
        /** */
        private walls;
        /** */
        private corners;
        /** */
        private rooms;
        /** */
        private new_wall_callbacks;
        /** */
        private new_corner_callbacks;
        /** */
        private redraw_callbacks;
        /** */
        private updated_rooms;
        /** */
        roomLoadedCallbacks: JQuery.Callbacks<Function>;
        /**
        * Floor textures are owned by the floorplan, because room objects are
        * destroyed and created each time we change the floorplan.
        * floorTextures is a map of room UUIDs (string) to a object with
        * url and scale attributes.
        */
        private floorTextures;
        /** Constructs a floorplan. */
        constructor();
        wallEdges(): HalfEdge[];
        wallEdgePlanes(): THREE.Mesh[];
        private floorPlanes;
        fireOnNewWall(callback: any): void;
        fireOnNewCorner(callback: any): void;
        fireOnRedraw(callback: any): void;
        fireOnUpdatedRooms(callback: any): void;
        /**
         * Creates a new wall.
         * @param start The start corner.
         * @param end he end corner.
         * @returns The new wall.
         */
        newWall(start: Corner, end: Corner): Wall;
        /** Removes a wall.
         * @param wall The wall to be removed.
         */
        private removeWall;
        /**
         * Creates a new corner.
         * @param x The x coordinate.
         * @param y The y coordinate.
         * @param id An optional id. If unspecified, the id will be created internally.
         * @returns The new corner.
         */
        newCorner(x: number, y: number, id?: string): Corner;
        /** Removes a corner.
         * @param corner The corner to be removed.
         */
        private removeCorner;
        /** Gets the walls. */
        getWalls(): Wall[];
        /** Gets the corners. */
        getCorners(): Corner[];
        /** Gets the rooms. */
        getRooms(): Room[];
        overlappedCorner(x: number, y: number, tolerance?: number): Corner;
        overlappedWall(x: number, y: number, tolerance?: number): Wall;
        saveFloorplan(): {
            corners: {};
            walls: any[];
            wallTextures: any[];
            floorTextures: {};
            newFloorTextures: {};
        };
        loadFloorplan(floorplan: any): void;
        getFloorTexture(uuid: string): any;
        setFloorTexture(uuid: string, url: string, scale: number): void;
        /** clear out obsolete floor textures */
        private updateFloorTextures;
        /** */
        private reset;
        /**
         * Update rooms
         */
        update(): void;
        /**
         * Returns the center of the floorplan in the y plane
         */
        getCenter(): any;
        getSize(): any;
        getDimensions(center: any): any;
        private assignOrphanEdges;
        findRooms(corners: Corner[]): Corner[][];
    }
}
