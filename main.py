import requests, base64
import json
from flask import Flask, jsonify, render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/')
@cross_origin()
def index():
     usrPass = "jenil.jain@rutgers.edu:Jj@2021MSCS"
     tok_m_bytes = usrPass.encode('ascii')
     b64Val = base64.b64encode(tok_m_bytes)
     base64_message = b64Val.decode('ascii')
     r=requests.get("https://zccjj822.zendesk.com/api/v2/users/421892796652/tickets/assigned", 
                    headers={"Authorization": "Basic %s" % base64_message, "Content-type":"application/json"})
     
     text = json.dumps(r.json(), sort_keys=True, indent=4)
     return((text))
     # return render_template('index.html', title="page", jsonfile=json.dumps(text))

if __name__ == "__main__":
     app.run(debug=True)

     
 