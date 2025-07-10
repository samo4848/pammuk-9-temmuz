declare namespace BP3D.Items {
    /**
     * A Floor Item is an entity to be placed related to a floor.
     */
    abstract class FloorItem extends Item {
        constructor(model: Model.Model, metadata: Metadata, geometry: THREE.Geometry, material: THREE.MeshFaceMaterial, position: THREE.Vector3, rotation: number, scale: THREE.Vector3);
        /** */
        placeInRoom(): void;
        /** Take action after a resize */
        resized(): void;
        /** */
        moveToPosition(vec3: any, intersection: any): void;
        /** */
        isValidPosition(vec3: any): boolean;
    }
}
