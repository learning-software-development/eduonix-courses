import smtplib as mail

mailserver = mail.SMTP("example.net")
mailserver.login("testuser", "password")

message = """
From: Sender name<sender@example.net>
To: <reciepient@example.net>
Subject: A Test Mail
Content-type: text/html
MIME-Version: 1.0

This will be the body of the mail
"""
mailserver.sendmail("sender@example.net", "reciepient@example.net", message)
