<template>
  <h1>{{ title }}</h1>
  <p>Welcome..</p>
  <!-- <input type="text" ref="name">
  <button @click="handleClick">Click me</button> -->
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
  </div> <br>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from './components/Modal.vue'


export default {
  name: 'App',
  components:{ Modal },
  data(){
    return{
      title: 'Ma Premere Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'oui oui oui oui ',
      showModal: false,
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4e5154;
  margin-top: 60px;
}

h1{
  border-bottom: 1px solid #ddd;
  display:inline-block;
  padding-bottom: 10px;
}
.modal.sale {
  background: red;
  color: white;
}
.modal.sale h1{
  color: white;
}
</style>
