// ========================================================
// BANCO DE PREGUNTAS: NOMENCLATURA DE QUÍMICA INORGÁNICA
// (PREGUNTAS DE RESPUESTA ABIERTA)
// ========================================================

var bancoPreguntasCompleto = [
    {
        formula: "Fe₂O₃",
        categoria: "Óxidos Básicos",
        aceptadas: [
            "trióxido de dihierro", "trioxido de dihierro",
            "óxido de hierro(III)", "oxido de hierro(iii)", "oxido de hierro 3", "óxido de hierro 3",
            "óxido férrico", "oxido ferrico"
        ],
        pista: "El hierro actúa con su valencia +3. En nomenclatura Stock usa números romanos (III).",
        explicacion: "Sistemática: Trióxido de dihierro | Stock: Óxido de hierro(III) | Tradicional: Óxido férrico"
    },
    {
        formula: "HCl",
        categoria: "Hidrácidos / Haluros",
        aceptadas: [
            "cloruro de hidrógeno", "cloruro de hidrogeno",
            "ácido clorhídrico", "acido clorhidrico"
        ],
        pista: "Formado por hidrógeno y cloro. En disolución acuosa se nombra como un ácido.",
        explicacion: "Sistemática/Stock: Cloruro de hidrógeno | Disolución acuosa: Ácido clorhídrico"
    },
    {
        formula: "NaOH",
        categoria: "Hidróxidos",
        aceptadas: [
            "hidróxido de sodio", "hidroxido de sodio",
            "soda cáustica", "soda caustica"
        ],
        pista: "Contiene el grupo hidróxido (OH⁻) y un metal alcalino.",
        explicacion: "Nomenclatura oficial: Hidróxido de sodio (o Soda cáustica)"
    },
    {
        formula: "H₂SO₄",
        categoria: "Oxácidos",
        aceptadas: [
            "ácido sulfúrico", "acido sulfurico",
            "tetraoxosulfato (VI) de hidrógeno", "tetraoxosulfato de hidrogeno"
        ],
        pista: "El azufre actúa con su estado de oxidación máximo (+6).",
        explicacion: "Tradicional: Ácido sulfúrico | IUPAC: Tetraoxosulfato (VI) de hidrógeno"
    },
    {
        formula: "CO₂",
        categoria: "Óxidos Ácidos (Anhídridos)",
        aceptadas: [
            "dióxido de carbono", "dioxido de carbono",
            "anhídrido carbónico", "anhidrido carbonico",
            "óxido de carbono(IV)", "oxido de carbono(iv)", "oxido de carbono 4"
        ],
        pista: "Gas común de la respiración. Usa el prefijo 'di-' por sus dos oxígenos.",
        explicacion: "Sistemática: Dióxido de carbono | Stock: Óxido de carbono(IV) | Tradicional: Anhídrido carbónico"
    },
    {
        formula: "NaCl",
        categoria: "Sales Binarias",
        aceptadas: [
            "cloruro de sodio", "cloruro sodico", "cloruro sódico",
            "sal común", "sal comun"
        ],
        pista: "Sal de mesa compuesta por catión sodio y anión cloruro.",
        explicacion: "Nomenclatura oficial: Cloruro de sodio"
    },
    {
        formula: "NH₃",
        categoria: "Hidruros Volátiles",
        aceptadas: [
            "amoníaco", "amoniaco",
            "trihidruro de nitrógeno", "trihidruro de nitrogeno",
            "azano"
        ],
        pista: "Compuesto gaseoso de nitrógeno e hidrógeno de olor penetrante.",
        explicacion: "Aceptado por IUPAC: Amoníaco | Sistemática: Trihidruro de nitrógeno"
    },
    {
        formula: "BaSO₄",
        categoria: "Oxisales Ternarias",
        aceptadas: [
            "sulfato de bario", "tetraoxosulfato de bario"
        ],
        pista: "Unión del anión sulfato (SO₄²⁻) con el catión bario (Ba²⁺).",
        explicacion: "Nomenclatura oficial: Sulfato de bario"
    },
    {
        formula: "Cu₂O",
        categoria: "Óxidos Básicos",
        aceptadas: [
            "monóxido de dicobre", "monoxido de dicobre",
            "óxido de cobre(I)", "oxido de cobre(i)", "oxido de cobre 1",
            "óxido cuproso", "oxido cuproso"
        ],
        pista: "El cobre actúa con su menor valencia (+1).",
        explicacion: "Stock: Óxido de cobre(I) | Tradicional: Óxido cuproso | Sistemática: Monóxido de dicobre"
    },
    {
        formula: "Mg(OH)₂",
        categoria: "Hidróxidos",
        aceptadas: [
            "hidróxido de magnesio", "hidroxido de magnesio",
            "dihidróxido de magnesio", "dihidroxido de magnesio",
            "leche de magnesia"
        ],
        pista: "Metal alcalinotérreo con grupo hidróxido, usado en antiácidos.",
        explicacion: "IUPAC/Stock: Hidróxido de magnesio (o Dihidróxido de magnesio)"
    },
    {
        formula: "HNO₃",
        categoria: "Oxácidos",
        aceptadas: [
            "ácido nítrico", "acido nitrico",
            "trioxonitrato (V) de hidrógeno", "trioxonitrato de hidrogeno"
        ],
        pista: "El nitrógeno actúa con su valencia máxima (+5).",
        explicacion: "Tradicional: Ácido nítrico | IUPAC: Trioxonitrato (V) de hidrógeno"
    },
    {
        formula: "CaO",
        categoria: "Óxidos Básicos",
        aceptadas: [
            "óxido de calcio", "oxido de calcio",
            "monóxido de calcio", "monoxido de calcio",
            "cal viva"
        ],
        pista: "Conocido popularmente como cal viva.",
        explicacion: "Nomenclatura oficial: Óxido de calcio"
    },
    {
        formula: "H₂CO₃",
        categoria: "Oxácidos",
        aceptadas: [
            "ácido carbónico", "acido carbonico",
            "trioxocarbonato de hidrógeno", "trioxocarbonato de hidrogeno"
        ],
        pista: "Ácido débil presente en las bebidas efervescentes.",
        explicacion: "Tradicional: Ácido carbónico"
    },
    {
        formula: "CuO",
        categoria: "Óxidos Básicos",
        aceptadas: [
            "óxido de cobre(II)", "oxido de cobre(ii)", "oxido de cobre 2",
            "óxido cúprico", "oxido cuprico",
            "monóxido de cobre", "monoxido de cobre"
        ],
        pista: "El cobre actúa con su mayor valencia (+2).",
        explicacion: "Stock: Óxido de cobre(II) | Tradicional: Óxido cúprico | Sistemática: Monóxido de cobre"
    },
    {
        formula: "CaCO₃",
        categoria: "Oxisales Ternarias",
        aceptadas: [
            "carbonato de calcio", "carbonato calcico", "carbonato cálcico",
            "trioxocarbonato de calcio"
        ],
        pista: "Componente principal de las rocas calizas, cáscaras de huevo y tizas.",
        explicacion: "Nomenclatura oficial: Carbonato de calcio"
    },
    {
        formula: "H₂O₂",
        categoria: "Peróxidos",
        aceptadas: [
            "peróxido de hidrógeno", "peroxido de hidrogeno",
            "dióxido de dihidrógeno", "dioxido de dihidrogeno",
            "agua oxigenada"
        ],
        pista: "Conocido comúnmente como agua oxigenada.",
        explicacion: "Nomenclatura oficial: Peróxido de hidrógeno"
    },
    {
        formula: "FeCl₃",
        categoria: "Sales Binarias",
        aceptadas: [
            "cloruro de hierro(III)", "cloruro de hierro(iii)", "cloruro de hierro 3",
            "tricloruro de hierro",
            "cloruro férrico", "cloruro ferrico"
        ],
        pista: "El hierro actúa con su valencia mayor (+3) frente al cloro.",
        explicacion: "Stock: Cloruro de hierro(III) | Sistemática: Tricloruro de hierro | Tradicional: Cloruro férrico"
    },
    {
        formula: "KNO₃",
        categoria: "Oxisales Ternarias",
        aceptadas: [
            "nitrato de potasio", "nitrato potásico", "nitrato potasico",
            "trioxonitrato de potasio", "salitre"
        ],
        pista: "Componente principal del salitre.",
        explicacion: "Nomenclatura oficial: Nitrato de potasio"
    },
    {
        formula: "Al(OH)₃",
        categoria: "Hidróxidos",
        aceptadas: [
            "hidróxido de aluminio", "hidroxido de aluminio",
            "trihidróxido de aluminio", "trihidroxido de aluminio"
        ],
        pista: "El aluminio posee una única valencia (+3).",
        explicacion: "Nomenclatura oficial: Hidróxido de aluminio"
    },
    {
        formula: "SO₃",
        categoria: "Óxidos Ácidos (Anhídridos)",
        aceptadas: [
            "trióxido de azufre", "trioxido de azufre",
            "anhídrido sulfúrico", "anhidrido sulfurico",
            "óxido de azufre(VI)", "oxido de azufre(vi)", "oxido de azufre 6"
        ],
        pista: "El azufre actúa con valencia +6 frente a tres átomos de oxígeno.",
        explicacion: "Sistemática: Trióxido de azufre | Tradicional: Anhídrido sulfúrico | Stock: Óxido de azufre(VI)"
    }
];
