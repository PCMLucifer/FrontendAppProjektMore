<template>
   <div class="container">
    <Menu  id="left" />
    <router-view

     class="mid"></router-view>
  
  </div>

</template>

<script>
  import Menu from './components/Menu'

  export default { 
    name:'App',
    components:{ 
      Menu,
    },
    
  

 
}
       
  
    
  

</script>
  
   

<style>

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: 'Poppins',sans-serif;
    }

  .container{
    max-width: 98%;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
  }

  .btn{
    display: inline-block;
    background: black;
    color:green;
    border: none;
    padding: 20px 40px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    font-family: inherit;
  }

  #left{
    float:left;
    position: relative;
    width:20%;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
    margin: 5px auto;
    overflow: auto;
    }

  .mid{
    float:right;
    position: relative;
    width: 80%;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
    margin: 5px auto;
    overflow: auto;}

</style>
