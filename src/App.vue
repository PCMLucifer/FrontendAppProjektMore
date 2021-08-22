<template>
  <div class="nav">
   <Menu  id="left"/>

    
    
  </div>
  <p>Datum: {{today}}</p>
  <div id="right">
      <router-view />
  </div>
  
  
</template>
<script>
  import Menu from './components/Menu'

  export default { 
    name:'App',
    components:{ 
      Menu,
    },
     methods:{
       currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
      const time = current.getHours() + ":" + current.getMinutes();
      const dateTime = date +' '+ time;
     
      
      return dateTime;
    }
    },
    async created() {
      
      this.today=this.currentDateTime()
    },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #d0d6ddb7;
}

.nav a.router-link-exact-active {
  color: #00ff40;
}

  #left{
    float:left;
    position: relative;
    width:20%;
    border: 1px solid rgb(16, 124, 167);
    padding: 30px;
    border-radius: 5px;
    margin: 5px auto;
    overflow: auto;
    }
    .btn{
    display: inline-block;
    background: rgb(27, 6, 85);
    color:rgb(255, 255, 255);
    border: none;
    padding: 20px 40px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    font-family: inherit;
  }
  .graf{
    
    border: none;
    padding: 20px 40px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;

  }
  .ured{

    background: rgb(128, 128, 128);
    color:rgb(0, 0, 0);
    border: none;
 
    font-size: 18px;
    font-family: inherit;
  }
  .senz{
    background: rgb(199, 199, 199);
    color:rgb(0, 0, 0);
    border: none;
 
    font-size: 16px;
    font-family: inherit;
  }

  #right{
    float:right;
    position: relative;
    width:70%;
    border: 1px solid rgb(16, 124, 167);
    padding: 30px;
    border-radius: 5px;
    margin: 5px auto;
    overflow: auto;
    }
</style>
