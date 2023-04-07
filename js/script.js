// menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// Sticky navbar scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
        });

    };
});
    
// Sticky navbar
let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);

//  remove menu icon navbar when click
menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};



// emailjavascript
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactProject = document.getElementById('contact-project'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
e.preventDefault()
// check if the feild has value
if(contactName.value ===''|| contactEmail.value === ''|| contactProject.value === ''){
// add and remove color
contactMessage.classList.remove('color-blue')
contactMessage.classList.add('color-red')

// show message
contactMessage.textContent = 'Write all the inputs feilds 📩'
}else{
        emailjs.sendForm('service_stvzljc','template_blbhouj','#contact-form', 'uI1TQMS7LUa0LdQnr')
    .then(() => {
contactMessage.classList.add('color-blue')
contactMessage.textContent = 'Message sent ✅'
// remove message after 5seconds
setTimeout(() => {
    contactMessage.textContent = ' '
},5000)

    },(error) => {
        alert('OOPS! SOMETHING HAS FAILED...',error)
    })
    // to clear iput feild
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
}
}
contactForm.addEventListener('submit', sendEmail)

// dark light mode
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
distance: '80px',
duration: 2000,
dealy: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });