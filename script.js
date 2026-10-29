// ========================================================
// LÓGICA DEL JUEGO - NOMENCLATURA DE QUÍMICA INORGÁNICA
// ========================================================

const urlGoogleSheet = "https://script.google.com/macros/s/AKfycbxRreoEVo7URIqKK1EgGo9LatpWLlYBrhiRwdaGiEPjZeTKaIHb54SQHnVl6cYrKPh9/exec";

// Estado del Juego
let preguntasPartida = [];
let indicePreguntaActual = 0;
let puntuacionTotal = 0;
let nombreEstudiante = "";
let cursoEstudiante = "";
let tiempoRestante = 30;
let intervaloTemporizador = null;
const TIEMPO_MAXIMO = 30;

// Referencias al DOM
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaJuego = document.getElementById("pantalla-juego");
const pantallaFinal = document.getElementById("pantalla-final");

const inputNombre = document.getElementById("input-nombre");
const inputCurso = document.getElementById("input-curso");
const btnComenzar = document.getElementById("btn-comenzar");
const displayNombre = document.getElementById("display-nombre");
const displayCurso = document.getElementById("display-curso");
const scoreDisplay = document.getElementById("score");
const scoreFinal = document.getElementById("score-final");
const nombreFinal = document.getElementById("nombre-final");
const cursoFinal = document.getElementById("curso-final");
const listaRanking = document.getElementById("lista-ranking");

const progresoPregunta = document.getElementById("progreso-pregunta");
const tipoCompuesto = document.getElementById("tipo-compuesto");
const formulaCompuesto = document.getElementById("formula-compuesto");
const spanTiempoRestante = document.getElementById("tiempo-restante");
const barraTiempo = document.getElementById("barra-tiempo");

const btnPista = document.getElementById("btn-pista");
const textoPista = document.getElementById("texto-pista");
const inputRespuesta = document.getElementById("input-respuesta");
const btnEnviar = document.getElementById("btn-enviar");
const cuadroFeedback = document.getElementById("cuadro-feedback");
const feedbackTitulo = document.getElementById("feedback-titulo");
const feedbackDetalle = document.getElementById("feedback-detalle");
const btnSiguiente = document.getElementById("btn-siguiente");

const btnReiniciar = document.getElementById("btn-reiniciar");
const btnVerRanking = document.getElementById("btn-ver-ranking");
const modalRanking = document.getElementById("modal-ranking");
const listaRankingGlobal = document.getElementById("lista-ranking-global");
const btnCerrarRanking = document.getElementById("btn-cerrar-ranking");
const btnCerrarModalX = document.getElementById("btn-cerrar-modal-x");

// --------------------------------------------------------
// 1. FORMATEO AUTOMÁTICO DE SUBÍNDICES PARA FÓRMULAS QUÍMICAS
// --------------------------------------------------------
function formatearFormulaQuimica(formula) {
    if (!formula) return "";
    const unicodeMap = {'₀':'0', '₁':'1', '₂':'2', '₃':'3', '₄':'4', '₅':'5', '₆':'6', '₇':'7', '₈':'8', '₉':'9'};
    let normalizada = formula.replace(/[₀-₉]/g, m => unicodeMap[m]);
    return normalizada.replace(/(\d+)/g, '<sub>$1</sub>');
}

// --------------------------------------------------------
// 2. ALGORITMOS DE NORMALIZACIÓN Y PRECISIÓN (LEVENSHTEIN)
// --------------------------------------------------------
function normalizarTexto(str) {
    if (!str) return "";
    return str.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remueve tildes
        .replace(/[^a-z0-9 ]/g, " ")
        .replace(/\s+/g, " ")
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
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
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
// 3. INICIO DEL JUEGO
// --------------------------------------------------------
if (btnComenzar) {
    btnComenzar.addEventListener("click", iniciarJuego);
}

function iniciarJuego() {
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

    // Mezclar banco y tomar 10 preguntas al azar
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
}

function cargarPregunta() {
    clearInterval(intervaloTemporizador);

    if (indicePreguntaActual >= preguntasPartida.length) {
        finalizarJuego();
        return;
    }

    const actual = preguntasPartida[indicePreguntaActual];

    progresoPregunta.textContent = `Compuesto ${indicePreguntaActual + 1} de ${preguntasPartida.length}`;
    tipoCompuesto.textContent = actual.tipo || actual.type || "Química Inorgánica";
    
    // RENDERIZADO CON SUBÍNDICES AUTOMÁTICOS
    formulaCompuesto.innerHTML = formatearFormulaQuimica(actual.formula);

    inputRespuesta.value = "";
    inputRespuesta.disabled = false;
    btnEnviar.disabled = false;
    inputRespuesta.focus();

    textoPista.classList.add("oculto");
    textoPista.textContent = actual.pista || (actual.hints ? actual.hints.join(" ") : "Analiza los estados de oxidación.");
    btnPista.disabled = false;

    cuadroFeedback.classList.add("oculto");
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

if (btnPista) {
    btnPista.addEventListener("click", () => {
        textoPista.classList.remove("oculto");
        btnPista.disabled = true;
    });
}

// --------------------------------------------------------
// 4. EVALUACIÓN Y PROCESAMIENTO DE RESPUESTA
// --------------------------------------------------------
if (btnEnviar) {
    btnEnviar.addEventListener("click", procesarRespuesta);
}
if (inputRespuesta) {
    inputRespuesta.addEventListener("keypress", (e) => {
        if (e.key === "Enter") procesarRespuesta();
    });
}
if (btnSiguiente) {
    btnSiguiente.addEventListener("click", () => {
        indicePreguntaActual++;
        cargarPregunta();
    });
}

function procesarRespuesta() {
    const respuestaUsuario = inputRespuesta.value.trim();
    if (!respuestaUsuario) {
        alert("Por favor, escribe el nombre del compuesto.");
        return;
    }

    clearInterval(intervaloTemporizador);
    inputRespuesta.disabled = true;
    btnEnviar.disabled = true;

    const actual = preguntasPartida[indicePreguntaActual];
    const listaAceptados = actual.nombresAceptados || actual.acceptedNames || [];

    let mejorSimilitud = 0;
    listaAceptados.forEach(nombreValido => {
        const sim = calcularSimilitud(respuestaUsuario, nombreValido);
        if (sim > mejorSimilitud) mejorSimilitud = sim;
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

    cuadroFeedback.className = `retro-card ${claseFeedback}`;
    feedbackTitulo.textContent = tituloText;
    feedbackDetalle.innerHTML = `<strong>Puntos:</strong> +${puntosObtenidos} (${puntosPrecision} precisión + ${puntosTiempo} tiempo)<br><strong>Explicación:</strong> ${actual.explicacion || actual.explanation || ''}`;
    
    cuadroFeedback.classList.remove("oculto");
    btnSiguiente.classList.remove("oculto");
}

function manejarTiempoAgotado() {
    inputRespuesta.disabled = true;
    btnEnviar.disabled = true;

    const actual = preguntasPartida[indicePreguntaActual];
    cuadroFeedback.className = "retro-card error";
    feedbackTitulo.textContent = "⏰ ¡Tiempo Agotado! (0 pts)";
    feedbackDetalle.innerHTML = `<strong>Explicación:</strong> ${actual.explicacion || actual.explanation || ''}`;
    
    cuadroFeedback.classList.remove("oculto");
    btnSiguiente.classList.remove("oculto");
}

// --------------------------------------------------------
// 5. PANTALLA FINAL Y RANKING GLOBAL (4 COLUMNAS)
// --------------------------------------------------------
function finalizarJuego() {
    pantallaJuego.classList.add("oculto");
    pantallaFinal.classList.remove("oculto");
    scoreFinal.textContent = `${puntuacionTotal} pts`;
    nombreFinal.textContent = nombreEstudiante;
    cursoFinal.textContent = cursoEstudiante;

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
        }).catch(err => console.error("Error guardando puntaje:", err));
    }

    if (listaRanking) {
        listaRanking.innerHTML = "<li><i class='fa-solid fa-spinner fa-spin'></i> Actualizando ranking global...</li>";
    }
    setTimeout(() => obtenerYMostrarRanking(listaRanking), 1000);
}

function obtenerYMostrarRanking(elementoLista) {
    if (!elementoLista || !urlGoogleSheet) return;

    fetch(urlGoogleSheet)
        .then(response => response.json())
        .then(data => {
            elementoLista.innerHTML = "";
            if (!data || !data.length) {
                elementoLista.innerHTML = "<li>No hay puntajes registrados aún.</li>";
                return;
            }

            data.sort((a, b) => b.puntaje - a.puntaje);

            data.slice(0, 15).forEach((item, index) => {
                const li = document.createElement("li");
                let medalla = `#${index + 1}`;
                if (index === 0) medalla = "🥇";
                if (index === 1) medalla = "🥈";
                if (index === 2) medalla = "🥉";

                li.innerHTML = `
                    <span class="ranking-pos">${medalla}</span>
                    <div class="ranking-info">
                        <span>${item.nombre}</span>
                        <small>${item.curso || 'N/A'}</small>
                    </div>
                    <strong class="ranking-pts">${item.puntaje} pts</strong>
                `;
                elementoLista.appendChild(li);
            });
        })
        .catch(err => {
            console.error("Error cargando ranking:", err);
            elementoLista.innerHTML = "<li>❌ Error al conectar con el ranking.</li>";
        });
}

if (btnReiniciar) {
    btnReiniciar.addEventListener("click", () => {
        pantallaFinal.classList.add("oculto");
        pantallaInicio.classList.remove("oculto");
        inputNombre.value = "";
        inputCurso.value = "";
    });
}

if (btnVerRanking) {
    btnVerRanking.addEventListener("click", () => {
        modalRanking.classList.remove("oculto");
        listaRankingGlobal.innerHTML = "<li><i class='fa-solid fa-spinner fa-spin'></i> Cargando ranking...</li>";
        obtenerYMostrarRanking(listaRankingGlobal);
    });
}

const cerrarModal = () => modalRanking.classList.add("oculto");
if (btnCerrarRanking) btnCerrarRanking.addEventListener("click", cerrarModal);
if (btnCerrarModalX) btnCerrarModalX.addEventListener("click", cerrarModal);
