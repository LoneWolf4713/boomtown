from flask import Flask, request, jsonify
from flask_cors import CORS
import json



app = Flask(__name__)
CORS(app)






@app.route('/getCandle')
def getCandlelight():
    with open("scraped/candlelight.json") as file:
        toSend = json.load(file)
        return jsonify(toSend)
    
@app.route('/getThings')
def getThings():
    with open("scraped/activities.json") as file:
        toSend = json.load(file)
        return jsonify(toSend)

@app.route('/getFun')
def getFun():
    with open("scraped/attractions.json") as file:
        toSend = json.load(file)
        return jsonify(toSend)
    
@app.route('/getLive')
def getLive():
    with open("scraped/comedy.json") as file:
        toSend = json.load(file)
        return jsonify(toSend)
    
@app.route('/getMusic')
def getMusic():
    with open("scraped/musicals.json") as file:
        toSend = json.load(file)
        return jsonify(toSend)
@app.route('/getCultural')
def getCultural():
    with open("scraped/art.json") as file:
        toSend = json.load(file)
        return jsonify(toSend)
@app.route('/email')
def dumpEmail():
    email = request.args.get("email")
    link = request.args.get("link")
    data = []
    with open("emails.json") as file:
        data = json.load(file)
    data.append({
        "email": email,
        "link": link
    })
    with open("emails.json", "w") as file:
        json.dump(data, file)

    return jsonify([200])


    
if __name__ == "__main__":
    app.run(debug=True)
        


 

