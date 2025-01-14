from app import create_app
from dotenv import load_dotenv
import os
load_dotenv()

app = create_app()

if __name__ == "__main__":
    if os.getenv('ENVIRONMENT')=="development":
        app.run(debug=True)
    else:
        app.run()