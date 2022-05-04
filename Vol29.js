function Tableau2D(x, y) {
    var array2D = new Array(x);
    for (var i = 0; i < array2D.length; i++) {
    array2D[i] = new Array(y);
    }
    return array2D;
}

let monTableau = new Tableau2D(10, 10);
monTableau[5][2] = "Tresor" ;




//-----------------------------------------------DESSIN TABLEAU--------------------------------------------------------------//

let unTexte = "<p>Code <strong>HTML</strong> généré via JavaScript.</p>"
document.getElementById("ici").value = unTexte