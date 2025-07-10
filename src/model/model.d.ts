declare namespace BP3D.Model {
    /**
     * A Model connects a Floorplan and a Scene.
     */
    class Model {
        /** */
        floorplan: Floorplan;
        /** */
        scene: Scene;
        /** */
        private roomLoadingCallbacks;
        /** */
        private roomLoadedCallbacks;
        /** name */
        private roomSavedCallbacks;
        /** success (bool), copy (bool) */
        private roomDeletedCallbacks;
        /** Constructs a new model.
         * @param textureDir The directory containing the textures.
         */
        constructor(textureDir: string);
        private loadSerialized;
        private exportSerialized;
        private newRoom;
    }
}
