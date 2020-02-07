import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ActividadesPage } from '../pages/Contenidos/actividades/actividades';
import { ForoPage } from '../pages/Contenidos/foro/foro';
import { EstadisticasPage } from '../pages/Contenidos/estadisticas/estadisticas';
import { AyudasPage } from '../pages/Contenidos/ayudas/ayudas';
import { AcercaDePage } from '../pages/Contenidos/acerca-de/acerca-de';

import { PaginaInicioPage } from '../pages/pagina-inicio/pagina-inicio';
import { SeleccionCapituloPage } from '../pages/Contenidos/Capitulos/Selecciones/seleccion-capitulo/seleccion-capitulo';
import { InsigniasPage } from '../pages/Logros/insignias/insignias';

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
      { title: 'Inicio', component: HomePage, icon: 'md-home' },
      /** 
      { title: 'List', component: ListPage, icon: 'md-home' },
      */
      { title: 'Temas', component: SeleccionCapituloPage, icon: 'md-bookmarks' },
      { title: 'Actividades', component: ActividadesPage, icon: 'md-play' },
      { title: 'Foro', component: ForoPage, icon: 'md-chatbubbles' },
      { title: 'Estadísticas', component: EstadisticasPage, icon: 'md-stats' },
      { title: 'Logros', component: InsigniasPage, icon: 'md-ribbon' },
      { title: 'Ayudas', component: AyudasPage, icon: 'md-help-circle' },
      { title: 'Acerca de', component: AcercaDePage, icon: 'md-more'},
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
