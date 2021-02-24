/***** Step 1 *****/

const main = document.querySelector('main#main');
main.remove();

/***** Step 2 *****/

let newHeader = document.createElement('h1');

/***** Step 3 *****/

newHeader.setAttribute('id', 'victory');

/***** Step 4 *****/

newHeader.innerHTML = "Dayne is the champion";
document.body.appendChild(newHeader);