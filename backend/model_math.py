import math


def calculate_y(x):
    x %= 24
    y = (1 * math.cos(x * math.pi / 12 + 5) / 4) + 4 / 3
    return y
