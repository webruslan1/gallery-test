<template>
  <div>
    <div class="card-category">
      <v-btn @click="fetchCards(1)">Категория 1</v-btn>
      <v-btn @click="fetchCards(2)">Категория 2</v-btn>
      <v-btn @click="fetchCards(3)">Категория 3</v-btn>
      <v-btn @click="fetchCards(4)">Категория 4</v-btn>
    </div>
    <div class="card-list">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in cards">
          <v-col :key="i" cols="4" md="4">
            <Card :msgsrc="item.url" :idsrc="item.id" />
          </v-col>
        </template>
      </v-row>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

import { mapState, mapActions } from "vuex";
export default {
  name: "Home",

  components: {
    Card,
  },
  computed: {
    ...mapState({
      cards: "cards",
    }),
  },
  methods: {
    ...mapActions({
      fetchCards: "fetchCards",
    }),
  },
  created() {
    this.fetchCards(1);
  },
};
</script>

<style scoped>
.card-category {
  margin: 20px auto;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-list button:not(:last-child) {
  margin-right: 5px;
}
</style>