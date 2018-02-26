//This is the entry point for our application

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';


//this delays angular from loading ever so slightly to allow other things to load
window.addEventListener("DOMContentLoaded", event => {
	// enableProdMode();
	const platform = platformBrowserDynamic();
	platform.bootstrapModule(AppModule);
});
