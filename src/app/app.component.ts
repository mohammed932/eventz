import { Storage } from '@ionic/storage'
import { Component, ViewChild } from '@angular/core'
import { Platform, Nav } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { AuthProvider } from '../providers/auth/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = ''
  @ViewChild(Nav) nav: Nav
  constructor(platform: Platform,
    private storage: Storage,
    private authService : AuthProvider,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    this.checkLogin()
    platform.ready().then(() => {
      statusBar.styleDefault()
      splashScreen.hide()
    })
  }

  Like() {
    this.nav.push('LikePage')
  }

  Wishing() {
    this.nav.push('WishingPage')
  }

  Following() {
    this.nav.push('FollowingPage')
  }

  goToUsers() {
    this.nav.push('UsersPage')
  }

  Logout(){
      this.authService.logout().subscribe( data => {
        console.log('datadatadata : ',data);
        if(data['success']){
          this.storage.set('isLogin',false)
          window.localStorage.removeItem('token')
          this.nav.setRoot('IntroPage')
        }
      })
  }

  
  checkLogin() {
    this.storage.get('isLogin').then(isLogin => {
      if (isLogin) this.rootPage = 'MainTopTabsPage'
      else this.rootPage = 'IntroPage'
    })
  }


}

