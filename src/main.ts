import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { CretaskerComponent } from './app/cretasker/cretasker.component';

bootstrapApplication(AppComponent, {providers:[provideRouter(routes)]})
  .catch((err) => console.error(err));
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
bootstrapApplication(CretaskerComponent, {
    providers: [provideRouter(routes)]
  }).catch(err => console.error(err));