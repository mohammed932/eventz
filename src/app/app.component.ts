import { Component ,ViewChild} from '@angular/core';
import { Platform , Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'IntroPage';
  @ViewChild(Nav) nav: Nav;
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  Like(){
    this.nav.push('LikePage')
  }

  Wishing(){
    this.nav.push('WishingPage')
  }

  Following(){
    this.nav.push('FollowingPage')
  }

  goToUsers(){
    this.nav.push('UsersPage')
  }
}

