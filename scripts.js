document.addEventListener("DOMContentLoaded", function() {
    const librosPrimera = [
        {
            autor: "Gabriel García Márquez",
            obra: "Cien años de soledad",
            biografia: "Gabriel García Márquez fue un escritor, novelista, cuentista, guionista y periodista colombiano.",
            resumen: "Una de las obras más representativas del realismo mágico. Narra la historia de la familia Buendía a lo largo de siete generaciones en el ficticio pueblo de Macondo."
        },
        {
            autor: "Julio Cortázar",
            obra: "Rayuela",
            biografia: "Julio Cortázar fue un escritor, traductor e intelectual argentino.",
            resumen: "Una de las novelas más influyentes de la literatura en español. Propone una lectura no lineal y puede leerse de múltiples maneras."
        }
    ];

    const librosSegunda = [
        {
            autor: "Jorge Luis Borges",
            obra: "Ficciones",
            biografia: "Jorge Luis Borges fue un escritor, poeta, ensayista y bibliotecario argentino.",
            resumen: "Una colección de cuentos que exploran temas de infinitud, laberintos, espejos y realidades paralelas."
        },
        {
            autor: "Isabel Allende",
            obra: "La casa de los espíritus",
            biografia: "Isabel Allende es una escritora chilena de fama internacional.",
            resumen: "Una saga familiar que entrelaza lo mágico y lo real, narrando la vida de la familia Trueba a lo largo de varias generaciones."
        }
    ];

    const resContainerPrimera = document.querySelector('#primera #resumenes');
    if (resContainerPrimera) {
        librosPrimera.forEach(libro => {
            const resumenDiv = document.createElement('div');
            resumenDiv.classList.add('resumen');
            resumenDiv.innerHTML = `
                <h3>${libro.autor}</h3>
                <h4>${libro.obra}</h4>
                <p><strong>Biografía:</strong> ${libro.biografia}</p>
                <p><strong>Resumen:</strong> ${libro.resumen}</p>
            `;
            resContainerPrimera.appendChild(resumenDiv);
        });
    }

    const resContainerSegunda = document.querySelector('#segunda #resumenes');
    if (resContainerSegunda) {
        librosSegunda.forEach(libro => {
            const resumenDiv = document.createElement('div');
            resumenDiv.classList.add('resumen');
            resumenDiv.innerHTML = `
                <h3>${libro.autor}</h3>
                <h4>${libro.obra}</h4>
                <p><strong>Biografía:</strong> ${libro.biografia}</p>
                <p><strong>Resumen:</strong> ${libro.resumen}</p>
            `;
            resContainerSegunda.appendChild(resumenDiv);
        });
    }
});
