// ========================================================
// LÓGICA DE JUEGO - DESAFÍO DE QUÍMICA INORGÁNICA (RESPUESTA ABIERTA)
// ========================================================

// URL oficial de Google Sheets Apps Script
const urlGoogleSheet = "https://script.google.com/macros/s/AKfycbxRreoEVo7URIqKK1EgGo9LatpWLlYBrhiRwdaGiEPjZeTKaIHb54SQHnVl6cYrKPh9/exec";

// Estado Global
let preguntasClase = [];
let indicePreguntaActual = 0;
let puntuacionTotal = 0;
let nombreEstudiante = "";
let cursoEstudiante = "";
let usoPistaActual = false;

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
const formRespuesta = document.getElementById("form-respuesta");
const respuestaInput = document.getElementById("respuesta-input");
const btnEnviarRespuesta = document.getElementById("btn-enviar-respuesta");

const btnPista = document.getElementById("btn-pista");
const pistaTexto = document.getElementById("pista-texto");
const retroalimentacion = document.getElementById("retroalimentacion");
const btnReiniciar = document.getElementById("btn-reiniciar");

const spanTiempoRestante = document.getElementById("tiempo-restante");
const barraTiempo = document.getElementById("barra-tiempo");

const btnVerRanking = document.getElementById("btn-ver-ranking");
const modalRanking = document.getElementById("modal-ranking");
const listaRankingGlobal = document.getElementById("lista-ranking-global");
const btnCerrarRanking = document.getElementById("btn-cerrar-ranking");
const btnCerrarModalX = document.getElementById("btn-cerrar-modal-x");

// Inicialización de eventos
if (btnComenzar) btnComenzar.addEventListener("click", iniciarDesafio);
if (formRespuesta) formRespuesta.addEventListener("submit", procesarRespuesta);
if (btnPista) btnPista.addEventListener("click", mostrarPista);

function iniciarDesafio() {
    nombreEstudiante = inputNombre.value.trim();
    cursoEstudiante = inputCurso.value.trim();

    if (nombreEstudiante === "" || cursoEstudiante === "") {
        alert("Por favor, ingresa tu nombre completo y curso antes de comenzar.");
        return;
    }

    if (typeof bancoPreguntasCompleto === "undefined" || bancoPreguntasCompleto.length === 0) {
        alert("Error: No se encontró el banco de preguntas 'banco_preguntas.js'.");
        return;
    }

    // Seleccionar 10 preguntas al azar
    let bancoMezclado = [...bancoPreguntasCompleto].sort(() => Math.random() - 0.5);
    preguntasClase = bancoMezclado.slice(0, Math.min(10, bancoMezclado.length));

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

    if (indicePreguntaActual >= preguntasClase.length) {
        mostrarPantallaFinal();
        return;
    }

    // Reiniciar interfaz
    tiempoRestante = TIEMPO_MAXIMO;
    usoPistaActual = false;

    if (spanTiempoRestante) spanTiempoRestante.textContent = tiempoRestante;
    if (barraTiempo) barraTiempo.style.width = "100%";

    respuestaInput.value = "";
    respuestaInput.disabled = false;
    btnEnviarRespuesta.disabled = false;
    respuestaInput.focus();

    if (pistaTexto) {
        pistaTexto.classList.add("oculto");
        pistaTexto.textContent = "";
    }
    if (btnPista) btnPista.disabled = false;

    retroalimentacion.className = "retro-card oculto";
    retroalimentacion.innerHTML = "";

    const actual = preguntasClase[indicePreguntaActual];
    progresoPregunta.textContent = `Pregunta ${indicePreguntaActual + 1} de ${preguntasClase.length}`;
    if (categoriaBadge) categoriaBadge.textContent = actual.categoria || "Química Inorgánica";
    formulaCompuesto.textContent = actual.formula;

    iniciarTemporizador();
}

function iniciarTemporizador() {
    intervaloTemporizador = setInterval(() => {
        tiempoRestante--;
        if (spanTiempoRestante) spanTiempoRestante.textContent = tiempoRestante;

        if (barraTiempo) {
            let porcentaje = (tiempoRestante / TIEMPO_MAXIMO) * 100;
            barraTiempo.style.width = `${porcentaje}%`;
        }

        if (tiempoRestante <= 0) {
            clearInterval(intervaloTemporizador);
            manejarTiempoAgotado();
        }
    }, 1000);
}

function mostrarPista() {
    const actual = preguntasClase[indicePreguntaActual];
    if (pistaTexto && actual.pista) {
        pistaTexto.textContent = `💡 Pista: ${actual.pista}`;
        pistaTexto.classList.remove("oculto");
        usoPistaActual = true;
        btnPista.disabled = true;
    }
}

// Algoritmo de Distancia Levenshtein para medir similitud de textos
function normalizarTexto(str) {
    if (!str) return "";
    return str.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remover tildes
        .replace(/[^a-z0-9 ]/g, "") // remover símbolos especiales excepto espacios
        .trim();
}

function calcularLevenshtein(a, b) {
    const s1 = normalizarTexto(a);
    const s2 = normalizarTexto(b);

    if (s1 === s2) return 0;
    if (s1.length === 0) return s2.length;
    if (s2.length === 0) return s1.length;

    const matrix = [];
    for (let i = 0; i <= s2.length; i++) matrix[i] = [i];
    for (let j = 0; j <= s1.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= s2.length; i++) {
        for (let j = 1; j <= s1.length; j++) {
            if (s2.charAt(i - 1) === s1.charAt(j - 1)) {
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
    return matrix[s2.length][s1.length];
}

function calcularPrecision(input, aceptadas) {
    const normInput = normalizarTexto(input);
    if (!normInput) return 0;

    let maxPrecision = 0;

    aceptadas.forEach(target => {
        const normTarget = normalizarTexto(target);
        if (normInput === normTarget) {
            maxPrecision = 1.0;
            return;
        }
        const dist = calcularLevenshtein(normInput, normTarget);
        const maxLen = Math.max(normInput.length, normTarget.length);
        const prec = maxLen > 0 ? Math.max(0, 1 - (dist / maxLen)) : 0;
        if (prec > maxPrecision) maxPrecision = prec;
    });

    return maxPrecision;
}

function procesarRespuesta(e) {
    if (e) e.preventDefault();
    clearInterval(intervaloTemporizador);

    const inputVal = respuestaInput.value.trim();
    if (inputVal === "") return;

    respuestaInput.disabled = true;
    btnEnviarRespuesta.disabled = true;

    const actual = preguntasClase[indicePreguntaActual];
    const precision = calcularPrecision(inputVal, actual.aceptadas);
    const porcentajePrec = Math.round(precision * 100);

    let puntosPrecision = 0;
    let bonoVelocidad = 0;
    let penalizacionPista = usoPistaActual ? 10 : 0;

    if (precision >= 0.88) {
        // Excelente / Correcta
        puntosPrecision = 70;
        bonoVelocidad = Math.floor((tiempoRestante / TIEMPO_MAXIMO) * 30);
    } else if (precision >= 0.60) {
        // Aceptable / Parcial
        puntosPrecision = Math.floor(precision * 50);
        bonoVelocidad = Math.floor((tiempoRestante / TIEMPO_MAXIMO) * 15);
    } else {
        // Incorrecta
        puntosPrecision = 0;
        bonoVelocidad = 0;
    }

    let puntosObtenidos = Math.max(0, puntosPrecision + bonoVelocidad - penalizacionPista);
    puntuacionTotal += puntosObtenidos;
    scoreDisplay.textContent = puntuacionTotal;

    // Renderizar Retroalimentación
    if (precision >= 0.88) {
        retroalimentacion.className = "retro-card retro-excelente";
        retroalimentacion.innerHTML = `
            🎉 ¡Excelente Nomenclatura! (+${puntosObtenidos} pts)
            <span class="retro-detalle">Precisión: ${porcentajePrec}% | Bono Rapidez: +${bonoVelocidad} pts ${usoPistaActual ? '| Pista: -10 pts' : ''}</span>
            <span class="retro-detalle"><strong>Nombre Oficial:</strong> ${actual.explicacion}</span>
        `;
    } else if (precision >= 0.60) {
        retroalimentacion.className = "retro-card retro-parcial";
        retroalimentacion.innerHTML = `
            💡 Muy Cerca (+${puntosObtenidos} pts)
            <span class="retro-detalle">Precisión: ${porcentajePrec}% | Revisa la ortografía o formato.</span>
            <span class="retro-detalle"><strong>Aceptados:</strong> ${actual.explicacion}</span>
        `;
    } else {
        retroalimentacion.className = "retro-card retro-incorrecto";
        retroalimentacion.innerHTML = `
            ❌ Nomenclatura Incorrecta (+0 pts)
            <span class="retro-detalle"><strong>Nomenclaturas Válidas:</strong> ${actual.explicacion}</span>
        `;
    }

    setTimeout(() => {
        indicePreguntaActual++;
        cargarPregunta();
    }, 2800);
}

function manejarTiempoAgotado() {
    respuestaInput.disabled = true;
    btnEnviarRespuesta.disabled = true;

    const actual = preguntasClase[indicePreguntaActual];
    retroalimentacion.className = "retro-card retro-incorrecto";
    retroalimentacion.innerHTML = `
        ⏰ ¡Tiempo Agotado! (+0 pts)
        <span class="retro-detalle"><strong>Nomenclaturas Válidas:</strong> ${actual.explicacion}</span>
    `;

    setTimeout(() => {
        indicePreguntaActual++;
        cargarPregunta();
    }, 2800);
}

function mostrarPantallaFinal() {
    pantallaJuego.classList.add("oculto");
    pantallaFinal.classList.remove("oculto");
    scoreFinal.textContent = `${puntuacionTotal} pts`;
    nombreFinal.textContent = nombreEstudiante;
    cursoFinal.textContent = cursoEstudiante;

    // 1. Enviar datos a Google Sheets (Fecha, Nombre, Curso, Puntaje)
    if (urlGoogleSheet !== "") {
        fetch(urlGoogleSheet, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                nombre: nombreEstudiante,
                curso: cursoEstudiante,
                puntaje: puntuacionTotal
            })
        }).catch(err => console.error("Error enviando resultado a Google Sheets:", err));
    }

    // 2. Cargar Ranking Global
    if (listaRanking) {
        listaRanking.innerHTML = "<li class='cargando-item'><i class='fa-solid fa-spinner fa-spin'></i> Actualizando ranking global...</li>";
    }

    setTimeout(() => {
        obtenerYMostrarRanking(listaRanking);
    }, 1200);
}

function obtenerYMostrarRanking(elementoLista) {
    if (!elementoLista || urlGoogleSheet === "") return;

    fetch(urlGoogleSheet)
        .then(response => response.json())
        .then(data => {
            elementoLista.innerHTML = "";

            if (!data || !Array.isArray(data) || data.length === 0) {
                elementoLista.innerHTML = "<li class='cargando-item'>No hay puntajes registrados aún.</li>";
                return;
            }

            // Ordenar por puntaje descendente
            data.sort((a, b) => Number(b.puntaje || 0) - Number(a.puntaje || 0));

            data.slice(0, 20).forEach((item, index) => {
                const li = document.createElement("li");
                let iconoMedalla = `#${index + 1}`;
                if (index === 0) iconoMedalla = "🥇";
                if (index === 1) iconoMedalla = "🥈";
                if (index === 2) iconoMedalla = "🥉";

                const nombreStr = item.nombre || "Anónimo";
                const cursoStr = item.curso || "N/A";
                const ptsNum = Number(item.puntaje || 0);

                li.innerHTML = `
                    <span class="ranking-item-left">
                        <span class="ranking-pos">${iconoMedalla}</span>
                        <div class="ranking-info">
                            <strong class="ranking-nombre">${nombreStr}</strong>
                            <small class="ranking-curso"><i class="fa-solid fa-graduation-cap"></i> ${cursoStr}</small>
                        </div>
                    </span>
                    <strong class="ranking-pts">${ptsNum} pts</strong>
                `;
                elementoLista.appendChild(li);
            });
        })
        .catch(err => {
            console.error("Error obteniendo ranking:", err);
            elementoLista.innerHTML = "<li class='cargando-item'>❌ Error al conectar con el ranking.</li>";
        });
}

// Reiniciar Juego
if (btnReiniciar) {
    btnReiniciar.addEventListener("click", () => {
        pantallaFinal.classList.add("oculto");
        pantallaInicio.classList.remove("oculto");
        inputNombre.value = "";
        inputCurso.value = "";
    });
}

// Modal de Ranking Global
if (btnVerRanking) {
    btnVerRanking.addEventListener("click", () => {
        modalRanking.classList.remove("oculto");
        listaRankingGlobal.innerHTML = "<li class='cargando-item'><i class='fa-solid fa-spinner fa-spin'></i> Cargando ranking...</li>";
        obtenerYMostrarRanking(listaRankingGlobal);
    });
}

const cerrarModal = () => modalRanking.classList.add("oculto");
if (btnCerrarRanking) btnCerrarRanking.addEventListener("click", cerrarModal);
if (btnCerrarModalX) btnCerrarModalX.addEventListener("click", cerrarModal);
