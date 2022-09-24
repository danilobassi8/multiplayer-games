import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NavComponent, LayoutComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      redirectUri: environment.auth0.redirectUri,
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
