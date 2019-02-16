let size = 10;
let orderElement = 1;
let listWrapper;

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = 'Dodaj elementy';
    const reset = document.createElement('button');
    reset.textContent = 'RESET';
    reset.style.marginLeft = '20px';
    listWrapper = document.createElement('ul');

    document.body.append(btn, reset, listWrapper);

    btn.addEventListener('click', createLiElements);

    reset.addEventListener('click', function () {
        const ul = document.querySelector('ul').textContent = "";
        orderElement = 1;
        size = 10;
    })
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