//-----------------------------------------------DESSIN TABLEAU--------------------------------------------------------------//

function Tableau2D(x, y) {
    var array2D = new Array(x);
    for (var i = 0; i < array2D.length; i++) {
        array2D[i] = new Array(y);
    }
    return array2D;
}

let monTableau = new Tableau2D(10, 10);

function drawTableau2D(x, y, emplacement) {
    let idString = ""
    let texte = "<table>"
    for (let xx=0; xx < x; xx++) {
        texte += `<tr>`
        for (let yy=0; yy < y; yy++) {
            idString = xx+"-"+yy
            texte += `<td id="${idString}"></td>`
        }
        texte += `</tr>`
    }
    texte += `</table>`
    document.getElementById(emplacement).innerHTML = texte
}