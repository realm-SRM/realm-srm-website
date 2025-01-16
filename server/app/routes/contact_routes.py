from flask import Blueprint, jsonify, request
from dotenv import load_dotenv
import os
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
from email.mime.text import MIMEText
import base64

load_dotenv()

SCOPES = ['https://www.googleapis.com/auth/gmail.send']

script_dir = os.path.dirname(os.path.abspath(__file__))
credentials_path = os.path.join(script_dir, 'credentials.json')

email_sender = os.getenv('EMAIL')
email_password = os.getenv('PASSKEY')
email_reciever = os.getenv('OFFICIAL_EMAIL')

contact_routes = Blueprint('contact_routes', __name__)

@contact_routes.route('/contact', methods=['POST'])
def api_contact():
    data = request.json

    firstname = data.get("firstname")
    lastname = data.get("lastname")
    mail_id = data.get("mail_id")
    phone_no = data.get("phone_no")
    text = data.get("text")

    if not all([firstname, lastname, mail_id, phone_no, text]):
        return jsonify({"message":"Missing Fields"}), 400

    service = authenticate_gmail()
    email_status = send_email(
        service,
        sender=email_sender,
        to=email_reciever,
        subject='Contact from Website',
        body=f"""
Name: {firstname} {lastname}
Email: {mail_id}
Phone: {phone_no}
Message: {text}
"""
    )
    print(email_status)
    if email_status:
        return jsonify({"message": "Contact Form Submitted"}), 200
    else:
        return jsonify({"message": "Failed to submit contact form!"}), 503

    # reciever = "dt4025@srmist.edu.in"

    # subject = 'Contact Us'

    # body = mail_id + ' ' +  firstname + lastname + ' ' + phone_no  + ' ' + text

    # em = EmailMessage()
    # em['From'] = email_sender
    # em['To'] = reciever
    # em['Subject'] = subject
    # em.set_content(body)

    # context = ssl.create_default_context()

    # with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp :
    #     smtp.login(email_sender, email_password)
    #     smtp.sendmail(email_sender, reciever, em.as_string())

    # if all([firstname, lastname, mail_id, phone_no, text]):
    #     return jsonify({"message": "Contact form submitted!"}), 200
    # else:
    #     return jsonify({"message": "Missing required fields!"}), 400
    

def authenticate_gmail():
    creds = None

    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                credentials_path, SCOPES
            )
            creds = flow.run_local_server(port=8080)

        with open('token.json', 'w') as token:
            token.write(creds.to_json())

    service = build('gmail', 'v1', credentials=creds)
    return service
 
def send_email(service, sender, to, subject, body):
    message = MIMEText(body)
    message['to'] = to
    message['from'] = sender
    message['subject'] = subject

    raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
    message_body = {'raw': raw_message}

    try:
        sent_message = service.users().messages().send(userId='me', body=message_body).execute()
        print(sent_message)
        if sent_message.get('id'):
            return True
        else:
            return False
    except Exception as e:
        return False
    


'''
if success: return the above response with a 200 status code
if failed: return a response with a 503 status code {"message": "Failed to submit contact form!"}
'''
