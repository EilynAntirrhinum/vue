const App = {
    data() {
        return {
            array: [
                {
                    title: "Jeno and Renjun",
                    image: "img/jenoren.jpg",
                    content: "1 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, inventore! Numquam hic temporibus consequatur officia suscipit sint corrupti molestiae similique quidem id, unde a? Sunt soluta quisquam facere natus quia adipisci, nostrum veritatis ad maiores iusto ea animi id. Dignissimos exercitationem sint eligendi ex totam placeat beatae unde odio fugiat."
                },
                {
                    title: "Ten Lee",
                    image: "img/ten.jpg",
                    content: "2 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, inventore! Numquam hic temporibus consequatur officia suscipit sint corrupti molestiae similique quidem id, unde a? Sunt soluta quisquam facere natus quia adipisci, nostrum veritatis ad maiores iusto ea animi id. Dignissimos exercitationem sint eligendi ex totam placeat beatae unde odio fugiat."
                },
                {
                    title: "Jung Sungchan",
                    image: "img/sungchan.jpg",
                    content: "3 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, inventore! Numquam hic temporibus consequatur officia suscipit sint corrupti molestiae similique quidem id, unde a? Sunt soluta quisquam facere natus quia adipisci, nostrum veritatis ad maiores iusto ea animi id. Dignissimos exercitationem sint eligendi ex totam placeat beatae unde odio fugiat."
                }
            ],
            currentItem: 0,
            currentIndex: 0,

        }
    },
    created() {
        this.currentItem = this.array[this.currentIndex]
    },
    methods: {
        showCurrentItem(item) {
            this.currentItem = item
            this.currentIndex = this.array.findIndex(x => x.title === this.currentItem.title)
            console.log(this.currentIndex)
        },
    }
}

Vue.createApp(App).mount("#container")