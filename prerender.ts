import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';

// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import {join} from 'path';
import { renderModuleFactory } from '@angular/platform-server';
import { readFileSync, writeFileSync } from 'fs';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

const DIST_FOLDER = join(process.cwd(), 'dist/browser');
const INDEX_FILE = join(DIST_FOLDER, 'index.html');

// NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Prerender Shell und write it into index.html
renderModuleFactory(AppServerModuleNgFactory, {
  document: readFileSync(INDEX_FILE, { encoding: 'UTF-8'}),
  url: '/',
  extraProviders: [
     provideModuleMap(LAZY_MODULE_MAP)
  ]
}).then(html => {
  writeFileSync(INDEX_FILE, html, { encoding: 'UTF-8' });
});
