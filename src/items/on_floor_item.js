/// <reference path="../../lib/three.d.ts" />
/// <reference path="../model/model.ts" />
/// <reference path="floor_item.ts" />
/// <reference path="metadata.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BP3D;
(function (BP3D) {
    var Items;
    (function (Items) {
        /** */
        var OnFloorItem = /** @class */ (function (_super) {
            __extends(OnFloorItem, _super);
            function OnFloorItem(model, metadata, geometry, material, position, rotation, scale) {
                var _this = _super.call(this, model, metadata, geometry, material, position, rotation, scale) || this;
                _this.obstructFloorMoves = false;
                _this.receiveShadow = true;
                return _this;
            }
            ;
            return OnFloorItem;
        }(Items.FloorItem));
        Items.OnFloorItem = OnFloorItem;
    })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));
//# sourceMappingURL=on_floor_item.js.map