from flask import Flask, request
from model import Query
import json

app = Flask(__name__)

address = "./emr_2.json"
f = open(address)
data = json.load(f)
context = " ".join(data['context'])

q = Query()


@app.route("/query", methods=['GET', 'POST'])
def query():
    args = request.args
    question = args.get('question')
    if question == 'exit':
        exit()
    else:
        return q.query(context, question)


if __name__ == "_main_":
    app.run(debug=True)
