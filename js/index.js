const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// *******images**********

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// *********LINKS*********

const links = document.querySelectorAll('a');
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];


// ********* NEW CONTENT**********



const resume = document.createElement('a');
resume.textContent = "Resume";
resume.href= "#";
resume.style.color = 'green'
document.querySelector('nav').appendChild(resume);

const blogLink = document.createElement('a');
blogLink.textContent = "Blogs";
blogLink.href = "#";
blogLink.style.color = 'green';
document.querySelector('nav').prepend(blogLink);



links.forEach(item => item.style.color = 'green');

// ********CTA*********

let frontImage = document.getElementById('cta-img');
frontImage.setAttribute('src',siteContent['cta']['img-src']);

const ctaHeading = document.querySelector('.cta-text h1');

ctaHeading.innerHTML = siteContent['cta']['h1'].split(' ').join('<br>');

const ctaButton = document.querySelector('.cta-text button')

ctaButton.textContent = siteContent['cta']['button']


// ***********TOP MAIN CONTENT***********

const mainContentHeadings = document.querySelectorAll('.text-content h4');

const mainContentParagraph = document.querySelectorAll('.text-content p');

mainContentHeadings[0].textContent = siteContent['main-content']['features-h4'];
mainContentParagraph[0].textContent =siteContent['main-content']['features-content'];


mainContentHeadings[1].textContent = siteContent['main-content']['about-h4'];
mainContentParagraph[1].textContent =siteContent['main-content']['about-content'];

// ***********MIDDLE IMG MAIN CONTENT***********

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// ***********BOTTOM MAIN CONTENT***********

mainContentHeadings[2].textContent = siteContent['main-content']['services-h4'];
mainContentParagraph[2].textContent =siteContent['main-content']['services-content'];

mainContentHeadings[3].textContent = siteContent['main-content']['product-h4'];
mainContentParagraph[3].textContent =siteContent['main-content']['product-content'];

mainContentHeadings[4].textContent = siteContent['main-content']['vision-h4'];
mainContentParagraph[4].textContent =siteContent['main-content']['vision-content'];


// ***********CONTACT***********

const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

const contactContent = document.querySelectorAll('.contact p');

contactContent[0].innerHTML = "123 Way 456 Street<br> Somewhere, USA";
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];





// ***********FOOTER***********

const footerParagraph = document.querySelector('footer p');

footerParagraph.textContent = siteContent['footer']['copyright']