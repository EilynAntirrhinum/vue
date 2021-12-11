const App = {
    data() {
        return {
            imgSrc: "./img/renjun-3.jpg",
            isActive: false,
            
        }
    },
    methods: {
        activeButton() {
            this.isActive = !this.isActive
        },
        addImg() {
            this.imgSrc = "./img/renjun-2.jpg"
        },
        delImg() {
            this.imgSrc = "./img/renjun-3.jpg"
        }
    }
}

Vue.createApp(App).mount('#container')