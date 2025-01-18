import threading
import requests
import time
from googleapiclient.discovery import build
from google.oauth2.service_account import Credentials
from dotenv import load_dotenv
from os import getenv
import json

load_dotenv('.env')

class ScheduledTask:
    def __init__(self, interval):
        self.interval = interval
        self.thread = threading.Thread(target=self.self_call, args=())
        self.thread.daemon = True
        self.thread.start()

    def self_call(self):
        while True:
            response = requests.get("http://localhost:5000/api/members")
            print("Self Call Status:",response.status_code)
            self.update_members_json()
            time.sleep(self.interval)

    def update_members_json(self): 
        print("here")         
        SERVICE_ACCOUNT_FILE = 'client_secret.json'
        SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
        SPREADSHEET_ID = getenv('SPREADSHEET_ID_MEMBERS')
        SHEET_NAME = getenv('SHEET_NAME')
        credentials = Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
        service = build('sheets', 'v4', credentials=credentials)
        # try:
        sheet = service.spreadsheets()
        result = sheet.values().get(spreadsheetId=SPREADSHEET_ID, range=SHEET_NAME).execute()
        data = result.get('values', [])
        headers = data[0]
        rows = data[1:]

        # Initialize result dictionary
        result = {
            "President": [],
            "Director": [],
            "Project Lead": [],
            "Tech Lead": [],
            "Secretary": [],
            "Web Developer": [],
            "App Developer": [],
            "AI/ML Developer": [],
            "UI/UX Designer": [],
            "RnD": [],
            "Events": []
        }
        for row in rows:
            mapped_data = dict(zip(headers, row))
            designation = mapped_data['Designation']

            # Classify based on designation or domain
            if designation in ["President", "Director", "Project Lead", "Tech Lead", "Secretary"]:
                result[designation].append({
                    "name": mapped_data['Name'],
                    "tagline": mapped_data['Tagline'],
                    "image": mapped_data['Profile Picture URL'],
                    "insta": mapped_data['Instagram Profile URL'],
                    "github": mapped_data['Github Profile URL'],
                    "LinkedIn": mapped_data['Linkedin Profile URL']
                })
            else:
                domain = mapped_data['Domain']
                if domain in result:
                    result[domain].append({
                        "name": mapped_data['Name'],
                        "tagline": mapped_data['Tagline'],
                        "image": mapped_data['Profile Picture URL'],
                        "insta": mapped_data['Instagram Profile URL'],
                        "github": mapped_data['Github Profile URL'],
                        "LinkedIn": mapped_data['Linkedin Profile URL']
                    })

        # Output the result
        print(result)
        with open('members.json', 'w') as f:
            json.dump(result, f, indent=4)

        # except Exception as e:
        #     print("Error: ",e)
        #     print(e)
        #     # return {"error": str(e)}, 500