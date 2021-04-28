
const input = document.querySelector('#input');
const button = document.querySelector('#button');
let div = document.querySelector('.text');
const time = 30;
const password = "myFreedom-2011";

const onInput = function () {
    if (input.value.length === 0) {
        div.innerHTML = "Введите пароль";
    } else if (input.value.length < 5 || input.value.length > 20) {
        input.style.borderColor = 'red';
        div.innerHTML = "Пароль не менее 5, не более 20 символов";
    } else {
        input.style.borderColor = '';
        div.innerHTML = '';
    };
};

input.addEventListener('input', onInput);

function clock(time) {
    return setInterval(() => {
        if (time > 0) {
            div.innerHTML = time--;
        };
    }, 1000);
};

let num = 3;

function onButton() {
    if (input.value === "") {
        div.innerHTML = "Вы не ввели пароль";
    } else if (input.value === password) {
        div.innerHTML = 'Добро пожаловать';
        input.style.display = 'none';
        button.style.display = 'none';
    } else {
        do {
            div.innerHTML = `Неверный пароль, осталось ${--num} попытки(a)`;
            input.value = "";
        } while (num < 0);

        if (num === 0) {
            input.style.display = 'none';
            button.style.display = 'none';
            clock(time);
        };
    };
};

button.addEventListener('click', onButton);





































