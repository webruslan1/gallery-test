<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Меню</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar width="80px" height="80px">
            <v-img
              :src="itsme.ava"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link href="mailto:webruslan2002@mail.ru">
          <v-list-item-content >
            <v-list-item-title class="title"> {{itsme.name}} </v-list-item-title>
            <v-list-item-subtitle >{{itsme.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Галерея </v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Обо мне</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    group: null,
    itsme: {
        name: 'Исматуллаев Руслан',
        email: 'webruslan2002@mail.ru',
        ava: 'https://sun1-83.userapi.com/s/v1/ig2/Di9pR4COZqU5Lz-up7KgBdi1qJgIyeVSDe-CyWUx2hpsc-P5rh-rbOqS7AeTfcZyC2TnI-fLv72fXqnvmtG8Rcz7.jpg?size=200x0&quality=96&crop=0,232,1617,1617&ava=1',
    }
  }),
};
</script>

<style scoped>
.nav-item {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
</style>
