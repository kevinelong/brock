numbers = [1, 2, 3]
print(numbers[1])
for n in numbers:
    print(n)
product = {
    "price": 100,
    "name": "Knife K-1"
}
quantity = 12
print(product["price"] * quantity)

def times (a, b):
    return a * b
def add (x, y):
    return x + y
result = add(6, 7)
print(result)
products = [
    {
        "price": 2,
        "name": "coke"
    },{
        "price": 3,
        "name": "ice cream"
    },{
        "price": 4,
        "name": "cherry pie"
    }
]
for p in products:
    print(p["name"], p["price"])

age = 20
LIMIT = 21

if age > LIMIT:
    print("good to go")
else:
    print("nope")

# AS A FUNCTION
def getAgeMessage(age):
    LIMIT = 21

    if age > LIMIT:
        return "good to go"
    else:
        return "nope"

print(getAgeMessage(33))
print(getAgeMessage(11))

ages = [55,44,11,22,33]
for a in ages:
    print(getAgeMessage(a))

# as a function
def checkEmAll(ages):
    for a in ages:
        print(getAgeMessage(a))

checkEmAll([11,11,22,11,22])