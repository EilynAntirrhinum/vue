const App = {
    data() {
        return {
        }
    },
    methods: {
        doneToDo(id) {
            document.querySelector(`#${id}`).classList.toggle("done")
        }
    }
}

Vue.createApp(App).mount("#container")