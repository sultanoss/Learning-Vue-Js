const app = Vue.createApp({
  data() {
    return {
      userData: [],
      marked: false,
      userdetails: {},
      fullName:'',
      adress:'',
      email:'',
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
  },
});

app.mount('#content');