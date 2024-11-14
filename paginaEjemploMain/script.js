document.getElementById("btn").addEventListener("click", () => {

    let nombre = document.getElementById("nombre").value;
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let op = document.getElementById("op").value;

    if (op == "Suma") {
        let result = n1 + n2;
        document.getElementById("resultado").innerHTML = ("hola " + nombre + " tu resultado es " + result);
    } else if (op == "Resta") {
        let result = n1 - n2;
        document.getElementById("resultado").innerHTML = ("hola " + nombre + " tu resultado es " + result);
    } else {
        alert("Algo tienes que elegir");
    }
});
