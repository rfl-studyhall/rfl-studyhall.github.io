import { SCENARIOS, VISION_CARD } from './scenarios.js';

// Spanish text for the cards, copied as written from spanish_version_cards.pdf.
// Only what is printed on a card is translated here -- title, story and the
// five options. Everything that scores or debriefs a card (alignment, points,
// principle, explanation) and the advisors' calls are not on the printed cards,
// so they are taken from the English deck unchanged and stay in English.
const ES = [
  {
    titleLines: ['Día 1 en', 'Techflow'],
    paragraphs: [
      'Es tu primer día en TechFlow, una empresa emergente prometedora que desarrolla soluciones de IA. Durante la orientación, te enteras de que la empresa está trabajando en un sistema de contratación con IA para grandes corporaciones. Tu nueva gerente, Sarah, te aparta para poner a prueba tu pensamiento crítico: "Necesitamos perspectivas frescas en este proyecto. La IA de contratación ha estado marcando ciertos currículums de manera menos favorable, y no estamos seguros de por qué. ¿Cómo crees que deberíamos abordarlo?"'
    ],
    options: [
      'Sugerir centrarse en eliminar los sesgos de los conjuntos de datos y algoritmos existentes.',
      'Recomendar basar el rediseño en principios antirracistas desde la raíz e involucrar a las comunidades afectadas.',
      'Proponer hacer que la IA sea completamente "daltónica" eliminando todos los indicadores demográficos.',
      'Recomendar implementar sistemas de cuotas para garantizar resultados de contratación equitativos.',
      'Sugerir entrenar a la IA con datos de las empresas más exitosas de la industria.',
    ]
  },
  {
    titleLines: ['DESAFÍO DE', 'INNOVACIÓN'],
    paragraphs: [
      'Han pasado unos meses y tu gerente te invita a unirte a un equipo especial de \'Sprint de Innovación\'. "Estamos bajo presión del CEO y los inversores para mejorar nuestra imagen de marca. Necesitamos lanzar al menos un producto innovador este trimestre que pueda ayudar a las comunidades marginadas", explica. "La velocidad lo es todo en este mercado, ya que hay poca inversión". Cuando el equipo se reúne por primera vez, la sala se llena de entusiasmo sobre prototipos rápidos y lanzamientos acelerados. ¿Cómo guías el enfoque de innovación del equipo?'
    ],
    options: [
      'Adoptar la cultura de ritmo rápido y centrarse en la iteración rápida para mantenerse competitivo.',
      'Recomendar seguir las mejores prácticas establecidas en la industria y garantizar el cumplimiento normativo.',
      'Proponer formar diferentes comités de revisión para evaluar los productos antes del lanzamiento.',
      'Sugerir realizar una investigación de mercado exhaustiva y pruebas de usuario antes de cualquier lanzamiento.',
      'Abogar por proporcionar recursos para que todos innoven, considerar las posibles consecuencias no deseadas y centrar la empatía en cada decisión.',
    ]
  },
  {
    titleLines: ['VISITA A LA', 'COMUNIDAD'],
    paragraphs: [
      'Tu enfoque de innovación ha ganado respeto dentro de TechFlow. La empresa decide que es hora de que te incorpores a un proyecto real desde el principio y la plataforma \'Aldeas Digitales\' para comunidades rurales e indígenas parece ser la adecuada. Has sido elegido para liderar la participación comunitaria en un posible sitio piloto: una pequeña comunidad indígena en Montana. Durante tu visita, te reúnes con los ancianos de la comunidad, que escuchan cortésmente tu presentación, pero entonces la anciana Mary interviene: "Agradecemos que hayas venido, pero nuestra gente ha vivido bien durante generaciones sin estas herramientas digitales. Preferimos mantener nuestras formas tradicionales". ¿Cómo respondes?'
    ],
    options: [
      'Presentar información más detallada sobre los beneficios de la plataforma para que puedan tomar una decisión totalmente informada.',
      'Sugerir capacitación digital integral y gratuita, ofreciendo la plataforma TechFlow solo como una opción, para que puedan tomar una elección verdaderamente informada.',
      'Ofrecer proporcionar solo servicios digitales básicos y esenciales, evitando funciones avanzadas.',
      'Respetar completamente su elección y abogar dentro de TechFlow para proteger su derecho a vivir sin interferencia digital.',
      'Explicar que la integración digital es inevitable en el mundo moderno y ofrecer apoyo para una transición gradual.',
    ]
  },
  {
    titleLines: ['TRABAJANDO CON', 'EL GOBIERNO'],
    paragraphs: [
      'Tu experiencia con la situación en Montana te brinda la oportunidad de trabajar con un equipo pequeño pero de alto impacto en Tecnología Ética. A los seis meses en tu nuevo rol, TechFlow recibe una oferta de contrato gubernamental lucrativa que podría ser la oportunidad que buscabas para demostrar la importancia de tu trabajo a escala nacional. Un representante del Departamento de Defensa te sorprende al explicar: "Necesitamos tecnología de vigilancia que pueda monitorear tanto áreas civiles por seguridad pública como zonas militares por seguridad nacional. Las capacidades de IA de su empresa son exactamente lo que necesitamos. Este contrato podría financiar sus proyectos de impacto social durante los próximos cinco años". La junta directiva está entusiasmada con el potencial de financiación e incluso te ha ofrecido el puesto de Director si logras esto. ¿Cuál es tu recomendación?'
    ],
    options: [
      'Aceptar el contrato, ya que las aplicaciones de seguridad civil superan las preocupaciones militares.',
      'Negociar la aceptación sólo si las aplicaciones militares se limitan estrictamente a fines de defensa.',
      'Rechazar todo el proyecto debido a la preocupación por la militarización/ conversión en arma de sistemas inteligentes y la vigilancia civil como habilitación de sistemas de opresión.',
      'Aceptar el contrato si demuestra ayudar a prevenir daños y violencia mayores.',
      'Proponer separar las aplicaciones civiles y militares, desarrollando solo los componentes de seguridad civil.',
    ]
  },
  {
    titleLines: ['Asociación', 'con la Ciudad'],
    paragraphs: [
      'El contrato militar demostró ser demasiado arriesgado y, finalmente, ganaste el apoyo de la junta directiva al presentar fuentes de ingresos alternativas. Ahora, TechFlow se asocia con la ciudad de Portland para desplegar infraestructura de ciudad inteligente. La oficina del alcalde quiere actuar con rapidez, pero algunos activistas se contactan contigo directamente: "Nos preocupa que se tomen decisiones sobre nuestros vecindarios sin una participación comunitaria real". Tu tarea es diseñar el proceso de participación comunitaria. ¿Qué propones?'
    ],
    options: [
      'Organizar encuestas comunitarias integrales, talleres y sesiones de retroalimentación para recopilar opiniones.',
      'Establecer reuniones públicas periódicas donde los miembros de la comunidad puedan expresar sus preocupaciones y hacer preguntas.',
      'Crear procesos de desarrollo transparentes con actualizaciones públicas regulares y sesiones informativas',
      'Diseñar un sistema donde las comunidades afectadas estén informadas y tengan un poder real de decisión sobre las tecnologías que impactan sus vecindarios.',
      'Formar juntas asesoras comunitarias con representantes de los vecindarios para guiar la implementación de todas las tecnologías y sistemas.',
    ]
  },
  {
    titleLines: ['¡AVANZA RÁPIDO Y', 'ROMPE COSAS!'],
    paragraphs: [
      'El enfoque centrado en la comunidad de Portland se convierte en un modelo que atrae atención nacional. Sin embargo, este éxito trae nuevos desafíos. Los inversores de TechFlow presionan para una rápida expansión y mayores márgenes de beneficio. "Necesitamos escalar rápidamente y maximizar los rendimientos", insiste el inversionista principal Jeff Muskenberg. "Todo este asunto de la participación comunitaria nos está frenando y reduciendo las ganancias". El CEO te pide que encuentres un término medio. ¿Cómo abogas por la dirección futura de TechFlow?'
    ],
    options: [
      'Explorar, a corto plazo, modelos centrados en el impacto más que en las ganancias, mientras se buscan formas de transitar desde modelos de inversión extractivos hacia la propiedad compartida y la distribución equitativa de ganancias con las comunidades.',
      'Explorar estructuras alternativas como el estatus de Empresa B (B-Corp) para centrarse más en el impacto que en las ganancias.',
      'Trabajar dentro del modelo de inversión actual para hacer que TechFlow sea lo más ética posible, cumpliendo con las expectativas de crecimiento sin cuestionarlas.',
      'Presionar para implementar políticas internas más fuertes que restrinjan el comportamiento de maximización de ganancias.',
      'Implementar métricas ESG (Ambientales, Sociales y de Gobernanza) y marcos de inversión de impacto para equilibrar las ganancias con el bien social.',
    ]
  },
  {
    titleLines: ['CONSTRUYENDO:', '¿A QUÉ COSTO?'],
    paragraphs: [
      'Tus modelos económicos alternativos están ganando terreno, y TechFlow considera por primera vez una transición a una estructura diferente que incluya a las partes interesadas de la comunidad. Pero esta transición, si se produce, llevará tiempo. Mientras tanto, TechFlow enfrenta un rápido crecimiento en la demanda. El equipo técnico informa que los servidores actuales están a plena capacidad. "Necesitamos un centro de datos masivo", explica el Director de Tecnología, Marcus Rodríguez. "Estoy hablando de al menos 3GW con sistemas de refrigeración de vanguardia. Nos costará miles de millones, pero manejará nuestro crecimiento durante la próxima década más o menos sin necesidad de servidores de terceros". El equipo de ingeniería ha identificado tres ubicaciones potenciales, pero tu equipo está preocupado por el impacto que este mega centro de datos tendrá en las comunidades. ¿Cuál es tu recomendación?'
    ],
    options: [
      'Aprobar el centro de datos, pero asegurando que utilice 100% de energía renovable y los sistemas de refrigeración más eficientes.',
      'Construir la instalación, pero compensar todos los impactos ambientales a través de programas verificados de créditos de carbono.',
      'Cuestionar los supuestos, datos y proyecciones de un proyecto tan grande y el impacto que puede tener en las comunidades a lo largo del tiempo, mientras se proporcionan alternativas, como redes de servidores distribuidos y de propiedad comunitaria.',
      'Cuestionar los supuestos, datos y proyecciones de un proyecto tan grande y el impacto que puede tener en las comunidades a lo largo del tiempo, mientras se proporcionan alternativas, como redes de servidores distribuidos y de propiedad comunitaria.',
      'Construir utilizando los más altos estándares de certificación ambiental y prácticas de construcción ecológica disponibles.',
    ]
  },
  {
    titleLines: ['FILOSOFÍA DE', 'DISEÑO'],
    paragraphs: [
      'Una corriente actual a favor de las infraestructuras distribuidas lleva a una innovadora red de "Community cloud"que se convierte en la oferta distintiva de TechFlow. Mientras diseñas la próxima generación de esta tecnología, te enfrentas a una pregunta fundamental sobre cómo debería relacionarse con el medio ambiente. El equipo de ingeniería presenta diferentes enfoques filosóficos. La arquitecta de software, la Dra. Sarah Kim, pregunta: "¿Cómo podría nuestra tecnología interactuar con el mundo natural?". ¿Qué filosofía debería guiar nuestra decisión?'
    ],
    options: [
      'Diseñar sistemas tecnológicos que permanezcan completamente separados de los entornos naturales para evitar interferencias en los ecosistemas.',
      'Centrarse en la implementación avanzada de la biomímesis, diseñando sistemas que copien y aprendan de los procesos naturales de la manera más eficiente posible.',
      'Construir toda la tecnología exclusivamente con materiales sostenibles, reciclables y renovables.',
      'Priorizar el diseño de todos los sistemas para que tengan la menor huella ambiental posible.',
      'Crear tecnología que funcione de forma sinérgica con los sistemas naturales, como parte de redes ecológicas integradas, siendo consciente de las trampas del sistema socioeconómico actual.',
    ]
  },
  {
    titleLines: ['CONSERVACIÓN', 'COLONIAL'],
    paragraphs: [
      'Tu filosofía de diseño sinérgico conduce a una novedosa tecnología de red que integra a las comunidades con los ecosistemas locales; el equipo la llama ´Red Viviente´. Sin embargo, surge una situación controversial: algunos grupos ambientalistas quieren utilizar la plataforma de TechFlow para crear "límites digitales" alrededor de áreas naturales sensibles, restringiendo el acceso humano para proteger los ecosistemas. Mientras tanto, defensores de los derechos indígenas argumentan que esto continúa los patrones coloniales de exclusión de la tierra. Te encuentras en medio de este debate en una acalorada reunión comunitaria. ¿Cómo manejas esta tensión?'
    ],
    options: [
      'Apoyar la postura de los grupos ambientalistas de que algunas áreas sensibles necesitan protección contra el acceso humano.',
      'Abogar por el acceso a tecnología equitativa y sostenible para todos, mientras se apoya directamente a las comunidades indígenas y locales en su papel de guardianas de las áreas sensibles dentro de sus localidades.',
      'Remitirse a los marcos legales existentes y a los derechos de propiedad para determinar las políticas de acceso apropiadas.',
      'Adoptar una postura neutral para la tecnología de TechFlow, decidiendo continuar el proyecto tal como está  y sin tomar partido.',
      'Diseñar tecnología que haga las áreas naturales remotas más accesibles para todas las personas, sin involucrarse en el tema de la gestión de los ecosistemas.',
    ]
  },
  {
    titleLines: ['PATENTES Y LA', 'PRESIÓN POR', 'LOS INGRESOS'],
    paragraphs: [
      'La tecnología de Red Viviente de TechFlow está atrayendo la atención de grandes corporaciones. La asesora legal, Janet Morrison, presenta dos caminos: "Podríamos patentar todo y licenciarlo para generar ingresos significativos, o..." Hace una pausa, conociendo tus principios. "...podríamos hacerlo completamente Open Source". El debate dentro de la empresa y entre los usuarios de la comunidad es intenso. Maria, trabajadora de TechFlow, aboga por las patentes: "Necesitamos ingresos para sostener nuestro trabajo y apoyar el progreso en nuestras carreras; de lo contrario, muchos se irán". El representante comunitario David Wakyoalla replica: "El conocimiento debe ser libre y si deciden ganar dinero con él, tiene que haber una distribución equitativa porque nosotros ayudamos a construir la tecnología". La decisión depende de tu recomendación. ¿Qué propones?'
    ],
    options: [
      'Publicar los detalles de la tecnología y liberarla completamente como código abierto: planos, código, manuales de reparación y procesos de desarrollo disponibles gratuitamente para todos.',
      'Mantener algunos componentes centrales como propietarios para garantizar que las ganancias puedan redirigirse a las comunidades y así sostener su trabajo de desarrollo centrado en la comunidad.',
      'Patentar la tecnología, pero permitir su uso gratuito para investigación, educación y proyectos de beneficio comunitario.',
      'Hacer la tecnología de código abierto, pero mantener ciertos elementos críticos como propietarios por razones de seguridad.',
      'Patentar la tecnología, pero permitir que las comunidades originales sigan usándola gratis.',
    ]
  },
  {
    titleLines: ['Consecuencias', 'Inesperadas'],
    paragraphs: [
      'Tu decisión de código abierto transforma a TechFlow en un movimiento global, con comunidades de todo el mundo adaptando tu tecnología de Red Viviente. Sin embargo, un patrón preocupante se vuelve explícito en los datos: las zonas urbanas que utilizan la tecnología están prosperando con nuevas oportunidades económicas y mejores servicios. Pero las regiones rurales que albergan los servidores de la red están siendo explotadas por inversionistas que se enteran de las vulnerabilidades de la comunidad, al mismo tiempo que experimentan un aumento en el consumo de energía y los residuos electrónicos. La defensora de la justicia ambiental, la Dra. Rosa Martínez, te confronta en una conferencia: "Tu tecnología está haciendo explícitos los problemas, pero también está reproduciendo los mismos patrones de explotación de siempre". ¿Cómo abordas esta crisis?'
    ],
    options: [
      'Prometer establecer un fondo económico para compensar a las comunidades rurales que mantienen la infraestructura de red de servidores.',
      'Detener inmediatamente la expansión hasta que se pueda rediseñar el sistema para que los beneficios y las cargas se compartan por igual entre todas las comunidades, protegiendo a las más vulnerables de una mayor explotación.',
      'Continuar con la expansión porque los beneficios urbanos sirven al bien común y eventualmente llegarán a las zonas rurales.',
      'Reubicar la infraestructura de servidores en áreas menos pobladas para minimizar la cantidad de personas que experimentan impactos negativos.',
      'Aprovechar la situación creando un mercado donde los problemas en ciudades y zonas rurales se presenten como oportunidades de inversión.',
    ]
  },
  {
    titleLines: ['LA REVELACIÓN DE LA', 'CADENA DE', 'SUMINISTRO'],
    paragraphs: [
      'Mientras rediseñan para una distribución equitativa, la investigación de tu equipo revela una verdad perturbadora sobre la cadena de suministro de TechFlow. A pesar de sus intenciones éticas, la tecnología depende de minerales de tierras raras extraídos mediante minería ambientalmente destructiva en la República Democrática del Congo (RDC), lo que causa desplazamiento y problemas de salud para las comunidades locales. Kevin Chen, el gerente de la cadena de suministro, presenta la cruda realidad: "Casi toda la electrónica depende de estos materiales. Incluso nuestros competidores \'éticos\' usan los mismos proveedores. Además, nuestra operación global está mucho mejor que la competencia. No estoy seguro de que este único aspecto sea tan preocupante". ¿Cómo respondes?'
    ],
    options: [
      'Cambiar a proveedores que utilicen energía renovable y mejoren la reducción de residuos en sus procesos de minería y fabricación.',
      'Abogar por trasladar las operaciones mineras a áreas menos pobladas fuera de la RDC para minimizar el impacto humano directo.',
      'Comprometerse a rediseñar fundamentalmente la tecnología y las cadenas de suministro para eliminar por completo los procesos extractivos y dañinos, incluyendo la inversión en investigación de materiales alternativos.',
      'Aumentar la automatización en la minería y la fabricación para reducir la exposición humana directa a procesos peligrosos.',
      'Abogar por cumplir y aplicar las normativas ambientales y laborales más estrictas disponibles en todas las operaciones.',
    ]
  },
  {
    titleLines: ['DESPLIEGUE', 'GLOBAL'],
    paragraphs: [
      'Tu compromiso para eliminar procesos de extracción dañinos lleva a un descubrimiento revolucionario: TechFlow desarrolla el primer proceso de manufactura de tecnología regenerativa usando materiales desarrollados con bioingeniería. Ahora, gobiernos y organizaciones de todo el mundo quieren desplegar tu sistema. Llegan solicitudes desde Silicon Valley, Lagos, Tokio, Mumbai y São Paulo. Cada ubicación ofrece ventajas diferentes: potencial de ganancias, infraestructura existente, apoyo político. Esta situación también te ha llevado a un nuevo rol con un equipo más grande: ¡felicidades, ahora eres Director de Despliegue Tecnológico Global y respondes directamente al CEO! Pero un gran poder conlleva grandes responsabilidades y riesgos. ¿Cómo decides dónde y cuándo expandirte?'
    ],
    options: [
      'Priorizar las ubicaciones donde el despliegue pueda generar las mayores ganancias para financiar una mayor expansión.',
      'Utilizar estudios de mercado para identificar las regiones con mayor demanda y concentrar allí primero los esfuerzos.',
      'Realizar investigación independiente y trabajar con socios locales potenciales para saber si, dónde y cuándo la tecnología es apropiada y beneficiosa para las comunidades locales antes de decidir expandirse.',
      'Enfocar el despliegue en lugares donde la tecnología pueda tener el mayor impacto positivo en la mayor cantidad de personas.',
      'Enfocar el despliegue en lugares donde la tecnología pueda tener el mayor impacto positivo en la mayor cantidad de personas.',
    ]
  },
  {
    titleLines: ['EL PROBLEMA', 'DEL LEGADO'],
    paragraphs: [
      'Cinco años después de tu avance regenerativo, la antigua tecnología de TechFlow sigue causando problemas. Un reportaje de investigación revela que comunidades en tres países aún lidian con daños ambientales que pueden vincularse directa e indirectamente a los sistemas pre-regenerativos de TechFlow. La periodista y activista María Santos te confronta: "Ustedes han pasado a la tecnología limpia, pero ¿qué hay del desastre que dejaron atrás? ¿Acaso su empresa no usó a la gente para desarrollarse y ser visto como el \'Buen Samaritano\'?" La junta directiva de TechFlow - que ya cuenta con una buena representación de comunidades con las que trabajan - está dividida sobre cómo responder. ¿Qué defiendes?'
    ],
    options: [
      'Enfocar los recursos de la empresa en prevenir daños futuros en lugar de abordar estos problemas pasados.',
      'Asumir responsabilidad directa por la regeneración integral de la naturaleza y las comunidades dañadas por operaciones pasadas, siendo transparente sobre cómo evitar daños futuros.',
      'Proporcionar apoyo financiero significativo a los esfuerzos de limpieza liderados por el gobierno en todas las regiones afectadas.',
      'Reconocer públicamente los daños pasados y documentarlos con transparencia en todas las comunicaciones de la empresa.',
      'Implementar políticas nuevas y estrictas para garantizar que los despliegues futuros de tecnología nunca causen impactos ambientales o sanitarios similares en ninguna parte del mundo.',
    ]
  },
  {
    titleLines: ['LA MÁSCARA', 'VERDE'],
    paragraphs: [
      'Tus esfuerzos integrales de restauración reciben elogios a nivel global, pero también atraen críticas de fuentes inesperadas que creías que te apoyaban. Durante un proyecto de restauración en México, el líder indígena Carlos Mendoza desafía tu enfoque: "Todavía están haciendo esto PARA nosotros, no CON nosotros. Solo trabajan con nosotros para conocer nuestros problemas, pero ustedes siguen teniendo el control total sobre cómo es la restauración, contratan a los proveedores, definen el éxito. Este es el mismo patrón colonial con una máscara verde". Sus palabras duelen porque reconoces su verdad, pero cuesta aceptarlo dado todo el esfuerzo que has hecho a lo largo de los años para ayudarles. ¿Cómo cambias fundamentalmente el enfoque de TechFlow?'
    ],
    options: [
      'Identificar y eliminar los patrones coloniales de todas las operaciones y trabajar en un proceso para transferir poder real que apoye la soberanía y los derechos territoriales indígenas.',
      'Incluir más voces indígenas y perspectivas diversas en los equipos de restauración y desarrollo de TechFlow.',
      'Proporcionar capacitación y educación tecnológica integral a las comunidades indígenas y afectadas.',
      'Establecer asociaciones formales con organizaciones y comunidades indígenas para todos los proyectos de tecnología y restauración.',
      'Estudiar e incorporar el conocimiento y las prácticas ecológicas tradicionales en todo el diseño tecnológico y el trabajo de restauración.',
    ]
  },
  {
    titleLines: ['La Tecnología', 'Viviente'],
    paragraphs: [
      'El proceso de transferir poder real a las comunidades transforma tan profundamente a TechFlow que tu CEO renuncia y la junta directiva - ahora compuesta mayoritariamente por miembros de la comunidad - decide que eres la persona adecuada para el puesto. ¡Felicidades, ahora eres el CEO de TechFlow! Pero justo en tu primer mes como CEO, una noticia se propagó como un reguero de pólvora en los medios conservadores: "Tensión entre TechFlow comunista y grupos terroristas zapatistas en México en medio del desarrollo tecnológico provoca indignación indígena". La junta está agitada, incluso los llamados socios progresistas están picando el anzuelo. Hablas con tu equipo y te explican: "Las comunidades en Chiapas han estado con nosotros desde hace tiempo, pero están amenazando con construir su propia tecnología si no encontramos la manera de dejar de tratar a la naturaleza como algo separado de nosotros". ¿Cómo abordas esta situación?'
    ],
    options: [
      'Implementar una política que bloquee a las comunidades bajo control de grupos paramilitares para usar la tecnología, manteniendo los sistemas actuales mientras se hace la transición a trabajar solo con comunidades no indígenas.',
      'Evitar las noticias y centrarse en la biomímesis avanzada, creando tecnología que copie y aprenda de procesos y organismos naturales.',
      'Defender públicamente los derechos de las comunidades indígenas alrededor del mundo mientras creas un equipo dedicado a un proceso transdisciplinario para pilotar tecnologías que funciona acorde a la relación de la comunidad con la vida.',
      'Hacer una declaración que no aborde tu compromiso con los pueblos indígenas, pero que ataque agresivamente a los grupos violentos y prometa priorizar el diseño de todos los sistemas para que tengan el menor impacto ambiental posible.',
      'Construir toda la tecnología solicitada exclusivamente con materiales locales, sostenibles, reciclables y renovables.',
    ]
  },
  {
    titleLines: ['Verdades', 'incómodas'],
    paragraphs: [
      'Trabajar con las comunidades en Chiapas crea una tecnología que realmente vive dentro de los sistemas naturales, pero también revela verdades incómodas sobre el impacto global de TechFlow. Tus cooperativas controladas por la comunidad prosperan en algunos lugares mientras luchan en otros. En Kenia, la tecnología empodera a los pequeños agricultores, pero en Bangladesh, es acaparada por terratenientes adinerados que excluyen a los agricultores más pobres. Pensaste que esto había terminado hace años, pero el problema sigue reapareciendo y la complejidad te abruma durante una noche de insomnio en tu hotel de la Ciudad de México. ¿Cómo abordas la realidad de que tu tecnología quizás siempre ayude a algunos mientras perjudica a otros?'
    ],
    options: [
      'Realizar evaluaciones de impacto integrales antes de que cada nueva cooperativa comience a operar, asegurando que todos los proyectos sigan lineamientos estrictos adaptados a cada contexto local.',
      'Proporcionar capacitación regular a todos los miembros de las cooperativas sobre cómo identificar y abordar impactos negativos potenciales.',
      'Establecer comités de ética y juntas de revisión con expertos globales para evaluar cómo la tecnología impacta a las comunidades.',
      'Desarrollar lineamientos y estándares éticos integrales para seguir consistentemente mediante sistemas de incentivos y castigos.',
      'Comprometerse a romper el mito de la neutralidad tecnológica, siendo consciente de cómo la tecnología siempre estará influenciada por el sistema socioeconómico más amplio, lo que requiere una evaluación continua de a quién ayuda y a quién daña, y cómo mejorar.',
    ]
  },
  {
    titleLines: ['CRISIS', 'DEMOCRÁTICA'],
    paragraphs: [
      'Tu compromiso por abordar los daños sistémicos lleva a una gran reorganización de la red global de cooperativas. Sin embargo, esto crea un nuevo desafío: la red ha crecido tanto que la toma de decisiones se está volviendo difícil. Algunas cooperativas quieren eficiencia centralizada, otras exigen autonomía local. La tensión llega a un punto crítico durante una acalorada videoconferencia con los representantes de las cooperativas. Fátima, desde Detroit, argumenta: "Necesitamos decisiones más rápidas para competir con las grandes tecnológicas". Pero James, desde Ghana, replica: "La velocidad mata la democracia". Como figura principal y arquitecto fundador de la red, todos te miran en busca de orientación. ¿Qué estructura propones?'
    ],
    options: [
      'Organizar asambleas globales periódicas donde todos los representantes puedan discutir y debatir decisiones que afecten a toda la red.',
      'Asegurar que cada comunidad afectada mantenga un poder local real para tomar decisiones vinculantes sobre la tecnología que impacta sus vidas, independientemente de las sugerencias de los consejos consultivos globales.',
      'Crear consejos consultivos con representantes de cada cooperativa para guiar las decisiones políticas que afecten a toda la red.',
      'Iniciar modelos de asociación público-privada que incluyan a representantes de las cooperativas como asesores en las estructuras de gobernanza local.',
      'Invitar a representantes comunitarios a  unirse a una junta coordinadora central con autoridad de decisión para los grandes problemas de la red global.',
    ]
  },
  {
    titleLines: ['SOBERANÍA', 'DE LOS DATOS'],
    paragraphs: [
      'La reestructuración democrática funciona, pero saca a la luz un problema crítico que ha estado latente todo este tiempo: la soberanía de los datos. La red de cooperativas ha acumulado grandes cantidades de datos comunitarios - patrones agrícolas, tendencias de salud, flujos económicos, relaciones sociales - ellos pueden acceder a ellos, pero todo está en los servidores de datos de TechFlow. Ahora gobiernos, investigadores y corporaciones exigen acceso. La Unión Europea ofrece un acuerdo comercial condicionado al intercambio de datos. La ONU quiere datos de salud para la preparación ante pandemias. Los gigantes tecnológicos ofrecen millones por los patrones de compra. La líder comunitaria Amara, desde Brasil, corta el ruido: "Esta es nuestra información, sobre nuestras vidas, nuestra tierra, nuestros hijos. ¡Nosotros debemos decidir qué pasa con ella!". ¿Cuál es tu posición?'
    ],
    options: [
      'Permitir que las cooperativas controlen los datos con políticas de privacidad sólidas y medidas de seguridad que protejan la información comunitaria.',
      'Proporcionar los datos solo a gobiernos democráticos para garantizar que se utilicen para el beneficio público legítimo y la investigación científica.',
      'Asegurar que las comunidades y los individuos mantengan control completo sobre sus propios datos, participando directamente en las discusiones y teniendo la decisión final sobre el acceso y uso de los datos.',
      'Establecer organizaciones terceras independientes para servir como custodios neutrales de todos los datos comunitarios.',
      'Crear cuerpos gubernamentales descentralizados que incluyan representativos de la comunidad para custodiar el uso global de los datos.',
    ]
  },
];

export const SCENARIOS_ES = SCENARIOS.map((scenario, i) => ({
  ...scenario,
  titleLines: ES[i].titleLines,
  paragraphs: ES[i].paragraphs,
  options: scenario.options.map((option, j) => ({ ...option, text: ES[i].options[j] })),
}));

export const VISION_CARD_ES = {
  ...VISION_CARD,
  titleLines: ['LA', 'VISIÓN'],
  paragraphs: [
    'Han pasado 20 años desde que entraste por primera vez a TechFlow.',
    'Ahora, te presentas ante la asamblea más grande de cooperativas tecnológicas del mundo, representando a 10,000 comunidades globales que quieren unirse a la comunidad cooperativa de TechFlow, que ya cuenta con 8,000 comunidades en todo el mundo. Creen que TechFlow es un ejemplo de cómo la tecnología puede tomar una postura firme y radical para ayudar a las comunidades y al planeta.',
    'Sin embargo, explican que la Crisis Climática ha creado un contexto difícil para la próxima generación de tecnología. Los niños que nacieron cuando comenzaste tu viaje son ahora jóvenes adultos que preguntan qué tipo de mundo tecnológico heredarán y cómo estas tecnologías les darán una esperanza real. Tus acciones guiarán el desarrollo de tecnología que podría llegar a mil millones de personas. Al contemplar los rostros de todos los continentes, sientes un nerviosismo que pesa como el mundo sobre tus hombros. Todos estos años han llegado a este momento, y sin embargo sientes que nunca habías trabajado en esto antes, que no tienes idea de lo que estás haciendo... que eres un completo impostor. Respiras hondo y comprendes que este es tu momento para encarnar todo lo que has aprendido sobre justicia ambiental y tecnología.',
    '¿Qué visión ofreces para el futuro?',
  ],
};
