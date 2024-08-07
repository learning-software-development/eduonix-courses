import cherrypy

class FirstPage(object):
    @cherrypy.expose
    def handle_data(self, name=None):
        return name

    @cherrypy.expose
    def index(self):
        return """
        <form action="handle_data" method="POST">
            <input type="text" name="name">
            <input type="submit" value="Submit">
        </form>
        """


if __name__ == "__main__" :
    cherrypy.quickstart(FirstPage())
