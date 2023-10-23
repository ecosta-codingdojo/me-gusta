function darLike(like) {

    // Guardamos los elementos HTML que vamos a modificar
    var spanLike1 = document.querySelector("#like1");
    var spanLike2 = document.querySelector("#like2");
    var spanLike3 = document.querySelector("#like3");

    // Obtenemos el valor actual de los likes
    var like1 = spanLike1.innerText;  // 9
    var like2 = spanLike2.innerText;  // 12
    var like3 = spanLike3.innerText;  // 9

    // Si el like es 1, sumamos 1 al like1
    if (like === 1) {
        like1++;
        spanLike1.innerText = like1;
    }

    // Si el like es 2, sumamos 1 al like2
    if (like === 2) {
        like2++;
        spanLike2.innerText = like2;
    }

    // Si el like es 3, sumamos 1 al like3
    if (like === 3) {
        like3++;
        spanLike3.innerText = like3;
    }
}