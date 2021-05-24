import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '../app/core/core.module';
import { LayoutModule } from '../app/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import * as fromApp from './core/store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { RoadSignEffects } from '../app/core/store/effects/roadSign.effects';
import { UserEffects } from '../app/core/store/effects/user.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../app/core/interceptors/Jwt.Interceptor';
import { RoadSignSandbox } from './core/sandboxes/RoadSign.sandbox';
import { UserSandbox } from './core/sandboxes/User.sandbox';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
    InfiniteScrollModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([RoadSignEffects, UserEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    RoadSignSandbox,
    UserSandbox,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
