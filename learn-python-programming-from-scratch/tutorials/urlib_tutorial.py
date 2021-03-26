import urllib as url

web_data = url.urlopen("https://docs.python.org/3/library/urllib.html")
print(web_data)

web_content = url.urlretrieve("https://docs.python.org/3/library/urllib.html", "urllib.html")
