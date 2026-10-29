// ========================================================
// LÓGICA DE JUEGO - DESAFÍO DE QUÍMICA INORGÁNICA (PREGUNTA ABIERTA)
// ========================================================

const urlGoogleSheet = "https://script.google.com/macros/s/AKfycbxRreoEVo7URIqKK1EgGo9LatpWLlYBrhiRwdaGiEPjZeTKaIHb54SQHnVl6cYrKPh9/exec";

// Estado del juego
let preguntasPartida = [];
let indicePreguntaActual = 0;
let puntuacionTotal = 0;
let nombreEstudiante = "";
let cursoEstudiante = "";

let tiempoRestante = 30;
let intervaloTemporizador = null;
const TIEMPO_MAXIMO = 30;

// Referencias DOM
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaJuego = document.getElementById("pantalla-juego");
const pantallaFinal = document.getElementById("pantalla-final");

const inputNombre = document.getElementById("input-nombre");
const inputCurso = document.getElementById("input-curso");
const btnComenzar = document.getElementById("btn-comenzar");
const displayNombre = document.getElementById("display-nombre");
const scoreDisplay = document.getElementById("score");
const scoreFinal = document.getElementById("score-final");
const nombreFinal = document.getElementById("nombre-final");
const cursoFinal = document.getElementById("curso-final");
const listaRanking = document.getElementById("lista-ranking");

const progresoPregunta = document.getElementById("progreso-pregunta");
const categoriaBadge = document.getElementById("categoria-badge");
const formulaCompuesto = document.getElementById("formula-compuesto");
const spanTiempoRestante = document.getElementById("tiempo-restante");
const barraTiempo = document.getElementById("barra-tiempo");

const btnPista = document.getElementById("btn-pista");
const textoPista = document.getElementById("texto-pista");

const inputRespuesta = document.getElementById("input-respuesta");
const btnEnviar = document.getElementById("btn-enviar");

const retroalimentacion = document.getElementById("retroalimentacion");
const feedbackTitulo = document.getElementById("feedback-titulo");
const feedbackPuntos = document.getElementById("feedback-puntos");
const feedbackExplicacion = document.getElementById("feedback-explicacion");
const btnSiguiente = document.getElementById("btn-siguiente");

const btnReiniciar = document.getElementById("btn-reiniciar");

// Modal Ranking
const btnVerRanking = document.getElementById("btn-ver-ranking");
const modalRanking = document.getElementById("modal-ranking");
const listaRankingGlobal = document.getElementById("lista-ranking-global");
const btnCerrarRanking = document.getElementById("btn-cerrar-ranking");
const btnCerrarModalX = document.getElementById("btn-cerrar-modal-x");

// Iniciar Eventos
if (btnComenzar) {
    btnComenzar.addEventListener("click", iniciarMision);
}

function iniciarMision() {
    nombreEstudiante = inputNombre.value.trim();
    cursoEstudiante = inputCurso.value.trim();

    if (!nombreEstudiante || !cursoEstudiante) {
        alert("Por favor, ingresa tu Nombre y Curso antes de iniciar.");
        return;
    }

    if (typeof bancoPreguntasCompleto === "undefined" || !Array.isArray(bancoPreguntasCompleto) || bancoPreguntasCompleto.length === 0) {
        alert("Error: No se pudo cargar el banco de preguntas. Verifica 'banco_preguntas.js'.");
        return;
    }

    // Seleccionar 10 preguntas aleatorias del banco gigante
    let bancoCopia = [...bancoPreguntasCompleto].sort(() => Math.random() - 0.5);
    preguntasPartida = bancoCopia.slice(0, Math.min(10, bancoCopia.length));

    indicePreguntaActual = 0;
    puntuacionTotal = 0;
    scoreDisplay.textContent = 0;
    displayNombre.textContent = nombreEstudiante;

    pantallaInicio.classList.add("oculto");
    pantallaJuego.classList.remove("oculto");

    cargarPregunta();
}

function cargarPregunta() {
    clearInterval(intervaloTemporizador);

    if (indicePreguntaActual >= preguntasPartida.length) {
        finalizarMision();
        return;
    }

    const actual = preguntasPartida[indicePreguntaActual];

    progresoPregunta.textContent = `Pregunta ${indicePreguntaActual + 1} de ${preguntasPartida.length}`;
    categoriaBadge.textContent = actual.tipo || actual.categoria || "Inorgánica";
    formulaCompuesto.textContent = actual.formula || "Compuesto";

    // Pista
    textoPista.textContent = actual.pista || "Analiza el estado de oxidación de sus elementos.";
    textoPista.classList.add("oculto");
    btnPista.disabled = false;

    // Entrada de texto
    inputRespuesta.value = "";
    inputRespuesta.disabled = false;
    btnEnviar.disabled = false;
    inputRespuesta.focus();

    // Retroalimentación
    retroalimentacion.classList.add("oculto");
    btnSiguiente.classList.add("oculto");

    // Temporizador
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

btnEnviar.addEventListener("click", procesarRespuesta);
inputRespuesta.addEventListener("keypress", (e) => {
    if (e.key === "Enter") procesarRespuesta();
});

btnSiguiente.addEventListener("click", () => {
    indicePreguntaActual++;
    cargarPregunta();
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

    // Obtener lista segura de nombres válidos
    const nombresValidos = actual.nombresAceptados || actual.acceptedNames || [actual.formula];

    let mejorSimilitud = 0;
    nombresValidos.forEach(nombreValido => {
        if (typeof nombreValido === "string") {
            const sim = calcularSimilitud(respuestaUsuario, nombreValido);
            if (sim > mejorSimilitud) mejorSimilitud = sim;
        }
    });

    const porcentajePrecision = Math.round(mejorSimilitud * 100);
    let puntosPrecision = 0;
    let puntosTiempo = 0;
    let claseFeedback = "";
    let tituloText = "";

    if (mejorSimilitud >= 0.88) {
        puntosPrecision = 70;
        puntosTiempo = Math.floor((tiempoRestante / TIEMPO_MAXIMO) * 30);
        claseFeedback = "exito";
        tituloText = `🎉 ¡Excelente Nomenclatura! (Precisión: ${porcentajePrecision}%)`;
    } else if (mejorSimilitud >= 0.60) {
        puntosPrecision = Math.round(mejorSimilitud * 50);
        puntosTiempo = Math.floor((tiempoRestante / TIEMPO_MAXIMO) * 15);
        claseFeedback = "parcial";
        tituloText = `💡 ¡Casi! Respuesta Cercana (Precisión: ${porcentajePrecision}%)`;
    } else {
        puntosPrecision = 0;
        puntosTiempo = 0;
        claseFeedback = "error";
        tituloText = `❌ Nomenclatura Imprecisa (Precisión: ${porcentajePrecision}%)`;
    }

    const puntosObtenidos = puntosPrecision + puntosTiempo;
    puntuacionTotal += puntosObtenidos;
    scoreDisplay.textContent = puntuacionTotal;

    feedbackTitulo.textContent = tituloText;
    feedbackPuntos.textContent = `Puntos ganados: +${puntosObtenidos} pts (Base: ${puntosPrecision} pts | Vel: ${puntosTiempo} pts)`;
    feedbackExplicacion.innerHTML = `<strong>Explicación:</strong> ${actual.explicacion || 'Revisa la tabla periódica y valencias.'}`;

    retroalimentacion.className = `retro-card ${claseFeedback}`;
    retroalimentacion.classList.remove("oculto");
    btnSiguiente.classList.remove("oculto");
}

function manejarTiempoAgotado() {
    inputRespuesta.disabled = true;
    btnEnviar.disabled = true;

    const actual = preguntasPartida[indicePreguntaActual];

    feedbackTitulo.textContent = "⏰ ¡Se acabó el tiempo!";
    feedbackPuntos.textContent = "Puntos ganados: 0 pts";
    feedbackExplicacion.innerHTML = `<strong>Explicación:</strong> ${actual.explicacion || 'Tiempo agotado.'}`;

    retroalimentacion.className = "retro-card error";
    retroalimentacion.classList.remove("oculto");
    btnSiguiente.classList.remove("oculto");
}

// Algoritmo de Distancia Levenshtein / Normalización
function normalizarTexto(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9 ]/g, "")
        .trim();
}

function calcularSimilitud(a, b) {
    const s1 = normalizarTexto(a);
    const s2 = normalizarTexto(b);

    if (s1 === s2) return 1.0;
    if (!s1 || !s2) return 0.0;

    const len1 = s1.length;
    const len2 = s2.length;
    const matrix = Array.from({ length: len2 + 1 }, (_, i) => [i]);

    for (let j = 0; j <= len1; j++) matrix[0][j] = j;

    for (let i = 1; i <= len2; i++) {
        for (let j = 1; j <= len1; j++) {
            if (s2[i - 1] === s1[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    const dist = matrix[len2][len1];
    const maxLen = Math.max(len1, len2);
    return Math.max(0, 1 - dist / maxLen);
}

function finalizarMision() {
    pantallaJuego.classList.add("oculto");
    pantallaFinal.classList.remove("oculto");

    scoreFinal.textContent = `${puntuacionTotal} pts`;
    nombreFinal.textContent = nombreEstudiante;
    cursoFinal.textContent = cursoEstudiante;

    // Enviar resultado a Google Sheets App Script (4 Columnas: fecha, nombre, curso, puntaje)
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
        }).catch(err => console.error("Error al guardar puntaje:", err));
    }

    obtenerYMostrarRanking(listaRanking);
}

function obtenerYMostrarRanking(elementoLista) {
    if (!elementoLista || !urlGoogleSheet) return;

    elementoLista.innerHTML = "<li><i class='fa-solid fa-spinner fa-spin'></i> Cargando ranking...</li>";

    fetch(urlGoogleSheet)
        .then(res => res.json())
        .then(data => {
            elementoLista.innerHTML = "";

            if (!data || !Array.isArray(data) || data.length === 0) {
                elementoLista.innerHTML = "<li>No hay puntajes registrados aún.</li>";
                return;
            }

            // Ordenar descendentemente por puntaje numérico
            data.sort((a, b) => Number(b.puntaje || 0) - Number(a.puntaje || 0));

            data.slice(0, 15).forEach((item, index) => {
                const li = document.createElement("li");
                let medalla = `#${index + 1}`;
                if (index === 0) medalla = "🥇";
                if (index === 1) medalla = "🥈";
                if (index === 2) medalla = "🥉";

                li.innerHTML = `
                    <div class="ranking-col-left">
                        <span class="ranking-pos">${medalla}</span>
                        <div class="ranking-info">
                            <strong>${item.nombre || 'Anónimo'}</strong>
                            <span class="ranking-curso">${item.curso || 'N/A'}</span>
                        </div>
                    </div>
                    <strong class="ranking-pts">${item.puntaje || 0} pts</strong>
                `;
                elementoLista.appendChild(li);
            });
        })
        .catch(err => {
            console.error("Error al obtener ranking:", err);
            elementoLista.innerHTML = "<li>❌ Error al conectar con el servidor.</li>";
        });
}

// Reiniciar
if (btnReiniciar) {
    btnReiniciar.addEventListener("click", () => {
        pantallaFinal.classList.add("oculto");
        pantallaInicio.classList.remove("oculto");
        inputNombre.value = "";
        inputCurso.value = "";
    });
}

// Modal Ranking Global
if (btnVerRanking) {
    btnVerRanking.addEventListener("click", () => {
        modalRanking.classList.remove("oculto");
        obtenerYMostrarRanking(listaRankingGlobal);
    });
}

const cerrarModal = () => modalRanking.classList.add("oculto");
if (btnCerrarRanking) btnCerrarRanking.addEventListener("click", cerrarModal);
if (btnCerrarModalX) btnCerrarModalX.addEventListener("click", cerrarModal);
