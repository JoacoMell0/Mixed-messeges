// Arrays de signos y predicciones por elemento
const signosPorElemento = [
    ["Aries", "Leo", "Sagitario"],
    ["Tauro", "Virgo", "Capricornio"],
    ["Geminis", "Libra", "Acuario"],
    ["Cancer", "Escorpio", "Piscis"]
];

const predicciones = [
    ["Hoy será un día de cambios positivos en el trabajo.", "Deberías prestar más atención a tu salud hoy.", "Podrías recibir buenas noticias de un amigo cercano."],
    ["Es un buen día para tomar decisiones importantes.", "Tu creatividad estará en su punto más alto hoy.", "Podrías recibir una oferta inesperada."],
    ["Hoy es un día para buscar el equilibrio en todas las áreas de tu vida.", "Deberías enfocarte en tus relaciones personales hoy.", "Es un buen momento para iniciar un proyecto creativo."],
    ["Tu intuición estará muy fuerte hoy, confía en ella.", "Es un buen día para hacer cambios en tu hogar.", "Podrías sentirte más sensible de lo habitual, no te preocupes, es solo un ciclo."],
];

// Generar un número aleatorio entre 0 y 3
const elementoIndex = Math.floor(Math.random() * 4);

// Seleccionar un signo aleatorio para el elemento elegido
const signoIndex = Math.floor(Math.random() * 3);
const signo = signosPorElemento[elementoIndex][signoIndex];

// Seleccionar una predicción aleatoria para el elemento elegido
const prediccionIndex = Math.floor(Math.random() * 3);
const prediccion = predicciones[elementoIndex][prediccionIndex];

// Mostrar el mensaje generado
console.log(`Tu signo es ${signo} y tu predicción para hoy es: "${prediccion}"`);