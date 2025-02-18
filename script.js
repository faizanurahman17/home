/* 
                    <details>
                        <summary>
                            <button>
                                <i class="material-symbols-outlined">contacts_product</i>
                            </button>
                        </summary>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </details>
*/
const body = document.querySelector('body');
const input = document.querySelector('.input-container input');
const searchIcon = document.querySelector('.input-container i');

input.addEventListener('input',()=>{
    let iVal = input.value;
    iVal = iVal.charAt(0).toUpperCase() + iVal.slice(1).toLowerCase();
    
    input.value = iVal;
    if (iVal = iVal) {
        searchIcon.classList.add('searchIconActivated');
    } else {
        searchIcon.classList.remove('searchIconActivated');
    }
});

const contBtn = document.querySelector('.cont-btn');
let isTrayOpen = true;

contBtn.addEventListener('click', contactTray);

function contactTray() {
    isTrayOpen = !isTrayOpen;

    if (isTrayOpen) {
        let contTray = document.createElement('div');
        contTray.classList.add('poped-tray');
        contTray.innerHTML = `
            <h2>Social Media</h2>
            <ul>
                <li><a href="https://wa.me/+917701897049" target="_blank">WhatsApp</a></li>
                <li><a href="https://instagram.com/faizanurahman17" target="_blank">Instagram</a></li>
                <li><a href="https://x.com/faizanurahman17" target="_blank">Twitter</a></li>
                <li><a href="https://facebook.com/faizanurahman17" target="_blank">Facebook</a></li>
                <li><a href="https://github.com/faizanurahman17" target="_blank">GitHub</a></li>
                <li><a href="mailto:faizanurahman1711@icloud.com">Email</a></li>
            </ul>
        `; 
        contTray.id = "contTray";
        document.body.appendChild(contTray);
    } else {
        let contTray = document.getElementById("contTray");
        if (contTray) {
            contTray.remove();
        }
    }
}

contactTray();

const myHomeBtn = document.querySelector('.my-home');

myHomeBtn.addEventListener('click',myHomeFn);

function myHomeFn(){
    location.reload();
}

input.focus();

// if (location.reload()) {
//     myHomeBtn.style.color = "red";
// } else {
//     myHomeBtn.style.color = "black";
// }