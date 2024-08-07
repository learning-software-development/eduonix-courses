import urllib.request as url
import xml.etree.ElementTree as et


def add_numbers(prices):
    result = 0
    for price in prices:
        result += price

    return result


web_data = url.urlopen("https://www.w3schools.com/xml/cd_catalog.xml")
str_data = web_data.read()
xml_data = et.fromstring(str_data)

cd_list = xml_data.findall("CD")
cd_prices = []
for cd in cd_list:
    print(cd.find("TITLE").text)
    cd_prices.append(float(cd.find("PRICE").text))

print(add_numbers(cd_prices))
