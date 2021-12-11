const App = {
    data() {
        return {
            steps: [
                {
                    id: 1,
                    text: "Начало"
                },
                {
                    id: 2,
                    text: "Проживающие"
                },
                {
                    id: 3,
                    text: "Кемпинг"
                },
                {
                    id: 4,
                    text: "Дом-бочка"
                },
                {
                    id: 5,
                    text: "Услуги"
                },
                {
                    id: 6,
                    text: "Оформление"
                },
            ],
            current: 0,
        }
    },
    methods: {
        nextStep(index) {
            this.current++
            if(index < this.current) {
                index.classList.replace("colored", "past")
            }
        },
        prevStep() {
            this.current--

        }
    }
}

Vue.createApp(App).mount("#container")