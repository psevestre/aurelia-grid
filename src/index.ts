
import {GridLoader} from './grid';

/**
 * Plugin configuration callback
 */
export function configure(aurelia,configCallback){

	// Dummy call that forces the transpiler to require() grid.
	// Without this call our modules don´t get bundled when
	// used by client apps (at least using aurelia-cli) as they are
	// not traced 
	let g : GridLoader  = new GridLoader();

	// Register grid as a global resource so we don´t have
	// to require it on each view
	aurelia.globalResources('./grid');

	if (configCallback !== undefined && typeof(configCallback) === 'function') {
		configCallback(aurelia);
	}
}