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