const euklidKlassisch = (a, b) => {
    let k = Math.max(a.toString().length, b.toString().length);
    as = a.toString().padStart(k);
    bs = b.toString().padStart(k + 2);
    tmp = as + bs + '\n';
    while (a != b) {
        if (a > b) a = a - b;
        else b = b - a;

        as = a.toString().padStart(k);
        bs = b.toString().padStart(k + 2);
        tmp += as + bs + '\n';

    }
    return tmp;
}

const euklidModern = (a, b) => {
    let k = Math.max(a.toString().length, b.toString().length);
    as = a.toString().padStart(k);
    bs = b.toString().padStart(k + 2);
    let tmp = as + bs + '\n';
    while (b !== 0) {
        let c = a;
        a = b;
        b = c % b;

        as = a.toString().padStart(k);
        bs = b.toString().padStart(k + 2);
        tmp += as + bs + '\n';
        console.log(as, bs);
    }
    return tmp;
}

const euklid = (a, b) => {
    while (b != 0) {
        tmp = a;
        a = b;
        b = tmp % b
    }
    return a;
}

const setCode = (lang) => {
    document.getElementById("euklidKlassisch").innerHTML = euklidKlassisch_map[lang];
    document.getElementById("euklidModern").innerHTML = euklidModern_map[lang];
    document.getElementById("euklidKlassischRekursiv").innerHTML = euklidKlassischRekursiv_map[lang];
    document.getElementById("euklidModernRekursiv").innerHTML = euklidModernRekursiv_map[lang];
}

const euklidSubmit = document.getElementById("euklidSubmit");
euklidSubmit.addEventListener('click', () => {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    document.getElementById("ergebnis1").innerHTML = euklidKlassisch(a, b);
    document.getElementById("ergebnis2").innerHTML = euklidModern(a, b);
    document.getElementById("result").innerHTML = `ggt =  ${euklid(a,b)}`;
});

const btnPython = document.getElementById("btnPython");
const btnJavascript = document.getElementById("btnJavascript");
const btnJava = document.getElementById("btnJava");

btnPython.addEventListener('click', () => setCode('python'));
btnJavascript.addEventListener('click', () => setCode('javascript'))
btnJava.addEventListener('click', () => setCode('java'))

setCode('python');