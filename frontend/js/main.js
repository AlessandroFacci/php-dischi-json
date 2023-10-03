const { createApp } = Vue;

createApp({
  data() {
    return {
      disks: [],
    };
  },

  methods: {
    getDiscks() {
      axios
        .get("http://localhost:8888/php-dischi-json/backend/data/dischi.php")
        .then((response) => {
          console.log(response.data);

          this.disks = response.data;
        });
    },

    mounted() {
      this.getDiscks();
    },
  },
}).mount("#app");
