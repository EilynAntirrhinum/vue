const App = {
    data() {
        return {
            widthSqrt: 200,
        }
    },
    methods: {
        setWidth(e) {
            this.widthSqrt = e.target.value
            figure.style.width = this.widthSqrt + 'px'
            figure.style.height = this.widthSqrt + 'px'
        },
        setColor(e) {
            figure.style.backgroundColor = e.target.value
        },
        setBorder() {
            colorInp.checked ? figure.style.borderRadius = `50%` : figure.style.borderRadius = `0%`
        }
    }
}

Vue.createApp(App).mount('#container')