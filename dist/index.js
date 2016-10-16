define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.globalResources('./grid');
    }
    exports.configure = configure;
});
