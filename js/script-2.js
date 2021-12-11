const Tabs = {
    data() {
        return {
            count: 0,
            currentTab: 1,

        }
    },
    created() {
        if(localStorage.getItem("user")) {
            this.count++
        }
    },
    methods: {
        clickPlus() {
            if (this.checkSymbols(document.querySelector("#login")) && this.checkSymbols(document.querySelector("#pass"))) {
                this.checkInputs(document.querySelector("#login"))
                this.checkInputs(document.querySelector("#pass"))
            }
            else if (this.checkSymbols(document.querySelector("#login"))) {
                this.checkInputs(ocument.querySelector("#login"))
            }
            else if (this.checkSymbols(document.querySelector("#pass"))) {
                this.checkInputs(document.querySelector("#pass"))
            }
            else {
                this.count++
                localStorage.setItem("user", JSON.stringify({login: document.querySelector("#login").value, password: document.querySelector("#pass").value}))
            }

        },
        clickMinus() {
            localStorage.removeItem("user")
            this.count--
        },
        openTab(e) {
            this.currentTab = e.target.id
        },
        checkInputs(input) {
            input.value = ""
            input.placeholder = 'Введите данные!'
            input.classList.add('error')
        },
        checkSymbols(input) {
            return input.value.trim().length <= 0
        }
    }
}

Vue.createApp(Tabs).mount('#container')