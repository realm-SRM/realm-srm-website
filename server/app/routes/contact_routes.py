from flask import Blueprint, jsonify, request
from email.message import EmailMessage
import ssl
import smtplib
from dotenv import load_dotenv
import os

load_dotenv()

email_sender = os.getenv('email')
email_password = os.getenv('PASSKEY')

contact_routes = Blueprint('contact_routes', __name__)

@contact_routes.route('/contact', methods=['POST'])
def api_contact():
    if request.method == "POST":

        reciever = "dt4025@srmist.edu.in"

        subject = 'Contact Us'

        data = request.json

        firstname = data.get("firstname")
        lastname = data.get("lastname")
        mail_id = data.get("mail_id")
        phone_no = data.get("phone_no")
        text = data.get("text")

        body = mail_id + ' ' +  firstname + lastname + ' ' + phone_no  + ' ' + text

        em = EmailMessage()
        em['From'] = email_sender
        em['To'] = reciever
        em['Subject'] = subject
        em.set_content(body)

        context = ssl.create_default_context()

        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp :
            smtp.login(email_sender, email_password)
            smtp.sendmail(email_sender, reciever, em.as_string())

        if all([firstname, lastname, mail_id, phone_no, text]):
            return jsonify({"message": "Contact form submitted!"}), 200
        else:
            return jsonify({"message": "Missing required fields!"}), 400
'''
if success: return the above response with a 200 status code
if failed: return a response with a 503 status code {"message": "Failed to submit contact form!"}
'''
