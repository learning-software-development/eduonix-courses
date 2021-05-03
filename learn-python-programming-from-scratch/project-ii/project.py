import cherrypy


class Calculator():
    @cherrypy.expose
    def index(self):
        fx = open("index.html", 'r')
        webform = fx.read()
        return webform

    @cherrypy.expose
    def do_calc(self, num1=None, operator=None, num2=None):
        return str(eval(num1+" "+operator+" "+num2))


if __name__ == "__main__":
    cherrypy.quickstart(Calculator())
