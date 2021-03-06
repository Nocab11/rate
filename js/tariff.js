const tariffActive = () => {
    let tariffItem = document.querySelectorAll('.js-tariff-item');
    let tariffButton = document.querySelectorAll('.js-tariff-button');
    let buttonActive = document.querySelector('.tariff-active .js-tariff-button')
    let checkbox = document.querySelectorAll('.js-tariff-checkbox');
    let description = document.querySelectorAll('.description');
    let paymentMethods = document.querySelector('.payment-methods')

    function isScroll() {
        if (buttonActive.innerHTML === "перейти к оплате") {
            paymentMethods.scrollIntoView({
                behavior: "smooth",
                block:    "start"
            });
        }
        buttonActive.removeEventListener('click', isScroll);
    }
    buttonActive.addEventListener('click', isScroll);

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
                if (buttonActive.innerHTML === "перейти к оплате") {
                    paymentMethods.scrollIntoView({
                        behavior: "smooth",
                        block:    "start"
                    });
                }
            })

            checkbox.forEach((el) => {
                el.src = "./images/checkbox.svg"
            })

            let checkboxActive = document.querySelector('.tariff-active .js-tariff-checkbox')
            checkboxActive.src = "./images/checkboxActive.svg"

            description.forEach((el) => {
                el.classList.remove('description-active');
            })

            let descriptionActive = document.querySelector('.tariff-active .description')
            descriptionActive.classList.add('description-active');

        });

    });
}
tariffActive()

