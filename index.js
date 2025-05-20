let host = "https://boomtown.onrender.com";
document.addEventListener("DOMContentLoaded", function () {
  fetchAPI(`${host}/getCandle`).then((data) => {
    fillInCards(data);
  });
});

gsap.from("#eventsSection .container", {
  scrollTrigger: {
    trigger: "#eventsSection",
    start: "top 80%", 
    toggleActions: "play none none none",
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out",
});

const greetings = [
  "Hello!", // English
  "Ni hao!", // Mandarin Chinese
  "Hola!", // Spanish
  "Namaste!", // Hindi (also Namaste)
  "Marhaban!", // Arabic
  "Bonjour!", // French
  "Hyalo!", // Bengali
  "Privet!", // Russian
  "Ola!", // Portuguese
  "Hello!", // Urdu
  "Namaste!", // Hindi/Sanskrit
  "Konnichiwa!", // Japanese
  "Annyeonghaseyo!", // Korean
  "Hallo!", // German
  "Salam!", // Persian
];

const greetingEl = document.getElementById("greeting-text");
let index = 0;

function showGreeting() {
  gsap.to(greetingEl, {
    duration: 0.6,
    y: -30,
    opacity: 0,
    ease: "power1.in",
    onComplete: () => {
      // Update text
      index = (index + 1) % greetings.length;
      greetingEl.textContent = greetings[index];

      gsap.fromTo(
        greetingEl,
        { y: 30, opacity: 0 },
        { duration: 0.6, y: 0, opacity: 1, ease: "power1.out" }
      );
    },
  });
}


gsap.fromTo(
  greetingEl,
  { y: 30, opacity: 0 },
  { duration: 0.6, y: 0, opacity: 1, ease: "power1.out" }
);


setInterval(showGreeting, 1000);

async function fetchAPI(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function getBackToNormal(){
  
  document.querySelector("#categories .is-chosen").classList.remove("is-chosen");

  
  document.getElementById("eventsContainer").innerHTML = '';
}

function fillInCards(data) {
  let eventsContainer = document.getElementById("eventsContainer");

  for (item of data) {
    let column = document.createElement("div");
    column.classList.add("column");
    column.classList.add("is-one-third");
    column.classList.add("is-narrow");

    column.innerHTML = `
   <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img
                    src="${item['imageSrc']}"
                    alt="Placeholder image" loading='lazy'
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div
                    class="media-content is-flex is-flex-direction-column is-align-items-flex-start"
                  >
                    <h4 class="title is-5 has-text-left">
                      ${item['title']}
                    </h4>

                    <p class="subtitle is-size-6 mt-2 mb-0">📅 ${item["time"]}</p>
                    <p class="subtitle is-size-6 m-0">
                      📍 ${item["location"]}
                    </p>
                  </div>
                </div>

                <div class="content">
                  <!-- <p class="subtitle is-size-6">
                    Good sleep is as essential to our health as diet and
                    exercise—yet it remains as mysterious to us as our dreams.
                    In this insightful discussion, brought...
                  </p> !-->
                  <div class="m-0 p-0">
                    <div class="columns level is-mobile">
                      <div class="level-item is-size-6">💵 ${item["ticketPrice"]}</div>

                      <div class="level-item">
                        <button class="button bg-green rounded is-fullwidth" data-bookLink='${item['link']}' onclick='bookBtnClicked(this)'>
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  `;
  column.style.animationDelay = `${index * 100}ms`;
  eventsContainer.appendChild(column);
  }
}

function loadCandlelight(e) {
  getBackToNormal();

  setTimeout( ()=> {
  e.classList.add("is-chosen");
  }, 100)
  fetchAPI(`${host}/getCandle`).then((data) => {
    fillInCards(data);
  });
}
function loadMusic(e) {
  getBackToNormal();
    setTimeout( ()=> {
  e.classList.add("is-chosen");
  }, 100)
  fetchAPI(`${host}/getMusic`).then((data) => {
    fillInCards(data);
  });
}function loadFun(e) {
  getBackToNormal();
    setTimeout( ()=> {
  e.classList.add("is-chosen");
  }, 100)
  fetchAPI(`${host}/getFun`).then((data) => {
    fillInCards(data);
  });
}function loadThings(e) {
  getBackToNormal();
    setTimeout( ()=> {
  e.classList.add("is-chosen");
  }, 100)
  fetchAPI(`${host}/getThings`).then((data) => {
    fillInCards(data);
  });
}function loadCultural(e) {
  getBackToNormal();
    setTimeout( ()=> {
  e.classList.add("is-chosen");
  }, 100)
  fetchAPI(`${host}/getCultural`).then((data) => {
    fillInCards(data);
  });
}function loadLive(e) {
  getBackToNormal();
    setTimeout( ()=> {
  e.classList.add("is-chosen");
  }, 100)
  fetchAPI(`${host}/getLive`).then((data) => {
    fillInCards(data);
  });
}

function bookBtnClicked(e){
  document.getElementById("modalGetEmail").classList.add("is-active");
  document.getElementById("redirectStartBtn").dataset.url = e.dataset.booklink;
}

document.getElementById("redirectStartBtn").addEventListener("click", () => {
  document.getElementById("redirectStartBtn").classList.add("is-loading")
  let value = document.getElementById("email").value;
  if (value != ""){
    fetch(`${host}/email?email=${value}&link=${document.getElementById("redirectStartBtn").dataset.url}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data[0] == 200){
          document.getElementById("redirectStartBtn").classList.remove("is-loading");
          setTimeout( () => {
          window.location.href = document.getElementById("redirectStartBtn").dataset.url;

          }, 1000)
        }
      })
  }else{
    document.getElementById("email").classList.add("is-danger");
  }
})

