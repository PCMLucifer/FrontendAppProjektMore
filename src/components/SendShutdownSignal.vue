<template>
  <button @click="onClick()"  >
    Zaustavi eksperiment
  </button>
</template>

<script>
export default {
  name: 'Button',
  props:{
    uredjajID:Number
  },
  data(){
    return{
      shutdownTime:Date
    }
  },

  methods: {
    onClick() {

      const newShotdown= {

        uredjajID:this.uredjajID
      }
       this.$emit('shutdown-signal',newShotdown)
    },

 
  },

}
</script>