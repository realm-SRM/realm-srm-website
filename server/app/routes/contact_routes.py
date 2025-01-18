from flask import Blueprint, jsonify, request
from dotenv import load_dotenv
import os
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from google.auth.transport.requests import Request
import yagmail
from datetime import datetime
load_dotenv(override=True)

SCOPES = [ 'https://www.googleapis.com/auth/spreadsheets']

script_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.abspath(os.path.join(script_dir, '../../'))
credentials_path = os.path.join(root_dir, 'credentials_devanshu.json')

email_sender = os.getenv('SENDER_EMAIL')
email_password = os.getenv('PASSKEY')
email_reciever = os.getenv('OFFICIAL_EMAIL')
spreadsheet_id = os.getenv('SPREADSHEET_ID_CONTACT')
sheet_range = 'Sheet1!A1'

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
    print(email_sender, email_password, email_reciever)
    yag = yagmail.SMTP(email_sender, email_password)
    email_status = yag.send(
        to=email_reciever,
        subject='Contact from Website',
        contents=f"""Name: {firstname} {lastname}
Email: {mail_id}
Phone: {phone_no}
Message: {text}
"""
    )
    yag.close()
    service_sheets = authenticate_sheets()
    append_status = append_to_sheet(service_sheets, spreadsheet_id, sheet_range, [firstname, lastname, mail_id, phone_no, text, datetime.now().strftime("%d-%m-%Y %H:%M:%S")])

    if not email_status and append_status:
        return jsonify({"message": "Contact Form Submitted"}), 200
    else:
        return jsonify({"message": "Failed to submit contact form!"}), 503

def authenticate_sheets():
    creds = None

    if os.path.exists('token_contact.json'):
        creds = Credentials.from_authorized_user_file('token_contact.json', SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                credentials_path, SCOPES
            )
            creds = flow.run_local_server(port=8080)

        with open('token_contact.json', 'w') as token:
            token.write(creds.to_json())

    service = build('sheets', 'v4', credentials=creds)
    return service

def append_to_sheet(service, spreadsheet_id, range_name, values):
    body = {
        'values': [values]
    }
    
    try:
        result = service.spreadsheets().values().append(
            spreadsheetId=spreadsheet_id,
            range=range_name,
            valueInputOption="RAW",
            body=body
        ).execute()
        if result.get('updates') and result['updates'].get('updatedCells'):
            return True
        else:
            return False
    except Exception as e:
        print(f"Error appending to Google Sheets: {e}")
        return False

'''
if success: return the above response with a 200 status code
if failed: return a response with a 503 status code {"message": "Failed to submit contact form!"}
'''
