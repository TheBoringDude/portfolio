import json
import os
from urllib.parse import urlencode
from urllib.request import urlretrieve

ACCESS_KEY = os.getenv("ACCESS_KEY")

all_contents = ["websites", "webapps"]


for i in all_contents:
    f = open(f"content/works/{i}.json")

    data = json.load(f)

    for j in data:
        image_name = f"static/screenshots/{j['name']}.jpeg"

        if os.path.isfile(image_name):
            continue

        print(f"Downloading `{j['name']}`")

        params = urlencode(dict(access_key=ACCESS_KEY, url=j["website"]))

        urlretrieve(
            "https://api.apiflash.com/v1/urltoimage?" + params,
            image_name,
        )
