const resizeHandle = document.getElementById("resizeHandle");
let isResizing = false;
let initialMouseX;
let initialTableWidth;

// Ajoutez un écouteur d'événement "mousedown" sur la poignée de redimensionnement. Cet écouteur devra enregistrer la position initiale de la souris et la largeur initiale du tableau
resizeHandle.addEventListener("mousedown", (event) => {
    isResizing = true;
    initialMouseX = event.clientX;
    initialTableWidth = myTable.clientWidth;
});

const resizeHandleTwo = document.getElementById("resizeHandletwo");
let isResizingTwo = false;
let initialMouseXTwo;
let initialTableWidthTwo;
let initialHandleLeft;

resizeHandleTwo.addEventListener("mousedown", (event) => {
    isResizingTwo = true;
    initialMouseXTwo = event.clientX;
    initialTableWidthTwo = myTableTwo.clientWidth;
});

// Ajoutez un écouteur d'événement "mousemove" sur le document entier. Cet écouteur devra vérifier si le redimensionnement est en cours (isResizing = true) et mettre à jour la largeur du tableau en fonction de la position actuelle de la souris
document.addEventListener("mousemove", (event) => {
    if (isResizing) {
        const newWidth = initialTableWidth + (event.clientX - initialMouseX);
        myTable.style.width = `${newWidth}px`;
    }
    if (isResizingTwo) {
        const newWidthTwo = initialTableWidthTwo + (initialMouseXTwo - event.clientX);
        myTableTwo.style.width = `${newWidthTwo}px`;
    }
});

// Ajoutez un écouteur d'événement "mouseup" sur le document entier. Cet écouteur devra réinitialiser la variable isResizing à false lorsque le redimensionnement est terminé.
document.addEventListener("mouseup", () => {
    isResizing = false;
    isResizingTwo = false;
});

