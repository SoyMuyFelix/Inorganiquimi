// ========================================================
// BANCO DE DATOS: NOMENCLATURA DE QUÍMICA INORGÁNICA
// ========================================================

const bancoPreguntasCompleto = [
    {
        formula: "Fe₂O₃",
        tipo: "Óxido Básico",
        nombresAceptados: [
            "trioxido de dihierro", "trióxido de dihierro",
            "oxido de hierro(iii)", "óxido de hierro(iii)", "oxido de hierro iii", "óxido de hierro iii",
            "oxido ferrico", "óxido férrico"
        ],
        pista: "El hierro actúa con su mayor estado de oxidación (+3).",
        explicacion: "Nomenclaturas válidas: Trióxido de dihierro (IUPAC) | Óxido de hierro(III) (Stock) | Óxido férrico (Tradicional)"
    },
    {
        formula: "HCl",
        tipo: "Hidrácido / Haluro de Hidrógeno",
        nombresAceptados: [
            "acido clorhidrico", "ácido clorhídrico",
            "cloruro de hidrogeno", "cloruro de hidrógeno"
        ],
        pista: "En disolución acuosa es un ácido muy fuerte presente en el estómago.",
        explicacion: "Nomenclaturas válidas: Ácido clorhídrico (acuoso) | Cloruro de hidrógeno (gaseoso/Stock)"
    },
    {
        formula: "NaOH",
        tipo: "Hidróxido",
        nombresAceptados: [
            "hidroxido de sodio", "hidróxido de sodio",
            "soda caustica", "soda cáustica", "sosa caustica", "sosa cáustica"
        ],
        pista: "Compuesto básico formado por sodio y el grupo hidróxido (OH⁻).",
        explicacion: "Nomenclaturas válidas: Hidróxido de sodio (Oficial) | Soda/Sosa cáustica (Nombre común)"
    },
    {
        formula: "H₂SO₄",
        tipo: "Oxácido",
        nombresAceptados: [
            "acido sulfurico", "ácido sulfúrico",
            "tetraoxosulfato de hidrogeno", "tetraoxosulfato de hidrógeno",
            "tetraoxosulfato (vi) de hidrogeno", "tetraoxosulfato (vi) de hidrógeno"
        ],
        pista: "Ácido fuerte en el que el azufre actúa con valencia +6.",
        explicacion: "Nomenclaturas válidas: Ácido sulfúrico (Tradicional/IUPAC) | Tetraoxosulfato (VI) de hidrógeno (Sistemática)"
    },
    {
        formula: "CO₂",
        tipo: "Óxido Ácido (Anhídrido)",
        nombresAceptados: [
            "dioxido de carbono", "dióxido de carbono",
            "anhidrido carbonico", "anhídrido carbónico",
            "oxido de carbono(iv)", "óxido de carbono(iv)", "oxido de carbono iv"
        ],
        pista: "Gas incoloro producido por la respiración y la combustión.",
        explicacion: "Nomenclaturas válidas: Dióxido de carbono (Sistemática) | Anhídrido carbónico (Tradicional) | Óxido de carbono(IV) (Stock)"
    },
    {
        formula: "NaCl",
        tipo: "Sal Binaria",
        nombresAceptados: [
            "cloruro de sodio", "cloruro sodico", "cloruro sódico",
            "sal comun", "sal común", "sal de mesa"
        ],
        pista: "Sal de mesa común formada por un metal alcalino y un halógeno.",
        explicacion: "Nomenclaturas válidas: Cloruro de sodio (Oficial) | Cloruro sódico (Tradicional) | Sal común"
    },
    {
        formula: "NH₃",
        tipo: "Hidruro Volátil",
        nombresAceptados: [
            "amoniaco", "amoníaco",
            "trihidruro de nitrogeno", "trihidruro de nitrógeno",
            "azano"
        ],
        pista: "Gas de olor penetrante formado por nitrógeno e hidrógeno.",
        explicacion: "Nomenclaturas válidas: Amoníaco (Aceptado IUPAC) | Trihidruro de nitrógeno (Sistemática) | Azano"
    },
    {
        formula: "BaSO₄",
        tipo: "Oxisal Ternaria",
        nombresAceptados: [
            "sulfato de bario",
            "tetraoxosulfato de bario"
        ],
        pista: "Sal insoluble de bario derivada del ácido sulfúrico.",
        explicacion: "Nomenclaturas válidas: Sulfato de bario (Oficial/Stock) | Tetraoxosulfato de bario (Sistemática)"
    },
    {
        formula: "Cu₂O",
        tipo: "Óxido Básico",
        nombresAceptados: [
            "oxido cuproso", "óxido cuproso",
            "oxido de cobre(i)", "óxido de cobre(i)", "oxido de cobre i", "óxido de cobre i",
            "monoxido de dicobre", "monóxido de dicobre"
        ],
        pista: "Óxido de cobre donde el metal tiene estado de oxidación +1.",
        explicacion: "Nomenclaturas válidas: Óxido cuproso (Tradicional) | Óxido de cobre(I) (Stock) | Monóxido de dicobre (Sistemática)"
    },
    {
        formula: "Mg(OH)₂",
        tipo: "Hidróxido",
        nombresAceptados: [
            "hidroxido de magnesio", "hidróxido de magnesio",
            "dihidroxido de magnesio", "dihidróxido de magnesio",
            "leche de magnesia"
        ],
        pista: "Utilizado comúnmente como antiácido y laxante.",
        explicacion: "Nomenclaturas válidas: Hidróxido de magnesio (Stock/IUPAC) | Dihidróxido de magnesio (Sistemática) | Leche de magnesia"
    },
    {
        formula: "HNO₃",
        tipo: "Oxácido",
        nombresAceptados: [
            "acido nitrico", "ácido nítrico",
            "trioxonitrato de hidrogeno", "trioxonitrato de hidrógeno",
            "trioxonitrato (v) de hidrogeno", "trioxonitrato (v) de hidrógeno"
        ],
        pista: "Ácido fuerte donde el nitrógeno actúa con valencia +5.",
        explicacion: "Nomenclaturas válidas: Ácido nítrico (Tradicional) | Trioxonitrato (V) de hidrógeno (Sistemática)"
    },
    {
        formula: "CaO",
        tipo: "Óxido Básico",
        nombresAceptados: [
            "oxido de calcio", "óxido de calcio",
            "monoxido de calcio", "monóxido de calcio",
            "cal viva"
        ],
        pista: "Conocido comúnmente como cal viva.",
        explicacion: "Nomenclaturas válidas: Óxido de calcio (Stock) | Monóxido de calcio (Sistemática) | Cal viva"
    },
    {
        formula: "H₂CO₃",
        tipo: "Oxácido",
        nombresAceptados: [
            "acido carbonico", "ácido carbónico",
            "trioxocarbonato de hidrogeno", "trioxocarbonato de hidrógeno"
        ],
        pista: "Ácido débil presente en bebidas carbonatadas o gaseosas.",
        explicacion: "Nomenclaturas válidas: Ácido carbónico (Tradicional) | Trioxocarbonato de hidrógeno (Sistemática)"
    },
    {
        formula: "CuO",
        tipo: "Óxido Básico",
        nombresAceptados: [
            "oxido cuproso", "óxido cúprico", "oxido cuprico",
            "oxido de cobre(ii)", "óxido de cobre(ii)", "oxido de cobre ii", "óxido de cobre ii",
            "monoxido de cobre", "monóxido de cobre"
        ],
        pista: "Óxido donde el cobre actúa con su mayor valencia (+2).",
        explicacion: "Nomenclaturas válidas: Óxido cúprico (Tradicional) | Óxido de cobre(II) (Stock) | Monóxido de cobre (Sistemática)"
    },
    {
        formula: "CaCO₃",
        tipo: "Oxisal Ternaria",
        nombresAceptados: [
            "carbonato de calcio",
            "trioxocarbonato de calcio",
            "caliza", "marmol", "mármol"
        ],
        pista: "Componente principal de las conchas marinas, la caliza y el mármol.",
        explicacion: "Nomenclaturas válidas: Carbonato de calcio (Stock/Tradicional) | Trioxocarbonato de calcio (Sistemática)"
    },
    {
        formula: "H₂O₂",
        tipo: "Peróxido",
        nombresAceptados: [
            "peroxido de hidrogeno", "peróxido de hidrógeno",
            "agua oxigenada",
            "dioxido de dihidrogeno", "dióxido de dihidrógeno"
        ],
        pista: "Líquido antiséptico conocido popularmente como agua oxigenada.",
        explicacion: "Nomenclaturas válidas: Peróxido de hidrógeno (IUPAC) | Agua oxigenada (Nombre común) | Dióxido de dihidrógeno"
    },
    {
        formula: "FeCl₃",
        tipo: "Sal Binaria",
        nombresAceptados: [
            "cloruro de hierro(iii)", "cloruro de hierro(iii)", "cloruro de hierro iii",
            "cloruro ferrico", "cloruro férrico",
            "tricloruro de hierro"
        ],
        pista: "Sal haloidea de hierro con estado de oxidación +3.",
        explicacion: "Nomenclaturas válidas: Cloruro de hierro(III) (Stock) | Cloruro férrico (Tradicional) | Tricloruro de hierro (Sistemática)"
    },
    {
        formula: "KOH",
        tipo: "Hidróxido",
        nombresAceptados: [
            "hidroxido de potasio", "hidróxido de potasio",
            "potasa caustica", "potasa cáustica"
        ],
        pista: "Base fuerte formada por potasio y el grupo hidróxido.",
        explicacion: "Nomenclaturas válidas: Hidróxido de potasio (Oficial) | Potasa cáustica (Nombre común)"
    },
    {
        formula: "Al(OH)₃",
        tipo: "Hidróxido",
        nombresAceptados: [
            "hidroxido de aluminio", "hidróxido de aluminio",
            "trihidroxido de aluminio", "trihidróxido de aluminio"
        ],
        pista: "Hidróxido metálico en el que el aluminio actúa con valencia +3.",
        explicacion: "Nomenclaturas válidas: Hidróxido de aluminio (Stock) | Trihidróxido de aluminio (Sistemática)"
    },
    {
        formula: "SO₃",
        tipo: "Óxido Ácido (Anhídrido)",
        nombresAceptados: [
            "trioxido de azufre", "trióxido de azufre",
            "anhidrido sulfurico", "anhídrido sulfúrico",
            "oxido de azufre(vi)", "óxido de azufre(vi)", "oxido de azufre vi"
        ],
        pista: "Óxido de azufre donde el no metal actúa con su máxima valencia (+6).",
        explicacion: "Nomenclaturas válidas: Trióxido de azufre (Sistemática) | Anhídrido sulfúrico (Tradicional) | Óxido de azufre(VI) (Stock)"
    },
    {
        formula: "NaHCO₃",
        tipo: "Sal Ácida",
        nombresAceptados: [
            "bicarbonato de sodio",
            "hidrogenocarbonato de sodio",
            "hidrogenotrioxocarbonato de sodio"
        ],
        pista: "Polvo blanco usado frecuentemente en repostería y como antiaćido.",
        explicacion: "Nomenclaturas válidas: Bicarbonato de sodio (Tradicional/Aceptado) | Hidrogenocarbonato de sodio (IUPAC)"
    },
    {
        formula: "KMnO₄",
        tipo: "Oxisal Ternaria",
        nombresAceptados: [
            "permanganato de potasio",
            "tetraoxomanganato (vii) de potasio"
        ],
        pista: "Sal intensamente purpúrea utilizada como desinfectante y oxidante fuerte.",
        explicacion: "Nomenclaturas válidas: Permanganato de potasio (Tradicional/Stock) | Tetraoxomanganato (VII) de potasio (Sistemática)"
    }
];
