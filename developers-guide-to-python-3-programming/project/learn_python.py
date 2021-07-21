from json import dumps, loads
import os

class Product():

    def __init__(self, name, price):
        self.name = name
        self.price = price

    def to_dict(self):
        return {"name": self.name, "price": self.price}


def add_product(name, price):
    new_product = Product(name, price)
    products.append(new_product)

def list_products(products):
    if len(products) == 0:
        print("There are currently 0 products to list")
    for product in products:
        print(f"Product '{product.name}'': Price: R{product.price}")

def total_products(product):
    total = 0

    for product in products:
        total += product.price

    print(f"The total of all the products are R{total}")
    return total

def save_products(products):
    product_save_list = []
    for product in products:
        product_save_list.append(product.to_dict())

    try:
        with open('products.json', 'w+') as product_file:
            product_file.write(dumps(product_save_list))
        print(f"Saved all products to a file 'products.json'")
    finally:
        product_file.close()

def load_products():
    products = []
    if os.path.isfile('products.json'):
        try:
            with open('products.json', 'r+') as product_file:
                product_json = product_file.read()
                product_data = loads(product_json)


                for product in product_data:
                    products.append(Product(product['name'], product['price']))

                print(f"Loaded all products from the file 'products.json'")
                print(f"\nThere are {len(products)} product(s) recorded.\n")
        finally:
            product_file.close()
    else:
        print("Unable to load file 'products.json'")
    return products


products = load_products()

running = True

print("\nWelcome to learning Python final project\n")
while running:
    print("type 'add' to add a product")
    print("type 'list' to list all the products")
    print("type 'total' to print the total price of all the products")
    print("type 'save' to save all added products to a file")
    print("type 'quit' to exit the program")
    print()
    command = input("type a command: ")
    print()

    if command == 'add':
        try:
            product_name = input("enter a name for your product: ")
            product_price = float(input("enter a price for your product: "))
            add_product(product_name, product_price)
        except ValueError:
            print("Error: please enter a valid price!")

    elif command == 'list':
        list_products(products)
    elif command == 'save':
        save_products(products)
    elif command == 'total':
        total_products(products)
    elif command == 'quit':
        running = False
        print("Exiting application now ...")
        save_products(products)
    else:
        print("Command not registered, please try again ...")

    print(f"\nThere are {len(products)} product(s) recorded.\n")

print("Goodbye")
