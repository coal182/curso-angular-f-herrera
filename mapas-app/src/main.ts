import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken = environment.mapboxToken;

if (!navigator.geolocation) {
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation')
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
