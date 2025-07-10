/// <reference path="model/model.ts" />
/// <reference path="floorplanner/floorplanner.ts" />
/// <reference path="three/main.ts" />
var BP3D;
(function (BP3D) {
    /** Blueprint3D core application. */
    var Blueprint3d = /** @class */ (function () {
        /** Creates an instance.
         * @param options The initialization options.
         */
        function Blueprint3d(options) {
            this.model = new BP3D.Model.Model(options.textureDir);
            this.three = new BP3D.Three.Main(this.model, options.threeElement, options.threeCanvasElement, {});
            if (!options.widget) {
                this.floorplanner = new BP3D.Floorplanner.Floorplanner(options.floorplannerElement, this.model.floorplan);
            }
            else {
                this.three.getController().enabled = false;
            }
        }
        return Blueprint3d;
    }());
    BP3D.Blueprint3d = Blueprint3d;
})(BP3D || (BP3D = {}));
//# sourceMappingURL=blueprint3d.js.map