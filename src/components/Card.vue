<template>
  <v-hover v-slot="{ hover }">
    <v-card>
      <v-img min-height="400px" min-width="400px" :src="msgsrc"></v-img>
      <v-fade-transition>
        <v-overlay v-if="hover" absolute color="#036358">
          <v-btn :to="{ name: 'cardPage', params: {id: idsrc} }">Подробнее</v-btn>
        </v-overlay>
      </v-fade-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Card",
  props: {
    msgsrc: String,
    idsrc: Number
  },
};
</script>
