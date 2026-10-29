// ========================================================
// LÓGICA DEL JUEGO: NOMENCLATURA EN RESPUESTA ABIERTA
// Evaluación por Nivel de Precisión (Levenshtein) + Velocidad
// ========================================================

// URL Oficial de Google Apps Script
const urlGoogleSheet = "https://script.google.com/macros/s/AKfycbxRreoEVo7URIqKK1EgGo9LatpWLlYBrhiRwdaGiEPjZeTKaIHb54SQHnVl6cYrKPh9/exec";

// Variables de Estado del Juego
let preguntasPartida = [];
let indicePreguntaActual = 0;
let puntuacionTotal = 0;
let nombreEstudiante = "";
let cursoEstudiante = "";

let tiempoRestante = 30;
let intervaloTemporizador = null;
const TIEMPO_MAXIMO = 30;

// Elementos del DOM
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaJuego = document.getElementById("pantalla-juego");
const pantallaFinal = document.getElementById("pantalla-final");
const modalRanking = document.getElementById("modal-ranking");

const inputNombre = document.getElementById("input-nombre");
const inputCurso = document.getElementById("input-curso");
const btnComenzar = document.getElementById("btn-comenzar");
const btnVerRanking = document.getElementById("btn-ver-ranking");
const btnCerrarRanking = document.getElementById("btn-cerrar-ranking");

const displayNombre = document.getElementById("display-nombre");
const displayCurso = document.getElementById("display-curso");
const scoreDisplay = document.getElementById("score");

const progresoPregunta = document.getElementById("progreso-pregunta");
const spanTiempoRestante = document.getElementById("tiempo-restante");
const barraTiempo = document.getElementById("barra-tiempo");

const tipoCompuesto = document.getElementById("tipo-compuesto");
const formulaCompuesto = document.getElementById("formula-compuesto");
const btnPista = document.getElementById("btn-pista");
const textoPista = document.getElementById("texto-pista");

const inputRespuesta = document.getElementById("input-respuesta");
const btnEnviar = document.getElementById("btn-enviar");

const cuadroFeedback = document.getElementById("cuadro-feedback");
const feedbackTitulo = document.getElementById("feedback-titulo");
const feedbackPuntaje = document.getElementById("feedback-puntaje");
const feedbackExplicacion = document.getElementById("feedback-explicacion");
const btnSiguiente = document.getElementById("btn-siguiente");

const nombreFinal = document.getElementById("nombre-final");
const cursoFinal = document.getElementById("curso-final");
const scoreFinal = document.getElementById("score-final");
const listaRanking = document.getElementById("lista-ranking");
const listaRankingGlobal = document.getElementById("lista-ranking-global");
const btnReiniciar = document.getElementById("btn-reiniciar");

// --------------------------------------------------------
// 1. ALGORITMOS DE NORMALIZACIÓN Y SIMILITUD (PRECISIÓN)
// --------------------------------------------------------

function normalizarTexto(str) {
    if (!str) return "";
    return str.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remueve acentos
        .replace(/[^a-z0-9 ]/g, " ") // Reemplaza caracteres especiales por espacios
        .replace(/\s+/g, " ") // Colapsa múltiples espacios
        .trim();
}

function calcularDistanciaLevenshtein(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // Sustitución
                    matrix[i][j - 1] + 1,     // Inserción
                    matrix[i - 1][j] + 1      // Borrado
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function calcularSimilitud(entrada, objetivo) {
    const normInput = normalizarTexto(entrada);
    const normTarget = normalizarTexto(objetivo);

    if (normInput === normTarget) return 1.0;
    if (!normInput || !normTarget) return 0.0;

    const distancia = calcularDistanciaLevenshtein(normInput, normTarget);
    const maxLen = Math.max(normInput.length, normTarget.length);
    return Math.max(0, 1 - distancia / maxLen);
}

// --------------------------------------------------------
// 2. INICIO Y CONFIGURACIÓN DEL JUEGO
// --------------------------------------------------------

btnComenzar.addEventListener("click", () => {
    nombreEstudiante = inputNombre.value.trim();
    cursoEstudiante = inputCurso.value.trim();

    if (!nombreEstudiante || !cursoEstudiante) {
        alert("Por favor, ingresa tu nombre y curso para comenzar la misión.");
        return;
    }

    if (typeof bancoPreguntasCompleto === "undefined" || !bancoPreguntasCompleto.length) {
        alert("Error: No se encontró el banco de preguntas 'banco_preguntas.js'.");
        return;
    }

    // Selecciona 10 preguntas al azar del banco
    let bancoMezclado = [...bancoPreguntasCompleto].sort(() => Math.random() - 0.5);
    preguntasPartida = bancoMezclado.slice(0, Math.min(10, bancoMezclado.length));

    indicePreguntaActual = 0;
    puntuacionTotal = 0;
    scoreDisplay.textContent = 0;
    displayNombre.textContent = nombreEstudiante;
    displayCurso.textContent = cursoEstudiante;

    pantallaInicio.classList.add("oculto");
    pantallaJuego.classList.remove("oculto");

    cargarPregunta();
});

// --------------------------------------------------------
// 3. CICLO DE PREGUNTAS Y TEMPORIZADOR
// --------------------------------------------------------

function cargarPregunta() {
    clearInterval(intervaloTemporizador);

    if (indicePreguntaActual >= preguntasPartida.length) {
        finalizarJuego();
        return;
    }

    const actual = preguntasPartida[indicePreguntaActual];

    // Reiniciar UI
    progresoPregunta.textContent = `Compuesto ${indicePreguntaActual + 1} de ${preguntasPartida.length}`;
    tipoCompuesto.textContent = actual.tipo;
    formulaCompuesto.textContent = actual.formula;

    inputRespuesta.value = "";
    inputRespuesta.disabled = false;
    btnEnviar.disabled = false;
    inputRespuesta.focus();

    textoPista.classList.add("oculto");
    textoPista.textContent = actual.pista || "Analiza los estados de oxidación de cada elemento.";
    btnPista.disabled = false;

    cuadroFeedback.classList.add("oculto");

    // Reiniciar Temporizador
    tiempoRestante = TIEMPO_MAXIMO;
    spanTiempoRestante.textContent = tiempoRestante;
    barraTiempo.style.width = "100%";
    iniciarTemporizador();
}

function iniciarTemporizador() {
    intervaloTemporizador = setInterval(() => {
        tiempoRestante--;
        spanTiempoRestante.textContent = tiempoRestante;

        const porcentaje = (tiempoRestante / TIEMPO_MAXIMO) * 100;
        barraTiempo.style.width = `${porcentaje}%`;

        if (tiempoRestante <= 0) {
            clearInterval(intervaloTemporizador);
            manejarTiempoAgotado();
        }
    }, 1000);
}

btnPista.addEventListener("click", () => {
    textoPista.classList.remove("oculto");
    btnPista.disabled = true;
});

// --------------------------------------------------------
// 4. VERIFICACIÓN Y EVALUACIÓN DE RESPUESTA
// --------------------------------------------------------

btnEnviar.addEventListener("click", procesarRespuesta);
inputRespuesta.addEventListener("keypress", (e) => {
    if (e.key === "Enter") procesarRespuesta();
});

function procesarRespuesta() {
    const respuestaUsuario = inputRespuesta.value.trim();
    if (!respuestaUsuario) {
        alert("Por favor, escribe un nombre para el compuesto antes de responder.");
        return;
    }

    clearInterval(intervaloTemporizador);
    inputRespuesta.disabled = true;
    btnEnviar.disabled = true;

    const actual = preguntasPartida[indicePreguntaActual];

    // Buscar la mayor similitud entre todas las opciones aceptadas
    let mejorSimilitud = 0;
    actual.nombresAceptados.forEach(nombreValido => {
        const sim = calcularSimilitud(respuestaUsuario, nombreValido);
        if (sim > mejorSimilitud) mejorSimilitud = sim;
    });

    const porcentajePrecision = Math.round(mejorSimilitud * 100);
    let puntosPrecision = 0;
    let puntosTiempo = 0;
    let claseFeedback = "";
    let tituloText = "";

    if (mejorSimilitud >= 0.88) {
        // Coincidencia Alta / Exacta
        puntosPrecision = 70;
        puntosTiempo = Math.floor((tiempoRestante / TIEMPO_MAXIMO) * 30); // hasta 30 pts de bono
        claseFeedback = "exito";
        tituloText = `🎉 ¡Excelente Nomenclatura! (Precisión: ${porcentajePrecision}%)`;
    } else if (mejorSimilitud >= 0.60) {
        // Coincidencia Parcial / Cercana
        puntosPrecision = Math.round(mejorSimilitud * 50); // 30 - 44 pts
        puntosTiempo = Math.floor((tiempoRestante / TIEMPO_MAXIMO) * 15);
        claseFeedback = "parcial";
        tituloText = `💡 ¡Casi! Respuesta Cercana (Precisión: ${porcentajePrecision}%)`;
    } else {
        // Incorrecto
        puntosPrecision = 0;
        puntosTiempo = 0;
        claseFeedback = "error";
        tituloText = `❌ Nomenclatura Imprecisa (Precisión: ${porcentajePrecision}%)`;
    }

    const puntosObtenidos = puntosPrecision + puntosTiempo;
    puntuacionTotal += puntosObtenidos;
    scoreDisplay.textContent = puntuacionTotal;

    // Mostrar Feedback
    cuadroFeedback.className = `feedback-card ${claseFeedback}`;
    feedbackTitulo.textContent = tituloText;
    feedbackPuntaje.innerHTML = `Puntos ganados: <strong>+${puntosObtenidos} pts</strong> (Precisión: ${puntosPrecision} pts | Rapidez: ${puntosTiempo} pts)`;
    feedbackExplicacion.innerHTML = `<strong>Nombres válidos:</strong> ${actual.explicacion}`;
    cuadroFeedback.classList.remove("oculto");
}

function manejarTiempoAgotado() {
    inputRespuesta.disabled = true;
    btnEnviar.disabled = true;

    const actual = preguntasPartida[indicePreguntaActual];

    cuadroFeedback.className = "feedback-card error";
    feedbackTitulo.textContent = "⏰ ¡Se acabó el tiempo!";
    feedbackPuntaje.innerHTML = "Puntos ganados: <strong>0 pts</strong>";
    feedbackExplicacion.innerHTML = `<strong>Nombres válidos:</strong> ${actual.explicacion}`;
    cuadroFeedback.classList.remove("oculto");
}

btnSiguiente.addEventListener("click", () => {
    indicePreguntaActual++;
    cargarPregunta();
});

// --------------------------------------------------------
// 5. PANTALLA FINAL Y CONEXIÓN CON GOOGLE SHEETS
// --------------------------------------------------------

function finalizarJuego() {
    pantallaJuego.classList.add("oculto");
    pantallaFinal.classList.remove("oculto");

    nombreFinal.textContent = nombreEstudiante;
    cursoFinal.textContent = cursoEstudiante;
    scoreFinal.textContent = puntuacionTotal;

    // 1. Enviar datos a Google Sheets
    if (urlGoogleSheet) {
        fetch(urlGoogleSheet, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({
                nombre: nombreEstudiante,
                curso: cursoEstudiante,
                puntaje: puntuacionTotal
            })
        }).catch(err => console.error("Error al enviar datos a Google Sheets:", err));
    }

    // 2. Cargar Ranking desde Google Sheets
    cargarRanking(listaRanking);
}

function cargarRanking(elementoLista) {
    if (!elementoLista) return;
    elementoLista.innerHTML = '<li class="cargando-item">🔄 Actualizando posiciones desde la nube...</li>';

    if (!urlGoogleSheet) {
        elementoLista.innerHTML = '<li class="cargando-item">⚠️ Falta la URL de Google Sheets.</li>';
        return;
    }

    setTimeout(() => {
        fetch(urlGoogleSheet)
            .then(res => res.json())
            .then(data => {
                elementoLista.innerHTML = "";
                if (!data || data.length === 0) {
                    elementoLista.innerHTML = '<li class="cargando-item">No hay puntuaciones registradas aún.</li>';
                    return;
                }

                // Ordenar por puntaje descendente
                data.sort((a, b) => Number(b.puntaje) - Number(a.puntaje));

                data.slice(0, 15).forEach((item, idx) => {
                    const li = document.createElement("li");
                    const medalla = idx === 0 ? "🥇 " : idx === 1 ? "🥈 " : idx === 2 ? "🥉 " : `#${idx + 1} `;
                    li.innerHTML = `
                        <span class="ranking-pos">${medalla}</span>
                        <div class="ranking-nombre-curso">
                            <span>${item.nombre}</span>
                            <small>${item.curso || "Sin curso"}</small>
                        </div>
                        <span class="ranking-pts">${item.puntaje} pts</span>
                    `;
                    elementoLista.appendChild(li);
                });
            })
            .catch(err => {
                console.error("Error al obtener ranking:", err);
                elementoLista.innerHTML = '<li class="cargando-item">❌ Error al conectar con Google Sheets.</li>';
            });
    }, 800);
}

// Eventos de Navegación del Ranking
btnVerRanking.addEventListener("click", () => {
    modalRanking.classList.remove("oculto");
    cargarRanking(listaRankingGlobal);
});

btnCerrarRanking.addEventListener("click", () => {
    modalRanking.classList.add("oculto");
});

btnReiniciar.addEventListener("click", () => {
    pantallaFinal.classList.add("oculto");
    pantallaInicio.classList.remove("oculto");
});
