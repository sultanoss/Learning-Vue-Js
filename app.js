const app = Vue.createApp({
  data() {
    return {
      userData: []
    }
  },

  methods: {
    getFormValues() {
      this.fullName = this.$refs.my_input1.value;
      this.adress = this.$refs.my_input2.value;
      this.email = this.$refs.my_input3.value;

      let jsonData = {
        fullName: this.fullName,
        adress:this.adress,
        email:this.email,
      }
      this.userData.push({
        jsonData
      });
      this.$refs.my_input1.value = '';
      this.$refs.my_input2.value = '';
      this.$refs.my_input3.value = '';
    }
  },
  watch:{
  
  },

});

app.mount('#content');