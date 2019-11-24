public static int euklid(int a, int b) {
    while (a != b) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    return a;
}


public static int euklid(int a, int b) {
    while (b != 0) {
        int tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}

public static int euklid(int a, int b) {
    if (a == b)
        return a;
    if (a > b)
        return euklid(a - b, b);
    else
        return euklid(a, b - a);
}


public static int euklid(int a, int b) {
    if (b == 0)
        return a;
    return euklid(b, a % b);
}