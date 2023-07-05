let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav__links');
let navLinksA = document.querySelectorAll('.nav__links a');


hamburger.onclick = function () {
    hamburger.classList.toggle('hamburger_active');
    navLinks.classList.toggle('nav__links_active')
}



for (let i = 0; i < 4; i++) {//цикл ,который срабатывает 4 раза
    navLinksA[i].onclick = function () {// если нажать на любую из ссылок запускается функция
        hamburger.classList.toggle('hamburger_active');
        navLinks.classList.toggle('nav__links_active');
    }
}












let form = document.querySelector('form');
let iframe = document.querySelector('iframe');
let sendWrapper = document.querySelector('.send-wrapper');

iframe.onload = function () {//запуск функции при загрузке в iframe
    sendWrapper.classList.add('send-wrapper_active');
    setTimeout(() => {//функция ,которая срабатывает через 3 секунду
        form.reset();//сброс формы
        sendWrapper.classList.remove('send-wrapper_active');
    }, 3000);
}