
export function configure(aurelia,configCallback){
	aurelia.globalResources('./grid');

	if (configCallback !== undefined && typeof(configCallback) === 'function') {
		configCallback(aurelia);
	}
}