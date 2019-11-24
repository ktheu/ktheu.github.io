def euklid(a, b):
    while a != b:
        if (a > b):
            a = a - b
        else:
            b = b - a
    return a


def euklid(a, b):
    while b != 0:
        a, b = b, a % b
    return a


def euklid(a, b):
    if a == b:
        return a
    if a < b:
        return euklid(a, b-a)
    else:
        return euklid(a-b, b)


def euklid(a, b):
    if b == 0:
        return a
    return euklid(b, a % b)


print(euklid(38, 42))
