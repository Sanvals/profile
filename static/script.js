document.addEventListener("DOMContentLoaded", () => {
    const $ = element => document.querySelector(element);
    const $$ = element => document.querySelectorAll(element);

    const cards = $$(".card");
    const filterButtons = $$(".search");
    const badge = {
        "javascript": "https://img.shields.io/badge/JavaScript-%23282c34?logo=javascript&logoColor=%20%23f6f7f8",
        "notion": "https://img.shields.io/badge/Notion-%23282c34?logo=notion&logoColor=%20%23f6f7f8",
        "flask": "https://img.shields.io/badge/Flask-%23282c34?logo=flask&logoColor=%20%23f6f7f8",
        "python": "https://img.shields.io/badge/Python-%23282c34?logo=python&logoColor=%20%23f6f7f8",
        "selenium": "https://img.shields.io/badge/Python-%23282c34?logo=python&logoColor=%20%23f6f7f8",
        "sql": "https://img.shields.io/badge/MySQL-%23282c34?logo=mysql&logoColor=%20%23f6f7f8",
        "discord": "https://img.shields.io/badge/Discord-%23282c34?logo=discord&logoColor=%20%23f6f7f8",
        "beautifulsoup": "https://img.shields.io/badge/BeautifulSoup-%23282c34?logo=beautifulsoup&logoColor=%20%23f6f7f8",
    }

    cards.forEach(c => {
        const techs = c.dataset.tech.split(" ");
        const overlay = c.querySelector(".overlay");

        const badgesArea = document.createElement("div");
        badgesArea.classList.add("badges");
        overlay.appendChild(badgesArea);
        
        techs.forEach(tech => {
            const img = document.createElement("img");
            img.src = badge[tech];
            badgesArea.appendChild(img);
        })
    })
})