
## 🌆 Boomtown — Event Aggregator for Sydney

**Assignment 1: Mandatory Internship Task**  
**Objective:**

> Create a web page that displays real-time event listings in Sydney, Australia by scraping data from public sources and presenting it in a user-friendly format. The page should include ticket redirection and email capture functionality, and automatically update events as they’re published.

### 🔗 Live Demo

👉 [https://lonewolf4713.github.io/boomtown/](https://lonewolf4713.github.io/boomtown/)


### ✨ Highlights

-   🎨 Custom design with CSS animations and transitions
    
-   📦 Scraped real-time data using Python
    
-   🔥 Flask backend API to serve JSON data
    
-   📧 Email capture with redirect to ticketing sites
    
-   🚀 Deployed frontend with GitHub Pages

### 📌 Project Overview

This project was created as part of an internship assignment focused on building a web-based event aggregator for Sydney. While the base requirement could have been met with a straightforward webpage, I decided to challenge myself and take a more creative approach.

I opted for a bold design experiment — stepping away from conventional frameworks like Bulma's default styling — and instead built an interactive, visually rich frontend with custom CSS, animations, and smooth transitions. The landing section is designed to be eye-catching and immersive, leading into scrollable sections that showcase the actual event data.

Each event includes a **“GET TICKETS”** button, which prompts the user for their email and then redirects them to the original source. The email is collected for potential opt-in use and stored on the backend.

The backend is powered by a Flask server which serves data scraped from various event listing platforms. The data updates automatically, so the website stays current without manual intervention.

----------

### 🛠 Tech Stack
**Backend**

`Python` · `Flask` (for REST API) · `Playwright` (for web scraping)

**Frontend**

`HTML` · `CSS` · `Bulma` (light usage) · `JavaScript` · `GSAP` (for animations)

**Other**

Custom CSS animations & transitions · GitHub Pages for deployment

### 📡 API Endpoints

All endpoints are exposed via a Flask server and serve JSON data or record email submissions. These are intended to be consumed by the frontend.



GET

`/getCandle`

Returns **Candlelight Concerts** data

GET

`/getThings`

Returns **Activities/Things to Do** data

GET

`/getFun`

Returns **Attractions** data

GET

`/getLive`

Returns **Comedy/Live Events** data

GET

`/getMusic`

Returns **Musicals/Music Shows** data

GET

`/getCultural`

Returns **Art/Cultural Exhibitions** data

GET

`/email?email=...&link=...`

Accepts an email and the link the user clicked on, then records it to `emails.json`

# Screenshots 📸:
![screenshot-1747759938511](https://github.com/user-attachments/assets/635f5e1b-0b9c-4cf6-a94e-9bd06e59c42c)
![screenshot-1747759953878](https://github.com/user-attachments/assets/6004c99f-e634-4a19-8192-38343fd6d922)
![screenshot-1747759966880](https://github.com/user-attachments/assets/577f02bd-dbcb-48e1-9b69-c88858804e81)



