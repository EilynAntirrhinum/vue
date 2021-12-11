const App = {
    data() {
        return {
            currentMsg: "",
            messages: [],
            symbols: 0,
        }
    },
    methods: {
        addMsgItem() {
            let temp = this.currentMsg.trim()
            if (temp != "" && temp != this.messages.find(item => item == temp) && this.symbols <= 60) {
                this.messages.push(this.currentMsg)
            }
            this.currentMsg = ""
            this.symbols = 0
        },
        maxSymb(e) {
            this.symbols = e.target.value.length
        },
        deleteMsg(index) {
            this.messages.splice(index, 1)
        }
    }
}

Vue.createApp(App).mount("#container")