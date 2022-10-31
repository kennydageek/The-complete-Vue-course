<template>
  <v-app>
    <v-app-bar app></v-app-bar>
    <v-container>
      <v-row>
        <v-col cols="12"></v-col>
      </v-row>
    </v-container>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
