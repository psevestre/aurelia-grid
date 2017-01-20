define(["require", "exports", "./grid"], function (require, exports, grid_1) {
    "use strict";
    /**
     * Plugin configuration callback
     */
    function configure(aurelia, configCallback) {
        // Dummy call that forces the transpiler to require() grid.
        // Without this call our modules don´t get bundled when
        // used by client apps (at least using aurelia-cli) as they are
        // not traced 
        var g = new grid_1.GridLoader();
        // Register grid as a global resource so we don´t have
        // to require it on each view
        aurelia.globalResources('./grid');
        if (configCallback !== undefined && typeof (configCallback) === 'function') {
            configCallback(aurelia);
        }
    }
    exports.configure = configure;
});
