
import {GridLoader} from './grid';

/**
 * Plugin configuration callback
 */
export function configure(aurelia,configCallback){

	// Dummy call that forces the transpiler to require() grid.
	// We need this or otherwhise our modules don´t get bundled when
	// used by client apps (at least using aurelia-cli)
	let g : GridLoader  = new GridLoader();

	// Register grid as a global resource so we don´t have
	// to require it on each view
	aurelia.globalResources('./grid');

	if (configCallback !== undefined && typeof(configCallback) === 'function') {
		configCallback(aurelia);
	}
}