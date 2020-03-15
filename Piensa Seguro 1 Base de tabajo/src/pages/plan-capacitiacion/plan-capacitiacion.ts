import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlanCapacitiacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plan-capacitiacion',
  templateUrl: 'plan-capacitiacion.html',
})
export class PlanCapacitiacionPage {

  U1: any[]=[
    {
      tt: "Unidad 1",
      int: "La seguridad informática juega un rol importante en la vida cotidiana, debido a que sin el conocimiento que requiere este plano, nuestros dispositivos electrónicos se encontrarían en constante peligro, al igual que los datos salvaguardados en los sistemas informáticos. Por lo tanto, a lo largo de la Unidad 1, se expondrán los conceptos básicos para evitar confundir terminologías y tomar conciencia para prevenir ataques a nuestros dispositivos, evitando convertirse así de este modo, en un objetivo potencial para ataques de ciberdelincuentes.",
      obj1: "•	Descomponer las terminologías relevantes empleadas en el área de la ciberseguridad, proponiendo que el usuario final del AVA, comprenda y edifique su propio concepto desde el planteamiento de un constructo general.",
      obj2: "•	Categorizar las terminologías empleadas regularmente en el área de la ciberseguridad, con el fin de comprender de manera efectiva las diferencias y el campo de aplicabilidad de cada uno de los conceptos planteados en el AVA.",
      obj3: "•	Definir los conceptos relevantes alrededor de la ciberseguridad, promoviendo el aprendizaje de cada uno de ellos como la base fundamental para la contextualización del conocimiento en la protección de la tecnología innovadora.",

      sub1: "Sub Unidad 1: Seguridad Informática VS Seguridad de la Información 1",
      sub1_t1: "¿Qué es la seguridad informática?",
      sub1_t2: "¿Para qué sirve la seguridad informática?",
      sub1_t3: "¿Cómo se debe implementar la seguridad de la información (seguridad informática)?",
      sub1_t4: "Beneficios de la seguridad informática en empresas",
      sub1_t5: "¿Qué es la seguridad de la información?",
      sub1_t6: "¿Para qué sirve la seguridad de la información?",
      sub1_t7: "¿Qué es la seguridad en redes?",
      sub1_t8: "¿Cómo se implementa seguridad en redes?",
      sub1_t9: "Concepto básico de seguridad en red",

      sub2: "Sub Unidad 2: Pilares de la seguridad informática",
      sub2_t1: "¿Qué es la integridad?",
      sub2_t2: "¿Para qué sirve la integridad? ",
      sub2_t3: "¿Qué es la disponibilidad?",
      sub2_t4: "¿Para qué sirve la disponibilidad?",
      sub2_t5: "¿Qué es la confidencialidad?",
      sub2_t6: "¿Para qué sirve la confidencialidad?",
    }

  ];

  U2: any [] = [
    {
      tt: "Unidad 2",
      int: "El correcto entendimiento de los conceptos básicos relacionados con los ciberataques, es de vital importancia, debido a que previene y genera un panorama más abierto en relación con la diversidad de herramientas, métodos y metodologías para el análisis de modo que permita sustraer, espiar o manipular sistemas informáticos, por lo cual en la Unidad 2, se brindaran dichos conceptos y proporcionará una vista general sobre los tipos de ataques que se pueden efectuar, con la finalidad de generar competitividad respecto a la identificación de los ataques a los que están expuestos los sistemas informáticos y cómo actuar frente a ellos.",
      obj1: "•	Categorizar los tipos de ataques más comunes efectuados por los ciberdelincuentes, para así de este modo, comprender el panorama de aplicación y prevención de futuros ataques de este tipo hacia los sistemas informáticos a cargo.",
      obj2: "•	Descomponer los distintos temas relacionados con la ciberseguridad para así de este modo lograr comprender los medios más comunes empleados para efectuar un ataque, quienes los efectúan y de donde provienen, otorgando el horizonte en relación al posicionamiento del conocimiento respecto al extenso mundo de la seguridad de la información. ",

      sub1: "Sub Unidad 1: Terminología básica",
      sub1_t1: "¿Qué es un Malware? ",
      sub1_t2: "¿De dónde proviene un Malware?",
      sub1_t3: "¿Cómo reconocer el Malware?",
      sub1_t4: "¿Qué es el Spyware?",
      sub1_t5: "¿De dónde proviene el Spyware?",
      sub1_t6: "¿Cómo reconocer el Spyware?",
      sub1_t7: "¿Qué es el Adware?",
      sub1_t8: "¿De dónde proviene el Adware?",
      sub1_t9: "¿Cómo reconocer el Adware?",
      sub1_t10: "¿Qué es un hacker?",
      sub1_t11: "¿Qué es un Cracker?",
      sub1_t12: "¿Cuál es el objetivo principal de un Cracker?",
      sub1_t13: "¿Qué es un Newbie?",
      sub1_t14: "¿Qué es un Analista Informático?",
      sub1_t15: "¿Cuál es la función de un Analista Informático?",
      sub1_t16: "¿Qué es la ética de un hacker?",
      sub1_t17: "¿Cuáles son las normas del hacker?",
      sub1_t18: "¿Qué es un Phreaker?",
      sub1_t19: "¿Cómo actúa un Phreaker?",
      sub1_t20: "¿De dónde provienen los PHREAKERS?",

      sub2: "Sub Unidad 2: Clasificación de ataques",
      sub2_t1: "¿Qué es un ataque por interrupción?",
      sub2_t2: "¿Qué es un ataque por modificación?",
      sub2_t3: "¿Qué es un ataque por fabricación?",
      sub2_t4: "¿Qué es un ataque por interceptación?",

      sub3: "Sub Unidad 3: Clasificación de ataque por suplantación",
      sub3_t1: "¿Qué es la suplantación?",
      sub3_t2: "¿Cómo reconocer la suplantación?",
      sub3_t3: "¿Cómo se realiza una suplantación?",
      sub3_t4: "¿Qué es la suplantación de IP?",
      sub3_t5: "¿Qué es la suplantación de ARP?",
      sub3_t6: "¿Qué es la suplantación de DNS?",
      sub3_t7: "¿Qué es la suplantación de WEB?",
      sub3_t8: "¿Qué es la suplantación de correo?",

      sub4: "Sub Unidad 4: Clasificación de la seguridad",
      sub4_t1: "¿Qué es la seguridad física?",
      sub4_t2: "¿Qué es seguridad lógica?",
      sub4_t3: "¿Qué es la seguridad activa?",
      sub4_t4: "Técnicas de Seguridad Activa",
      sub4_t5: "¿Qué es la seguridad pasiva?",
      sub4_t6: "Técnicas de Seguridad Pasiva",

    }
  ];

  U3: any[] = [
    {
      tt: "Unidad 3",
      int: "La determinación de los medios y metodologías de ataque, juegan un papel importante dentro de la ciberseguridad, por la razón de efectividad en la selección del medio para acceder a los sistemas informáticos y la metodología que en algunos casos ya es preestablecida, derivando de este modo, la obtención de resultados mucho más efectivos sobre los objetivos impactados. En este sentido, mediante la Unidad 3, se estudiarán las estrategias anteriormente descritas para obtener una vista general en relación a las acciones y vías de ataque con que cuentan los ciberdelincuentes frente a un sistema de información débil en el contexto de ciberseguridad, objetivando los aspectos importantes de las metodologías y medios más comunes para efectuar ataques.",
      obj1: "•	Distinguir las diferencias existentes entre medio y metodología de ataque, plasmando las distintas estrategias empleadas para atacar un sistema informático vulnerable en términos de ciberseguridad.",
      obj2: "•	Estimar el impacto obtenido al comprender el impacto que se puede obtener al elegir un medio de ataque que permita exponer las vulnerabilidades más relevantes de un sistema informático.",
      obj3: "•	Categorizar las metodologías de ataque, de forma que se pueda comprender la importancia y en qué casos se debe emplear algunas de las más representativas en el campo de la ciberseguridad. ",

      sub1: "Sub Unidad 1: Vectores de ataque",
      sub1_t1: "¿Qué es un vector de ataque?",
      sub1_t2: "¿Cómo funciona un vector de ataque?",
      sub1_t3: "Vector de ataque (Host)",
      sub1_t4: "Vector de ataque (Activo)",
      sub1_t5: "Vector de ataque (Pasivo)",

      sub2: "Sub Unidad 2: Objetivo de ataque",
      sub2_t1: "¿Qué es la localización de objetivos?",
      sub2_t2: "¿En que beneficia en la realización de un ataque conocer la localización del objetivo?",
      sub2_t3: "¿Para qué se debe localizar un objetivo?",

      sub3: "Sub Unidad 3: Métodos de ataque",
      sub3_t1: "¿Qué es un ping?",
      sub3_t2: "¿Para qué sirve el ping?",
      sub3_t3: "¿Cómo hacer un ping?",
      sub3_t4: "¿Qué son los Barridos de Pings?",
      sub3_t5: "¿Para qué sirven los barridos de Pings?",
      sub3_t6: "Simulación de un Barrido de Ping",
      sub3_t7: "¿Qué son los Barridos Electrónicos?",
      sub3_t8: "¿Para qué sirven los barridos Electrónicos?",
      sub3_t9: "¿Cuándo es necesario hacer un barrido electrónico?",
      sub3_t10: "¿Qué son los Trazados de Rutas (Tracert)",
      sub3_t11: "¿Para qué sirven los Trazados de Rutas?",
      sub3_t12: "Simulación de un Trazado de Ruta",
      sub3_t13: "¿Qué son las bases de datos?",
      sub3_t14: "¿Qué tipos de bases de datos existen?",
      sub3_t15: "¿Porque son factibles al ataque informático?",
      sub3_t16: "Amenazas hacia las bases de datos",
      sub3_t17: "¿Qué es el análisis de objetivo?",
      sub3_t18: "¿Qué es la identificación de servicios?",
      sub3_t19: "¿Qué es la identificación de sistema operativo?",

    }
  ];

  U4: any[] = [
    {
      tt: "Unidad 4",
      int: "La selección de una herramienta que permita realizar un test de penetración (Pentesting), es de vital importancia, debido a que permite encontrar las vulnerabilidades en un sistema informático a tiempo y permitiendo reparar dichas vulnerabilidades de forma rápida y efectiva, por lo tanto en la Unidad 4, se expondrá una de las herramientas más empleadas en el campo de la ciberseguridad para efectuar test de penetración, concibiendo algunos aspectos básicos del área de impacto, los casos en que se debe realizar un test de penetración y en suma la manera como se debería realizar un test de penetración en ambientes controlados mediante máquinas virtuales.",
      obj1: "•	Relacionar las competencias adquiridas en las unidades anteriores para efectuar un test de penetración de forma efectiva, distinguiendo entre la información grandes bloques de información, los datos relevantes arrojados en el Test de Penetración.",
      obj2: "•	Explorar la máquina virtual de Kali Linux para efectuar ataques controlados a una máquina virtual empleando comandos NMAP y NETCAT proporcionados por la máquina virtual anteriormente mencionada.",

      sub1: "Sub Unidad 1: Rol de un analista de sistemas en empresas",
      sub1_t1: "¿Cuál es el rol de un analista de sistemas?",
      sub1_t2: "¿Por qué usan analista de sistemas en los proyectos software?",
      sub1_t3: "¿Cuál es el perfil de un analista de sistemas?",

      sub2: "Sub Unidad 2: Pentesting Básico.",
      sub2_t1: "¿Qué es Pentesting?",
      sub2_t2: "¿Cómo funciona el Pentesting?",
      sub2_t3: "¿Qué herramientas hay para la realización de Pentesting?",
      sub2_t4: "¿Qué es Nmap?",
      sub2_t5: "¿Qué es el escaneo de puertos (Port Scanning)?",
      sub2_t6: "¿Cómo usar NMAP?",
      sub2_t7: "Comandos Básicos Nmap",
      sub2_t8: "Algunas prácticas en nmap",
      sub2_t9: "Practica de comandos Nma",
      sub2_t10: "¿Qué es NetCat?",
      sub2_t11: "¿Para qué sirve NetCat?",
      sub2_t12: "Comandos Básicos NetCat",
      sub2_t13: "Practica de comandos NetCat",

    }
  ];

  U5: any[] = [
    {
      tt: "Unidad 5",
      int: "En la ciberseguridad es de vital importancia salvaguardar la información de los sistemas informáticos, resaltando el rol que desempeñan aquellos expertos en esta área que día a día trabajan por evitar ser víctimas de un ciberataque y mantener los pilares fundamentales de la seguridad informática aplicados por lo tanto en la Unidad 5 se propone identificar las pautas siguen para así de este modo garantizar que un sistema informático se mantenga disponible, íntegro y confidencial. De igual modo se pone en evidencia los tipos de vulnerabilidades más comunes a los que día a día se exponen los sistemas informáticos, proporcionando conocimiento en torno a estos aspectos, mejorando la eficacia de la aplicación de métodos (Herramientas) y metodologías (Estructura) para prevención de riesgos en ciberseguridad.",
      obj1: "•	Exponer las principales vulnerabilidades a las cuales se encuentran expuestos los sistemas informáticos, de forma que se pueda prevenir de forma conceptual el desarrollo de actividades que comprometan la ciberseguridad de un sistema.",
      obj2: "•	Contrastar los diferentes aspectos relevantes para salvaguardar la ciberseguridad teniendo en cuenta las diferencias entre amenaza, riesgo y vulnerabilidad, para así de este modo identificar de forma efectiva el tipo de control que se ha vulnerado en un sistema informático. ",

      sub1: "Sub Unidad 1: Amenaza, Riesgo, Vulnerabilidad (ARV)",
      sub1_t1: "¿Qué es un riesgo?",
      sub1_t2: "Factores generadores de riesgo",
      sub1_t3: "Agentes generadores de riesgo",
      sub1_t4: "¿Qué es una amenaza?",
      sub1_t5: "¿Qué es una vulnerabilidad?",
      sub1_t6: "¿Qué es el impacto en seguridad de la información?",
      sub1_t7: "¿Qué es un incidente de seguridad?",
      sub1_t8: "¿Qué es el tratamiento de datos personales?",

      sub2: "Sub Unidad 2: Tipos de vulnerabilidades",
      sub2_t1: "¿Qué es ByPASS?",
      sub2_t2: "¿Para qué sirve ByPASS?",
      sub2_t3: "¿Qué son las pruebas de validación?",
      sub2_t4: "¿En qué consiste un ataque de validación?",

    }
  ];

  U6: any[] = [
    {
      tt: "Unidad 6",
      int: "Sobre la criptografía se podría decir que es un componente en la construcción de una barrera adicional para garantizar la ciberseguridad en un sistema informático debido a que se encarga de proteger la información sensible de ser objeto de hurto por parte de los ciberdelincuentes debido a la dificultad para ser comprensible a simple vista al emplear algoritmos criptográficos complejos al igual que algoritmos matemáticos que cambian el orden de los factores. En este orden de ideas, en la Unidad 6 se podrá entender de manera tradicional de donde proviene la criptografía y algunos de los algoritmos comunes empleados antiguamente para poder transmitir información en clave(Cifrada) en la guerra.",
      obj1: "•	Sintetizar la razón de ser de la criptografía de modo que se pueda comprender el origen y el propósito de los métodos criptográficos de comunicación en la antigüedad.",
      obj2: "•	Comprender la aplicabilidad de los algoritmos criptográficos para transmitir información de modo que se pueda efectuar tanto el cifrado como descifrado de criptogramas.",
      obj3: "•	Interpretar los algoritmos criptográficos y su funcionamiento para así de este modo atender a las necesidades de la sociedad actual en pro de la protección de la información que viaja por la red y se almacena en los sistemas informáticos.",

      sub1: "Sub Unidad 1: Introducción a la criptografía",
      sub1_t1: "¿Qué es la criptografía?",
      sub1_t2: "¿Para qué sirve la criptografía?",
      sub1_t3: "¿Cómo funciona la criptografía?",
      sub1_t4: "¿Qué reglas se deben seguir en la creación de claves criptográficas?",
      sub1_t5: "¿Qué es la criptografía simétrica?",
      sub1_t6: "¿Cómo funciona la Criptografía simétrica?",
      sub1_t7: "¿Qué es la criptografía asimétrica?",
      sub1_t8: "¿Qué es la Criptografía clásica?",
      sub1_t9: "¿Qué es el cifrado por sustitución?",
      sub1_t10: "Tipos de cifrado por sustitución",
      sub1_t11: "¿Qué es el cifrado de Vigenère?",
      sub1_t12: "¿Qué es el cifrado por transposición?",
      sub1_t13: "¿Cómo funciona el cifrado por transposición?",
      sub1_t14: "Ejemplo de cifrado por transposición",

    }
  ];

  U7: any[] = [
    {
      tt: "Unidad 7",
      int: "La normativa legal es uno de los principales protagonistas para promover legalmente la prohibición del hurto de información y violación del perímetro de seguridad en sistemas informáticos, por lo cual se estipula que las sanciones que se deben efectuar a quienes realicen actos indebidos en los sistemas informáticos que comprometan la disponibilidad, integridad y confidencialidad, por lo tanto en la Unidad 7 se expondrá la legislación que promueve las sanciones en Colombia respecto a la ciberseguridad de forma que se pueda comprender la razón de la protección de datos y la ciberseguridad en el entorno social y sus limitantes.",
      obj1: "•	Identificar el rol que juega la legislación en el establecimiento de normas de conducta que permitan castigar a los ciberdelincuentes en caso de violar el perímetro de seguridad establecido para la protección de la información.",
      obj2: "•	Establecer la razón de la legislación colombiana para castigar aquellos actos que atenten contra la integridad, disponibilidad y confidencialidad de un sistema informático.",

      sub1: "Sub Unidad 1: Concepto de legislación",
      sub1_t1: "¿Qué es la legislación?",
      sub1_t2: "¿Porque es importante la legislación?",
      sub1_t3: "¿Cómo funciona la legislación?",

      sub2: "Sub Unidad 2: Legislación colombiana",
      sub2_t1: "Ley 1273 de 2009",

    }

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanCapacitiacionPage');
  }

}
