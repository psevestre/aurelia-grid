var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './grid-source'], function (require, exports, grid_source_1) {
    "use strict";
    /** Remote Source of Grid Data - Server side Paging and Sorting */
    var RemoteGridData = (function (_super) {
        __extends(RemoteGridData, _super);
        function RemoteGridData() {
            _super.apply(this, arguments);
        }
        return RemoteGridData;
    }(grid_source_1.GridDataSource));
    exports.RemoteGridData = RemoteGridData;
});
