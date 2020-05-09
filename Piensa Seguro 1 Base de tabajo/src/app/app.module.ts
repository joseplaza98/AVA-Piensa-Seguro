import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

/**Pagina donde inicializa la aplicación */
import { PaginaInicioPage } from '../pages/pagina-inicio/pagina-inicio';

import { HomePage } from '../pages/home/home';

/**Sesion de usuario*/
import { LoginPage } from '../pages/Sesión/login/login';
import { RegistrarPage } from '../pages/Sesión/registrar/registrar';

/**Contenidos */
import { ForoPage } from '../pages/Contenidos/foro/foro';
import { PlanCapacitiacionPage } from '../pages/plan-capacitiacion/plan-capacitiacion';
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
import { CertificadoPage } from '../pages/Logros/certificado/certificado';

/**Unidad 1 */

import { IntU1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/int-u1/int-u1';
import { SelecSuU1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/selec-su-u1/selec-su-u1';

/**Unidad 1 Sub Unidad 1 */
import { T1Su1U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 1/t1-su1-u1/t1-su1-u1';
import { T2Su1U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 1/t2-su1-u1/t2-su1-u1';
import { T3Su1U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 1/t3-su1-u1/t3-su1-u1';
import { T4Su1U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 1/t4-su1-u1/t4-su1-u1';
import { T5Su1U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 1/t5-su1-u1/t5-su1-u1';

/**Unidad 1 Sub Unidad 2 */
import { T1Su2U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 2/t1-su2-u1/t1-su2-u1';
import { T2Su2U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 2/t2-su2-u1/t2-su2-u1';
import { T3Su2U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 2/t3-su2-u1/t3-su2-u1';
import { T4Su2U1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 1/Sub Unidad 2/t4-su2-u1/t4-su2-u1';

/**Cápsulas (Actividades) U1*/
/**Cápsulas (Actividades) U1-SU1*/
import { A1Su1U1Page } from '../pages/Cápsulas (Actividades)/Capsu-U1/Capsu-U1-SU1/a1-su1-u1/a1-su1-u1';
import { A2Su1U1Page } from '../pages/Cápsulas (Actividades)/Capsu-U1/Capsu-U1-SU1/a2-su1-u1/a2-su1-u1';
import { A3Su1U1Page } from '../pages/Cápsulas (Actividades)/Capsu-U1/Capsu-U1-SU1/a3-su1-u1/a3-su1-u1';

/**Cápsulas (Actividades) U1-SU2*/
import { A1Su2U1Page } from '../pages/Cápsulas (Actividades)/Capsu-U1/Capsu-U1-SU2/a1-su2-u1/a1-su2-u1';

/**Prueba (Evaluación) U1*/
import { PruebaU1Page } from '../pages/Pruebas (Evaluaciones)/prueba-u1/prueba-u1';

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

/**Cápsulas (Actividades) U2*/
/**Cápsulas (Actividades) U2-SU1*/
import { A1Su1U2Page } from '../pages/Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a1-su1-u2/a1-su1-u2';
import { A2Su1U2Page } from '../pages/Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a2-su1-u2/a2-su1-u2';
import { A3Su1U2Page } from '../pages/Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a3-su1-u2/a3-su1-u2';
import { A4Su1U2Page } from '../pages/Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a4-su1-u2/a4-su1-u2';

/**Cápsulas (Actividades) U2-SU2*/
import { A1Su2U2Page } from '../pages/Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU2/a1-su2-u2/a1-su2-u2';

/**Cápsulas (Actividades) U2-SU3*/
import { A1Su3U2Page } from '../pages/Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU3/a1-su3-u2/a1-su3-u2';
import { A2Su3U2Page } from '../pages/Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU3/a2-su3-u2/a2-su3-u2';

/**Cápsulas (Actividades) U2-SU4*/
import { A1Su4U2Page } from '../pages/Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU4/a1-su4-u2/a1-su4-u2';
import { A2Su4U2Page } from '../pages/Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU4/a2-su4-u2/a2-su4-u2';

/**Prueba (Evaluación) U2*/
import { PruebaU2Page } from '../pages/Pruebas (Evaluaciones)/prueba-u2/prueba-u2';

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

/**Cápsulas (Actividades) U3*/
/**Cápsulas (Actividades) U3-SU1 */
import { A1Su1U3Page } from '../pages/Cápsulas (Actividades)/Capsu-U3/Capsu-U3-SU1/a1-su1-u3/a1-su1-u3';

/**Cápsulas (Actividades) U3-SU2 */
import { A1Su2U3Page } from '../pages/Cápsulas (Actividades)/Capsu-U3/Capsu-U3-SU2/a1-su2-u3/a1-su2-u3';

/**Cápsulas (Actividades) U3-SU3 */
import { A1Su3U3Page } from '../pages/Cápsulas (Actividades)/Capsu-U3/Capsu-U3-SU3/a1-su3-u3/a1-su3-u3';
import { A2Su3U3Page } from '../pages/Cápsulas (Actividades)/Capsu-U3/Capsu-U3-SU3/a2-su3-u3/a2-su3-u3';
import { A3Su3U3Page } from '../pages/Cápsulas (Actividades)/Capsu-U3/Capsu-U3-SU3/a3-su3-u3/a3-su3-u3';

/**Prueba (Evaluación) U3*/
import { PruebaU3Page } from '../pages/Pruebas (Evaluaciones)/prueba-u3/prueba-u3';

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

/**Cápsulas (Actividades) U4*/
/**Cápsulas (Actividades) U4-SU1*/
import { A1Su1U4Page } from '../pages/Cápsulas (Actividades)/Capsu-U4/Capsu-U4-SU1/a1-su1-u4/a1-su1-u4';

/**Cápsulas (Actividades) U4-SU2*/
import { A1Su2U4Page } from '../pages/Cápsulas (Actividades)/Capsu-U4/Capsu-U4-SU2/a1-su2-u4/a1-su2-u4';
import { A2Su2U4Page } from '../pages/Cápsulas (Actividades)/Capsu-U4/Capsu-U4-SU2/a2-su2-u4/a2-su2-u4';

/**Prueba (Evaluación) U4*/
import { PruebaU4Page } from '../pages/Pruebas (Evaluaciones)/prueba-u4/prueba-u4';

/**Unidad 5 */

import { IntU5Page } from '../pages/Contenidos/Contenidos AVA/Unidad 5/int-u5/int-u5';
import { SelecSuU5Page } from '../pages/Contenidos/Contenidos AVA/Unidad 5/selec-su-u5/selec-su-u5';

/**Unidad 5 Sub Unidad 1 */
import { T1Su1Un5Page } from '../pages/Contenidos/Contenidos AVA/Unidad 5/Sub Unidad 1/t1-su1-un5/t1-su1-un5';

/**Unidad 5 Sub Unidad 2 */
import { T1Su2Un5Page } from '../pages/Contenidos/Contenidos AVA/Unidad 5/Sub Unidad 1/t1-su2-un5/t1-su2-un5';

/**Unidad 5 Sub Unidad 2 */
import { T2Su1Un5Page } from '../pages/Contenidos/Contenidos AVA/Unidad 5/Sub Unidad 2/t2-su1-un5/t2-su1-un5';

/**Cápsulas (Actividades) U5*/
/**Cápsulas (Actividades) U5-SU1*/
import { A1Su1U5Page } from '../pages/Cápsulas (Actividades)/Capsu-U5/Capsu-U5-SU1/a1-su1-u5/a1-su1-u5';
import { A2Su1U5Page } from '../pages/Cápsulas (Actividades)/Capsu-U5/Capsu-U5-SU1/a2-su1-u5/a2-su1-u5';

/**Cápsulas (Actividades) U5-SU2*/
import { A1Su2U5Page } from '../pages/Cápsulas (Actividades)/Capsu-U5/Capsu-U5-SU2/a1-su2-u5/a1-su2-u5';

/**Prueba (Evaluación) U5*/
import { PruebaU5Page } from '../pages/Pruebas (Evaluaciones)/prueba-u5/prueba-u5';

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
import { Criptolaboratorio1Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/Sub Unidad 1/criptolaboratorio1/criptolaboratorio1';
import { Criptolaboratorio2Page } from '../pages/Contenidos/Contenidos AVA/Unidad 6/Sub Unidad 1/criptolaboratorio2/criptolaboratorio2';

/**Cápsulas (Actividades) U6*/
/**Cápsulas (Actividades) U6-SU1*/
import { A1Su1U6Page } from '../pages/Cápsulas (Actividades)/Capsu-U6/Capsu-U6-SU1/a1-su1-u6/a1-su1-u6';
import { A2Su1U6Page } from '../pages/Cápsulas (Actividades)/Capsu-U6/Capsu-U6-SU1/a2-su1-u6/a2-su1-u6';
import { A3Su1U6Page } from '../pages/Cápsulas (Actividades)/Capsu-U6/Capsu-U6-SU1/a3-su1-u6/a3-su1-u6';

/**Prueba (Evaluación) U6*/
import { PruebaU6Page } from '../pages/Pruebas (Evaluaciones)/prueba-u6/prueba-u6';

/**Unidad 7 */

import { IntU7Page } from '../pages/Contenidos/Contenidos AVA/Unidad 7/int-u7/int-u7';
import { SelecSuU7Page } from '../pages/Contenidos/Contenidos AVA/Unidad 7/selec-su-u7/selec-su-u7';

/**Unidad 7 Sub Unnidad 1*/
import { T1Su1Un7Page } from '../pages/Contenidos/Contenidos AVA/Unidad 7/Sub Unidad 1/t1-su1-un7/t1-su1-un7';

/**Unidad 7 Sub Unidad 2 */
import { T1Su2Un7Page } from '../pages/Contenidos/Contenidos AVA/Unidad 7/Sub Unidad 2/t1-su2-un7/t1-su2-un7';
import { T2Su2U7Page } from '../pages/Contenidos/Contenidos AVA/Unidad 7/Sub Unidad 2/t2-su2-u7/t2-su2-u7';

/**Cápsulas (Actividades) U7*/
/**Cápsulas (Actividades) U7-SU1*/
import { A1Su1U7Page } from '../pages/Cápsulas (Actividades)/Capsu-U7/Capsu-U7-SU1/a1-su1-u7/a1-su1-u7';
import { A2Su1U7Page } from '../pages/Cápsulas (Actividades)/Capsu-U7/Capsu-U7-SU1/a2-su1-u7/a2-su1-u7';

/**Prueba (Evaluación) U7*/
import { PruebaU7Page } from '../pages/Pruebas (Evaluaciones)/prueba-u7/prueba-u7';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,

    /**Pagina donde inicializa la aplicación */
    PaginaInicioPage,

    HomePage,

    /**Sesion y registro de usuario */
    LoginPage,
    RegistrarPage,

    /**Contenidos */
    PlanCapacitiacionPage,
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
    CertificadoPage,

    /**Unidad 1 */
    IntU1Page,
    SelecSuU1Page,

    /**Unidad 1 Sub Unidad 1 */
    T1Su1U1Page,
    T2Su1U1Page,
    T3Su1U1Page,
    T4Su1U1Page,
    T5Su1U1Page,

    /**Unidad 1 Sub Unidad 2 */
    T1Su2U1Page,
    T2Su2U1Page,
    T3Su2U1Page,
    T4Su2U1Page,

    /**Cápsulas (Actividades) U1 */
    /**Cápsulas (Actividades) U1-SU1*/
    A1Su1U1Page,
    A2Su1U1Page,
    A3Su1U1Page,

    /**Cápsulas (Actividades) U1-SU2*/
    A1Su2U1Page,

    /**Prueba (Evaluación) U1*/
    PruebaU1Page,

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

    /**Cápsulas (Actividades) U2*/
    /**Cápsulas (Actividades) U2-SU1*/
    A1Su1U2Page,
    A2Su1U2Page,
    A3Su1U2Page,
    A4Su1U2Page,

    /**Cápsulas (Actividades) U2-SU2*/
    A1Su2U2Page,

    /**Cápsulas (Actividades) U2-SU3*/
    A1Su3U2Page,
    A2Su3U2Page,

    /**Cápsulas (Actividades) U2-SU4*/
    A1Su4U2Page,
    A2Su4U2Page,

    /**Prueba (Evaluación) U2*/
    PruebaU2Page,

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

    /**Cápsulas (Actividades) U3*/
    /**Cápsulas (Actividades) U3-SU1 */
    A1Su1U3Page,

    /**Cápsulas (Actividades) U3-SU2 */
    A1Su2U3Page,

    /**Cápsulas (Actividades) U3-SU3 */
    A1Su3U3Page,
    A2Su3U3Page,
    A3Su3U3Page,

    /**Prueba (Evaluación) U3*/
    PruebaU3Page,

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

    /**Cápsulas (Actividades) U4*/
    /**Cápsulas (Actividades) U4-SU1*/
    A1Su1U4Page,

    /**Cápsulas (Actividades) U4-SU2*/
    A1Su2U4Page,
    A2Su2U4Page,

    /**Prueba (Evaluación) U4*/
    PruebaU4Page,

    /**Unidad 5 */
    IntU5Page,
    SelecSuU5Page,

    /**Unidad 5 Sub Unidad 1 */
    T1Su1Un5Page,
    T2Su1Un5Page,

    /**Unidad 5 Sub Unidad 2 */
    T1Su2Un5Page,

    /**Cápsulas (Actividades) U5*/
    /**Cápsulas (Actividades) U5-SU1*/
    A1Su1U5Page,
    A2Su1U5Page,

    /**Cápsulas (Actividades) U5-SU2*/
    A1Su2U5Page,

    /**Prueba (Evaluación) U5*/
    PruebaU5Page,

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
    Criptolaboratorio1Page,
    Criptolaboratorio2Page,

    /**Cápsulas (Actividades) U6*/
    /**Cápsulas (Actividades) U6-SU1*/
    A1Su1U6Page,
    A2Su1U6Page,
    A3Su1U6Page,

    /**Prueba (Evaluación) U6*/
    PruebaU6Page,

    /**Unidad 7 */
    IntU7Page,
    SelecSuU7Page,

    /**Unidad 7 Sub Unidad 1 */
    T1Su1Un7Page,

    /**Unidad 7 Sub Unidad 2 */
    T1Su2Un7Page,
    T2Su2U7Page,

    /**Cápsulas (Actividades) U7*/
    /**Cápsulas (Actividades) U7-SU1*/
    A1Su1U7Page,
    A2Su1U7Page,

    /**Prueba (Evaluación) U7*/
    PruebaU7Page,

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

    /**Sesion y registro de usuario */
    LoginPage,
    RegistrarPage,

    /**Contenidos */
    PlanCapacitiacionPage,
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
    CertificadoPage,

    /**Unidad 1 */
    IntU1Page,
    SelecSuU1Page,

    /**Unidad 1 Sub Unidad 1 */
    T1Su1U1Page,
    T2Su1U1Page,
    T3Su1U1Page,
    T4Su1U1Page,
    T5Su1U1Page,

    /**Unidad 1 Sub Unidad 2 */
    T1Su2U1Page,
    T2Su2U1Page,
    T3Su2U1Page,
    T4Su2U1Page,

    /**Cápsulas (Actividades) U1 */
    /**Cápsulas (Actividades) U1-SU1*/
    A1Su1U1Page,
    A2Su1U1Page,
    A3Su1U1Page,

    /**Cápsulas (Actividades) U1-SU2*/
    A1Su2U1Page,

    /**Prueba (Evaluación) U1*/
    PruebaU1Page,

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

    /**Cápsulas (Actividades) U2*/
    /**Cápsulas (Actividades) U2-SU1*/
    A1Su1U2Page,
    A2Su1U2Page,
    A3Su1U2Page,
    A4Su1U2Page,

    /**Cápsulas (Actividades) U2-SU2*/
    A1Su2U2Page,

    /**Cápsulas (Actividades) U2-SU3*/
    A1Su3U2Page,
    A2Su3U2Page,

    /**Cápsulas (Actividades) U2-SU4*/
    A1Su4U2Page,
    A2Su4U2Page,

    /**Prueba (Evaluación) U2*/
    PruebaU2Page,

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

    /**Cápsulas (Actividades) U3*/
    /**Cápsulas (Actividades) U3-SU1 */
    A1Su1U3Page,

    /**Cápsulas (Actividades) U3-SU2 */
    A1Su2U3Page,

    /**Cápsulas (Actividades) U3-SU3 */
    A1Su3U3Page,
    A2Su3U3Page,
    A3Su3U3Page,

    /**Prueba (Evaluación) U3*/
    PruebaU3Page,

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

    /**Cápsulas (Actividades) U4*/
    /**Cápsulas (Actividades) U4-SU1*/
    A1Su1U4Page,

    /**Cápsulas (Actividades) U4-SU2*/
    A1Su2U4Page,
    A2Su2U4Page,

    /**Prueba (Evaluación) U4*/
    PruebaU4Page,

    /**Unidad 5 */
    IntU5Page,
    SelecSuU5Page,

    /**Unidad 5 Sub Unidad 1 */
    T1Su1Un5Page,
    T2Su1Un5Page,

    /**Unidad 5 Sub Unidad 2 */
    T1Su2Un5Page,

    /**Cápsulas (Actividades) U5*/
    /**Cápsulas (Actividades) U5-SU1*/
    A1Su1U5Page,
    A2Su1U5Page,

    /**Cápsulas (Actividades) U5-SU2*/
    A1Su2U5Page,

    /**Prueba (Evaluación) U5*/
    PruebaU5Page,

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
    Criptolaboratorio1Page,
    Criptolaboratorio2Page,

    /**Cápsulas (Actividades) U6*/
    /**Cápsulas (Actividades) U6-SU1*/
    A1Su1U6Page,
    A2Su1U6Page,
    A3Su1U6Page,

    /**Prueba (Evaluación) U6*/
    PruebaU6Page,

    /**Unidad 7 */
    IntU7Page,
    SelecSuU7Page,

    /**Unidad 7 Sub Unidad 1 */
    T1Su1Un7Page,

    /**Unidad 7 Sub Unidad 2 */
    T1Su2Un7Page,
    T2Su2U7Page,

    /**Cápsulas (Actividades) U7*/
    /**Cápsulas (Actividades) U7-SU1*/
    A1Su1U7Page,
    A2Su1U7Page,

    /**Prueba (Evaluación) U7*/
    PruebaU7Page,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
