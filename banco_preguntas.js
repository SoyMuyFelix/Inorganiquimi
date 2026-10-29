// ========================================================
// BANCO DE DATOS: NOMENCLATURA DE QUÍMICA INORGÁNICA
// TOTAL DE COMPUESTOS: 237
// ========================================================

var bancoPreguntasCompleto = [
    {
        "formula": "Na₂O",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "monóxido de disodio",
            "monoxido de disodio",
            "oxido de sodio",
            "óxido de sodio"
        ],
        "pista": "Óxido de un metal alcalino con valencia +1.",
        "explicacion": "Óxido de sodio (Stock/Tradicional) | Monóxido de disodio (IUPAC)"
    },
    {
        "formula": "K₂O",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "oxido de potasio",
            "monoxido de dipotasio",
            "monóxido de dipotasio",
            "óxido de potasio"
        ],
        "pista": "Óxido del metal potasio.",
        "explicacion": "Óxido de potasio (Stock/Tradicional) | Monóxido de dipotasio (IUPAC)"
    },
    {
        "formula": "Li₂O",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "monóxido de dilitio",
            "oxido de litio",
            "óxido de litio",
            "monoxido de dilitio"
        ],
        "pista": "Óxido del elemento más ligero del grupo 1.",
        "explicacion": "Óxido de litio | Monóxido de dilitio"
    },
    {
        "formula": "CaO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "cal viva",
            "monoxido de calcio",
            "monóxido de calcio",
            "oxido de calcio",
            "óxido de calcio"
        ],
        "pista": "Comúnmente conocido como cal viva.",
        "explicacion": "Óxido de calcio (Oficial) | Cal viva (Nombre común)"
    },
    {
        "formula": "MgO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "magnesia",
            "oxido de magnesio",
            "óxido de magnesio",
            "monoxido de magnesio",
            "monóxido de magnesio"
        ],
        "pista": "Óxido del metal alcalinotérreo magnesio.",
        "explicacion": "Óxido de magnesio | Magnesia"
    },
    {
        "formula": "BaO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "monóxido de bario",
            "monoxido de bario",
            "óxido de bario",
            "oxido de bario"
        ],
        "pista": "Óxido de bario con estado de oxidación +2.",
        "explicacion": "Óxido de bario | Monóxido de bario"
    },
    {
        "formula": "FeO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "oxido ferroso",
            "oxido de hierro(ii)",
            "óxido ferroso",
            "oxido de hierro ii",
            "monoxido de hierro",
            "óxido de hierro(ii)",
            "monóxido de hierro",
            "óxido de hierro ii"
        ],
        "pista": "El hierro actúa con su menor valencia (+2).",
        "explicacion": "Óxido de hierro(II) (Stock) | Óxido ferroso (Tradicional) | Monóxido de hierro (IUPAC)"
    },
    {
        "formula": "Fe₂O₃",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "óxido de hierro(iii)",
            "oxido ferrico",
            "oxido de hierro(iii)",
            "oxido de hierro iii",
            "trióxido de dihierro",
            "trioxido de dihierro",
            "óxido de hierro iii",
            "óxido férrico"
        ],
        "pista": "El hierro actúa con su mayor valencia (+3). Es el componente del herrumbre.",
        "explicacion": "Óxido de hierro(III) (Stock) | Óxido férrico (Tradicional) | Trióxido de dihierro (IUPAC)"
    },
    {
        "formula": "Cu₂O",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "oxido de cobre(i)",
            "óxido de cobre(i)",
            "oxido cuproso",
            "óxido de cobre i",
            "monóxido de dicobre",
            "monoxido de dicobre",
            "oxido de cobre i",
            "óxido cuproso"
        ],
        "pista": "El cobre actúa con su menor valencia (+1).",
        "explicacion": "Óxido de cobre(I) (Stock) | Óxido cuproso (Tradicional) | Monóxido de dicobre (IUPAC)"
    },
    {
        "formula": "CuO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "óxido cúprico",
            "oxido de cobre ii",
            "oxido de cobre(ii)",
            "monoxido de cobre",
            "monóxido de cobre",
            "óxido de cobre ii",
            "óxido de cobre(ii)",
            "oxido cuprico"
        ],
        "pista": "El cobre actúa con valencia +2.",
        "explicacion": "Óxido de cobre(II) (Stock) | Óxido cúprico (Tradicional) | Monóxido de cobre (IUPAC)"
    },
    {
        "formula": "ZnO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "oxido de cinc",
            "óxido de zinc",
            "oxido de zinc",
            "monóxido de zinc",
            "óxido de cinc",
            "monoxido de zinc"
        ],
        "pista": "Usado ampliamente en pomadas y protectores solares.",
        "explicacion": "Óxido de zinc / cinc"
    },
    {
        "formula": "Al₂O₃",
        "tipo": "Óxido Básico / Anfótero",
        "nombresAceptados": [
            "alúmina",
            "óxido de aluminio",
            "oxido de aluminio",
            "alumina",
            "trioxido de dialuminio",
            "trióxido de dialuminio"
        ],
        "pista": "Conocido como alúmina, mineral muy duro.",
        "explicacion": "Óxido de aluminio | Trióxido de dialuminio | Alúmina"
    },
    {
        "formula": "PbO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "óxido de plomo ii",
            "oxido de plomo(ii)",
            "monóxido de plomo",
            "litargirio",
            "óxido de plomo(ii)",
            "oxido plumboso",
            "oxido de plomo ii",
            "óxido plumboso",
            "monoxido de plomo"
        ],
        "pista": "El plomo actúa con valencia +2.",
        "explicacion": "Óxido de plomo(II) | Óxido plumboso | Monóxido de plomo"
    },
    {
        "formula": "PbO₂",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "óxido de plomo(iv)",
            "dióxido de plomo",
            "óxido de plomo iv",
            "óxido plúmbico",
            "oxido de plomo iv",
            "oxido plumbico",
            "dioxido de plomo",
            "oxido de plomo(iv)"
        ],
        "pista": "El plomo actúa con valencia +4.",
        "explicacion": "Óxido de plomo(IV) | Óxido plúmbico | Dióxido de plomo"
    },
    {
        "formula": "SnO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "monóxido de estaño",
            "monoxido de estano",
            "óxido estannoso",
            "oxido estannoso",
            "óxido de estaño ii",
            "óxido de estaño(ii)",
            "oxido de estano ii",
            "oxido de estano(ii)"
        ],
        "pista": "El estaño actúa con valencia +2.",
        "explicacion": "Óxido de estaño(II) | Óxido estannoso | Monóxido de estaño"
    },
    {
        "formula": "SnO₂",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "óxido de estaño iv",
            "óxido estánnico",
            "dioxido de estano",
            "oxido de estano(iv)",
            "dióxido de estaño",
            "óxido de estaño(iv)",
            "oxido estannico",
            "oxido de estano iv"
        ],
        "pista": "El estaño actúa con valencia +4.",
        "explicacion": "Óxido de estaño(IV) | Óxido estánnico | Dióxido de estaño"
    },
    {
        "formula": "HgO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "oxido de mercurio ii",
            "oxido de mercurio(ii)",
            "óxido mercúrico",
            "monoxido de mercurio",
            "monóxido de mercurio",
            "oxido mercurico",
            "óxido de mercurio ii",
            "óxido de mercurio(ii)"
        ],
        "pista": "El mercurio actúa con valencia +2.",
        "explicacion": "Óxido de mercurio(II) | Óxido mercúrico"
    },
    {
        "formula": "Hg₂O",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "oxido de mercurio(i)",
            "óxido de mercurio i",
            "monoxido de dimercurio",
            "oxido de mercurio i",
            "óxido mercurioso",
            "monóxido de dimercurio",
            "óxido de mercurio(i)",
            "oxido mercurioso"
        ],
        "pista": "El mercurio actúa con valencia +1.",
        "explicacion": "Óxido de mercurio(I) | Óxido mercurioso"
    },
    {
        "formula": "Ag₂O",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "monoxido de diplata",
            "óxido de plata",
            "monóxido de diplata",
            "oxido de plata"
        ],
        "pista": "La plata actúa con valencia +1.",
        "explicacion": "Óxido de plata | Monóxido de diplata"
    },
    {
        "formula": "NiO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "oxido de niquel ii",
            "óxido de níquel(ii)",
            "monoxido de niquel",
            "oxido niqueloso",
            "monóxido de níquel",
            "oxido de niquel(ii)",
            "óxido niqueloso",
            "óxido de níquel ii"
        ],
        "pista": "El níquel actúa con valencia +2.",
        "explicacion": "Óxido de níquel(II) | Óxido niqueloso"
    },
    {
        "formula": "Ni₂O₃",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "oxido niquelico",
            "óxido niquélico",
            "trioxido de diniquel",
            "óxido de níquel iii",
            "trióxido de diníquel",
            "óxido de níquel(iii)",
            "oxido de niquel(iii)",
            "oxido de niquel iii"
        ],
        "pista": "El níquel actúa con valencia +3.",
        "explicacion": "Óxido de níquel(III) | Óxido niquélico | Trióxido de diníquel"
    },
    {
        "formula": "Cr₂O₃",
        "tipo": "Óxido Básico / Anfótero",
        "nombresAceptados": [
            "oxido cromico",
            "óxido de cromo iii",
            "trioxido de dicromo",
            "trióxido de dicromo",
            "óxido de cromo(iii)",
            "oxido de cromo iii",
            "oxido de cromo(iii)",
            "óxido crómico"
        ],
        "pista": "El cromo actúa con valencia +3 en este óxido verde.",
        "explicacion": "Óxido de cromo(III) | Óxido crómico | Trióxido de dicromo"
    },
    {
        "formula": "MnO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "monoxido de manganeso",
            "oxido manganoso",
            "oxido de manganeso ii",
            "óxido de manganeso ii",
            "óxido de manganeso(ii)",
            "monóxido de manganeso",
            "óxido manganoso",
            "oxido de manganeso(ii)"
        ],
        "pista": "El manganeso actúa con valencia +2.",
        "explicacion": "Óxido de manganeso(II) | Óxido manganoso"
    },
    {
        "formula": "MnO₂",
        "tipo": "Óxido Básico / Anfótero",
        "nombresAceptados": [
            "óxido de manganeso(iv)",
            "dióxido de manganeso",
            "oxido de manganeso(iv)",
            "oxido de manganeso iv",
            "dioxido de manganeso",
            "óxido de manganeso iv",
            "pirolusita"
        ],
        "pista": "Conocido como dióxido de manganeso o pirolusita.",
        "explicacion": "Dióxido de manganeso | Óxido de manganeso(IV)"
    },
    {
        "formula": "CoO",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "óxido de cobalto ii",
            "oxido cobaltoso",
            "óxido cobaltoso",
            "óxido de cobalto(ii)",
            "oxido de cobalto(ii)",
            "monoxido de cobalto",
            "monóxido de cobalto",
            "oxido de cobalto ii"
        ],
        "pista": "El cobalto actúa con valencia +2.",
        "explicacion": "Óxido de cobalto(II) | Óxido cobaltoso"
    },
    {
        "formula": "Co₂O₃",
        "tipo": "Óxido Básico",
        "nombresAceptados": [
            "oxido cobaltico",
            "óxido de cobalto iii",
            "óxido cobáltico",
            "trioxido de dicobalto",
            "trióxido de dicobalto",
            "oxido de cobalto iii",
            "óxido de cobalto(iii)",
            "oxido de cobalto(iii)"
        ],
        "pista": "El cobalto actúa con valencia +3.",
        "explicacion": "Óxido de cobalto(III) | Óxido cobáltico"
    },
    {
        "formula": "CO₂",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "óxido de carbono(iv)",
            "dioxido de carbono",
            "anhidrido carbonico",
            "oxido de carbono iv",
            "oxido de carbono(iv)",
            "anhídrido carbónico",
            "dióxido de carbono"
        ],
        "pista": "Gas incoloro producto de la respiración y combustión.",
        "explicacion": "Dióxido de carbono (IUPAC) | Anhídrido carbónico (Tradicional) | Óxido de carbono(IV) (Stock)"
    },
    {
        "formula": "CO",
        "tipo": "Óxido Ácido / Neutro",
        "nombresAceptados": [
            "óxido de carbono(ii)",
            "oxido de carbono(ii)",
            "anhidrido carbonoso",
            "monóxido de carbono",
            "anhídrido carbonoso",
            "monoxido de carbono"
        ],
        "pista": "Gas tóxico inodoro por combustión incompleta.",
        "explicacion": "Monóxido de carbono | Óxido de carbono(II)"
    },
    {
        "formula": "SO₂",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "dioxido de azufre",
            "dióxido de azufre",
            "anhidrido sulfuroso",
            "óxido de azufre(iv)",
            "oxido de azufre(iv)",
            "anhídrido sulfuroso"
        ],
        "pista": "El azufre actúa con valencia +4.",
        "explicacion": "Dióxido de azufre | Anhídrido sulfuroso | Óxido de azufre(IV)"
    },
    {
        "formula": "SO₃",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "trioxido de azufre",
            "óxido de azufre(vi)",
            "anhídrido sulfúrico",
            "trióxido de azufre",
            "anhidrido sulfurico",
            "oxido de azufre(vi)"
        ],
        "pista": "El azufre actúa con valencia +6.",
        "explicacion": "Trióxido de azufre | Anhídrido sulfúrico | Óxido de azufre(VI)"
    },
    {
        "formula": "N₂O₃",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "trióxido de dinitrógeno",
            "trioxido de dinitrogeno",
            "oxido de nitrogeno(iii)",
            "óxido de nitrógeno(iii)",
            "anhídrido nitroso",
            "anhidrido nitroso"
        ],
        "pista": "El nitrógeno actúa con valencia +3.",
        "explicacion": "Trióxido de dinitrógeno | Anhídrido nitroso"
    },
    {
        "formula": "N₂O₅",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "pentoxido de dinitrogeno",
            "anhídrido nítrico",
            "pentaóxido de dinitrógeno",
            "anhidrido nitrico",
            "óxido de nitrógeno(v)",
            "oxido de nitrogeno(v)",
            "pentóxido de dinitrógeno",
            "pentaoxido de dinitrogeno"
        ],
        "pista": "El nitrógeno actúa con su máxima valencia (+5).",
        "explicacion": "Pentaóxido de dinitrógeno | Anhídrido nítrico"
    },
    {
        "formula": "NO₂",
        "tipo": "Óxido Ácido",
        "nombresAceptados": [
            "oxido de nitrogeno(iv)",
            "dioxido de nitrogeno",
            "óxido de nitrógeno(iv)",
            "dióxido de nitrógeno"
        ],
        "pista": "Gas pardo tóxico de la contaminación atmosférica.",
        "explicacion": "Dióxido de nitrógeno | Óxido de nitrógeno(IV)"
    },
    {
        "formula": "N₂O",
        "tipo": "Óxido Neutro",
        "nombresAceptados": [
            "monóxido de dinitrógeno",
            "óxido de nitrógeno(i)",
            "monoxido de dinitrogeno",
            "gas hilarante",
            "óxido nitroso",
            "oxido de nitrogeno(i)",
            "oxido nitroso"
        ],
        "pista": "Conocido comúnmente como gas hilarante o anestésico.",
        "explicacion": "Monóxido de dinitrógeno | Óxido nitroso"
    },
    {
        "formula": "P₂O₃",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "trióxido de difósforo",
            "anhidrido fosforoso",
            "trioxido de difosforo",
            "óxido de fósforo(iii)",
            "anhídrido fosforoso",
            "oxido de fosforo(iii)"
        ],
        "pista": "El fósforo actúa con valencia +3.",
        "explicacion": "Trióxido de difósforo | Anhídrido fosforoso"
    },
    {
        "formula": "P₂O₅",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "óxido de fósforo(v)",
            "pentóxido de difósforo",
            "pentaoxido de difosforo",
            "oxido de fosforo(v)",
            "pentoxido de difosforo",
            "anhidrido fosforico",
            "anhídrido fosfórico",
            "pentaóxido de difósforo"
        ],
        "pista": "El fósforo actúa con valencia +5.",
        "explicacion": "Pentaóxido de difósforo | Anhídrido fosfórico"
    },
    {
        "formula": "Cl₂O",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "anhídrido hipocloroso",
            "monóxido de dicloro",
            "anhidrido hipocloroso",
            "óxido de cloro(i)",
            "oxido de cloro(i)",
            "monoxido de dicloro"
        ],
        "pista": "El cloro actúa con la menor valencia (+1).",
        "explicacion": "Monóxido de dicloro | Anhídrido hipocloroso"
    },
    {
        "formula": "Cl₂O₃",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "oxido de cloro(iii)",
            "anhídrido cloroso",
            "óxido de cloro(iii)",
            "trioxido de dicloro",
            "trióxido de dicloro",
            "anhidrido cloroso"
        ],
        "pista": "El cloro actúa con valencia +3.",
        "explicacion": "Trióxido de dicloro | Anhídrido cloroso"
    },
    {
        "formula": "Cl₂O₅",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "pentóxido de dicloro",
            "óxido de cloro(v)",
            "oxido de cloro(v)",
            "pentaoxido de dicloro",
            "pentoxido de dicloro",
            "anhidrido clorico",
            "pentaóxido de dicloro",
            "anhídrido clórico"
        ],
        "pista": "El cloro actúa con valencia +5.",
        "explicacion": "Pentaóxido de dicloro | Anhídrido clórico"
    },
    {
        "formula": "Cl₂O₇",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "anhidrido perclorico",
            "oxido de cloro(vii)",
            "anhídrido perclórico",
            "heptaóxido de dicloro",
            "heptaoxido de dicloro",
            "óxido de cloro(vii)"
        ],
        "pista": "El cloro actúa con su máxima valencia (+7).",
        "explicacion": "Heptaóxido de dicloro | Anhídrido perclórico"
    },
    {
        "formula": "SiO₂",
        "tipo": "Óxido Ácido (Anhídrido)",
        "nombresAceptados": [
            "silice",
            "dióxido de silicio",
            "anhidrido silicico",
            "sílice",
            "dioxido de silicio",
            "anhídrido silícico",
            "oxido de silicio(iv)",
            "óxido de silicio(iv)"
        ],
        "pista": "Componente principal del cuarzo y la arena.",
        "explicacion": "Dióxido de silicio | Sílice"
    },
    {
        "formula": "NaOH",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "sosa caustica",
            "soda cáustica",
            "sosa cáustica",
            "hidroxido de sodio",
            "hidróxido de sodio",
            "soda caustica"
        ],
        "pista": "Conocido popularmente como soda caustica.",
        "explicacion": "Hidróxido de sodio | Soda cáustica"
    },
    {
        "formula": "KOH",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "hidróxido de potasio",
            "potasa cáustica",
            "hidroxido de potasio",
            "potasa caustica"
        ],
        "pista": "Conocido comúnmente como potasa caustica.",
        "explicacion": "Hidróxido de potasio | Potasa cáustica"
    },
    {
        "formula": "Ca(OH)₂",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "cal apagada",
            "hidróxido de calcio",
            "dihidroxido de calcio",
            "hidroxido de calcio",
            "dihidróxido de calcio"
        ],
        "pista": "Conocido como cal apagada.",
        "explicacion": "Hidróxido de calcio | Cal apagada"
    },
    {
        "formula": "Mg(OH)₂",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "hidróxido de magnesio",
            "hidroxido de magnesio",
            "dihidroxido de magnesio",
            "dihidróxido de magnesio",
            "leche de magnesia"
        ],
        "pista": "Utilizado en medicina como antiácido (Leche de magnesia).",
        "explicacion": "Hidróxido de magnesio | Leche de magnesia"
    },
    {
        "formula": "Al(OH)₃",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "trihidroxido de aluminio",
            "hidroxido de aluminio",
            "hidróxido de aluminio",
            "trihidróxido de aluminio"
        ],
        "pista": "Hidróxido con tres grupos OH⁻.",
        "explicacion": "Hidróxido de aluminio | Trihidróxido de aluminio"
    },
    {
        "formula": "Fe(OH)₂",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "hidroxido ferroso",
            "hidroxido de hierro(ii)",
            "dihidroxido de hierro",
            "hidróxido de hierro(ii)",
            "hidroxido de hierro ii",
            "dihidróxido de hierro",
            "hidróxido de hierro ii",
            "hidróxido ferroso"
        ],
        "pista": "El hierro actúa con valencia +2.",
        "explicacion": "Hidróxido de hierro(II) | Hidróxido ferroso"
    },
    {
        "formula": "Fe(OH)₃",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "trihidroxido de hierro",
            "hidroxido ferrico",
            "hidroxido de hierro iii",
            "hidroxido de hierro(iii)",
            "hidróxido férrico",
            "trihidróxido de hierro",
            "hidróxido de hierro(iii)",
            "hidróxido de hierro iii"
        ],
        "pista": "El hierro actúa con valencia +3.",
        "explicacion": "Hidróxido de hierro(III) | Hidróxido férrico"
    },
    {
        "formula": "Cu(OH)₂",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "hidróxido de cobre(ii)",
            "hidróxido cúprico",
            "dihidróxido de cobre",
            "hidroxido de cobre ii",
            "hidróxido de cobre ii",
            "dihidroxido de cobre",
            "hidroxido de cobre(ii)",
            "hidroxido cuprico"
        ],
        "pista": "Hidróxido azul del cobre con valencia +2.",
        "explicacion": "Hidróxido de cobre(II) | Hidróxido cúprico"
    },
    {
        "formula": "CuOH",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "hidroxido de cobre(i)",
            "hidróxido de cobre i",
            "monohidroxido de cobre",
            "hidroxido de cobre i",
            "hidróxido de cobre(i)",
            "hidróxido cuproso",
            "monohidróxido de cobre",
            "hidroxido cuproso"
        ],
        "pista": "El cobre actúa con valencia +1.",
        "explicacion": "Hidróxido de cobre(I) | Hidróxido cuproso"
    },
    {
        "formula": "NH₄OH",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "agua de amoniaco",
            "agua de amoníaco",
            "hidroxido de amonio",
            "hidróxido de amonio"
        ],
        "pista": "Formado por la disolución de amoníaco en agua.",
        "explicacion": "Hidróxido de amonio"
    },
    {
        "formula": "Zn(OH)₂",
        "tipo": "Hidróxido",
        "nombresAceptados": [
            "dihidroxido de zinc",
            "hidroxido de cinc",
            "hidroxido de zinc",
            "dihidróxido de zinc",
            "hidróxido de cinc",
            "hidróxido de zinc"
        ],
        "pista": "Hidróxido de zinc.",
        "explicacion": "Hidróxido de zinc / cinc"
    },
    {
        "formula": "HCl",
        "tipo": "Hidrácido / Haluro",
        "nombresAceptados": [
            "cloruro de hidrogeno",
            "ácido clorhídrico",
            "cloruro de hidrógeno",
            "acido clorhidrico"
        ],
        "pista": "Ácido estomacal en disolución acuosa.",
        "explicacion": "Ácido clorhídrico (en agua) | Cloruro de hidrógeno (gaseoso)"
    },
    {
        "formula": "HF",
        "tipo": "Hidrácido / Haluro",
        "nombresAceptados": [
            "ácido fluorhídrico",
            "fluoruro de hidrógeno",
            "fluoruro de hidrogeno",
            "acido fluorhidrico"
        ],
        "pista": "Capaz de corroer el vidrio.",
        "explicacion": "Ácido fluorhídrico | Fluoruro de hidrógeno"
    },
    {
        "formula": "HBr",
        "tipo": "Hidrácido / Haluro",
        "nombresAceptados": [
            "acido bromhidrico",
            "bromuro de hidrógeno",
            "bromuro de hidrogeno",
            "ácido bromhídrico"
        ],
        "pista": "Hidrácido formado con bromo.",
        "explicacion": "Ácido bromhídrico | Bromuro de hidrógeno"
    },
    {
        "formula": "HI",
        "tipo": "Hidrácido / Haluro",
        "nombresAceptados": [
            "acido yodhidrico",
            "yoduro de hidrógeno",
            "yoduro de hidrogeno",
            "ácido yodhídrico"
        ],
        "pista": "Hidrácido formado con yodo.",
        "explicacion": "Ácido yodhídrico | Yoduro de hidrógeno"
    },
    {
        "formula": "H₂S",
        "tipo": "Hidrácido",
        "nombresAceptados": [
            "acido sulfhidrico",
            "ácido sulfhídrico",
            "sulfuro de hidrógeno",
            "sulfuro de hidrogeno"
        ],
        "pista": "Gas con olor característico a huevos podridos.",
        "explicacion": "Ácido sulfhídrico | Sulfuro de hidrógeno"
    },
    {
        "formula": "NH₃",
        "tipo": "Hidruro Volátil",
        "nombresAceptados": [
            "trihidruro de nitrogeno",
            "azano",
            "trihidruro de nitrógeno",
            "amoniaco",
            "amoníaco"
        ],
        "pista": "Gas incoloro de olor penetrante ampliamente usado en limpieza.",
        "explicacion": "Amoníaco | Trihidruro de nitrógeno"
    },
    {
        "formula": "PH₃",
        "tipo": "Hidruro Volátil",
        "nombresAceptados": [
            "fosfano",
            "trihidruro de fosforo",
            "fosfina",
            "trihidruro de fósforo"
        ],
        "pista": "Hidruro del fósforo.",
        "explicacion": "Fosfano / Fosfina | Trihidruro de fósforo"
    },
    {
        "formula": "NaH",
        "tipo": "Hidruro Metálico",
        "nombresAceptados": [
            "hidruro sodico",
            "hidruro sódico",
            "hidruro de sodio"
        ],
        "pista": "El hidrógeno actúa con estado de oxidación -1.",
        "explicacion": "Hidruro de sodio"
    },
    {
        "formula": "CaH₂",
        "tipo": "Hidruro Metálico",
        "nombresAceptados": [
            "hidruro de calcio",
            "dihidruro de calcio"
        ],
        "pista": "Hidruro de calcio.",
        "explicacion": "Hidruro de calcio | Dihidruro de calcio"
    },
    {
        "formula": "H₂SO₄",
        "tipo": "Oxácido",
        "nombresAceptados": [
            "acido sulfurico",
            "tetraoxosulfato de hidrógeno",
            "tetraoxosulfato de hidrogeno",
            "ácido sulfúrico"
        ],
        "pista": "Ácido de batería, azufre con valencia +6.",
        "explicacion": "Ácido sulfúrico | Tetraoxosulfato (VI) de hidrógeno"
    },
    {
        "formula": "H₂SO₃",
        "tipo": "Oxácido",
        "nombresAceptados": [
            "ácido sulfuroso",
            "trioxosulfato de hidrogeno",
            "trioxosulfato de hidrógeno",
            "acido sulfuroso"
        ],
        "pista": "Azufre con valencia +4.",
        "explicacion": "Ácido sulfuroso | Trioxosulfato (IV) de hidrógeno"
    },
    {
        "formula": "HNO₃",
        "tipo": "Oxácido",
        "nombresAceptados": [
            "acido nitrico",
            "trioxonitrato de hidrógeno",
            "ácido nítrico",
            "trioxonitrato de hidrogeno"
        ],
        "pista": "Nitrógeno con valencia +5. Ácido fuerte muy oxidante.",
        "explicacion": "Ácido nítrico | Trioxonitrato (V) de hidrógeno"
    },
    {
        "formula": "HNO₂",
        "tipo": "Oxácido",
        "nombresAceptados": [
            "acido nitroso",
            "ácido nitroso",
            "dioxonitrato de hidrógeno",
            "dioxonitrato de hidrogeno"
        ],
        "pista": "Nitrógeno con valencia +3.",
        "explicacion": "Ácido nitroso | Dioxonitrato (III) de hidrógeno"
    },
    {
        "formula": "H₂CO₃",
        "tipo": "Oxácido",
        "nombresAceptados": [
            "ácido carbónico",
            "trioxocarbonato de hidrogeno",
            "acido carbonico",
            "trioxocarbonato de hidrógeno"
        ],
        "pista": "Ácido débil presente en bebidas gaseosas.",
        "explicacion": "Ácido carbónico"
    },
    {
        "formula": "H₃PO₄",
        "tipo": "Oxácido",
        "nombresAceptados": [
            "ácido fosfórico",
            "ácido ortofosfórico",
            "acido ortofosforico",
            "tetraoxofosfato de hidrogeno",
            "tetraoxofosfato de hidrógeno",
            "acido fosforico"
        ],
        "pista": "Fósforo con valencia +5.",
        "explicacion": "Ácido fosfórico / Ortofosfórico"
    },
    {
        "formula": "HClO",
        "tipo": "Oxácido",
        "nombresAceptados": [
            "ácido hipocloroso",
            "acido hipocloroso",
            "oxoclorato de hidrógeno",
            "oxoclorato de hidrogeno"
        ],
        "pista": "Cloro con valencia +1.",
        "explicacion": "Ácido hipocloroso"
    },
    {
        "formula": "HClO₂",
        "tipo": "Oxácido",
        "nombresAceptados": [
            "ácido cloroso",
            "acido cloroso",
            "dioxoclorato de hidrógeno",
            "dioxoclorato de hidrogeno"
        ],
        "pista": "Cloro con valencia +3.",
        "explicacion": "Ácido cloroso"
    },
    {
        "formula": "HClO₃",
        "tipo": "Oxácido",
        "nombresAceptados": [
            "trioxoclorato de hidrógeno",
            "trioxoclorato de hidrogeno",
            "ácido clórico",
            "acido clorico"
        ],
        "pista": "Cloro con valencia +5.",
        "explicacion": "Ácido clórico"
    },
    {
        "formula": "HClO₄",
        "tipo": "Oxácido",
        "nombresAceptados": [
            "tetraoxoclorato de hidrogeno",
            "acido perclorico",
            "tetraoxoclorato de hidrógeno",
            "ácido perclórico"
        ],
        "pista": "Cloro con su máxima valencia (+7). Ácido extremadamente fuerte.",
        "explicacion": "Ácido perclórico"
    },
    {
        "formula": "NaCl",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "sal comun",
            "cloruro de sodio",
            "cloruro sodico",
            "cloruro sódico",
            "sal común",
            "sal de mesa"
        ],
        "pista": "Sal común de cocina.",
        "explicacion": "Cloruro de sodio | Sal común"
    },
    {
        "formula": "KCl",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de potasio",
            "cloruro potásico",
            "cloruro potasico"
        ],
        "pista": "Sal de potasio usada en fertilizantes y sustituto de sal.",
        "explicacion": "Cloruro de potasio"
    },
    {
        "formula": "CaCl₂",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de calcio",
            "dicloruro de calcio"
        ],
        "pista": "Usado para deshielo de carreteras.",
        "explicacion": "Cloruro de calcio"
    },
    {
        "formula": "MgCl₂",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de magnesio",
            "dicloruro de magnesio"
        ],
        "pista": "Sal de magnesio.",
        "explicacion": "Cloruro de magnesio"
    },
    {
        "formula": "FeCl₂",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de hierro ii",
            "cloruro de hierro(ii)",
            "dicloruro de hierro",
            "cloruro ferroso"
        ],
        "pista": "Hierro con valencia +2.",
        "explicacion": "Cloruro de hierro(II) | Cloruro ferroso"
    },
    {
        "formula": "FeCl₃",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de hierro(iii)",
            "cloruro de hierro iii",
            "cloruro ferrico",
            "cloruro férrico",
            "tricloruro de hierro"
        ],
        "pista": "Hierro con valencia +3.",
        "explicacion": "Cloruro de hierro(III) | Cloruro férrico"
    },
    {
        "formula": "CuCl",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "monocloruro de cobre",
            "cloruro cuproso",
            "cloruro de cobre(i)",
            "cloruro de cobre i"
        ],
        "pista": "Cobre con valencia +1.",
        "explicacion": "Cloruro de cobre(I) | Cloruro cuproso"
    },
    {
        "formula": "CuCl₂",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro cuprico",
            "cloruro cúprico",
            "cloruro de cobre ii",
            "cloruro de cobre(ii)",
            "dicloruro de cobre"
        ],
        "pista": "Cobre con valencia +2.",
        "explicacion": "Cloruro de cobre(II) | Cloruro cúprico"
    },
    {
        "formula": "KI",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro potásico",
            "yoduro de potasio",
            "yoduro potasico"
        ],
        "pista": "Usado para sal yodada.",
        "explicacion": "Yoduro de potasio"
    },
    {
        "formula": "KBr",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de potasio",
            "bromuro potasico",
            "bromuro potásico"
        ],
        "pista": "Sal de bromo y potasio.",
        "explicacion": "Bromuro de potasio"
    },
    {
        "formula": "AgCl",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de plata"
        ],
        "pista": "Precipitado blanco insoluble fotosensible.",
        "explicacion": "Cloruro de plata"
    },
    {
        "formula": "ZnS",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "sulfuro de zinc",
            "sulfuro de cinc",
            "monosulfuro de zinc"
        ],
        "pista": "Mineral blenda de zinc.",
        "explicacion": "Sulfuro de zinc / cinc"
    },
    {
        "formula": "CaCO₃",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "carbonato de calcio",
            "tiza",
            "trioxocarbonato de calcio",
            "mármol",
            "marmol",
            "calcita"
        ],
        "pista": "Componente de la caliza, mármol y conchas marinas.",
        "explicacion": "Carbonato de calcio"
    },
    {
        "formula": "NaHCO₃",
        "tipo": "Sal Ácida",
        "nombresAceptados": [
            "hidrogenocarbonato de sodio",
            "carbonato acido de sodio",
            "carbonato ácido de sodio",
            "bicarbonato de sodio"
        ],
        "pista": "Utilizado en repostería y como antiácido casero.",
        "explicacion": "Bicarbonato de sodio | Hidrogenocarbonato de sodio"
    },
    {
        "formula": "KNO₃",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de potasio",
            "salitre",
            "trioxonitrato de potasio"
        ],
        "pista": "Conocido comúnmente como salitre.",
        "explicacion": "Nitrato de potasio | Salitre"
    },
    {
        "formula": "NaNO₃",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de sodio",
            "salitre de chile",
            "trioxonitrato de sodio"
        ],
        "pista": "Salitre sódico.",
        "explicacion": "Nitrato de sodio"
    },
    {
        "formula": "KMnO₄",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "tetraoxomanganato de potasio",
            "permanganato de potasio"
        ],
        "pista": "Sólido morado intenso muy oxidante.",
        "explicacion": "Permanganato de potasio"
    },
    {
        "formula": "K₂Cr₂O₇",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "heptaoxodicromato de potasio",
            "dicromato de potasio"
        ],
        "pista": "Sal naranja brillante muy oxidante.",
        "explicacion": "Dicromato de potasio"
    },
    {
        "formula": "CaSO₄",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "yeso",
            "sulfato de calcio",
            "tetraoxosulfato de calcio"
        ],
        "pista": "Componente principal del yeso.",
        "explicacion": "Sulfato de calcio | Yeso"
    },
    {
        "formula": "MgSO₄",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "sales de epsom",
            "sal de epsom",
            "tetraoxosulfato de magnesio",
            "sulfato de magnesio"
        ],
        "pista": "Conocido como sales de Epsom.",
        "explicacion": "Sulfato de magnesio | Sales de Epsom"
    },
    {
        "formula": "CuSO₄",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "sulfato cúprico",
            "caparrosa azul",
            "sulfato cuprico",
            "sulfato de cobre(ii)",
            "sulfato de cobre ii"
        ],
        "pista": "Cristales azules característicos.",
        "explicacion": "Sulfato de cobre(II) | Sulfato cúprico"
    },
    {
        "formula": "H₂O₂",
        "tipo": "Peróxido",
        "nombresAceptados": [
            "agua oxigenada",
            "dióxido de dihidrógeno",
            "peróxido de hidrógeno",
            "dioxido de dihidrogeno",
            "peroxido de hidrogeno"
        ],
        "pista": "Agua oxigenada de desinfección.",
        "explicacion": "Peróxido de hidrógeno | Agua oxigenada"
    },
    {
        "formula": "Na₂O₂",
        "tipo": "Peróxido",
        "nombresAceptados": [
            "peroxido de sodio",
            "peróxido de sodio"
        ],
        "pista": "Peróxido de sodio.",
        "explicacion": "Peróxido de sodio"
    },
    {
        "formula": "BaO₂",
        "tipo": "Peróxido",
        "nombresAceptados": [
            "peróxido de bario",
            "peroxido de bario"
        ],
        "pista": "Peróxido del metal bario.",
        "explicacion": "Peróxido de bario"
    },
    {
        "formula": "LiF",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de litio (i)",
            "fluoruro de litio i",
            "fluoruro de litio(i)",
            "fluoruro de litio"
        ],
        "pista": "Sal formada por litio y flúor.",
        "explicacion": "Fluoruro de litio"
    },
    {
        "formula": "LiCl",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de litio (i)",
            "cloruro de litio(i)",
            "cloruro de litio",
            "cloruro de litio i"
        ],
        "pista": "Sal formada por litio y cloro.",
        "explicacion": "Cloruro de litio"
    },
    {
        "formula": "LiBr",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de litio",
            "bromuro de litio(i)",
            "bromuro de litio i",
            "bromuro de litio (i)"
        ],
        "pista": "Sal formada por litio y bromo.",
        "explicacion": "Bromuro de litio"
    },
    {
        "formula": "LiI",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de litio i",
            "yoduro de litio(i)",
            "yoduro de litio",
            "yoduro de litio (i)"
        ],
        "pista": "Sal formada por litio y yodo.",
        "explicacion": "Yoduro de litio"
    },
    {
        "formula": "LiNO₃",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de litio(i)",
            "nitrato de litio",
            "nitrato de litio i"
        ],
        "pista": "Nitrato del metal litio.",
        "explicacion": "Nitrato de litio"
    },
    {
        "formula": "NaF",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de sodio",
            "fluoruro de sodio i",
            "fluoruro de sodio (i)",
            "fluoruro de sodio(i)"
        ],
        "pista": "Sal formada por sodio y flúor.",
        "explicacion": "Fluoruro de sodio"
    },
    {
        "formula": "NaBr",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de sodio (i)",
            "bromuro de sodio(i)",
            "bromuro de sodio",
            "bromuro de sodio i"
        ],
        "pista": "Sal formada por sodio y bromo.",
        "explicacion": "Bromuro de sodio"
    },
    {
        "formula": "NaI",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de sodio i",
            "yoduro de sodio (i)",
            "yoduro de sodio(i)",
            "yoduro de sodio"
        ],
        "pista": "Sal formada por sodio y yodo.",
        "explicacion": "Yoduro de sodio"
    },
    {
        "formula": "KF",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de potasio i",
            "fluoruro de potasio(i)",
            "fluoruro de potasio",
            "fluoruro de potasio (i)"
        ],
        "pista": "Sal formada por potasio y flúor.",
        "explicacion": "Fluoruro de potasio"
    },
    {
        "formula": "RbF",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de rubidio(i)",
            "fluoruro de rubidio (i)",
            "fluoruro de rubidio i",
            "fluoruro de rubidio"
        ],
        "pista": "Sal formada por rubidio y flúor.",
        "explicacion": "Fluoruro de rubidio"
    },
    {
        "formula": "RbCl",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de rubidio i",
            "cloruro de rubidio (i)",
            "cloruro de rubidio(i)",
            "cloruro de rubidio"
        ],
        "pista": "Sal formada por rubidio y cloro.",
        "explicacion": "Cloruro de rubidio"
    },
    {
        "formula": "RbBr",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de rubidio (i)",
            "bromuro de rubidio(i)",
            "bromuro de rubidio i",
            "bromuro de rubidio"
        ],
        "pista": "Sal formada por rubidio y bromo.",
        "explicacion": "Bromuro de rubidio"
    },
    {
        "formula": "RbI",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de rubidio (i)",
            "yoduro de rubidio",
            "yoduro de rubidio(i)",
            "yoduro de rubidio i"
        ],
        "pista": "Sal formada por rubidio y yodo.",
        "explicacion": "Yoduro de rubidio"
    },
    {
        "formula": "RbNO₃",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de rubidio i",
            "nitrato de rubidio(i)",
            "nitrato de rubidio"
        ],
        "pista": "Nitrato del metal rubidio.",
        "explicacion": "Nitrato de rubidio"
    },
    {
        "formula": "CsF",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de cesio i",
            "fluoruro de cesio (i)",
            "fluoruro de cesio(i)",
            "fluoruro de cesio"
        ],
        "pista": "Sal formada por cesio y flúor.",
        "explicacion": "Fluoruro de cesio"
    },
    {
        "formula": "CsCl",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de cesio i",
            "cloruro de cesio",
            "cloruro de cesio (i)",
            "cloruro de cesio(i)"
        ],
        "pista": "Sal formada por cesio y cloro.",
        "explicacion": "Cloruro de cesio"
    },
    {
        "formula": "CsBr",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de cesio(i)",
            "bromuro de cesio (i)",
            "bromuro de cesio",
            "bromuro de cesio i"
        ],
        "pista": "Sal formada por cesio y bromo.",
        "explicacion": "Bromuro de cesio"
    },
    {
        "formula": "CsI",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de cesio i",
            "yoduro de cesio",
            "yoduro de cesio(i)",
            "yoduro de cesio (i)"
        ],
        "pista": "Sal formada por cesio y yodo.",
        "explicacion": "Yoduro de cesio"
    },
    {
        "formula": "CsNO₃",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de cesio i",
            "nitrato de cesio",
            "nitrato de cesio(i)"
        ],
        "pista": "Nitrato del metal cesio.",
        "explicacion": "Nitrato de cesio"
    },
    {
        "formula": "BeF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de berilio(ii)",
            "fluoruro de berilio (ii)",
            "fluoruro de berilio",
            "fluoruro de berilio ii"
        ],
        "pista": "Sal formada por berilio y flúor.",
        "explicacion": "Fluoruro de berilio"
    },
    {
        "formula": "BeCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de berilio ii",
            "cloruro de berilio(ii)",
            "cloruro de berilio (ii)",
            "cloruro de berilio"
        ],
        "pista": "Sal formada por berilio y cloro.",
        "explicacion": "Cloruro de berilio"
    },
    {
        "formula": "BeBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de berilio(ii)",
            "bromuro de berilio (ii)",
            "bromuro de berilio ii",
            "bromuro de berilio"
        ],
        "pista": "Sal formada por berilio y bromo.",
        "explicacion": "Bromuro de berilio"
    },
    {
        "formula": "BeI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de berilio",
            "yoduro de berilio ii",
            "yoduro de berilio (ii)",
            "yoduro de berilio(ii)"
        ],
        "pista": "Sal formada por berilio y yodo.",
        "explicacion": "Yoduro de berilio"
    },
    {
        "formula": "Be(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de berilio(ii)",
            "nitrato de berilio ii",
            "nitrato de berilio"
        ],
        "pista": "Nitrato del metal berilio.",
        "explicacion": "Nitrato de berilio"
    },
    {
        "formula": "MgF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de magnesio(ii)",
            "fluoruro de magnesio (ii)",
            "fluoruro de magnesio",
            "fluoruro de magnesio ii"
        ],
        "pista": "Sal formada por magnesio y flúor.",
        "explicacion": "Fluoruro de magnesio"
    },
    {
        "formula": "MgCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de magnesio",
            "cloruro de magnesio (ii)",
            "cloruro de magnesio ii",
            "cloruro de magnesio(ii)"
        ],
        "pista": "Sal formada por magnesio y cloro.",
        "explicacion": "Cloruro de magnesio"
    },
    {
        "formula": "MgBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de magnesio(ii)",
            "bromuro de magnesio ii",
            "bromuro de magnesio (ii)",
            "bromuro de magnesio"
        ],
        "pista": "Sal formada por magnesio y bromo.",
        "explicacion": "Bromuro de magnesio"
    },
    {
        "formula": "MgI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de magnesio ii",
            "yoduro de magnesio(ii)",
            "yoduro de magnesio",
            "yoduro de magnesio (ii)"
        ],
        "pista": "Sal formada por magnesio y yodo.",
        "explicacion": "Yoduro de magnesio"
    },
    {
        "formula": "Mg(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de magnesio",
            "nitrato de magnesio(ii)",
            "nitrato de magnesio ii"
        ],
        "pista": "Nitrato del metal magnesio.",
        "explicacion": "Nitrato de magnesio"
    },
    {
        "formula": "CaF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de calcio",
            "fluoruro de calcio(ii)",
            "fluoruro de calcio ii",
            "fluoruro de calcio (ii)"
        ],
        "pista": "Sal formada por calcio y flúor.",
        "explicacion": "Fluoruro de calcio"
    },
    {
        "formula": "CaCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de calcio",
            "cloruro de calcio ii",
            "cloruro de calcio(ii)",
            "cloruro de calcio (ii)"
        ],
        "pista": "Sal formada por calcio y cloro.",
        "explicacion": "Cloruro de calcio"
    },
    {
        "formula": "CaBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de calcio(ii)",
            "bromuro de calcio",
            "bromuro de calcio (ii)",
            "bromuro de calcio ii"
        ],
        "pista": "Sal formada por calcio y bromo.",
        "explicacion": "Bromuro de calcio"
    },
    {
        "formula": "CaI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de calcio",
            "yoduro de calcio (ii)",
            "yoduro de calcio(ii)",
            "yoduro de calcio ii"
        ],
        "pista": "Sal formada por calcio y yodo.",
        "explicacion": "Yoduro de calcio"
    },
    {
        "formula": "Ca(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de calcio(ii)",
            "nitrato de calcio",
            "nitrato de calcio ii"
        ],
        "pista": "Nitrato del metal calcio.",
        "explicacion": "Nitrato de calcio"
    },
    {
        "formula": "SrF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de estroncio",
            "fluoruro de estroncio(ii)",
            "fluoruro de estroncio ii",
            "fluoruro de estroncio (ii)"
        ],
        "pista": "Sal formada por estroncio y flúor.",
        "explicacion": "Fluoruro de estroncio"
    },
    {
        "formula": "SrCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de estroncio ii",
            "cloruro de estroncio(ii)",
            "cloruro de estroncio (ii)",
            "cloruro de estroncio"
        ],
        "pista": "Sal formada por estroncio y cloro.",
        "explicacion": "Cloruro de estroncio"
    },
    {
        "formula": "SrBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de estroncio(ii)",
            "bromuro de estroncio (ii)",
            "bromuro de estroncio",
            "bromuro de estroncio ii"
        ],
        "pista": "Sal formada por estroncio y bromo.",
        "explicacion": "Bromuro de estroncio"
    },
    {
        "formula": "SrI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de estroncio ii",
            "yoduro de estroncio (ii)",
            "yoduro de estroncio",
            "yoduro de estroncio(ii)"
        ],
        "pista": "Sal formada por estroncio y yodo.",
        "explicacion": "Yoduro de estroncio"
    },
    {
        "formula": "Sr(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de estroncio",
            "nitrato de estroncio ii",
            "nitrato de estroncio(ii)"
        ],
        "pista": "Nitrato del metal estroncio.",
        "explicacion": "Nitrato de estroncio"
    },
    {
        "formula": "BaF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de bario ii",
            "fluoruro de bario(ii)",
            "fluoruro de bario (ii)",
            "fluoruro de bario"
        ],
        "pista": "Sal formada por bario y flúor.",
        "explicacion": "Fluoruro de bario"
    },
    {
        "formula": "BaCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de bario (ii)",
            "cloruro de bario(ii)",
            "cloruro de bario ii",
            "cloruro de bario"
        ],
        "pista": "Sal formada por bario y cloro.",
        "explicacion": "Cloruro de bario"
    },
    {
        "formula": "BaBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de bario",
            "bromuro de bario(ii)",
            "bromuro de bario (ii)",
            "bromuro de bario ii"
        ],
        "pista": "Sal formada por bario y bromo.",
        "explicacion": "Bromuro de bario"
    },
    {
        "formula": "BaI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de bario ii",
            "yoduro de bario(ii)",
            "yoduro de bario (ii)",
            "yoduro de bario"
        ],
        "pista": "Sal formada por bario y yodo.",
        "explicacion": "Yoduro de bario"
    },
    {
        "formula": "Ba(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de bario(ii)",
            "nitrato de bario ii",
            "nitrato de bario"
        ],
        "pista": "Nitrato del metal bario.",
        "explicacion": "Nitrato de bario"
    },
    {
        "formula": "AlF3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de aluminio (iii)",
            "fluoruro de aluminio",
            "fluoruro de aluminio(iii)",
            "fluoruro de aluminio iii"
        ],
        "pista": "Sal formada por aluminio y flúor.",
        "explicacion": "Fluoruro de aluminio"
    },
    {
        "formula": "AlCl3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de aluminio(iii)",
            "cloruro de aluminio",
            "cloruro de aluminio (iii)",
            "cloruro de aluminio iii"
        ],
        "pista": "Sal formada por aluminio y cloro.",
        "explicacion": "Cloruro de aluminio"
    },
    {
        "formula": "AlBr3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de aluminio iii",
            "bromuro de aluminio (iii)",
            "bromuro de aluminio",
            "bromuro de aluminio(iii)"
        ],
        "pista": "Sal formada por aluminio y bromo.",
        "explicacion": "Bromuro de aluminio"
    },
    {
        "formula": "AlI3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de aluminio(iii)",
            "yoduro de aluminio",
            "yoduro de aluminio iii",
            "yoduro de aluminio (iii)"
        ],
        "pista": "Sal formada por aluminio y yodo.",
        "explicacion": "Yoduro de aluminio"
    },
    {
        "formula": "Al(NO₃)3",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de aluminio",
            "nitrato de aluminio(iii)",
            "nitrato de aluminio iii"
        ],
        "pista": "Nitrato del metal aluminio.",
        "explicacion": "Nitrato de aluminio"
    },
    {
        "formula": "ZnF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de zinc",
            "fluoruro de zinc ii",
            "fluoruro de zinc(ii)",
            "fluoruro de zinc (ii)"
        ],
        "pista": "Sal formada por zinc y flúor.",
        "explicacion": "Fluoruro de zinc"
    },
    {
        "formula": "ZnCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de zinc(ii)",
            "cloruro de zinc (ii)",
            "cloruro de zinc ii",
            "cloruro de zinc"
        ],
        "pista": "Sal formada por zinc y cloro.",
        "explicacion": "Cloruro de zinc"
    },
    {
        "formula": "ZnBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de zinc ii",
            "bromuro de zinc (ii)",
            "bromuro de zinc(ii)",
            "bromuro de zinc"
        ],
        "pista": "Sal formada por zinc y bromo.",
        "explicacion": "Bromuro de zinc"
    },
    {
        "formula": "ZnI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de zinc(ii)",
            "yoduro de zinc",
            "yoduro de zinc (ii)",
            "yoduro de zinc ii"
        ],
        "pista": "Sal formada por zinc y yodo.",
        "explicacion": "Yoduro de zinc"
    },
    {
        "formula": "Zn(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de zinc ii",
            "nitrato de zinc",
            "nitrato de zinc(ii)"
        ],
        "pista": "Nitrato del metal zinc.",
        "explicacion": "Nitrato de zinc"
    },
    {
        "formula": "AgF",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de plata",
            "fluoruro de plata(i)",
            "fluoruro de plata i",
            "fluoruro de plata (i)"
        ],
        "pista": "Sal formada por plata y flúor.",
        "explicacion": "Fluoruro de plata"
    },
    {
        "formula": "AgBr",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de plata (i)",
            "bromuro de plata i",
            "bromuro de plata(i)",
            "bromuro de plata"
        ],
        "pista": "Sal formada por plata y bromo.",
        "explicacion": "Bromuro de plata"
    },
    {
        "formula": "AgI",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de plata i",
            "yoduro de plata",
            "yoduro de plata (i)",
            "yoduro de plata(i)"
        ],
        "pista": "Sal formada por plata y yodo.",
        "explicacion": "Yoduro de plata"
    },
    {
        "formula": "AgNO₃",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de plata i",
            "nitrato de plata",
            "nitrato de plata(i)"
        ],
        "pista": "Nitrato del metal plata.",
        "explicacion": "Nitrato de plata"
    },
    {
        "formula": "FeF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de hierro (ii)",
            "fluoruro de hierro ii",
            "fluoruro de hierro",
            "fluoruro de hierro(ii)"
        ],
        "pista": "Sal formada por hierro y flúor.",
        "explicacion": "Fluoruro de hierro"
    },
    {
        "formula": "FeCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de hierro",
            "cloruro de hierro ii",
            "cloruro de hierro(ii)",
            "cloruro de hierro (ii)"
        ],
        "pista": "Sal formada por hierro y cloro.",
        "explicacion": "Cloruro de hierro"
    },
    {
        "formula": "FeBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de hierro (ii)",
            "bromuro de hierro(ii)",
            "bromuro de hierro",
            "bromuro de hierro ii"
        ],
        "pista": "Sal formada por hierro y bromo.",
        "explicacion": "Bromuro de hierro"
    },
    {
        "formula": "FeI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de hierro ii",
            "yoduro de hierro(ii)",
            "yoduro de hierro (ii)",
            "yoduro de hierro"
        ],
        "pista": "Sal formada por hierro y yodo.",
        "explicacion": "Yoduro de hierro"
    },
    {
        "formula": "Fe(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de hierro ii",
            "nitrato de hierro",
            "nitrato de hierro(ii)"
        ],
        "pista": "Nitrato del metal hierro.",
        "explicacion": "Nitrato de hierro"
    },
    {
        "formula": "FeF3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de hierro(iii)",
            "fluoruro de hierro (iii)",
            "fluoruro de hierro iii",
            "fluoruro de hierro"
        ],
        "pista": "Sal formada por hierro y flúor.",
        "explicacion": "Fluoruro de hierro"
    },
    {
        "formula": "FeCl3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de hierro",
            "cloruro de hierro iii",
            "cloruro de hierro(iii)",
            "cloruro de hierro (iii)"
        ],
        "pista": "Sal formada por hierro y cloro.",
        "explicacion": "Cloruro de hierro"
    },
    {
        "formula": "FeBr3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de hierro iii",
            "bromuro de hierro (iii)",
            "bromuro de hierro",
            "bromuro de hierro(iii)"
        ],
        "pista": "Sal formada por hierro y bromo.",
        "explicacion": "Bromuro de hierro"
    },
    {
        "formula": "FeI3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de hierro (iii)",
            "yoduro de hierro iii",
            "yoduro de hierro",
            "yoduro de hierro(iii)"
        ],
        "pista": "Sal formada por hierro y yodo.",
        "explicacion": "Yoduro de hierro"
    },
    {
        "formula": "Fe(NO₃)3",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de hierro(iii)",
            "nitrato de hierro iii",
            "nitrato de hierro"
        ],
        "pista": "Nitrato del metal hierro.",
        "explicacion": "Nitrato de hierro"
    },
    {
        "formula": "CuF",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de cobre(i)",
            "fluoruro de cobre (i)",
            "fluoruro de cobre",
            "fluoruro de cobre i"
        ],
        "pista": "Sal formada por cobre y flúor.",
        "explicacion": "Fluoruro de cobre"
    },
    {
        "formula": "CuBr",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de cobre",
            "bromuro de cobre (i)",
            "bromuro de cobre i",
            "bromuro de cobre(i)"
        ],
        "pista": "Sal formada por cobre y bromo.",
        "explicacion": "Bromuro de cobre"
    },
    {
        "formula": "CuI",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de cobre",
            "yoduro de cobre (i)",
            "yoduro de cobre i",
            "yoduro de cobre(i)"
        ],
        "pista": "Sal formada por cobre y yodo.",
        "explicacion": "Yoduro de cobre"
    },
    {
        "formula": "CuNO₃",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de cobre",
            "nitrato de cobre(i)",
            "nitrato de cobre i"
        ],
        "pista": "Nitrato del metal cobre.",
        "explicacion": "Nitrato de cobre"
    },
    {
        "formula": "CuF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de cobre ii",
            "fluoruro de cobre(ii)",
            "fluoruro de cobre",
            "fluoruro de cobre (ii)"
        ],
        "pista": "Sal formada por cobre y flúor.",
        "explicacion": "Fluoruro de cobre"
    },
    {
        "formula": "CuCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de cobre",
            "cloruro de cobre ii",
            "cloruro de cobre (ii)",
            "cloruro de cobre(ii)"
        ],
        "pista": "Sal formada por cobre y cloro.",
        "explicacion": "Cloruro de cobre"
    },
    {
        "formula": "CuBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de cobre ii",
            "bromuro de cobre (ii)",
            "bromuro de cobre",
            "bromuro de cobre(ii)"
        ],
        "pista": "Sal formada por cobre y bromo.",
        "explicacion": "Bromuro de cobre"
    },
    {
        "formula": "CuI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de cobre(ii)",
            "yoduro de cobre ii",
            "yoduro de cobre",
            "yoduro de cobre (ii)"
        ],
        "pista": "Sal formada por cobre y yodo.",
        "explicacion": "Yoduro de cobre"
    },
    {
        "formula": "Cu(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de cobre",
            "nitrato de cobre ii",
            "nitrato de cobre(ii)"
        ],
        "pista": "Nitrato del metal cobre.",
        "explicacion": "Nitrato de cobre"
    },
    {
        "formula": "NiF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de niquel(ii)",
            "fluoruro de niquel ii",
            "fluoruro de niquel",
            "fluoruro de níquel(ii)",
            "fluoruro de níquel",
            "fluoruro de niquel (ii)"
        ],
        "pista": "Sal formada por niquel y flúor.",
        "explicacion": "Fluoruro de niquel"
    },
    {
        "formula": "NiCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de niquel(ii)",
            "cloruro de niquel (ii)",
            "cloruro de niquel",
            "cloruro de níquel",
            "cloruro de níquel(ii)",
            "cloruro de niquel ii"
        ],
        "pista": "Sal formada por niquel y cloro.",
        "explicacion": "Cloruro de niquel"
    },
    {
        "formula": "NiBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de niquel(ii)",
            "bromuro de niquel ii",
            "bromuro de níquel",
            "bromuro de niquel (ii)",
            "bromuro de níquel(ii)",
            "bromuro de niquel"
        ],
        "pista": "Sal formada por niquel y bromo.",
        "explicacion": "Bromuro de niquel"
    },
    {
        "formula": "NiI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de niquel",
            "yoduro de níquel",
            "yoduro de niquel (ii)",
            "yoduro de niquel ii",
            "yoduro de niquel(ii)",
            "yoduro de níquel(ii)"
        ],
        "pista": "Sal formada por niquel y yodo.",
        "explicacion": "Yoduro de niquel"
    },
    {
        "formula": "Ni(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de níquel",
            "nitrato de niquel",
            "nitrato de niquel(ii)",
            "nitrato de niquel ii"
        ],
        "pista": "Nitrato del metal niquel.",
        "explicacion": "Nitrato de niquel"
    },
    {
        "formula": "NiF3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de niquel (iii)",
            "fluoruro de niquel(iii)",
            "fluoruro de niquel iii",
            "fluoruro de níquel(iii)",
            "fluoruro de níquel",
            "fluoruro de niquel"
        ],
        "pista": "Sal formada por niquel y flúor.",
        "explicacion": "Fluoruro de niquel"
    },
    {
        "formula": "NiCl3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de niquel",
            "cloruro de niquel (iii)",
            "cloruro de niquel iii",
            "cloruro de níquel",
            "cloruro de níquel(iii)",
            "cloruro de niquel(iii)"
        ],
        "pista": "Sal formada por niquel y cloro.",
        "explicacion": "Cloruro de niquel"
    },
    {
        "formula": "NiBr3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de níquel(iii)",
            "bromuro de niquel (iii)",
            "bromuro de níquel",
            "bromuro de niquel(iii)",
            "bromuro de niquel iii",
            "bromuro de niquel"
        ],
        "pista": "Sal formada por niquel y bromo.",
        "explicacion": "Bromuro de niquel"
    },
    {
        "formula": "NiI3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de niquel",
            "yoduro de niquel iii",
            "yoduro de níquel",
            "yoduro de níquel(iii)",
            "yoduro de niquel (iii)",
            "yoduro de niquel(iii)"
        ],
        "pista": "Sal formada por niquel y yodo.",
        "explicacion": "Yoduro de niquel"
    },
    {
        "formula": "Ni(NO₃)3",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de niquel(iii)",
            "nitrato de niquel",
            "nitrato de níquel",
            "nitrato de niquel iii"
        ],
        "pista": "Nitrato del metal niquel.",
        "explicacion": "Nitrato de niquel"
    },
    {
        "formula": "CoF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de cobalto (ii)",
            "fluoruro de cobalto",
            "fluoruro de cobalto(ii)",
            "fluoruro de cobalto ii"
        ],
        "pista": "Sal formada por cobalto y flúor.",
        "explicacion": "Fluoruro de cobalto"
    },
    {
        "formula": "CoCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de cobalto",
            "cloruro de cobalto(ii)",
            "cloruro de cobalto (ii)",
            "cloruro de cobalto ii"
        ],
        "pista": "Sal formada por cobalto y cloro.",
        "explicacion": "Cloruro de cobalto"
    },
    {
        "formula": "CoBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de cobalto (ii)",
            "bromuro de cobalto",
            "bromuro de cobalto ii",
            "bromuro de cobalto(ii)"
        ],
        "pista": "Sal formada por cobalto y bromo.",
        "explicacion": "Bromuro de cobalto"
    },
    {
        "formula": "CoI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de cobalto (ii)",
            "yoduro de cobalto",
            "yoduro de cobalto ii",
            "yoduro de cobalto(ii)"
        ],
        "pista": "Sal formada por cobalto y yodo.",
        "explicacion": "Yoduro de cobalto"
    },
    {
        "formula": "Co(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de cobalto",
            "nitrato de cobalto ii",
            "nitrato de cobalto(ii)"
        ],
        "pista": "Nitrato del metal cobalto.",
        "explicacion": "Nitrato de cobalto"
    },
    {
        "formula": "CoF3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de cobalto (iii)",
            "fluoruro de cobalto",
            "fluoruro de cobalto(iii)",
            "fluoruro de cobalto iii"
        ],
        "pista": "Sal formada por cobalto y flúor.",
        "explicacion": "Fluoruro de cobalto"
    },
    {
        "formula": "CoCl3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de cobalto",
            "cloruro de cobalto (iii)",
            "cloruro de cobalto iii",
            "cloruro de cobalto(iii)"
        ],
        "pista": "Sal formada por cobalto y cloro.",
        "explicacion": "Cloruro de cobalto"
    },
    {
        "formula": "CoBr3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de cobalto (iii)",
            "bromuro de cobalto iii",
            "bromuro de cobalto(iii)",
            "bromuro de cobalto"
        ],
        "pista": "Sal formada por cobalto y bromo.",
        "explicacion": "Bromuro de cobalto"
    },
    {
        "formula": "CoI3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de cobalto",
            "yoduro de cobalto(iii)",
            "yoduro de cobalto iii",
            "yoduro de cobalto (iii)"
        ],
        "pista": "Sal formada por cobalto y yodo.",
        "explicacion": "Yoduro de cobalto"
    },
    {
        "formula": "Co(NO₃)3",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de cobalto",
            "nitrato de cobalto(iii)",
            "nitrato de cobalto iii"
        ],
        "pista": "Nitrato del metal cobalto.",
        "explicacion": "Nitrato de cobalto"
    },
    {
        "formula": "PbF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de plomo",
            "fluoruro de plomo (ii)",
            "fluoruro de plomo ii",
            "fluoruro de plomo(ii)"
        ],
        "pista": "Sal formada por plomo y flúor.",
        "explicacion": "Fluoruro de plomo"
    },
    {
        "formula": "PbCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de plomo ii",
            "cloruro de plomo(ii)",
            "cloruro de plomo",
            "cloruro de plomo (ii)"
        ],
        "pista": "Sal formada por plomo y cloro.",
        "explicacion": "Cloruro de plomo"
    },
    {
        "formula": "PbBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de plomo(ii)",
            "bromuro de plomo (ii)",
            "bromuro de plomo",
            "bromuro de plomo ii"
        ],
        "pista": "Sal formada por plomo y bromo.",
        "explicacion": "Bromuro de plomo"
    },
    {
        "formula": "PbI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de plomo",
            "yoduro de plomo ii",
            "yoduro de plomo(ii)",
            "yoduro de plomo (ii)"
        ],
        "pista": "Sal formada por plomo y yodo.",
        "explicacion": "Yoduro de plomo"
    },
    {
        "formula": "Pb(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de plomo ii",
            "nitrato de plomo",
            "nitrato de plomo(ii)"
        ],
        "pista": "Nitrato del metal plomo.",
        "explicacion": "Nitrato de plomo"
    },
    {
        "formula": "PbF4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de plomo",
            "fluoruro de plomo iv",
            "fluoruro de plomo(iv)",
            "fluoruro de plomo (iv)"
        ],
        "pista": "Sal formada por plomo y flúor.",
        "explicacion": "Fluoruro de plomo"
    },
    {
        "formula": "PbCl4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de plomo(iv)",
            "cloruro de plomo iv",
            "cloruro de plomo",
            "cloruro de plomo (iv)"
        ],
        "pista": "Sal formada por plomo y cloro.",
        "explicacion": "Cloruro de plomo"
    },
    {
        "formula": "PbBr4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de plomo (iv)",
            "bromuro de plomo(iv)",
            "bromuro de plomo",
            "bromuro de plomo iv"
        ],
        "pista": "Sal formada por plomo y bromo.",
        "explicacion": "Bromuro de plomo"
    },
    {
        "formula": "PbI4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de plomo (iv)",
            "yoduro de plomo iv",
            "yoduro de plomo(iv)",
            "yoduro de plomo"
        ],
        "pista": "Sal formada por plomo y yodo.",
        "explicacion": "Yoduro de plomo"
    },
    {
        "formula": "Pb(NO₃)4",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de plomo iv",
            "nitrato de plomo",
            "nitrato de plomo(iv)"
        ],
        "pista": "Nitrato del metal plomo.",
        "explicacion": "Nitrato de plomo"
    },
    {
        "formula": "SnF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de estano (ii)",
            "fluoruro de estaño(ii)",
            "fluoruro de estano",
            "fluoruro de estano(ii)",
            "fluoruro de estano ii",
            "fluoruro de estaño"
        ],
        "pista": "Sal formada por estano y flúor.",
        "explicacion": "Fluoruro de estano"
    },
    {
        "formula": "SnCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de estaño(ii)",
            "cloruro de estano(ii)",
            "cloruro de estano ii",
            "cloruro de estano (ii)",
            "cloruro de estano",
            "cloruro de estaño"
        ],
        "pista": "Sal formada por estano y cloro.",
        "explicacion": "Cloruro de estano"
    },
    {
        "formula": "SnBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de estaño(ii)",
            "bromuro de estaño",
            "bromuro de estano (ii)",
            "bromuro de estano ii",
            "bromuro de estano",
            "bromuro de estano(ii)"
        ],
        "pista": "Sal formada por estano y bromo.",
        "explicacion": "Bromuro de estano"
    },
    {
        "formula": "SnI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de estaño",
            "yoduro de estano(ii)",
            "yoduro de estano",
            "yoduro de estaño(ii)",
            "yoduro de estano ii",
            "yoduro de estano (ii)"
        ],
        "pista": "Sal formada por estano y yodo.",
        "explicacion": "Yoduro de estano"
    },
    {
        "formula": "Sn(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de estano ii",
            "nitrato de estano(ii)",
            "nitrato de estano",
            "nitrato de estaño"
        ],
        "pista": "Nitrato del metal estano.",
        "explicacion": "Nitrato de estano"
    },
    {
        "formula": "SnF4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de estaño(iv)",
            "fluoruro de estano(iv)",
            "fluoruro de estano",
            "fluoruro de estano iv",
            "fluoruro de estano (iv)",
            "fluoruro de estaño"
        ],
        "pista": "Sal formada por estano y flúor.",
        "explicacion": "Fluoruro de estano"
    },
    {
        "formula": "SnCl4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de estano",
            "cloruro de estaño(iv)",
            "cloruro de estano iv",
            "cloruro de estano(iv)",
            "cloruro de estano (iv)",
            "cloruro de estaño"
        ],
        "pista": "Sal formada por estano y cloro.",
        "explicacion": "Cloruro de estano"
    },
    {
        "formula": "SnBr4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de estano(iv)",
            "bromuro de estaño",
            "bromuro de estano",
            "bromuro de estano iv",
            "bromuro de estano (iv)",
            "bromuro de estaño(iv)"
        ],
        "pista": "Sal formada por estano y bromo.",
        "explicacion": "Bromuro de estano"
    },
    {
        "formula": "SnI4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de estano iv",
            "yoduro de estaño",
            "yoduro de estaño(iv)",
            "yoduro de estano",
            "yoduro de estano(iv)",
            "yoduro de estano (iv)"
        ],
        "pista": "Sal formada por estano y yodo.",
        "explicacion": "Yoduro de estano"
    },
    {
        "formula": "Sn(NO₃)4",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de estano",
            "nitrato de estaño",
            "nitrato de estano iv",
            "nitrato de estano(iv)"
        ],
        "pista": "Nitrato del metal estano.",
        "explicacion": "Nitrato de estano"
    },
    {
        "formula": "HgF",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de mercurio",
            "fluoruro de mercurio (i)",
            "fluoruro de mercurio i",
            "fluoruro de mercurio(i)"
        ],
        "pista": "Sal formada por mercurio y flúor.",
        "explicacion": "Fluoruro de mercurio"
    },
    {
        "formula": "HgCl",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de mercurio",
            "cloruro de mercurio (i)",
            "cloruro de mercurio(i)",
            "cloruro de mercurio i"
        ],
        "pista": "Sal formada por mercurio y cloro.",
        "explicacion": "Cloruro de mercurio"
    },
    {
        "formula": "HgBr",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de mercurio(i)",
            "bromuro de mercurio (i)",
            "bromuro de mercurio",
            "bromuro de mercurio i"
        ],
        "pista": "Sal formada por mercurio y bromo.",
        "explicacion": "Bromuro de mercurio"
    },
    {
        "formula": "HgI",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de mercurio i",
            "yoduro de mercurio(i)",
            "yoduro de mercurio (i)",
            "yoduro de mercurio"
        ],
        "pista": "Sal formada por mercurio y yodo.",
        "explicacion": "Yoduro de mercurio"
    },
    {
        "formula": "HgNO₃",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de mercurio i",
            "nitrato de mercurio",
            "nitrato de mercurio(i)"
        ],
        "pista": "Nitrato del metal mercurio.",
        "explicacion": "Nitrato de mercurio"
    },
    {
        "formula": "HgF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de mercurio",
            "fluoruro de mercurio ii",
            "fluoruro de mercurio (ii)",
            "fluoruro de mercurio(ii)"
        ],
        "pista": "Sal formada por mercurio y flúor.",
        "explicacion": "Fluoruro de mercurio"
    },
    {
        "formula": "HgCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de mercurio",
            "cloruro de mercurio ii",
            "cloruro de mercurio (ii)",
            "cloruro de mercurio(ii)"
        ],
        "pista": "Sal formada por mercurio y cloro.",
        "explicacion": "Cloruro de mercurio"
    },
    {
        "formula": "HgBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de mercurio(ii)",
            "bromuro de mercurio ii",
            "bromuro de mercurio",
            "bromuro de mercurio (ii)"
        ],
        "pista": "Sal formada por mercurio y bromo.",
        "explicacion": "Bromuro de mercurio"
    },
    {
        "formula": "HgI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de mercurio(ii)",
            "yoduro de mercurio ii",
            "yoduro de mercurio (ii)",
            "yoduro de mercurio"
        ],
        "pista": "Sal formada por mercurio y yodo.",
        "explicacion": "Yoduro de mercurio"
    },
    {
        "formula": "Hg(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de mercurio ii",
            "nitrato de mercurio",
            "nitrato de mercurio(ii)"
        ],
        "pista": "Nitrato del metal mercurio.",
        "explicacion": "Nitrato de mercurio"
    },
    {
        "formula": "MnF2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de manganeso ii",
            "fluoruro de manganeso (ii)",
            "fluoruro de manganeso(ii)",
            "fluoruro de manganeso"
        ],
        "pista": "Sal formada por manganeso y flúor.",
        "explicacion": "Fluoruro de manganeso"
    },
    {
        "formula": "MnCl2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de manganeso (ii)",
            "cloruro de manganeso",
            "cloruro de manganeso ii",
            "cloruro de manganeso(ii)"
        ],
        "pista": "Sal formada por manganeso y cloro.",
        "explicacion": "Cloruro de manganeso"
    },
    {
        "formula": "MnBr2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de manganeso",
            "bromuro de manganeso ii",
            "bromuro de manganeso (ii)",
            "bromuro de manganeso(ii)"
        ],
        "pista": "Sal formada por manganeso y bromo.",
        "explicacion": "Bromuro de manganeso"
    },
    {
        "formula": "MnI2",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de manganeso",
            "yoduro de manganeso ii",
            "yoduro de manganeso (ii)",
            "yoduro de manganeso(ii)"
        ],
        "pista": "Sal formada por manganeso y yodo.",
        "explicacion": "Yoduro de manganeso"
    },
    {
        "formula": "Mn(NO₃)2",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de manganeso ii",
            "nitrato de manganeso(ii)",
            "nitrato de manganeso"
        ],
        "pista": "Nitrato del metal manganeso.",
        "explicacion": "Nitrato de manganeso"
    },
    {
        "formula": "MnF3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de manganeso(iii)",
            "fluoruro de manganeso iii",
            "fluoruro de manganeso (iii)",
            "fluoruro de manganeso"
        ],
        "pista": "Sal formada por manganeso y flúor.",
        "explicacion": "Fluoruro de manganeso"
    },
    {
        "formula": "MnCl3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de manganeso",
            "cloruro de manganeso (iii)",
            "cloruro de manganeso(iii)",
            "cloruro de manganeso iii"
        ],
        "pista": "Sal formada por manganeso y cloro.",
        "explicacion": "Cloruro de manganeso"
    },
    {
        "formula": "MnBr3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de manganeso",
            "bromuro de manganeso iii",
            "bromuro de manganeso(iii)",
            "bromuro de manganeso (iii)"
        ],
        "pista": "Sal formada por manganeso y bromo.",
        "explicacion": "Bromuro de manganeso"
    },
    {
        "formula": "MnI3",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de manganeso",
            "yoduro de manganeso iii",
            "yoduro de manganeso (iii)",
            "yoduro de manganeso(iii)"
        ],
        "pista": "Sal formada por manganeso y yodo.",
        "explicacion": "Yoduro de manganeso"
    },
    {
        "formula": "Mn(NO₃)3",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de manganeso(iii)",
            "nitrato de manganeso iii",
            "nitrato de manganeso"
        ],
        "pista": "Nitrato del metal manganeso.",
        "explicacion": "Nitrato de manganeso"
    },
    {
        "formula": "MnF4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "fluoruro de manganeso(iv)",
            "fluoruro de manganeso",
            "fluoruro de manganeso iv",
            "fluoruro de manganeso (iv)"
        ],
        "pista": "Sal formada por manganeso y flúor.",
        "explicacion": "Fluoruro de manganeso"
    },
    {
        "formula": "MnCl4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "cloruro de manganeso",
            "cloruro de manganeso(iv)",
            "cloruro de manganeso (iv)",
            "cloruro de manganeso iv"
        ],
        "pista": "Sal formada por manganeso y cloro.",
        "explicacion": "Cloruro de manganeso"
    },
    {
        "formula": "MnBr4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "bromuro de manganeso",
            "bromuro de manganeso iv",
            "bromuro de manganeso (iv)",
            "bromuro de manganeso(iv)"
        ],
        "pista": "Sal formada por manganeso y bromo.",
        "explicacion": "Bromuro de manganeso"
    },
    {
        "formula": "MnI4",
        "tipo": "Sal Binaria",
        "nombresAceptados": [
            "yoduro de manganeso",
            "yoduro de manganeso iv",
            "yoduro de manganeso (iv)",
            "yoduro de manganeso(iv)"
        ],
        "pista": "Sal formada por manganeso y yodo.",
        "explicacion": "Yoduro de manganeso"
    },
    {
        "formula": "Mn(NO₃)4",
        "tipo": "Oxisal Ternaria",
        "nombresAceptados": [
            "nitrato de manganeso iv",
            "nitrato de manganeso",
            "nitrato de manganeso(iv)"
        ],
        "pista": "Nitrato del metal manganeso.",
        "explicacion": "Nitrato de manganeso"
    }
];
