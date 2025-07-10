/// <reference path="../../lib/three.d.ts" />
/// <reference path="../model/model.ts" />
/// <reference path="item.ts" />
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
        /**
         * A Floor Item is an entity to be placed related to a floor.
         */
        var FloorItem = /** @class */ (function (_super) {
            __extends(FloorItem, _super);
            function FloorItem(model, metadata, geometry, material, position, rotation, scale) {
                return _super.call(this, model, metadata, geometry, material, position, rotation, scale) || this;
            }
            ;
            /** */
            FloorItem.prototype.placeInRoom = function () {
                if (!this.position_set) {
                    var center = this.model.floorplan.getCenter();
                    this.position.x = center.x;
                    this.position.z = center.z;
                    this.position.y = 0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y);
                }
            };
            ;
            /** Take action after a resize */
            FloorItem.prototype.resized = function () {
                this.position.y = this.halfSize.y;
            };
            /** */
            FloorItem.prototype.moveToPosition = function (vec3, intersection) {
                // keeps the position in the room and on the floor
                if (!this.isValidPosition(vec3)) {
                    this.showError(vec3);
                    return;
                }
                else {
                    this.hideError();
                    vec3.y = this.position.y; // keep it on the floor!
                    this.position.copy(vec3);
                }
            };
            /** */
            FloorItem.prototype.isValidPosition = function (vec3) {
                var corners = this.getCorners('x', 'z', vec3);
                // check if we are in a room
                var rooms = this.model.floorplan.getRooms();
                var isInARoom = false;
                for (var i = 0; i < rooms.length; i++) {
                    if (BP3D.Core.Utils.pointInPolygon(vec3.x, vec3.z, rooms[i].interiorCorners) &&
                        !BP3D.Core.Utils.polygonPolygonIntersect(corners, rooms[i].interiorCorners)) {
                        isInARoom = true;
                    }
                }
                if (!isInARoom) {
                    //console.log('object not in a room');
                    return false;
                }
                // check if we are outside all other objects
                /*
                if (this.obstructFloorMoves) {
                    var objects = this.model.items.getItems();
                    for (var i = 0; i < objects.length; i++) {
                        if (objects[i] === this || !objects[i].obstructFloorMoves) {
                            continue;
                        }
                        if (!utils.polygonOutsidePolygon(corners, objects[i].getCorners('x', 'z')) ||
                            utils.polygonPolygonIntersect(corners, objects[i].getCorners('x', 'z'))) {
                            //console.log('object not outside other objects');
                            return false;
                        }
                    }
                }*/
                return true;
            };
            return FloorItem;
        }(Items.Item));
        Items.FloorItem = FloorItem;
    })(Items = BP3D.Items || (BP3D.Items = {}));
})(BP3D || (BP3D = {}));
//# sourceMappingURL=floor_item.js.map