// Vous pouvez ajouter des interactions supplémentaires ici si nécessaire.
// Par exemple, un effet de défilement ou un changement d'animation pour les sections.
function toggleText(id) {
    const element = document.getElementById(id);
    element.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
        alert("Merci de découvrir les surprises marketing de Red Bull !");
    });
});
