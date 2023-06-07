
def get_total(numbers):
    subtotal = 0
    for x in numbers:
        subtotal = subtotal + x
        print(x)

    return subtotal

#TEST
print(get_total([11,3,5]))