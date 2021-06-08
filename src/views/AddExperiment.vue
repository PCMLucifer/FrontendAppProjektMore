<template>
      <form @submit="onSubmit" class="add-form">
        <div class="form-control">
        <label>Naziv eksperimenta</label>
        <input v-model="text"
        type="text" name="text" 
        placeholder="Dodaj naziv"/>
        </div>
        <div class="form-control">
        <label>Datum početka</label>
        <input v-model="day"
        type="text" name="day"
         placeholder="Dodaj datum"/>
        </div>
        <div class="form-control">
        <label>Datum završetka</label>
        <input v-model="day"
        type="text" name="day"
         placeholder="Dodaj datum"/>
        </div>

       

        <input type="submit" value="Save Task" 
        class="btn btn-block"/>
          <br/>
          <label>Dodaj senzor</label>
   
    </form>
</template>

<script>



export default {
    name:'AddExperiment',
    components:{

  },
  data(){ 
      
        },

   methods:{ 



      },
      async created(){ 
  
          
        
        },
        
}
</script>

<style scoped>
    .add-form{ 
        margin-bottom: 40px;
    }

    .form-control label{ 
        margin: 20px 0;
    }

    .form-control input{ 
        width: 100%;
        height: 40px;
        margin: 5px;
        padding: 5px 10px;
        font-size: 17px;
    }

    .form-control-check { 
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .form-control-check label{ 
        flex: 1;
    }

    .form-control-check input{ 
        flex: 2;
        height: 20px;
    }
</style>