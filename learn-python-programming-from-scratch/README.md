# :mortar_board: Learn Python programming From Scratch

:link: Eduonix [online course][course]

## Python Web Frameworks

- [CherryPy](https://cherrypy.org/)

## Django Steps

1. Create Django project

    ```shell
    django-admin.py startproject learnpython
    ```

    ```shell
    python manage.py runserver
    ```

2. Create Django application in the project

    ```shell
    python manage.py startapp msg
    ```

3. Configure settings.py and add the new app
4. Sync the database

    ```shell
    python manage.py makemigrations
    python manage.py migrate
    ```

5. Use shell to insert data

    ```sell
    python manage.py shell

    from msg.models import Message
    Message.objects.all()

    testmessage = Message(message="test message", username="testuser")
    Message.objects.all()

    msgobj = Message.objects.all()
    msgobj[0].message
    msgobj[0].username

    exit()
    ```

[course]: https://www.eduonix.com/new_dashboard/Learn-Python-programming-From-Scratch
