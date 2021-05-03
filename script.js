
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

function clock(time, func) {

    const id = setInterval(() => {
        time--;
        if (time !== 0) {
            div.innerHTML = time;
        } else {
            clearInterval(id);
            func();
        }
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
        div.innerHTML = `Неверный пароль, осталось ${--num}`;
        input.value = "";
        if (num === 0) {
            input.style.display = 'none';
            button.style.display = 'none';
            clock(time, () => {
                input.style.display = 'block';
                button.style.display = 'block';
                div.style.display = 'block';
                num = 3;
            });
        };
    };
};

button.addEventListener('click', onButton);





































