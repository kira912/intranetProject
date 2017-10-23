<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click='onLogin'>Login</button>
    <button @click='onRegister'>Signup</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Intranet'
    }
  },

  methods: {
    onLogin: function(){
      this.$router.push('/login')
    },
    onRegister: function() {
      this.$router.push('/signup')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
