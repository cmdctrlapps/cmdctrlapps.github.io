// Copia de ripwallet.github.io/src/data/spent-tutoriales.ts (sin tipos).
// Edita aquí y corre: node scripts/build-tutoriales.mjs

/**
 * Tutoriales de Spent. Cada tutorial puede tener varias versiones (p. ej. una
 * por versión de iOS); cada versión es una lista de pasos con su captura.
 * Las imágenes viven en images/tutoriales/<slug>/<version>/.
 */

const ios26 = "/images/tutoriales/apple-pay/ios26";
const ios27 = "/images/tutoriales/apple-pay/ios27";

export const applePayTutorial = {
  slug: "apple-pay",
  title: "Registra tus gastos automáticamente con Apple Pay",
  summary:
    "Crea una automatización en Atajos para que cada vez que pagues con Apple Pay el gasto se agregue solo a Spent, con el comercio y el monto.",
  icon: "/images/tutoriales/icon-apple-wallet.png",
  platform: "iPhone",
  versions: [
    {
      id: "ios27",
      label: "iOS 27",
      video: { url: "https://www.instagram.com/p/DeZk2VczGGx/", label: "Ver video en Instagram" },
      note: "En iOS 27 el atajo ya trae la automatización incluida: lo agregas desde Spent y queda listo, sin configurar variables. Asegúrate de tener la versión más reciente de Spent.",
      steps: [
        {
          title: "Abre Trackear con Apple Pay",
          body: "En Spent, ve a la pestaña <strong>Ajustes</strong> y toca <strong>Trackear con Apple Pay</strong>.",
          media: [{ src: `${ios27}/01-ajustes.webp`, alt: "Ajustes de Spent con la opción Trackear con Apple Pay" }],
        },
        {
          title: "Agrega el atajo a Shortcuts",
          body: "Toca <strong>Agregar a Shortcuts</strong>. Aquí mismo puedes elegir el <strong>Sobre predeterminado</strong> donde caen los gastos (o dejarlo en <em>Preguntar</em>). Spent recuerda en qué sobre pones cada comercio y lo usa la próxima vez.",
          media: [{ src: `${ios27}/02-agregar-shortcuts.webp`, alt: "Pantalla Trackear con Apple Pay con el botón Agregar a Shortcuts" }],
        },
        {
          title: "Toca Agregar atajo",
          body: "Se abre el app de Atajos con <strong>Track Expenses on Spent</strong>. Toca <strong>Agregar atajo</strong>.",
          media: [{ src: `${ios27}/03-agregar-atajo.webp`, alt: "Atajo Track Expenses on Spent con el botón Agregar atajo" }],
        },
        {
          title: "Revisa que esté todo conectado",
          body: "El atajo se activa <strong>cuando se use cualquier tarjeta</strong> y la acción <strong>Registrar pago con Apple Pay</strong> ya trae el <strong>Monto</strong>, el <strong>Comercio</strong> y la <strong>Tarjeta</strong>. No tienes que cambiar nada.",
          media: [{ src: `${ios27}/04-atajo.webp`, alt: "Atajo con la acción Registrar pago con Apple Pay configurada" }],
        },
        {
          title: "Ajusta las opciones (opcional)",
          body: "Toca la flecha junto a <strong>Cualquier tarjeta</strong> si quieres limitarlo a ciertas tarjetas, categorías o comercios. Deja <strong>Automatización</strong> activada y enciende <strong>Notificar</strong> si quieres un aviso cada vez que se registre un gasto.",
          media: [{ src: `${ios27}/05-opciones.webp`, alt: "Opciones del disparador: tarjetas, categorías, comercios, automatización y notificar" }],
        },
        {
          title: "Listo",
          body: "La próxima vez que pagues con Apple Pay, el gasto aparece solo en Spent, con el nombre del comercio y la tarjeta que usaste.",
          media: [{ src: `${ios27}/06-listo.webp`, alt: "Sobre en Spent con gastos registrados automáticamente" }],
        },
      ],
    },
    {
      id: "ios26",
      label: "iOS 26",
      video: { url: "https://www.instagram.com/p/DO6Il1vgAjq/", label: "Ver video en Instagram" },
      shortcut: {
        url: "https://www.icloud.com/shortcuts/d092a1f4c8824d0c8fe9eb89e41dba8c",
        text: "Descárgalo desde iCloud. Igual vas a necesitar crear la automatización (pasos 2 a 5) y elegirlo en lugar de crear uno nuevo.",
      },
      note: "Si estás en iOS 18 o anterior, sigue estos mismos pasos: la única diferencia es que la automatización se llama <strong>Transacción</strong> en lugar de Wallet.",
      steps: [
        {
          title: "Instala el app de Atajos",
          body: 'Descarga <a href="https://apps.apple.com/us/app/shortcuts/id915249334" target="_blank" rel="noopener">Atajos (Shortcuts)</a> desde el App Store si no lo tienes en tu iPhone.',
        },
        {
          title: "Abre la sección de Automatización",
          body: "Dentro del app de Atajos, toca la pestaña <strong>Automatización</strong>.",
          media: [{ src: `${ios26}/02-automatizacion.png`, alt: "Pestaña Automatización en el app de Atajos" }],
        },
        {
          title: "Crea una nueva automatización",
          body: "Toca el botón <strong>+</strong>, arriba a la derecha.",
          media: [{ src: `${ios26}/03-nueva.png`, alt: "Botón para crear una nueva automatización" }],
        },
        {
          title: "Busca la automatización Wallet",
          body: "En la lista de disparadores, busca y selecciona <strong>Wallet</strong>.",
          media: [
            { src: `${ios26}/04-wallet.png`, alt: "Automatización Wallet en iOS 26", caption: "iOS 26" },
            {
              src: `${ios26}/04-transaccion-ios18.png`,
              alt: "Automatización Transacción en iOS 18",
              caption: "iOS 18 o anterior",
            },
          ],
        },
        {
          title: "Selecciona tus tarjetas y las opciones",
          body: "Elige las tarjetas que quieres registrar, marca <strong>Ejecutar de inmediato</strong> y dale <strong>Siguiente</strong>.",
          media: [{ src: `${ios26}/05-tarjetas.png`, alt: "Opciones Ejecutar de inmediato y Notificar al ejecutar" }],
        },
        {
          title: "Crea un nuevo atajo",
          body: "Selecciona la opción <strong>Crear nuevo atajo</strong>.",
          media: [{ src: `${ios26}/07-nuevo-atajo.png`, alt: "Opción Crear nuevo atajo" }],
        },
        {
          title: "Agrega la acción de Spent",
          body: "En <strong>Buscar acciones</strong>, escribe <em>Spent</em> y selecciona la acción para agregar el gasto.",
          media: [
            {
              src: `${ios26}/08-buscar-spent.mp4`,
              alt: "Buscando la acción de Spent en Atajos",
              type: "video",
            },
          ],
        },
        {
          title: "Usa el comercio como nombre",
          body: "En <strong>Nombre</strong>, toca <strong>Seleccionar variable</strong> y elige <strong>Entrada de atajo</strong>. Luego toca <strong>Entrada de atajo</strong> y selecciona <strong>Comercio</strong>.",
          media: [{ src: `${ios26}/09-nombre.png`, alt: "Nombre configurado con la variable Comercio" }],
        },
        {
          title: "Usa la cantidad como monto",
          body: "En <strong>Monto</strong>, toca <strong>Seleccionar variable</strong> y elige <strong>Entrada de atajo</strong>. Luego toca <strong>Entrada de atajo</strong> y selecciona <strong>Cantidad</strong>.",
          media: [{ src: `${ios26}/10-monto.png`, alt: "Monto configurado con la variable Cantidad" }],
        },
        {
          title: "Guarda y listo",
          body: "Toca el check ✔︎ arriba a la derecha. A partir de ahora, cada pago con Apple Pay se registra solo en Spent.",
          media: [{ src: `${ios26}/11-listo.png`, alt: "Automatización terminada" }],
        },
      ],
    },
  ],
};

const gpay = "/images/tutoriales/google-pay";

export const googlePayTutorial = {
  slug: "google-pay",
  title: "Registra tus gastos automáticamente con Google Pay",
  summary:
    "Dale acceso a Spent a las notificaciones de Google Pay para que, justo después de pagar, te sugiera agregar el gasto con el comercio y el monto.",
  icon: "/images/tutoriales/icon-google-pay.png",
  platform: "Android",
  versions: [
    {
      id: "android",
      label: "Android",
      note: "Spent solo lee las notificaciones del app de Google Pay para detectar el comercio y el monto. Según cómo Google Pay redacte la notificación, el dato puede no ser exacto, así que revísalo antes de guardarlo.",
      steps: [
        {
          title: "Abre la detección automática de Google Pay",
          body: "En Spent, abre <strong>Detección automática de Google Pay</strong>.",
          media: [{ src: `${gpay}/01-deteccion.webp`, alt: "Pantalla Detección automática de Google Pay en Spent" }],
        },
        {
          title: "Activa el interruptor y permite las notificaciones",
          body: "Activa <strong>Activar detección automática de Google Pay</strong>. Si Android te pregunta si Spent puede enviarte notificaciones, toca <strong>Permitir</strong>: así es como Spent te avisa de cada pago.",
          media: [{ src: `${gpay}/02-permitir-notificaciones.webp`, alt: "Diálogo para permitir que Spent envíe notificaciones" }],
        },
        {
          title: "Busca Spent en el acceso a notificaciones",
          body: "Se abre la pantalla <strong>Controlar, responder y leer notificaciones</strong>. Baja hasta la sección <strong>Sin permiso</strong> y toca <strong>Spent</strong>. Si no se abre sola, usa <strong>Abrir configuración de acceso a notificaciones</strong> en Spent.",
          media: [{ src: `${gpay}/03-lista.webp`, alt: "Lista de apps con acceso a notificaciones, con Spent en Sin permiso" }],
        },
        {
          title: "Si el interruptor sale gris, desbloquéalo",
          body: "Algunos teléfonos bloquean este permiso y muestran <em>Controlada por configuración restringida</em> o <em>A la app se le negó el acceso</em>. Para desbloquearlo, ve a <strong>Configuración › Apps › Spent</strong>, toca el menú <strong>⋮</strong> arriba a la derecha y elige <strong>Permitir configuración restringida</strong>. Luego regresa a esta pantalla.",
          media: [
            { src: `${gpay}/04-restringida.webp`, alt: "Permiso de notificaciones controlado por configuración restringida", caption: "Interruptor bloqueado" },
            { src: `${gpay}/05-acceso-negado.webp`, alt: "Aviso: a la app se le negó el acceso", caption: "Aviso al tocarlo" },
          ],
        },
        {
          title: "Permite el acceso a las notificaciones",
          body: "Activa <strong>Permitir acceso a las notificaciones</strong> y confirma con <strong>Permitir</strong>.",
          media: [{ src: `${gpay}/06-permitir-acceso.webp`, alt: "Diálogo para permitir que Spent tenga acceso a las notificaciones" }],
        },
        {
          title: "Deja solo lo necesario (opcional)",
          body: "Spent solo necesita <strong>Notificaciones</strong> y <strong>Silencio</strong>. Puedes desmarcar <strong>Tiempo real</strong> y <strong>Conversaciones</strong> si prefieres que no lea esas.",
          media: [{ src: `${gpay}/07-permisos.webp`, alt: "Permisos de notificaciones con Tiempo real y Conversaciones desmarcados" }],
        },
        {
          title: "Regresa a Spent y paga como siempre",
          body: "Vuelve a Spent con el interruptor activado. La próxima vez que pagues con Google Pay, Spent te va a preguntar si quieres registrar el gasto.",
          media: [{ src: `${gpay}/08-listo.webp`, alt: "Detección automática de Google Pay activada en Spent" }],
        },
      ],
    },
  ],
};

const correo = "/images/tutoriales/correo";

export const correoTutorial = {
  slug: "correo",
  title: "Registra un gasto cuando te llega el comprobante por correo",
  summary:
    "Crea una automatización en Atajos para que, cuando te llegue el correo de transacción de tu banco, Spent te abra el registro del gasto.",
  icon: "/images/tutoriales/icon-apple-mail.png",
  platform: "iPhone",
  versions: [
    {
      id: "ios",
      label: "iOS",
      note: "<strong>Importante:</strong> Spent no puede leer la información de tus correos. La automatización solo abre el registro del gasto cuando llega el comprobante, así que el nombre, el monto, el sobre y el método de pago los tienes que completar manualmente.",
      steps: [
        {
          title: "Instala Atajos y Mail",
          body: 'Necesitas el app de <a href="https://apps.apple.com/us/app/shortcuts/id915249334" target="_blank" rel="noopener">Atajos (Shortcuts)</a> y el app de <a href="https://apps.apple.com/us/app/mail/id1108187098" target="_blank" rel="noopener">Mail</a> de Apple, con el correo donde te llegan los comprobantes configurado.',
        },
        {
          title: "Abre la sección de Automatización",
          body: "Dentro del app de Atajos, toca la pestaña <strong>Automatización</strong>.",
          media: [{ src: `${ios26}/02-automatizacion.png`, alt: "Pestaña Automatización en el app de Atajos" }],
        },
        {
          title: "Crea una nueva automatización",
          body: "Toca el botón <strong>+</strong>, arriba a la derecha.",
          media: [{ src: `${ios26}/03-nueva.png`, alt: "Botón para crear una nueva automatización" }],
        },
        {
          title: "Busca la automatización Correo electrónico",
          body: "En la lista de disparadores, busca y selecciona <strong>Correo electrónico</strong>.",
          media: [{ src: `${correo}/04-correo.png`, alt: "Automatización Correo electrónico en Atajos" }],
        },
        {
          title: "Pon el remitente y el asunto de tu banco",
          body: `Completa <strong>Remitente</strong> y <strong>El asunto contiene</strong> con los datos de los correos de tu banco. Como guía, estos son los de algunos bancos de Costa Rica:
<ul>
<li><strong>Banco Nacional:</strong> remitente <code>bncontacto@bncr.fi.cr</code>, asunto <em>Voucher Digital</em></li>
<li><strong>BAC Credomatic:</strong> remitente <code>notificacion@notificacionesbaccr.com</code>, asunto <em>Notificación de transacción</em></li>
<li><strong>Scotiabank:</strong> remitente <code>AlertasScotiabank@scotiabank.com</code>, asunto <em>Alerta Transacción</em></li>
</ul>`,
          media: [{ src: `${correo}/05-remitente.png`, alt: "Opciones Remitente y El asunto contiene" }],
        },
        {
          title: "Elige cómo se ejecuta",
          body: "Selecciona <strong>Ejecutar después de confirmar</strong> si quieres que te pregunte antes de abrirse, o <strong>Ejecutar de inmediato</strong> si quieres que se abra apenas llegue el correo. Luego toca <strong>Siguiente</strong>.",
        },
        {
          title: "Crea un nuevo atajo",
          body: "Selecciona la opción <strong>Crear nuevo atajo</strong>.",
          media: [{ src: `${ios26}/07-nuevo-atajo.png`, alt: "Opción Crear nuevo atajo" }],
        },
        {
          title: "Agrega la acción de Spent",
          body: "En <strong>Buscar acciones</strong>, escribe <em>Spent</em> y selecciona <strong>Agregar gasto a un sobre</strong>.",
          media: [{ src: `${ios26}/08-buscar-spent.mp4`, alt: "Buscando la acción de Spent en Atajos", type: "video" }],
        },
        {
          title: "Deja Mostrar al ejecutar activado y guarda",
          body: "Deja <strong>Mostrar al ejecutar</strong> activado para que Spent te pida los datos del gasto cada vez que llegue un comprobante. Toca el check ✔︎ arriba a la derecha y listo.",
          media: [{ src: `${correo}/09-listo.png`, alt: "Acción Agregar gasto a un sobre con Mostrar al ejecutar activado" }],
        },
      ],
    },
  ],
};

const sus = "/images/tutoriales/suscripciones";

export const suscripcionesTutorial = {
  slug: "suscripciones",
  title: "Agrega tus suscripciones y no te agarre ningún cobro",
  summary:
    "Registra Netflix, Spotify o cualquier pago recurrente para ver cuánto pagas al mes, cuándo se renueva cada uno y recibir un aviso antes del cobro.",
  icon: "/images/tutoriales/icon-suscripciones.svg",
  platform: "iPhone y Android",
  versions: [
    {
      id: "ios",
      label: "iPhone y Android",
      steps: [
        {
          title: "Abre la pestaña Suscripciones",
          body: "En Spent, toca <strong>Suscripciones</strong> en la barra de abajo y luego el botón <strong>+</strong>.",
          media: [{ src: `${sus}/01-tab.jpg`, alt: "Pestaña Suscripciones vacía con el botón +" }],
        },
        {
          title: "Elige si es una suscripción o una prueba gratis",
          body: "Arriba puedes cambiar entre <strong>Suscripción</strong> y <strong>Prueba gratis</strong>. Usa Prueba gratis para que Spent te recuerde cancelarla antes de que empiecen a cobrarte.",
          media: [{ src: `${sus}/02-form.jpg`, alt: "Formulario Nueva suscripción" }],
        },
        {
          title: "Completa el nombre, el monto y el método de pago",
          body: "Escribe el <strong>Nombre</strong> del servicio, el <strong>Monto</strong> (puedes cambiar la moneda tocando <strong>USD</strong>) y el <strong>Método de pago</strong> con el que te cobran.",
          media: [{ src: `${sus}/03-datos.jpg`, alt: "Suscripción de Netflix por $15,99 con transferencia bancaria" }],
        },
        {
          title: "Configura la renovación",
          body: "En <strong>Renovación</strong> elige cada cuánto te cobran: <strong>Mensual</strong>, <strong>Anual</strong>, <strong>Trimestral</strong>, <strong>Semanal</strong> o <strong>Personalizada</strong>. En <strong>Día de renovación</strong> pon el día del cobro; Spent te muestra la fecha del próximo cobro.",
          media: [{ src: `${sus}/04-renovacion.jpg`, alt: "Menú de renovación: Mensual, Anual, Trimestral, Semanal y Personalizada" }],
        },
        {
          title: "Conéctala a un sobre y activa los recordatorios (opcional)",
          body: "En <strong>Opciones avanzadas</strong>:<ul><li><strong>Conectar a un sobre:</strong> agrega la suscripción como gasto en el sobre que elijas cada vez que se renueva.</li><li><strong>Recibir recordatorios:</strong> Spent te avisa 2 días antes de la renovación.</li></ul>Estas dos opciones son parte de Spent Pro.",
          media: [{ src: `${sus}/05-opciones.jpg`, alt: "Opciones avanzadas con Conectar a un sobre y Recibir recordatorios activados" }],
        },
        {
          title: "Guarda y permite las notificaciones",
          body: "Toca el check ✔︎ arriba a la derecha. Si activaste los recordatorios, toca <strong>Permitir</strong> cuando Spent te pida enviarte notificaciones.",
          media: [{ src: `${sus}/06-notificaciones.jpg`, alt: "Diálogo Spent quiere enviarte notificaciones" }],
        },
        {
          title: "Listo",
          body: "Tu suscripción aparece en la lista con su monto y frecuencia, y arriba ves el <strong>Total mensual</strong> de todas tus suscripciones.",
          media: [{ src: `${sus}/07-listo.jpg`, alt: "Lista de suscripciones con Netflix y el total mensual" }],
        },
      ],
    },
  ],
};

const hist = "/images/tutoriales/historial";

export const historialTutorial = {
  slug: "historial",
  title: "Revisa tu historial de gastos",
  summary:
    "Archiva los gastos de un sobre al cerrar el mes y consulta cuánto gastas en promedio, tu método de pago más usado y el detalle de cada mes.",
  icon: "/images/tutoriales/icon-historial.svg",
  platform: "iPhone y Android",
  versions: [
    {
      id: "todos",
      label: "iPhone y Android",
      note: "El historial muestra los gastos <strong>archivados</strong>. Cuando archivas, el sobre se reinicia para el siguiente período y los gastos pasan al historial.",
      steps: [
        {
          title: "Abre un sobre",
          body: "En la pestaña <strong>Gastos</strong>, toca el sobre que quieres revisar.",
          media: [{ src: `${hist}/01-sobre.jpg`, alt: "Detalle del sobre Going out con sus últimos movimientos" }],
        },
        {
          title: "Abre el menú del sobre",
          body: "Toca el botón <strong>⋯</strong> arriba a la derecha. Ahí tienes <strong>Archivar gastos</strong> y <strong>Historial de gastos</strong>.",
          media: [{ src: `${hist}/02-menu.jpg`, alt: "Menú del sobre con Historial de gastos y Archivar gastos" }],
        },
        {
          title: "Archiva los gastos del período",
          body: "Toca <strong>Archivar gastos</strong> y confirma con <strong>Sí</strong>. El sobre vuelve a tener todo su presupuesto disponible.",
          media: [{ src: `${hist}/03-confirmar.jpg`, alt: "Confirmación ¿Está seguro de reiniciar este Sobre?" }],
        },
        {
          title: "Ve al historial",
          body: "Toca <strong>Ir a historial</strong>. Cuando quieras volver, entra desde el menú <strong>⋯</strong> › <strong>Historial de gastos</strong>.",
          media: [{ src: `${hist}/04-archivados.jpg`, alt: "Aviso Gastos archivados con el botón Ir a historial" }],
        },
        {
          title: "Revisa el resumen",
          body: "Arriba ves tu <strong>gasto promedio por mes</strong> y un gráfico de los últimos meses comparado con tu presupuesto. En <strong>Análisis</strong> aparece tu método de pago más usado y el gasto mediano.",
          media: [{ src: `${hist}/05-historial.jpg`, alt: "Historial con gráfico de gasto por mes y análisis" }],
        },
        {
          title: "Abre un mes para ver el detalle",
          body: "En <strong>Historial</strong>, toca un mes para ver cada gasto con su fecha, monto y método de pago.",
          media: [{ src: `${hist}/06-mes.jpg`, alt: "Mes de septiembre expandido con sus gastos" }],
        },
      ],
    },
  ],
};

export const spentTutoriales = [
  applePayTutorial,
  googlePayTutorial,
  correoTutorial,
  suscripcionesTutorial,
  historialTutorial,
];
