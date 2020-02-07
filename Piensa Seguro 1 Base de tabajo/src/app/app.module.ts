import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

/**Pagina donde inicializa la aplicación */
import { PaginaInicioPage } from '../pages/pagina-inicio/pagina-inicio';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

/**Sesion de usuario*/
import { LoginPage } from '../pages/Sesión/login/login';
import { RegistrarPage } from '../pages/Sesión/registrar/registrar';

/**Contenidos */
import { TemasPage } from '../pages/Contenidos/temas/temas';
import { ActividadesPage } from '../pages/Contenidos/actividades/actividades';
import { ForoPage } from '../pages/Contenidos/foro/foro';
import { EstadisticasPage } from '../pages/Contenidos/estadisticas/estadisticas';
import { InsigniasPage } from '../pages/Logros/insignias/insignias';
import { AyudasPage } from '../pages/Contenidos/ayudas/ayudas';
import { AcercaDePage } from '../pages/Contenidos/acerca-de/acerca-de';

/**Logros por unidad */
import { LogrosU1Page } from '../pages/Logros/logros-u1/logros-u1';
import { LogrosU2Page } from '../pages/Logros/logros-u2/logros-u2';
import { LogrosU3Page } from '../pages/Logros/logros-u3/logros-u3';
import { LogrosU4Page } from '../pages/Logros/logros-u4/logros-u4';
import { LogrosU5Page } from '../pages/Logros/logros-u5/logros-u5';
import { LogrosU6Page } from '../pages/Logros/logros-u6/logros-u6';
import { LogrosU7Page } from '../pages/Logros/logros-u7/logros-u7';


/**Unidad 1 */

import { IntU1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/int-u1/int-u1';
import { SelecSuU1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/selec-su-u1/selec-su-u1';

/**Unidad 1 Sub Unidad 1 */
import { T1Su1U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 1/t1-su1-u1/t1-su1-u1';
import { T2Su1U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 1/t2-su1-u1/t2-su1-u1';

/**Unidad 1 Sub Unidad 2 */
import { T1Su2U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 2/t1-su2-u1/t1-su2-u1';
import { T2Su2U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 2/t2-su2-u1/t2-su2-u1';


/**Unidad 2 */

import { IntU2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/int-u2/int-u2';
import { SelecSuU2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/selec-su-u2/selec-su-u2';

/**Unidad 2 Sub Unidad 1 */

import { T1Su1U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 1/t1-su1-u2/t1-su1-u2';
import { T2Su1U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 1/t2-su1-u2/t2-su1-u2';
import { T3Su1U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 1/t3-su1-u2/t3-su1-u2';
import { T4Su1U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 1/t4-su1-u2/t4-su1-u2';

/**Unidad 2 Sub Unidad 2 */
import { T1Su2U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 2/t1-su2-u2/t1-su2-u2';

/**Unidad 2 Sub Unidad 3 */
import { T1Su3U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 3/t1-su3-u2/t1-su3-u2';
import { T2Su3U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 3/t2-su3-u2/t2-su3-u2';

/**Unidad 2 Sub Unidad 4 */
import { T1Su4U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 4/t1-su4-u2/t1-su4-u2';
import { T2Su4U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 4/t2-su4-u2/t2-su4-u2';
import { T3Su4U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 4/t3-su4-u2/t3-su4-u2';
import { T4Su4U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 4/t4-su4-u2/t4-su4-u2';
import { T5Su4U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 4/t5-su4-u2/t5-su4-u2';
import { T6Su4U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 4/t6-su4-u2/t6-su4-u2';
import { T7Su4U2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 2/Sub Unidad 4/t7-su4-u2/t7-su4-u2';

/**Unidad 3 */

import { IntU3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/int-u3/int-u3';
import { SelecSuU3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/selec-su-u3/selec-su-u3';

/**Unidad 3 Sub Unidad 1 */
import { T1Su1Un3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/Sub Unidad 1/t1-su1-un3/t1-su1-un3';

/**Unidad 3 Sub Unidad 2 */
import { T1Su2Un3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/Sub Unidad 2/t1-su2-un3/t1-su2-un3';

/**Unidad 3 Sub Unidad 3 */
import { T1Su3Un3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/Sub Unidad 3/t1-su3-un3/t1-su3-un3';
import { T2Su3Un3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/Sub Unidad 3/t2-su3-un3/t2-su3-un3';
import { T3Su3Un3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/Sub Unidad 3/t3-su3-un3/t3-su3-un3';
import { T4Su3Un3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/Sub Unidad 3/t4-su3-un3/t4-su3-un3';
import { T5Su3U3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/Sub Unidad 3/t5-su3-u3/t5-su3-u3';
import { T6Su3U3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/Sub Unidad 3/t6-su3-u3/t6-su3-u3';

/**Unidad 3 Sub Unidad 4 */
import { T1Su4Un3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/Sub Unidad 4/t1-su4-un3/t1-su4-un3';
import { T2Su4Un3Page } from '../pages/Contenidos/Contenidos AVA/Unidad 3/Sub Unidad 4/t2-su4-un3/t2-su4-un3';


/**Unidad 4 */

import { IntU4Page } from '../pages/Contenidos/Contenidos AVA/Unidad 4/int-u4/int-u4';
import { SelecSuU4Page } from '../pages/Contenidos/Contenidos AVA/Unidad 4/selec-su-u4/selec-su-u4';

/**Unidad 4 Sub Unidad 1 */
import { T1Su1Un4Page } from '../pages/Contenidos/Contenidos AVA/Unidad 4/Sub Unidad 1/t1-su1-un4/t1-su1-un4';
import { T2Su1Un4Page } from '../pages/Contenidos/Contenidos AVA/Unidad 4/Sub Unidad 1/t2-su1-un4/t2-su1-un4';

/**Unidad 4 Sub Unidad 2 */
import { T1Su2Un4Page } from '../pages/Contenidos/Contenidos AVA/Unidad 4/Sub Unidad 2/t1-su2-un4/t1-su2-un4';
import { T2Su2Un4Page } from '../pages/Contenidos/Contenidos AVA/Unidad 4/Sub Unidad 2/t2-su2-un4/t2-su2-un4';
import { T3Su2Un4Page } from '../pages/Contenidos/Contenidos AVA/Unidad 4/Sub Unidad 2/t3-su2-un4/t3-su2-un4';

/**Unidad 5 */

import { IntU5Page } from '../pages/Contenidos/Contenidos AVA/Unidad 5/int-u5/int-u5';
import { SelecSuU5Page } from '../pages/Contenidos/Contenidos AVA/Unidad 5/selec-su-u5/selec-su-u5';

/**Unidad 5 Sub Unidad 1 */
import { T1Su1Un5Page } from '../pages/Contenidos/Contenidos AVA/Unidad 5/Sub Unidad 1/t1-su1-un5/t1-su1-un5';

/**Unidad 5 Sub Unidad 2 */
import { T1Su2Un5Page } from '../pages/Contenidos/Contenidos AVA/Unidad 5/Sub Unidad 1/t1-su2-un5/t1-su2-un5';

/**Unidad 5 Sub Unidad 2 */
import { T2Su1Un5Page } from '../pages/Contenidos/Contenidos AVA/Unidad 5/Sub Unidad 2/t2-su1-un5/t2-su1-un5';

/**Unidad 6 */

import { IntU6Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/int-u6/int-u6';
import { SelecSuU6Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/selec-su-u6/selec-su-u6';

/**Unidad 6 Sub Unidad 1 */
import { T1Su1Un6Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/Sub Unidad 1/t1-su1-un6/t1-su1-un6';
import { T2Su1Un6Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/Sub Unidad 1/t2-su1-un6/t2-su1-un6';
import { T3Su1Un6Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/Sub Unidad 1/t3-su1-un6/t3-su1-un6';
import { T4Su1Un6Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/Sub Unidad 1/t4-su1-un6/t4-su1-un6';
import { T5Su1Un6Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/Sub Unidad 1/t5-su1-un6/t5-su1-un6';
import { T6Su1Un6Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/Sub Unidad 1/t6-su1-un6/t6-su1-un6';
import { T7Su1Un6Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/Sub Unidad 1/t7-su1-un6/t7-su1-un6';
import { T8Su1Un6Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/Sub Unidad 1/t8-su1-un6/t8-su1-un6';

/**Unidad 7 */

import { IntU7Page } from '../pages/Contenidos/Contenidos AVA/Unidad 7/int-u7/int-u7';
import { SelecSuU7Page } from '../pages/Contenidos/Contenidos AVA/Unidad 7/selec-su-u7/selec-su-u7';

/**Unidad 7 Sub Unnidad 1*/
import { T1Su1Un7Page } from '../pages/Contenidos/Contenidos AVA/Unidad 7/Sub Unidad 1/t1-su1-un7/t1-su1-un7';

/**Unidad 7 Sub Unidad 2 */
import { T1Su2Un7Page } from '../pages/Contenidos/Contenidos AVA/Unidad 7/Sub Unidad 2/t1-su2-un7/t1-su2-un7';
import { T2Su2U7Page } from '../pages/Contenidos/Contenidos AVA/Unidad 7/Sub Unidad 2/t2-su2-u7/t2-su2-u7';

/**Actividades y evaluaciones */

/**Evaluaciones */
import { Eva1Cap1Page } from '../pages/Contenidos/Actividades de retroalimentacion/Evaluaciones/eva1-cap1/eva1-cap1';
import { Eva1Cap2Page } from '../pages/Contenidos/Actividades de retroalimentacion/Evaluaciones/eva1-cap2/eva1-cap2';
import { Eva1Cap3Page } from '../pages/Contenidos/Actividades de retroalimentacion/Evaluaciones/eva1-cap3/eva1-cap3';
import { Eva1Cap4Page } from '../pages/Contenidos/Actividades de retroalimentacion/Evaluaciones/eva1-cap4/eva1-cap4';

/**Actividad y comandos Tema 3-2 */
/**Nmap */
import { ComandosNmapPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Talleres Capitulo 3/Nmap/comandos-nmap/comandos-nmap';
import { PracticaNmapPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Talleres Capitulo 3/Nmap/practica-nmap/practica-nmap';

/**NetCat */
import { ComandosNetCatPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Talleres Capitulo 3/NetCat/comandos-net-cat/comandos-net-cat';
import { PracticaNetCatPage } from '../pages/Contenidos/Capitulos/Capitulo 3/Talleres Capitulo 3/NetCat/practica-net-cat/practica-net-cat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,

    /**Pagina donde inicializa la aplicación */
    PaginaInicioPage,

    HomePage,
    ListPage,

    /**Sesion y registro de usuario */
    LoginPage,
    RegistrarPage,

    /**Contenidos */
    TemasPage,
    ActividadesPage,
    ForoPage,
    EstadisticasPage,
    InsigniasPage,
    AyudasPage,
    AcercaDePage,

    /**logros por unidad */
    LogrosU1Page,
    LogrosU2Page,
    LogrosU3Page,
    LogrosU4Page,
    LogrosU5Page,
    LogrosU6Page,
    LogrosU7Page,

    /**Unidad 1 */
    IntU1Page,
    SelecSuU1Page,

    /**Unidad 1 Sub Unidad 1 */
    T1Su1U1Page,
    T2Su1U1Page,
    /**Unidad 1 Sub Unidad 2 */
    T1Su2U1Page,
    T2Su2U1Page,


    /**Unidad 2 */
    IntU2Page,
    SelecSuU2Page,

    /**Unidad 2 Sub Unidad 1 */
    T1Su1U2Page,
    T2Su1U2Page,
    T3Su1U2Page,
    T4Su1U2Page,

    /**Unidad 2 Sub Unidad 2 */
    T1Su2U2Page,

    /**Unidad 2 Sub Unidad 3 */
    T1Su2U2Page,

    /**Unidad 2 Sub Unidad 3 */
    T1Su3U2Page,
    T2Su3U2Page,

    /**Unidad 2 Sub Unidad 4 */
    T1Su4U2Page,
    T2Su4U2Page,
    T3Su4U2Page,
    T4Su4U2Page,
    T5Su4U2Page,
    T6Su4U2Page,
    T7Su4U2Page,


    /**Unidad 3 */
    IntU3Page,
    SelecSuU3Page,

    /**Unidad 3 Sub Unidad 1 */
    T1Su1Un3Page,

    /**Unidad 3 Sub Unidad 2 */
    T1Su2Un3Page,

    /**Unidad 3 Sub Unidad 3 */
    T1Su3Un3Page,
    T2Su3Un3Page,
    T3Su3Un3Page,
    T4Su3Un3Page,
    T5Su3U3Page,
    T6Su3U3Page,

    /**Unidad 3 Sub Unidad 4 */
    T1Su4Un3Page,
    T2Su4Un3Page,


    /**Unidad 4 */
    IntU4Page,
    SelecSuU4Page,

    /**Unidad 4 Sub Unidad 1 */
    T1Su1Un4Page,
    T2Su1Un4Page,

    /**Unidad 4 Sub Unidad 2 */
    T1Su2Un4Page,
    T2Su2Un4Page,
    T3Su2Un4Page,

    /**Unidad 5 */
    IntU5Page,
    SelecSuU5Page,


    /**Unidad 5 Sub Unidad 1 */
    T1Su1Un5Page,
    T2Su1Un5Page,

    /**Unidad 5 Sub Unidad 2 */
    T1Su2Un5Page,

    /**Unidad 6 */
    IntU6Page,
    SelecSuU6Page,

    /**Unidad 6 Sub Unidad 1 */
    T1Su1Un6Page,
    T2Su1Un6Page,
    T3Su1Un6Page,
    T4Su1Un6Page,
    T5Su1Un6Page,
    T6Su1Un6Page,
    T7Su1Un6Page,
    T8Su1Un6Page,


    /**Unidad 7 */
    IntU7Page,
    SelecSuU7Page,

    /**Unidad 7 Sub Unidad 1 */
    T1Su1Un7Page,

    /**Unidad 7 Sub Unidad 2 */
    T1Su2Un7Page,
    T2Su2U7Page,

    /**Actividades y evaluaciones */

    /**Evaluaciones */
    Eva1Cap1Page,
    Eva1Cap2Page,
    Eva1Cap3Page,
    Eva1Cap4Page,


    /**Actividad y comandos Tema 3-2 */
    /**Nmap */
    ComandosNmapPage,
    PracticaNmapPage,

    /**NetCat */
    ComandosNetCatPage,
    PracticaNetCatPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    /**Pagina donde inicializa la aplicación */
    PaginaInicioPage,

    HomePage,
    ListPage,

    /**Sesion y registro de usuario */
    LoginPage,
    RegistrarPage,

    /**Contenidos */
    TemasPage,
    ActividadesPage,
    ForoPage,
    EstadisticasPage,
    InsigniasPage,
    AyudasPage,
    AcercaDePage,

    /**logros por unidad */
    LogrosU1Page,
    LogrosU2Page,
    LogrosU3Page,
    LogrosU4Page,
    LogrosU5Page,
    LogrosU6Page,
    LogrosU7Page,

    /**Unidad 1 */
    IntU1Page,
    SelecSuU1Page,

    /**Unidad 1 Sub Unidad 1 */
    T1Su1U1Page,
    T2Su1U1Page,
    /**Unidad 1 Sub Unidad 2 */
    T1Su2U1Page,
    T2Su2U1Page,


    /**Unidad 2 */
    IntU2Page,
    SelecSuU2Page,

    /**Unidad 2 Sub Unidad 1 */
    T1Su1U2Page,
    T2Su1U2Page,
    T3Su1U2Page,
    T4Su1U2Page,

    /**Unidad 2 Sub Unidad 2 */
    T1Su2U2Page,

    /**Unidad 2 Sub Unidad 3 */
    T1Su3U2Page,
    T2Su3U2Page,

    /**Unidad 2 Sub Unidad 4 */
    T1Su4U2Page,
    T2Su4U2Page,
    T3Su4U2Page,
    T4Su4U2Page,
    T5Su4U2Page,
    T6Su4U2Page,
    T7Su4U2Page,


    /**Unidad 3 */
    IntU3Page,
    SelecSuU3Page,

    /**Unidad 3 Sub Unidad 1 */
    T1Su1Un3Page,

    /**Unidad 3 Sub Unidad 2 */
    T1Su2Un3Page,

    /**Unidad 3 Sub Unidad 3 */
    T1Su3Un3Page,
    T2Su3Un3Page,
    T3Su3Un3Page,
    T4Su3Un3Page,
    T5Su3U3Page,
    T6Su3U3Page,

    /**Unidad 3 Sub Unidad 4 */
    T1Su4Un3Page,
    T2Su4Un3Page,


    /**Unidad 4 */
    IntU4Page,
    SelecSuU4Page,

    /**Unidad 4 Sub Unidad 1 */
    T1Su1Un4Page,
    T2Su1Un4Page,

    /**Unidad 4 Sub Unidad 2 */
    T1Su2Un4Page,
    T2Su2Un4Page,
    T3Su2Un4Page,


    /**Unidad 5 */
    IntU5Page,
    SelecSuU5Page,

    /**Unidad 5 Sub Unidad 1 */
    T1Su1Un5Page,
    T2Su1Un5Page,

    /**Unidad 5 Sub Unidad 2 */
    T1Su2Un5Page,

    /**Unidad 6 */
    IntU6Page,
    SelecSuU6Page,

    /**Unidad 6 Sub Unidad 1 */
    T1Su1Un6Page,
    T2Su1Un6Page,
    T3Su1Un6Page,
    T4Su1Un6Page,
    T5Su1Un6Page,
    T6Su1Un6Page,
    T7Su1Un6Page,
    T8Su1Un6Page,


    /**Unidad 7 */
    IntU7Page,
    SelecSuU7Page,

    /**Unidad 7 Sub Unidad 1 */
    T1Su1Un7Page,

    /**Unidad 7 Sub Unidad 2 */
    T1Su2Un7Page,
    T2Su2U7Page,

    /**Actividades y evaluaciones */

    /**Evaluaciones */
    Eva1Cap1Page,
    Eva1Cap2Page,
    Eva1Cap3Page,
    Eva1Cap4Page,


    /**Actividad y comandos Tema 3-2 */
    /**Nmap */
    ComandosNmapPage,
    PracticaNmapPage,

    /**NetCat */
    ComandosNetCatPage,
    PracticaNetCatPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
