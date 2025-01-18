from flask import Blueprint
import os
import json

members_routes = Blueprint('members_routes', __name__)


@members_routes.route('/members', methods=['GET'])
def api_members():
    with open('members.json') as f:
        data = json.load(f)
    return data,200
    '''
    credentials = Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = build('sheets', 'v4', credentials=credentials)
    try:
        sheet = service.spreadsheets()
        result = sheet.values().get(spreadsheetId=SPREADSHEET_ID, range=SHEET_NAME).execute()
        data = result.get('values', [])

        headers = data[0]
        rows = data[1:]

        result = {}

        for row in rows:
            mapped_data = dict(zip(headers, row))
            designation = mapped_data['Designation']
            
            # Add designation to result if not already present
            if designation not in result:
                result[designation] = []
            
            # Append the current row's data to the designation list
            result[designation].append({
                "name": mapped_data['Name'],
                "domain": mapped_data['Domain'],
                "tagline": mapped_data['Tagline'],
                "image": mapped_data['Profile Picture URL'],
                "insta": mapped_data['Instagram Profile URL'],
                "github": mapped_data['Github Profile URL'],
                "linkedIn": mapped_data['Linkedin Profile URL']
            })

        return jsonify(result), 200

    except Exception as e:
       return jsonify({"error": str(e)}), 500
'''