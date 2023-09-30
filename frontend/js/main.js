const { createApp } = Vue;

createApp({
  data() {
    return {
      disk: [],
    };
  },

  methods: {
    getDiscks() {
      axios
        .get("http://localhost:8888/php-dischi-json/backend/data/dischi.json")
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
