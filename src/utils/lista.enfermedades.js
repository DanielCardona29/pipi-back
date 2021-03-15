const lista_enfermedades = [
    {
        name: "Asma",
        sintomas: [
            "Falta de aire",
            "Dolor u opresión del pecho",
            "Sibilancias al exhalar, que es un signo común de asma en los niños",
            "Problemas para dormir causados por falta de aliento, tos o sibilancia al respirar",
            "Tos o sibilancia al respirar que empeora con un virus respiratorio, como un resfriado o gripe",
        ],
        tratamiento: "Se utilizan dos tipos principales de medicamentos para tratar el asma: Los medicamentos de control a largo plazo, como los corticoesteroides inhalados, son los medicamentos más importantes que se utilizan para mantener el asma bajo control"
    },
    //Enfermedad 2
    {
        name: "Dolor de garganta",
        sintomas: [
            "Dolor o sensación de picazón en la garganta",
            "Dolor que empeora al tragar o hablar",
            "Dificultad al tragar",
            "Dolor e inflamación de los ganglios en la zona del cuello o la mandíbula",
            "Amígdalas rojas e inflamadas",
            "Manchas blancas o pus en las amígdalas",
            "Voz ronca o apagad",
        ],
        tratamiento: `Aerosoles para calmar el dolor-- diclonina (Cepacol), fenol (Chloraseptic). Analgésicos-- paracetamol (Tylenol), ibuprofeno (Advil, Motrin), naproxeno (Aleve). Caramelos duros para recubrir la garganta-- chupar caramelos o pastillas para la garganta puede ser de mucho alivio.`
    },
    {
        name: "Dolor de oido",
        sintomas: [
            "Dolor de oído, especialmente al acostarse",
            "Jalones o tirones de una oreja",
            "Trastornos del sueño",
            "Llanto más de lo normal",
            "Inquietud",
            "Dificultad para oír o responder a los sonidos",
            "Pérdida de equilibrio",
            "Fiebre de 100 °F(38 °C) o más",

        ],
        tratamiento: `Analgésico. El médico puede recomendar el uso de paracetamol de venta libre (Tylenol, otros) o ibuprofeno (Advil, Motrin IB, otros) para el alivio del dolor. ... Gotas anestésicas. Puedes usarlas para aliviar el dolor siempre y cuando el tímpano no tenga un agujero o desgarro`
    },
    {
        name: "Infección de las vías urinarias",
        sintomas: [
            "Dolor o ardor al orinar",
            "Fiebre, cansancio o temblores",
            "Urgencia frecuente de orinar",
            "Presión en la región inferior del abdomen",
            "Orina con mal olor o con apariencia turbia o rojiza",

        ],
        tratamiento: `Trimetoprima / sulfametoxazol (Bactrim, Septra u otros) Fosfomicina (Monurol) Nitrofurantoína (Macrodantin, Macrobid) Cefalexina (Keflex) Ceftriaxona.`
    },

    {
        name: "Bronquitis",
        sintomas: [
            "Tos",
            "Producción de mucosidad(esputo), que puede ser transparente, blanca, de color gris amarillento o verde —rara vez, puede presentar manchas de sangre—",
            "Fatiga",
            "Dificultad para respirar",
            "Fiebre ligera y escalofríos",
            "Molestia en el pecho",

        ],
        tratamiento: "Medicamentos. Dado que la mayoría de los casos de bronquitis son causados por infecciones virales, los antibióticos no resultan eficaces. Sin embargo, si el médico sospecha que tienes una infección bacteriana, es posible que te recete un antibiótico"
    },
    {
        name: "Cistitis",
        sintomas: [
            "Necesidad imperiosa y constante de orinar",
            "Sensación de ardor al orinar",
            "Orinar frecuentemente en pequeñas cantidades",
            "Sangre en la orina(hematuria)",
            "Orina turbia y con olor fuerte",
            "Molestias pélvicas",
            "Sensación de presión en la parte inferior del abdomen",

        ],
        tratamiento: `Medicamentos administrados por vía oral o insertada directamente en la vejiga. Procedimientos que manipulan la vejiga para mejorar los síntomas, como estirar la vejiga con agua o con gas (dilatación de la vejiga) o cirugía. `
    },
    {
        name: "Cáncer ",
        sintomas: [
            "Cambios en los senos",
            "Cambios en la vejiga",
            "Hemorragia o moretones sin una razón aparente",
            "Cambios en el intestino",
            "Tos o ronquera que no desaparece",
            "Problemas al comer",
            "Cansancio grave y que dura tiempo",
            "Fiebre o sudores nocturnos sin ninguna razón",
        ],
        tratamiento: "Se utilizan dos tipos principales de medicamentos para tratar el asma: Los medicamentos de control a largo plazo, como los corticoesteroides inhalados, son los medicamentos más importantes que se utilizan para mantener el asma bajo control"
    },

]

module.exports = lista_enfermedades;