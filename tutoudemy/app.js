const app = Vue.createApp({
  data() {
    return {
      url:'https://github.com/ToFranck',
      showBooks: true,
      books:[
        {title: 'name of the window', author:'Patrick Roth',img:'./assets/1.png', isfav: true },
        {title: 'Oui oui', author:'Potrick Ro',img:'./assets/1.png', isfav: false },
        {title: 'name of the oui', author:'Trickpa The',img:'./assets/1.png', isfav: true},
      ],
      title: 'The Way of Kings',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y: 0
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =  !this.showBooks
    },

    handleEvent(e, data){
      console.log(e, e.type)
      if (data){
        console.log(data)
      }
    },

    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },

    togglefav(book){
      book.isfav = !book.isfav
    }
    
  },

    computed: {
      filteredBooks(){
        return this.books.filter((book) => book.isfav )
     
      }
    }
})

app.mount('#app')