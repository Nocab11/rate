const tariffActive = () => {
    let tariffItem = document.querySelectorAll('.js-tariff-item');
    let tariffButton = document.querySelectorAll('.js-tariff-button');
    let buttonActive2 = document.querySelector('.tariff-active .js-tariff-button')
    let checkbox = document.querySelectorAll('.js-tariff-checkbox');
    let test = document.querySelector('.test')
    function myClick() {
        test.scrollIntoView({
            behavior: "smooth",
            block:    "start"
        });
        buttonActive2.removeEventListener('click', myClick);
    }
    buttonActive2.addEventListener('click', myClick);
    tariffItem.forEach((el) => {
        el.addEventListener('click', function () {
            tariffItem.forEach((el) => {
                if (el.classList.contains('tariff-active')) {
                    el.classList.remove('tariff-active')
                }
            });
            tariffButton.forEach((el) => {
                el.innerHTML = "выбрать"
            });
            this.classList.add('tariff-active');
            let buttonActive = document.querySelector('.tariff-active .js-tariff-button')
            buttonActive.innerHTML = "перейти к оплате";
            buttonActive.addEventListener('click', function () {
                test.scrollIntoView({
                    behavior: "smooth",
                    block:    "start"
                });
            })

            checkbox.forEach((el) => {
                el.src = "./images/checkbox.svg"
            })

            let checkboxActive = document.querySelector('.tariff-active .js-tariff-checkbox')
            checkboxActive.src = "./images/checkboxActive.svg"
        });

    });
}
tariffActive()

