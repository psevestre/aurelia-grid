define(["require", "exports", './grid'], function (require, exports, grid_1) {
    "use strict";
    function configure(aurelia, configCallback) {
        aurelia.globalResources('./grid');
        var baseConfig = aurelia.container.get(grid_1.Grid);
        if (configCallback !== undefined && typeof (configCallback) === 'function') {
            configCallback(baseConfig);
        }
    }
    exports.configure = configure;
});
