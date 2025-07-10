declare namespace BP3D.Items {
    /** */
    abstract class OnFloorItem extends FloorItem {
        constructor(model: Model.Model, metadata: Metadata, geometry: THREE.Geometry, material: THREE.MeshFaceMaterial, position: THREE.Vector3, rotation: number, scale: THREE.Vector3);
    }
}
