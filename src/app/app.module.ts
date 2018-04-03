import { globalInterceptor } from './../providers/global-headers/global-headers';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyApp } from './app.component';
import { SettingProvider } from '../providers/setting/setting';
import { AuthProvider } from '../providers/auth/auth';
import { IonicStorageModule } from '@ionic/storage';
import { EventsProvider } from '../providers/events/events';
import { Geolocation } from '@ionic-native/geolocation';
import { OrganizerProvider } from '../providers/organizer/organizer';
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: "",
      mode: "ios"
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    // {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: globalInterceptor,
      multi: true
    },
    SettingProvider,
    AuthProvider,
    EventsProvider,
    OrganizerProvider
  ]
})
export class AppModule { }
