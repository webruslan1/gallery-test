<template>
  <div class="cardPage">
    <div v-if="loading">
      <div class="loader">
        <img src="@/assets/loader.gif" alt="" />
      </div>
    </div>
    <div class="card" v-else>
      <h1>{{card.id}}</h1>
      <img :src="card.url" alt="" />
      <p>{{ card.title }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: function () {
    return {
      card: [],
      loading: true,
    };
  },
  computed: {
    ...mapState({ cards: "cards" }),
  },
  methods: {
    ...mapActions({ allFetchs: "allFetchs" }),
  },
  async created() {
    const that = this;
    await this.allFetchs();
    const card = this.cards.find((card) => card.id == this.$route.params.id);
    if (card) {
      this.card = card;
    }
    setTimeout(function () {
      that.loading = false;
    }, 1000);
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  text-align: center;
}

.card img {
  display: inline-block;
  max-width: 600px;
  max-height: 600px;
  margin-bottom: 30px;
}

.loader{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 100%;
    height: 100vh;
}

.loader img{
    width: 50px;
    height: 50px;
}

</style>