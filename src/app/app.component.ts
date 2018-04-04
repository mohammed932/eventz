import { Storage } from '@ionic/storage'
import { Component, ViewChild } from '@angular/core'
import { Platform, Nav, MenuController } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { AuthProvider } from '../providers/auth/auth';
import { TranslateService } from '@ngx-translate/core';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = ''
  @ViewChild(Nav) nav: Nav
  constructor(
    private platform: Platform,
    private storage: Storage,
    private authService: AuthProvider,
    private menuCtrl: MenuController,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private splashScreen: SplashScreen) {
    this.checkLogin()
    this.intializeApp()
  }


  intializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault()
      this.splashScreen.hide()
      /**
       * intialize translation section.
       */
      // this.translate.addLangs(["en", "ar"]);
      // this.translate.setDefaultLang('en');
      // this.platform.setLang('en', true)
      // this.platform.setDir('ltr', true);
      // let browserLang = this.translate.getBrowserLang();
      // this.translate.use('en');
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

  Logout() {
    this.authService.logout().subscribe(data => {
      console.log('datadatadata : ', data);
      if (data['success']) {
        this.storage.set('isLogin', false)
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


  changeLang(langCode) {
    if (langCode == 'ar') {
      this.platform.setDir("rtl", true);
      console.log('platform.dir() : ',this.platform.dir());
      this.translate.use(langCode);
      this.platform.setLang('ar',true);
      this.splashScreen.show()
      // window.location.reload()
      this.splashScreen.hide()
      // this.platform.setDir("rtl", true);
      // this.menuCtrl.enable(true, 'right-menu');
      // this.menuCtrl.enable(false, 'left-menu');
      // this.menuCtrl.toggle('right');
      // this.translate.use(langCode);
    } else if (langCode == 'en') {
      this.platform.setDir("ltr", true);
      this.menuCtrl.enable(false, 'left-menu');
      this.menuCtrl.enable(true, 'left-menu');
      this.menuCtrl.toggle('left');
      this.translate.use(langCode);
    }
  }


}

