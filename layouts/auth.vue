<script lang="ts" setup>
const drawer = ref(false)
const rail = ref(false)
</script>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" permanent :rail="rail" @click="rail = false">
        <v-list-item nav prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider">
          <template #append>
            <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail" />
          </template>
        </v-list-item>

        <v-divider />

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" />
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account" />
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users" />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
