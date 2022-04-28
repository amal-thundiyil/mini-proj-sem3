from flask import Flask, request
from model import Query
import json
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources=r"/*", origins="*", supports_credentials=True)
data = None

with open("./emr_2.json") as f:
    data = json.loads(f.read())

context = " ".join(data.get('context'))

q = Query()

@app.route("/query", methods=['GET', 'POST'])
def query():
    args = request.args
    question = args.get('question')
    if question == 'exit':
        exit()
    else:
        return q.query(context, question)


if __name__ == "__main__":
    app.run(debug=True)
