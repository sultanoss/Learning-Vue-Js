const app = Vue.createApp({
  data() {
    return {
      userData: [],
      marked: false,
      userdetails: {},
      fullName: '',
      adress: '',
      email: '',
    }
  },

  methods: {
    getFormValues() {
      this.userdetails = {
        fullName: this.fullName,
        adress: this.adress,
        email: this.email,
        marked: false,
      }
      this.userData.push(this.userdetails);
      this.fullName = '';
      this.adress = '';
      this.email = '';
    },
    deleteUser(index) {
      this.userData.splice(index, 1);
    },

    markUser(data) {
      data.marked = !data.marked;
    },

    editUser(data) {
      this.fullName = data.fullName,
        this.adress = data.adress,
        this.email = data.email,
        $("#exampleModal").modal('show');
      console.log('sss')
    },

    saveData(){
      this.fullName = this.fullName,
      console.log(this.fullName)
    }
  },
});

app.mount('#content');