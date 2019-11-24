function euklid(a, b) {
    while (a != b) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    return a;
}


function euklid(a, b) {
    while (b != 0) {
        let tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}

function euklid(a, b) {
    if (a === b)
        return a;
    if (a < b)
        return euklid(a, b - a);
    else
        return euklid(a - b, b);
}

function euklid(a, b) {
    if (b === 0)
        return a;
    return euklid(b, a % b);
}

console.log(euklid(32, 28));