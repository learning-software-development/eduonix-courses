from random import randint

done = False

class ShoppingCart():
    def __init__(self):
        self.items = []

    def add_to_cart(self, item):
        self.items.append(item)

    def remove_from_cart(self, index):
        self.items.pop(index)

    def calc_total_price(self):
        total = 0
        for item in self.items:
            total += item.price
        return total

    def list_items(self):
        cid = 0
        print("\nCart Items:")
        for item in self.items:
            print( cid, item.price, item.name)
            cid += 1
        print()


class Item():
    def __init__(self, name, price):
        self.name = name
        self.price = price


store = []
item_names = ["Keyboard", "RAM", "Monitor", "Cable"]


def make_store_item(amount):
    store_items = 0
    while store_items < amount:
        nItem = Item(item_names[randint(0, len(item_names)-1)], randint(1, 50))
        store.append(nItem)
        store_items = store_items + 1


def create_store(store_file):
    try:
        file = open(store_file, 'r')
        str1 = file.read()
    except IOError:
        print("No Existing Store... generating items")
        make_store_item(4)


def list_store_items():
    print()
    iid = 0
    for x in store:
        print(iid, x.price, x.name)
        iid += 1


def print_instructions():
    print()
    print("Type C to view your cart items")
    print("Type R to remove a cart item")
    print("Type an item number to buy it")
    print("Type P to print the total cart price")
    print("Type Q to quit the application")
    print("Or choose an item to buy (type the id)")


def remove_item(cart):
    user_imput = input("Type a card item ID to remove ")
    cart.remove_from_cart(int(user_imput))


def handle_input(inVar, cart):
    char_input = ['C', 'R', 'P', 'Q', 'c', 'r', 'p', 'q']
    if inVar == 'C' or inVar == 'c':
        cart.list_items()
    if inVar == 'R' or inVar == 'r':
        remove_item(cart)
    if inVar == 'P' or inVar == 'p':
        print("The items in your cart currently cost:", cart.calc_total_price())
    if inVar == 'Q' or inVar == 'q':
        global done
        done = True

    if inVar not in char_input:
        try:
            cart.add_to_cart(store[int(inVar)])
        except:
            print("You have entered an illigal character!")



cart1 = ShoppingCart()
create_store("cart1.cartfile")

while not done:
    list_store_items()
    print_instructions()
    user_input = input()
    handle_input(user_input, cart1)
