import {Grid} from './grid'

export function configure(aurelia,configCallback){
	aurelia.globalResources('./grid');

    let baseConfig = aurelia.container.get(Grid);
	if (configCallback !== undefined && typeof(configCallback) === 'function') {
		configCallback(baseConfig);
	}
}