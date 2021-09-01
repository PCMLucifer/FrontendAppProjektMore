<template>
   <form @submit="onSubmit" class="add-form">
        <div class="form-control">
        <label>Datum početka</label>
        <input 
        type="text" name="datumStart"
         placeholder="dd mm YYYY" v-model="datumStart"  required/>
        </div>

        <div class="form-control">
        <label>Datum zavržetka</label>
        <input 
        type="text" name="datumEnd" v-model="datumEnd"
         placeholder="dd mm YYYY"/>
        </div>

        <div class="form-control">
        <label>Unesi serijsku broj uređaja</label>
        <input 
          type="number" name="broj" v-model="broj"  required/>
        </div>
        
        <input type="submit" value="Zakaži Experiment" 
        class="btn"/>
   </form>
</template>

<script>
//eventualno umesto end date stavi duration!

export default {
    name:'NoviExperimentForma',
    data(){
      return{
        datumStart:'',
        datumEnd:'',
        broj:'',
      }
    },
    methods: {
    onSubmit(e) {
      e.preventDefault()
      
      const newEx= {
        datumStart: this.datumStart,
        datumEnd: this.datumEnd,
        broj: this.broj,
      }
      
      console.log(newEx)

      this.$emit('add-experiment', newEx)

      this.datumStart=''
      this.datumEnd=''
      this.broj=''
    },
  },
  
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>