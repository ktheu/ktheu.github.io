const euklidKlassisch_py = `def euklid(a, b):
    while a != b:
        if (a > b):
            a = a - b
        else:
            b = b - a
    return a
`;

const euklidKlassisch_js = `function euklid(a, b) {
    while (a != b) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    return a;
}
`;

const euklidKlassisch_java = `public static int euklid(int a, int b) {
    while (a != b) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    return a;
}
`;

const euklidModern_py = `def euklid(a, b):
    while b != 0:
        a, b = b, a % b
    return a
`;

const euklidModern_js = `function euklid(a, b) {
    while (b != 0) {
        let tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}  
`;

const euklidModern_java = `public static int euklid(int a, int b) {
    while (b != 0) {
        int tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
} 
`;

const euklidKlassischRekursiv_py = `def euklid(a, b):
    if a == b:
        return a
    if a < b:
        return euklid(a, b-a)
    else:
        return euklid(a-b, b)
`;

const euklidKlassischRekursiv_js = `function euklid(a, b) {
    if (a === b)
        return a;
    if (a < b)
        return euklid(a, b - a);
    else
        return euklid(a - b, b);
}
`;

const euklidKlassischRekursiv_java = `public static int euklid(int a, int b) {
    if (a == b)
        return a;
    if (a > b)
        return euklid(a - b, b);
    else
        return euklid(a, b - a);
}
`;

const euklidModernRekursiv_py = `def euklid(a, b):
    if b == 0:
        return a
    return euklid(b, a % b)
`;

const euklidModernRekursiv_js = `function euklid(a, b) {
    if (b === 0)
        return a;
    return euklid(b, a % b);
} 
`;

const euklidModernRekursiv_java = `public static int euklid(int a, int b) {
    if (b == 0)
        return a;
    return euklid(b, a % b);
}
`;
 
const euklidKlassisch_map = {
    "python": euklidKlassisch_py,
    "javascript": euklidKlassisch_js,
    "java": euklidKlassisch_java
};

const euklidModern_map = {
    "python": euklidModern_py,
    "javascript": euklidModern_js,
    "java": euklidModern_java
};

const euklidKlassischRekursiv_map = {
    "python": euklidKlassischRekursiv_py,
    "javascript": euklidKlassischRekursiv_js,
    "java": euklidKlassischRekursiv_java
};

const euklidModernRekursiv_map = {
    "python": euklidModernRekursiv_py,
    "javascript": euklidModernRekursiv_js,
    "java": euklidModernRekursiv_java
};

