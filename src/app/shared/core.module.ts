import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CommonModule, HashLocationStrategy, LocationStrategy, NgLocaleLocalization, NgLocalization } from '@angular/common';


@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
   ]
})
export class CoreModule {}