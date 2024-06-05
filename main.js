const stickyNavBar = document.querySelector("#nav-bar");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", '');
stickyNavBar.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    stickyNavBar.classList.toggle("sticking", !entries[0].isIntersecting)
}, {rootMargin: "100px 0px 0px 0px"});

navObserver.observe(scrollWatcher);

//Change between the selected "Skills" & "Currently Working On"
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

//Open and close nav menu for responsive mode
const sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.top = "0px";
};
function closemenu() {
    sidemenu.style.top = "-360px";
};

//Google form submission from contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzoaIyR_d5zWNWmfw_YelBuJ9BCTx7AMu1-7jd5FCvL9lsHQU0k5G90BSKU2GMmmcdGaA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
            msg.innerHTML = "Message sent successfully."
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });