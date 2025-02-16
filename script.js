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