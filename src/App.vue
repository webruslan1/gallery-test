<template>
  <div>
    <v-card class="overflow-hidden" min-height="100vh">
      <div>
        <Navbar />
      </div>
      <v-main>
        <router-view />
      </v-main>
    </v-card>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  }
};
</script>

<style scoped>
</style>
