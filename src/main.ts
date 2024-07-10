import { bootstrapApplication } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'INR'}]}).catch((err) => console.error(err));
