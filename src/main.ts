import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)//* Hangi modulle başlayım diyor AppModule ile başla demek. AppModule tanıyor olması bizim burada tanıyor olmamızdan.
  .catch(err => console.error(err));
