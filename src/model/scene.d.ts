declare namespace BP3D.Model {
    /**
     * The Scene is a manager of Items and also links to a ThreeJS scene.
     */
    class Scene {
        private model;
        private textureDir;
        /** The associated ThreeJS scene. */
        private scene;
        /** */
        private items;
        /** */
        needsUpdate: boolean;
        /** The Json loader. */
        private loader;
        /** */
        private itemLoadingCallbacks;
        /** Item */
        private itemLoadedCallbacks;
        /** Item */
        private itemRemovedCallbacks;
        /**
         * Constructs a scene.
         * @param model The associated model.
         * @param textureDir The directory from which to load the textures.
         */
        constructor(model: Model, textureDir: string);
        /** Adds a non-item, basically a mesh, to the scene.
         * @param mesh The mesh to be added.
         */
        add(mesh: THREE.Mesh): void;
        /** Removes a non-item, basically a mesh, from the scene.
         * @param mesh The mesh to be removed.
         */
        remove(mesh: THREE.Mesh): void;
        /** Gets the scene.
         * @returns The scene.
         */
        getScene(): THREE.Scene;
        /** Gets the items.
         * @returns The items.
         */
        getItems(): Items.Item[];
        /** Gets the count of items.
         * @returns The count.
         */
        itemCount(): number;
        /** Removes all items. */
        clearItems(): void;
        /**
         * Removes an item.
         * @param item The item to be removed.
         * @param dontRemove If not set, also remove the item from the items list.
         */
        removeItem(item: Items.Item, dontRemove?: boolean): void;
        /**
         * Creates an item and adds it to the scene.
         * @param itemType The type of the item given by an enumerator.
         * @param fileName The name of the file to load.
         * @param metadata TODO
         * @param position The initial position.
         * @param rotation The initial rotation around the y axis.
         * @param scale The initial scaling.
         * @param fixed True if fixed.
         */
        addItem(itemType: number, fileName: string, metadata: any, position: THREE.Vector3, rotation: number, scale: THREE.Vector3, fixed: boolean): void;
    }
}
