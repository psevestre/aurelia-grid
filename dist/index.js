define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia, configCallback) {
        aurelia.globalResources('./grid');
        if (configCallback !== undefined && typeof (configCallback) === 'function') {
            configCallback(aurelia);
        }
    }
    exports.configure = configure;
});
