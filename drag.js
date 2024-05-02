
const draggableElement = document.getElementById("draggableElement");
let isDragging = false;
let initialMouseX;
let initialMouseY;
let initialElementX;
let initialElementY;

// Ajoutez un écouteur d'événement "mousedown" sur l'élément que vous souhaitez déplacer. Cet écouteur devra enregistrer la position initiale de la souris et la position initiale de l'élément
draggableElement.addEventListener("mousedown", (event) => {
    isDragging = true;
    initialMouseX = event.clientX;
    initialMouseY = event.clientY;
    initialElementX = draggableElement.offsetLeft;
    initialElementY = draggableElement.offsetTop;
})

// Ajoutez un écouteur d'événement "mousemove" sur le document entier. Cet écouteur devra vérifier si le déplacement est en cours (isDragging = true) et mettre à jour la position de l'élément en fonction de la position actuelle de la souris.
document.addEventListener("mousemove", (event) => {
    if (isDragging) {
      const newX = initialElementX + (event.clientX - initialMouseX);
      const newY = initialElementY + (event.clientY - initialMouseY);
      draggableElement.style.left = `${newX}px`;
      draggableElement.style.top = `${newY}px`;
    }
  });
  
//  Ajoutez un écouteur d'événement "mouseup" sur le document entier. Cet écouteur devra réinitialiser la variable isDragging à false lorsque le déplacement est terminé.
document.addEventListener("mouseup", () => {
    isDragging = false;
  });