const getRandom = (x, y) => ~~(Math.random() * (Math.max(x, y) - Math.min(x, y)) + Math.min(x, y))

const App = {
    data() {
        return {
            nowDate: new Date(),
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
            num: 0,
            result_1: "",
            result_2: "",
            questionNum: getRandom(1, 100),
            guessingNum: 0,
        }
    },
    methods: {
        getFullDay(date) {
            const currentDayIndex = date
            return this.days[currentDayIndex]
        },
        setNewDay() {
            let temp = new Date()
            temp.setDate(this.nowDate.getDate() + 1)
            return temp.toLocaleDateString()
        },
        getCount() {
            (this.num % 2 === 0)?this.result_1 = "Чётное":this.result_1 = "Нечётное"
        },
        guessNum() {
            if(this.questionNum < this.guessingNum) {
                this.result_2 = `Ваше число больше, чем загаданное. Попытайтесь ещё раз. (${this.questionNum})`
            }
            else if(this.questionNum > this.guessingNum) {
                this.result_2 = `Ваше число меньше, чем загаданное. Попытайтесь ещё раз. (${this.questionNum})`
            }
            else {
                this.result_2 = `Число совпадает! (${this.questionNum})`
            }
        }
    }
}
Vue.createApp(App).mount('#container')