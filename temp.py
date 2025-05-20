import json

with open("emails.json", "w") as file:
    data = []
    data.append({
        "email": "abc@123.com",
        "link": "https://google.com"
    })
    json.dump(data, file)
