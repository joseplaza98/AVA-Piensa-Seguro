import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ForoPage } from '../pages/Contenidos/foro/foro';
import { EstadisticasPage } from '../pages/Contenidos/estadisticas/estadisticas';
import { AyudasPage } from '../pages/Contenidos/ayudas/ayudas';
import { AcercaDePage } from '../pages/Contenidos/acerca-de/acerca-de';

import { PaginaInicioPage } from '../pages/pagina-inicio/pagina-inicio';
import { InsigniasPage } from '../pages/Logros/insignias/insignias';
import { PlanCapacitiacionPage } from '../pages/plan-capacitiacion/plan-capacitiacion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PaginaInicioPage;


  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'ios-home-outline' },
      { title: 'Plan de capacitación', component: PlanCapacitiacionPage, icon: 'ios-list-box-outline' },
      { title: 'Consultar a Infinity', component: ForoPage, icon: 'ios-chatbubbles-outline' },
      { title: 'Estadísticas', component: EstadisticasPage, icon: 'ios-stats-outline' },
      { title: 'Logros', component: InsigniasPage, icon: 'ios-ribbon-outline' },
      { title: 'Ayudas', component: AyudasPage, icon: 'ios-help-circle-outline' },
      { title: 'Acerca de', component: AcercaDePage, icon: 'ios-more-outline'},
      { title: 'Cerrar sesión', component: PaginaInicioPage, icon: 'ios-log-out-outline'},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
