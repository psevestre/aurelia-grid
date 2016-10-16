define(["require", "exports"], function (require, exports) {
    "use strict";
    var GridSelection = (function () {
        function GridSelection(grid) {
            this.grid = grid;
        }
        GridSelection.prototype.select = function (item, event) {
            // TODO: if multi-selection check event for shift pressed
            this.grid.selectedItem = item;
            return true;
        };
        return GridSelection;
    }());
    exports.GridSelection = GridSelection;
});
