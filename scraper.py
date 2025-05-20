from playwright.sync_api import sync_playwright
import time
import json

def run(url, file):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)  
        page = browser.new_page()
        
        
        page.goto(url)

        page.wait_for_timeout(5000)  

        print("Page Title:", page.title())


        last_height = 0
        while True:
            page.mouse.wheel(0, 3000)
            time.sleep(1.5)
            new_height = page.evaluate("document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

        cards = page.locator(".fv-wpf-plan-list li")  
        count = cards.count()

        results = []

        for i in range(count):
            card = cards.nth(i)
            img = card.locator("img")

            # 👇 scroll this individual image into view
            img.scroll_into_view_if_needed()
            page.wait_for_timeout(300)
            
            try:
                link = cards.nth(i).locator("figure a").get_attribute("href")
            except Exception:
                link = "#"
            try:
                imageSrc = cards.nth(i).locator("figure a img").get_attribute("src")
            except Exception:
                imageSrc = "nonFound"
            try:
                location = cards.nth(i).locator("app-plan-location div span").inner_text()
            except Exception:
                location = ""
            try:
                title = cards.nth(i).locator("h3").inner_text()
            except Exception:
                title = ""
            
            try:
                dateTime = cards.nth(i).locator(".fv-plan-card-v2__date-range").inner_text()
            except Exception:
                dateTime = ""
            try:
                price = cards.nth(i).locator(" div.fv-plan-card-v2__price  span").inner_text()
            except Exception:
                price = ""

            results.append({
                "title": title,
                "link": link,
                "imageSrc": imageSrc,
                "location": location,
                "time": dateTime,
                "ticketPrice": price
            })

        with open(f"scraped/{file}", "w") as file:
            json.dump(results, file)
        

        print(f"Wrote {file} Successfully !")


        browser.close()

toScrape = [
            {
                "link": "https://feverup.com/en/sydney/candlelight",
                "fileName": "candlelight.json"
            },
            {
                "link": "https://feverup.com/en/sydney/music-events",
                "fileName": "musicals.json"
            },
            {
                "link": "https://feverup.com/en/sydney/attractions-tours-trips",
                "fileName": "attractions.json"
            },
            {
                "link": "https://feverup.com/en/sydney/activities-games",
                "fileName": "activities.json"
            },
            {
                "link": "https://feverup.com/en/sydney/culture-art-fashion",
                "fileName": "art.json"
            },
            {
                "link":"https://feverup.com/en/sydney/theater-comedy-shows",
                "fileName": "comedy.json"
            }
        ]


for obj in toScrape:
    run(obj['link'], obj['fileName'])
