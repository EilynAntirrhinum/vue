const App = {
    data() {
        return {
            currentNote: "",
            notes: [],
        }
    },
    methods: {
        addNote() {
            let temp = this.currentNote.trim()
            if (temp != "" && temp != this.notes.find(item => item == temp)) {
                this.notes.push(this.currentNote)
            }
            this.currentNote = ""
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        }
    }
}

Vue.createApp(App).mount("#container")