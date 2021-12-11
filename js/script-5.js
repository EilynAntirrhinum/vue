const getRandom = (x, y) => ~~(Math.random() * (Math.max(x, y) - Math.min(x, y)) + Math.min(x, y))

const App = {
    data() {
        return {
            array: [
                {
                    title: "First Element",
                    content: "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis illum quod ipsum quidem sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis illum quod ipsum quidem sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis illum quod ipsum quidem sapiente!",
                },
                {
                    title: "Second Element",
                    content: "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis illum quod ipsum quidem sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis illum quod ipsum quidem sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis illum quod ipsum quidem sapiente!"
                },
                {
                    title: "Third Element",
                    content: "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis illum quod ipsum quidem sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis illum quod ipsum quidem sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nobis illum quod ipsum quidem sapiente!"
                }
            ],
            todos: ["Совершить подвиг"],
            currentTodo: "",
            currentItem: {},
            currentIndex: 0,
            errorMsg: "",
            isError: false,
            arrBegin: 0,
            arrEnd: 0,
            arrNum: [],
        }
    },
    created() {
        this.currentItem = this.array[this.currentIndex]
    },
    methods: {
        addTodoItem() {
            let temp = this.currentTodo.trim()
            if (temp != "" && temp != this.todos.find(item => item == temp)) {
                this.todos.push(this.currentTodo)
                this.isError = false
            }
            else if (temp.length <= 0) {
                this.isError = true
            }
            this.currentTodo = ""
        },
        showCurrentItem(item) {
            this.currentItem = item
            this.currentIndex = this.array.findIndex(x => x.title === this.currentItem.title)
            console.log(this.currentIndex)
        },
        addNumInArray() {
            this.arrNum.push(getRandom(this.arrBegin, this.arrEnd))
        }
    }
}

Vue.createApp(App).mount("#container")