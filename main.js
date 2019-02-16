let size = 10;
let orderElement = 1;
let listWrapper;

const init = () => {
 const btn = document.createElement('button');
 btn.textContent = 'Dodaj elementy';
 listWrapper = document.createElement('ul');

 document.body.append(btn, listWrapper);

 btn.addEventListener('click', createLiElements);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement}`;
        li.style.fontSize = `${size}px`;
        listWrapper.appendChild(li);
        size++;
        orderElement++;
    }
}

init()