import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '../app/core/core.module';
import { LayoutModule } from '../app/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../app/core/interceptors/Jwt.Interceptor';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
