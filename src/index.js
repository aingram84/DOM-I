const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// Nav Area
const nav = siteContent["nav"];

const navItem1 = nav["nav-item-1"];
const nav1Text = document.querySelector("nav").querySelectorAll("a")[0];
nav1Text.textContent = navItem1;

const navItem2 = nav["nav-item-2"];
const nav2Text = document.querySelector("nav").querySelectorAll("a")[1];
nav2Text.textContent = navItem2;

const navItem3 = nav["nav-item-3"];
const nav3Text = document.querySelector("nav").querySelectorAll("a")[2];
nav3Text.textContent = navItem3;

const navItem4 = nav["nav-item-4"];
const nav4Text = document.querySelector("nav").querySelectorAll("a")[3];
nav4Text.textContent = navItem4;

const navItem5 = nav["nav-item-5"];
const nav5Text = document.querySelector("nav").querySelectorAll("a")[4];
nav5Text.textContent = navItem5;

const navItem6 = nav["nav-item-6"];
const nav6Text = document.querySelector("nav").querySelectorAll("a")[5];
nav6Text.textContent = navItem6;

const cta = siteContent["cta"];
const ctaH1 = cta["h1"];
const ctaButton = cta["button"];


const mainContent = siteContent["main-content"];
const featH4Text = mainContent["features-h4"];
const featureCont = mainContent["features-content"];
const aboutH4 = mainContent["about-h4"];
const aboutContent = mainContent["about-content"];
const servicesH4 = mainContent["services-h4"];
const servicesContent = mainContent["services-content"];
const productH4 = mainContent["product-h4"];
const productContent = mainContent["product-content"];
const visionH4 = mainContent["vision-h4"];
const visionContent = mainContent["vision-content"];

const ctaFooter = siteContent["footer"];
const ctaCopyright = ctaFooter["copyright"];

// Contact Area
const contact = siteContent["contact"];

const contactH4 = contact["contact-h4"];
const conH4Head = document.getElementsByClassName("contact")[0].querySelector("h4");
conH4Head.textContent = contactH4;

const conAddress = contact["address"];
const conBody = document.getElementsByClassName("contact")[0].querySelectorAll("p")[0];
conBody.textContent = conAddress;

const conPhone = contact["phone"];
const conPhoneText = document.getElementsByClassName("contact")[0].querySelectorAll("p")[1];
conPhoneText.textContent = conPhone;

const conEmail = contact["email"];
const conEmailText = document.getElementsByClassName("contact")[0].querySelectorAll("p")[2];
conEmailText.textContent = conEmail;


const ctaTextDiv = document.getElementsByClassName("cta-text")[0].querySelector("h1");
ctaTextDiv.textContent = ctaH1;
const ctaButton1 = document.getElementsByClassName("cta-text")[0].querySelector("button");
ctaButton1.textContent = ctaButton;

const ctaImg = document.getElementById("cta-img");
const logoImg = document.getElementById("logo-img");
const middleImg = document.getElementById("middle-img");
ctaImg.src = siteContent.images["cta-img"];
logoImg.src = siteContent.images["logo-img"];
middleImg.src = siteContent.images["accent-img"];