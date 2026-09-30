import { ADVISOR_PROFILES } from './scenarios.js';

// Spanish for every piece of interface text that is not on the printed cards,
// keyed by the exact English wording it replaces (see i18n.js). The cards
// themselves -- title, story, options -- live in scenarios.es.js, copied from
// the PDF; everything here was translated for this build and has not been
// reviewed by a native speaker yet.
//
// EJIT is left as the project's own acronym rather than expanded, matching how
// the English screens use it.
export const ES_UI = {
  // --- shared ---------------------------------------------------------------
  Back: 'Atrás',
  Next: 'Siguiente',
  Close: 'Cerrar',
  Dismiss: 'Cerrar',
  Finish: 'Finalizar',
  Submit: 'Enviar',
  Send: 'Enviar',
  Sent: 'Enviado',
  All: 'Todos',
  'Fully aligned': 'Totalmente alineada',
  'Partially aligned': 'Parcialmente alineada',
  'Non-aligned': 'No alineada',
  'Environmental Justice in Tech': 'Justicia Ambiental en la Tecnología',

  // --- how to play ----------------------------------------------------------
  'S.01. HOW TO PLAY': 'S.01. CÓMO JUGAR',
  'WELCOME TO': 'BIENVENIDO A',
  'The simulation': 'La simulación',
  'In this simulation, you will be faced with a series of scenarios that will put to the test your current comprehension of the impacts of technology in our society and environment.':
    'En esta simulación, te enfrentarás a una serie de escenarios que pondrán a prueba tu comprensión actual de los impactos de la tecnología en nuestra sociedad y nuestro medio ambiente.',
  'The journey': 'El viaje',
  'We will take you on a journey that starts with you as an intern in a tech startup and ends 20 years later with you in positions of power. And as time passes and you gain more power, the scenarios will become more complicated.':
    'Te llevaremos en un viaje que comienza contigo como pasante en una startup tecnológica y termina 20 años después contigo en posiciones de poder. Y a medida que pase el tiempo y ganes más poder, los escenarios se volverán más complicados.',
  'The clock': 'El reloj',
  'In this world everything moves fast, leaving many things broken. Here, you will also be faced with this time pressure and you will have 1.5min to choose an answer.':
    'En este mundo todo se mueve rápido, dejando muchas cosas rotas. Aquí también enfrentarás esta presión de tiempo y tendrás 1.5 min para elegir una respuesta.',
  'Your advisors': 'Tus asesores',
  'Finally, if you are in doubt you can call one of your advisors. But keep in mind that everyone has a unique bias. So, stay critical.':
    'Por último, si tienes dudas puedes llamar a uno de tus asesores. Pero ten en cuenta que cada uno tiene un sesgo único. Así que mantén una mirada crítica.',

  // --- goals ----------------------------------------------------------------
  'S.02. YOUR GOAL': 'S.02. TU META',
  YOUR: 'TU',
  GOAL: 'META',
  'The simulation is based on a series of Environmental Justice in Technology principles that will be revealed to you once you complete all the scenarios. You may or may not agree with them, and so we ask you to keep a critical perspective on this matter as well.':
    'La simulación se basa en una serie de principios de Justicia Ambiental en la Tecnología que se te revelarán cuando completes todos los escenarios. Puede que estés de acuerdo con ellos o no, por lo que te pedimos que también mantengas una perspectiva crítica al respecto.',
  'Your goal is simple, you will be asked to selected one of five options that is most aligned with what you believe to be Environmental Justice in Technology.':
    'Tu meta es simple: se te pedirá que selecciones una de cinco opciones, la que esté más alineada con lo que crees que es la Justicia Ambiental en la Tecnología.',
  'Simple like that.': 'Así de simple.',

  // --- study mode intro -----------------------------------------------------
  'S.01. WELCOME TO STUDY MODE': 'S.01. BIENVENIDO AL MODO ESTUDIO',
  'STUDY MODE': 'MODO ESTUDIO',
  'Why you are here': 'Por qué estás aquí',
  'If you are here, it means you already had a first experience with the simulation mode and you were able to reflect a little about Environmental Justice in Technology.':
    'Si estás aquí, significa que ya tuviste una primera experiencia con el modo simulación y pudiste reflexionar un poco sobre la Justicia Ambiental en la Tecnología.',
  'No time pressure': 'Sin presión de tiempo',
  'In this mode you will have no time pressure, leaving you with the opportunity to contemplate and further reflect on the scenarios you encountered in the simulation mode. More specifically, here you will be able to:':
    'En este modo no tendrás presión de tiempo, lo que te da la oportunidad de contemplar y reflexionar más a fondo sobre los escenarios que encontraste en el modo simulación. Más específicamente, aquí podrás:',
  '• See the EJIT Principle is aligned to each answer.':
    '• Ver con qué Principio de EJIT se alinea cada respuesta.',
  '• See how each answer aligns to the principle.':
    '• Ver cómo se alinea cada respuesta con el principio.',
  '• See the suggestions and biases of all advisors for each scenario.':
    '• Ver las sugerencias y los sesgos de todos los asesores en cada escenario.',
  '• See a reasoning behind the answer alignment.':
    '• Ver el razonamiento detrás de la alineación de cada respuesta.',
  '• Access additional learning resources associated to each scenario.':
    '• Acceder a recursos de aprendizaje adicionales asociados a cada escenario.',
  '• Provide feedback to us on corrections or ideas for improvement of each scenario.':
    '• Enviarnos comentarios con correcciones o ideas para mejorar cada escenario.',

  // --- study mode preview ---------------------------------------------------
  'S.02. A FINAL GIFT': 'S.02. UN REGALO FINAL',
  'A FINAL': 'UN REGALO',
  GIFT: 'FINAL',
  'Finally, after you are done you will be able to download the cards and a facilitators guide, as well as apply to be part of our Study Hall Facilitators’ Program!':
    'Por último, cuando termines podrás descargar las tarjetas y una guía para facilitadores, ¡y también postularte para ser parte de nuestro Programa de Facilitadores de Study Hall!',
  'We wish you a great learning experience!': '¡Te deseamos una gran experiencia de aprendizaje!',

  // --- consent --------------------------------------------------------------
  'S.03. CONSENT & TRANSPARENCY': 'S.03. CONSENTIMIENTO Y TRANSPARENCIA',
  'CONSENT &': 'CONSENTIMIENTO Y',
  TRANSPARENCY: 'TRANSPARENCIA',
  'During this experience, we collect the following data with the goal of providing you with the results of the simulation and of making this and future EJIT learning experiences better:':
    'Durante esta experiencia, recopilamos los siguientes datos con el objetivo de darte los resultados de la simulación y de mejorar esta y futuras experiencias de aprendizaje de EJIT:',
  'Country (to display local definitions of EJIT)': 'País (para mostrar definiciones locales de EJIT)',
  'Answers to each question (for scoring)': 'Respuestas a cada pregunta (para calcular el puntaje)',
  "Features used during the game (i.e., advisors' call)":
    'Funciones utilizadas durante el juego (p. ej., llamadas a asesores)',
  'Time spent reading and answering each scenario (to improve readability, accessibility, and difficulty)':
    'Tiempo dedicado a leer y responder cada escenario (para mejorar la legibilidad, la accesibilidad y la dificultad)',
  'Additional telemetry on clicks and devices used (to improve overall design and accessibility to more than one type of device and OS).':
    'Telemetría adicional sobre clics y dispositivos utilizados (para mejorar el diseño general y la accesibilidad en más de un tipo de dispositivo y sistema operativo).',
  'We DO NOT collect and/or store:': 'NO recopilamos ni almacenamos:',
  'Any personal or contact information (e.g., email, specific address beyond country)':
    'Ninguna información personal o de contacto (p. ej., correo electrónico, dirección específica más allá del país)',
  'During this part of the experience, we collect the following data with the goal of making this and future EJIT learning experiences better:':
    'Durante esta parte de la experiencia, recopilamos los siguientes datos con el objetivo de mejorar esta y futuras experiencias de aprendizaje de EJIT:',
  'Country (to cross with provided suggestions)': 'País (para cruzarlo con las sugerencias recibidas)',
  'Suggestions on each scenario (ie. disagree section)':
    'Sugerencias sobre cada escenario (p. ej., la sección de desacuerdo)',
  'Total time spent in each scenario (to explore complexity and difficulty in each scenario)':
    'Tiempo total dedicado a cada escenario (para explorar la complejidad y la dificultad de cada escenario)',
  'Additional telemetry on clicks in buttons during and at the end of the game (e.g., learn beyond button, download of facilitators’ guide and cards, apply to facilitators’ program, etc).':
    'Telemetría adicional sobre clics en botones durante y al final del juego (p. ej., el botón de saber más, la descarga de la guía para facilitadores y las tarjetas, la postulación al programa de facilitadores, etc.).',

  // --- goals question ---------------------------------------------------------
  'S.04. GOALS': 'S.04. METAS',
  'But before we start...what is Environmental Justice in Technology for you?':
    'Pero antes de empezar... ¿qué es para ti la Justicia Ambiental en la Tecnología?',
  wordsSelected_one: '{{count}} palabra seleccionada.',
  wordsSelected_other: '{{count}} palabras seleccionadas.',
  selectedLetter: 'Seleccionada {{letter}}',
  submitLetter: 'Enviar {{letter}}',
  scenarioTitle: 'Escenario {{n}}: {{title}}',
  scenarioN: 'Escenario {{n}}',
  scoreRange: '{{name}} {{from}} a {{to}}',
  everyone: 'Todas las personas: {{avg}}/{{max}}',
  wordCloudLabel: 'Nube de palabras de lo que eligieron las personas jugadoras, para {{scope}}',
  shareSubject: '{{game}} — Obtuve: {{label}}',
  playLink: 'Juega: {{url}}',
  'Pick as many words as you like.': 'Elige todas las palabras que quieras.',
  'Words you would choose': 'Palabras que elegirías',
  'Let’s start?': '¿Empezamos?',
  'YES!': '¡SÍ!',
  'NO. I want to review the rules and goals again.': 'NO. Quiero revisar las reglas y las metas otra vez.',
  Equity: 'Equidad',
  Access: 'Acceso',
  Sustainability: 'Sostenibilidad',
  Impact: 'Impacto',
  Justice: 'Justicia',
  Waste: 'Desechos',
  Communities: 'Comunidades',
  Pollution: 'Contaminación',
  'E-waste': 'Residuos electrónicos',
  'Digital divide': 'Brecha digital',
  Inclusion: 'Inclusión',
  Accountability: 'Rendición de cuentas',
  Extraction: 'Extracción',
  Power: 'Poder',
  Resources: 'Recursos',
  Representation: 'Representación',
  Transparency: 'Transparencia',
  Harm: 'Daño',
  Solutions: 'Soluciones',
  Marginalized: 'Marginación',
  Responsibility: 'Responsabilidad',
  Climate: 'Clima',
  Labor: 'Trabajo',
  Data: 'Datos',
  Participation: 'Participación',
  Rights: 'Derechos',
  'Supply chain': 'Cadena de suministro',
  Toxicity: 'Toxicidad',
  Health: 'Salud',
  Sovereignty: 'Soberanía',

  // --- card screens -----------------------------------------------------------
  'Select Answer': 'Elegir respuesta',
  'STUDY HALL BY ROOTED FUTURES LAB': 'STUDY HALL POR ROOTED FUTURES LAB',
  'Answer Question': 'Responder pregunta',
  'The clock starts when you do': 'El reloj empieza cuando tú empiezas',
  Select: 'Seleccionar',
  'Next Question': 'Siguiente pregunta',
  'When you don’t decide, someone will decide for you.':
    'Cuando tú no decides, alguien más decidirá por ti.',
  'Selected in simulation mode': 'Elegida en el modo simulación',
  'TIMES UP!': '¡SE ACABÓ EL TIEMPO!',
  'EJIT Principle': 'Principio de EJIT',
  'EJIT principle': 'Principio de EJIT',
  'Learn More': 'Saber más',
  'Call Adviser': 'Llamar a un asesor',
  'Call Advisor': 'Llamar a un asesor',
  'Call advisor': 'Llamar a un asesor',
  'Call Used': 'Llamada usada',
  'Advisor call used': 'Llamada a asesor usada',
  'How clear is this scenario to you?': '¿Qué tan claro te resulta este escenario?',
  'Very confusing': 'Muy confuso',
  'Somewhat confusing': 'Algo confuso',
  Neutral: 'Neutral',
  Clear: 'Claro',
  'Very clear': 'Muy claro',
  'What was confusing? Tell us more': '¿Qué te confundió? Cuéntanos más',
  'What would make it clearer?': '¿Qué lo haría más claro?',
  "Anything else you'd like to share?": '¿Algo más que quieras compartir?',
  'Reading for this scenario is still being gathered.':
    'Aún estamos reuniendo lecturas para este escenario.',
  'General resources about EJIT': 'Recursos generales sobre EJIT',
  'Public Policy Expert': 'Especialista en Políticas Públicas',
  'Community Leader': 'Líder de la Comunidad',
  'Tech Entrepreneur': 'Emprendedor(a) Tecnológico(a)',
  [ADVISOR_PROFILES['Tech Entrepreneur'].motto]:
    '“si a las empresas les va bien, al mundo también le va bien.”',
  [ADVISOR_PROFILES['Public Policy Expert'].motto]:
    '“se necesita un cambio, pero las revoluciones rara vez terminaron bien.”',
  [ADVISOR_PROFILES['Community Leader'].motto]:
    '“la revolución ya ocurrió, pero solo para la minoría. Es hora de hacerla de nuevo para la mayoría.”',
  'Your vision': 'Tu visión',
  'In your own words...': 'Con tus propias palabras...',
  'Optional. Nothing here is scored.': 'Opcional. Nada de esto se puntúa.',

  // --- results ----------------------------------------------------------------
  'STUDY HALL COMPLETE': 'STUDY HALL COMPLETADO',
  'Cards & Guide': 'Tarjetas y guía',
  'Become a Facilitator': 'Conviértete en facilitador(a)',
  'You are trapped in the capitalism rat race':
    'Estás atrapado(a) en la carrera de ratas del capitalismo',
  'Looks like you are drinking the cool aide': 'Parece que te estás tragando el cuento',
  "Good job, you're starting to come out of it. Keep going":
    'Buen trabajo, estás empezando a salir de ello. Sigue así',
  "You're starting to come out of it. Keep going": 'Estás empezando a salir de ello. Sigue así',
  'Your freedom is a direct result of just and inclusive relationships with others':
    'Tu libertad es el resultado directo de relaciones justas e inclusivas con las demás personas',
  Share: 'Compartir',
  'Interested in becoming a facilitator?': '¿Te interesa ser facilitador(a)?',
  'First step:': 'Primer paso:',
  'complete the game in Study Mode.': 'completa el juego en Modo Estudio.',
  'Start Study Mode': 'Comenzar Modo Estudio',
  'Your vision for the future': 'Tu visión para el futuro',
  'Play Again': 'Jugar de nuevo',
  Support: 'Apoyar',
  'Support Study Hall': 'Apoya Study Hall',
  'If you would like to support Study Hall financially or otherwise, please reach out to':
    'Si deseas apoyar a Study Hall económicamente o de otra forma, escríbenos a',
  'Share your result': 'Comparte tu resultado',
  Copy: 'Copiar',
  Copied: 'Copiado',
  Email: 'Correo',
  Message: 'Mensaje',

  // --- score breakdown --------------------------------------------------------
  YOU: 'TÚ',
  AVG: 'PROM.',
  'Your score': 'Tu puntaje',
  'Avg. score of all participants': 'Puntaje promedio de todas las personas participantes',
  'Spider chart of scores by theme': 'Gráfico de araña con los puntajes por tema',
  'Suggestions for Taking Action': 'Sugerencias para Actuar',
  Scenarios: 'Escenarios',
  'Scenarios in this quadrant': 'Escenarios de este cuadrante',
  'This card has not been written yet.': 'Esta tarjeta aún no ha sido escrita.',
  'Your answer': 'Tu respuesta',
  'You ran out of time without choosing.': 'Se te acabó el tiempo sin elegir una respuesta.',
  'You did not play this scenario.': 'No jugaste este escenario.',
  Why: 'Por qué',
  'Fully aligned answer': 'Respuesta totalmente alineada',
  'The scenario': 'El escenario',
  'Low score': 'Puntaje bajo',
  'Medium score': 'Puntaje medio',
  'High score': 'Puntaje alto',
  'What others think about environmental justice in technology':
    'Lo que otras personas piensan sobre la justicia ambiental en la tecnología',
  'Filter word cloud by country': 'Filtrar la nube de palabras por país',
  'Not enough data': 'No hay datos suficientes',
  'What players picked on the goals screen.':
    'Lo que las personas jugadoras eligieron en la pantalla de metas.',

  'Designing with Power and Positionality in Mind':
    'Diseñar con el Poder y la Posicionalidad en Mente',
  'Embedding Access, Accountability,': 'Incorporar el Acceso, la Rendición de Cuentas',
  'and Reparative Practice': 'y la Práctica Reparadora',
  'Restructuring Innovation for': 'Reestructurar la Innovación para',
  'Collective Flourishing': 'el Florecimiento Colectivo',
  'Reorienting the Relationship Between Technology and Nature':
    'Reorientar la Relación entre la Tecnología y la Naturaleza',

  'Learning with others': 'Aprender con otras personas',
  'Mapping the systems': 'Mapear los sistemas',
  'Helping others': 'Ayudar a otras personas',

  // Suggestions for Taking Action, one per band per quadrant.
  'Look around you. What technologies do people around you use daily and which ones are not accessible to them? Who made these technologies? Do you know how they serve your community and how they serve those that built it? Whose interests are really at the center of the development and usage of these tools? Here you can also map assumptions, observations and understandings about race, colonialism, and power as they relate to the history of the people that use and build the tools.':
    'Mira a tu alrededor. ¿Qué tecnologías usan a diario las personas que te rodean y cuáles no están a su alcance? ¿Quiénes hicieron estas tecnologías? ¿Sabes cómo sirven a tu comunidad y cómo sirven a quienes las construyeron? ¿Los intereses de quiénes están realmente en el centro del desarrollo y el uso de estas herramientas? Aquí también puedes mapear supuestos, observaciones y entendimientos sobre la raza, el colonialismo y el poder, en relación con la historia de las personas que usan y construyen estas herramientas.',
  'Have you ever considered applying your knowledge to build a table comparing community-owned/open source and mainstream/commercial alternatives to the tech used by you and those in your community? How do they compare beyond available features and aesthetics? For example, are there power asymmetries that can further reinforce the position of those with already a lot of power? How do these asymmetries are embedded in the tech lifecycle from early development to usage, and disposal or composting? How these asymmetries are reinforced or hindered by the interaction between the different technologies in your community?':
    '¿Has pensado alguna vez en aplicar tus conocimientos para armar una tabla que compare alternativas comunitarias o de código abierto con alternativas comerciales o convencionales a la tecnología que usas tú y las personas de tu comunidad? ¿Cómo se comparan más allá de las funciones disponibles y la estética? Por ejemplo, ¿hay asimetrías de poder que pueden reforzar aún más la posición de quienes ya tienen mucho poder? ¿Cómo están incorporadas estas asimetrías en el ciclo de vida de la tecnología, desde su desarrollo inicial hasta su uso y su desecho o compostaje? ¿Cómo se refuerzan o se frenan estas asimetrías por la interacción entre las distintas tecnologías de tu comunidad?',
  'Your critical perspective is valuable! Have you ever considered using your knowledge to draft a public policy proposal or design process that can support power distribution and how technical decisions can be rejected by communities in cases of disagreement? Think about how you can use that to guide all stakeholders, but specially the most vulnerable ones, to move beyond consultation and into actual decision-making power for acceptance, development, modification, and stoppage.':
    '¡Tu perspectiva crítica es valiosa! ¿Has pensado alguna vez en usar tus conocimientos para redactar una propuesta de política pública o un proceso de diseño que apoye la distribución del poder y la posibilidad de que las comunidades rechacen decisiones técnicas cuando no estén de acuerdo? Piensa en cómo puedes usarlo para guiar a todas las partes interesadas, pero especialmente a las más vulnerables, para ir más allá de la consulta y llegar a un verdadero poder de decisión sobre la aceptación, el desarrollo, la modificación y la detención de la tecnología.',
  'Look around you. What technologies do people around you use daily and which ones are not accessible to them? Talk to people and ask if they understand the trade offs of the technologies that are accessible to them - for example, do free tools require collection of personal information? Start a simple map with the information you gather from others and try to understand how their life story relates to how they use, understand, talk about technology.':
    'Mira a tu alrededor. ¿Qué tecnologías usan a diario las personas que te rodean y cuáles no están a su alcance? Habla con las personas y pregúntales si entienden las ventajas y desventajas de las tecnologías a las que sí tienen acceso; por ejemplo, ¿las herramientas gratuitas requieren recopilar información personal? Empieza un mapa sencillo con la información que reúnas de otras personas e intenta entender cómo su historia de vida se relaciona con la forma en que usan, entienden y hablan de la tecnología.',
  'Have you ever considered using the knowledge you have to a create comparative table of relevant technologies to your community? You can help moving towards a more just future with technology by comparing aspects such as documentations access, repairability, modification rights, who benefits, who might be harmed (humans and non-humans) and how harms can be handle if they happen. You can also take a step further and look at such aspects of comparison within the lifecycle of the technology to understand more about the impact of its creation (e.g., resource extraction), usage (including in its interaction with other technologies), and disposal.':
    '¿Has pensado alguna vez en usar lo que sabes para crear una tabla comparativa de las tecnologías relevantes para tu comunidad? Puedes ayudar a avanzar hacia un futuro más justo con la tecnología comparando aspectos como el acceso a la documentación, la posibilidad de reparación, los derechos de modificación, quién se beneficia, a quién se podría perjudicar (seres humanos y no humanos) y cómo se pueden manejar los daños si ocurren. También puedes ir un paso más allá y mirar esos aspectos a lo largo del ciclo de vida de la tecnología para entender mejor el impacto de su creación (p. ej., la extracción de recursos), su uso (incluida su interacción con otras tecnologías) y su desecho.',
  'You seem to have some strong understanding on the topic! Have you ever considered using your knowledge to draft a public policy proposal or a designing a process to measure and enable equitable accessibility, accountability (including reparation from harms), and safety (preventive and reactive)? Finally, how can you draft these documents through a participatory process with others from your community?':
    '¡Parece que entiendes muy bien el tema! ¿Has pensado alguna vez en usar tus conocimientos para redactar una propuesta de política pública o diseñar un proceso que mida y haga posible la accesibilidad equitativa, la rendición de cuentas (incluida la reparación de daños) y la seguridad (preventiva y reactiva)? Y por último, ¿cómo puedes redactar estos documentos mediante un proceso participativo con otras personas de tu comunidad?',
  'Have you taken some time to notice the examples of innovation around you? Which ones often appear in the news, workplaces, and other environments that are part of your reality and that of your community? What makes those technologies innovative? Who defines what is innovative? What types of knowledge are centered and which ones are ignored in these technologies? What is their main impact and purpose - speed, novelty, capital and wealth? Historically, have they enable collective flourishing or individual competition?':
    '¿Te has tomado un tiempo para fijarte en los ejemplos de innovación que te rodean? ¿Cuáles aparecen con frecuencia en las noticias, los lugares de trabajo y otros entornos que forman parte de tu realidad y la de tu comunidad? ¿Qué hace innovadoras a esas tecnologías? ¿Quién define lo que es innovador? ¿Qué tipos de conocimiento se ponen en el centro y cuáles se ignoran en estas tecnologías? ¿Cuál es su principal impacto y propósito: la velocidad, la novedad, el capital y la riqueza? Históricamente, ¿han hecho posible el florecimiento colectivo o la competencia individual?',
  'Have you consider using your knowledge to compare venture-capital/market-driven innovations with community-led/mutual aid innovation? What forms of legal structures are present in each? What incentives and barriers facilitate or difficult their development? Which of them has historically shown a relative higher rate of harms and unintended consequences? How do market-driven innovations interact within themselves? What about community-led innovations? Finally, how do market-driven and community-led innovations interact with each other - do they collaborate or compete? Who often loses? Why?':
    '¿Has pensado en usar tus conocimientos para comparar las innovaciones impulsadas por el capital de riesgo y el mercado con las innovaciones lideradas por la comunidad y basadas en la ayuda mutua? ¿Qué formas de estructura legal hay en cada una? ¿Qué incentivos y barreras facilitan o dificultan su desarrollo? ¿Cuál de ellas ha mostrado históricamente una tasa relativamente mayor de daños y consecuencias no deseadas? ¿Cómo interactúan entre sí las innovaciones impulsadas por el mercado? ¿Y las lideradas por la comunidad? Por último, ¿cómo interactúan entre sí las innovaciones impulsadas por el mercado y las lideradas por la comunidad: colaboran o compiten? ¿Quién suele perder? ¿Por qué?',
  'Your critical perspective can help others! Have you ever considered using your knowledge to draft a public policy proposal or innovation process centered in collective well-being instead of speed and individual wealth accumulation? What methods and criteria can be used as indicators of shared benefit, distributed decision-making power, plurality of knowledge and participation? What criteria can be used to build a systems of incentive that reinforce this collective well-being? How can community reviews, participatory budgeting, harm prevention plan, reparation plans, and public and transparent document of harms and learnings can lead to a more just innovation process?':
    '¡Tu perspectiva crítica puede ayudar a otras personas! ¿Has pensado alguna vez en usar tus conocimientos para redactar una propuesta de política pública o un proceso de innovación centrado en el bienestar colectivo en lugar de la velocidad y la acumulación individual de riqueza? ¿Qué métodos y criterios se pueden usar como indicadores de beneficio compartido, poder de decisión distribuido, pluralidad de conocimientos y participación? ¿Qué criterios se pueden usar para construir un sistema de incentivos que refuerce este bienestar colectivo? ¿Cómo pueden las revisiones comunitarias, los presupuestos participativos, los planes de prevención de daños, los planes de reparación y un registro público y transparente de daños y aprendizajes llevar a un proceso de innovación más justo?',
  'Take some time to notice the type of technology most used in your community. What materials are used in this technology? Where do these materials come from? What type of energy (e.g., hydro, coal, gas, solar, wind...) supplies these technologies and your community? How is the infrastructure that supports these technologies exploit versus care about nature? How do people in your community talk about and relate to non-human life? What practices do they have that show alignment or dealignment with the technologies used? How has technology historically influenced the changes in these practices of relationship with nature in your community?':
    'Tómate un tiempo para fijarte en el tipo de tecnología que más se usa en tu comunidad. ¿Qué materiales se usan en esta tecnología? ¿De dónde vienen esos materiales? ¿Qué tipo de energía (p. ej., hidráulica, carbón, gas, solar, eólica...) alimenta estas tecnologías y a tu comunidad? ¿En qué medida la infraestructura que sostiene estas tecnologías explota o cuida la naturaleza? ¿Cómo hablan las personas de tu comunidad de la vida no humana y cómo se relacionan con ella? ¿Qué prácticas tienen que muestren una alineación o una desalineación con las tecnologías usadas? ¿Cómo ha influido históricamente la tecnología en los cambios de estas prácticas de relación con la naturaleza en tu comunidad?',
  "Have you consider using your knowledge to compare the extractive technologies with regenerative alternatives? How do they relate and learn from nature? How do they support people's relationship with other forms of life and their supporting environment? What forms of energy they use? What are their ecosystem impacts, who bears the harms, and how restoration responds to the harms cause by each of them? Finally, can you map these aspects in each stage of the technology lifecycle and in their interactions with other technologies that are involved in the creation, usage, and disposal of restorative versus regenerative tech?":
    '¿Has pensado en usar tus conocimientos para comparar las tecnologías extractivas con alternativas regenerativas? ¿Cómo se relacionan con la naturaleza y aprenden de ella? ¿Cómo apoyan la relación de las personas con otras formas de vida y con el entorno que las sostiene? ¿Qué formas de energía usan? ¿Cuáles son sus impactos en los ecosistemas, quién carga con los daños y cómo responde la restauración a los daños causados por cada una? Por último, ¿puedes mapear estos aspectos en cada etapa del ciclo de vida de la tecnología y en sus interacciones con otras tecnologías involucradas en la creación, el uso y el desecho de tecnología restaurativa frente a la regenerativa?',
  'Your knowledge can support a more just future! Consider writing a public policy draft or a design process that supports technologies that restore instead of exploit life on Earth. How should work relationship be set in such a restorative perspective? What is the value of life beyond its transformation into products and materials? What indicators of regeneration, local ecological limits, and harm should be considered? How can the participation of peoples with different forms of knowledge, such as indigenous peoples and traditional communities, be essential in such a transformation? How may historical harms be taken into account, linking technology development to restoration and reconciliation funds and actions? Embed lessons into the document to model scientific, ecological, and political humility and accountability.':
    '¡Tu conocimiento puede apoyar un futuro más justo! Considera escribir un borrador de política pública o un proceso de diseño que apoye tecnologías que restauran la vida en la Tierra en lugar de explotarla. ¿Cómo deberían establecerse las relaciones de trabajo desde esa perspectiva restaurativa? ¿Cuál es el valor de la vida más allá de su transformación en productos y materiales? ¿Qué indicadores de regeneración, límites ecológicos locales y daño habría que considerar? ¿Cómo puede ser esencial, en una transformación así, la participación de pueblos con otras formas de conocimiento, como los pueblos indígenas y las comunidades tradicionales? ¿Cómo pueden tenerse en cuenta los daños históricos, vinculando el desarrollo tecnológico con fondos y acciones de restauración y reconciliación? Incorpora aprendizajes en el documento para modelar humildad y responsabilidad científicas, ecológicas y políticas.',
};
