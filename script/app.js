window.onload = () => {
    let user = {}

    function registration() {
        // variables

        let errorEmailBlock = document.querySelector(`.errors__email`)
        let errorPasswordBlock = document.querySelector(`.errors__password`)
        let emailInput = document.getElementById(`registration__emailInput`)
        let passwordInput = document.getElementById(`registration__passwordInput`)
        let submitBtn = document.getElementById(`submitBtn`)
        let registration = document.querySelector(`.registration`)

        // listeners

        emailInput.addEventListener(`blur`, function () {
            if (this.value.includes(`@gmail.com`)) {
                errorEmailBlock.innerHTML = ``
            } else {
                makeEmailError()
            }
        })
        passwordInput.addEventListener(`blur`, function () {    
            if (this.value.length >= 8) {
                errorPasswordBlock.innerHTML = ``
            } else {
                makePasswordError()
            }
        })

        submitBtn.addEventListener(`click`, () => {
            if (!(emailInput.value.includes(`@gmail.com`))) {
                makeEmailError()
            }
            if (passwordInput.value.length < 8) {
                makePasswordError()
            }
            if (passwordInput.value.length >= 8 && emailInput.value.includes(`@gmail.com`)) {
                user.email = emailInput.value
                user.password = passwordInput.value
                registration.classList.add(`_hide`)
            } 
        })

        // functions
        
        function makePasswordError() {
            if (errorPasswordBlock.innerHTML === ``) {
                let errorItem = document.createElement(`p`)
                errorItem.innerHTML = `You should put more then 7 letters`
                errorPasswordBlock.append(errorItem)
            }
        }
        function makeEmailError() {
            if (errorEmailBlock.innerHTML === ``) {
                let errorItem = document.createElement(`p`)
                errorItem.innerHTML = `Please put correct email`
                errorEmailBlock.append(errorItem)
            }
        }

        function password() {
            let passwordInput = document.querySelector(`.password__inputBlock input`)
            let eye = document.querySelector(`.password__inputBlock img`)
            eye.addEventListener(`click`, function () {  
                if (this.getAttribute(`src`) === `img/password/eye-solid.svg`) {
                    this.setAttribute(`src`, `img/password/eye-slash-solid.svg`)
                    passwordInput.setAttribute(`type`, `text`)
                } else {
                    this.setAttribute(`src`, `img/password/eye-solid.svg`)
                    passwordInput.setAttribute(`type`, `password`)
                }
            })
        }
        password()
    }   
    // registration()

    function burger() {

        // variables
        let burger = document.querySelector(`.burger`)
        let aside = document.querySelector(`.aside`)

        // listeners

        burger.addEventListener(`click`, function (event) {
            this.classList.toggle(`_active`)
            aside.classList.toggle(`_active`)
        })
    }
    burger() 
}