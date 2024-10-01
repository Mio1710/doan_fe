<script setup lang="ts">
const { signOut, data } = useAuth()
const logout = () => {
  signOut()
  navigateTo('/login')
}
</script>

<template>
  <v-menu left offset-y transition="slide-y-transition">
    <template #activator="{ props }">
      <v-badge bordered color="success" dot v-bind="props">
        <v-avatar>
          <v-img alt="John" src="/images/logo.jpg" />
        </v-avatar>
      </v-badge>
    </template>

    <!-- user menu list -->
    <v-list>
      <v-list-item to="/profile">
        <template #prepend>
          <v-icon small>mdi-account</v-icon>
        </template>
        <v-list-item-title>Tài khoản của tôi</v-list-item-title>
      </v-list-item>
      <v-divider class="my-1" />

      <v-list-item to="/change-password">
        <template #prepend>
          <v-icon small>mdi-account-key-outline</v-icon>
        </template>
        <v-list-item-title>Đổi mật khẩu</v-list-item-title>
      </v-list-item>

      <v-divider class="my-1" />

      <v-list-item @click="logout">
        <template #prepend>
          <v-icon small>mdi-logout-variant</v-icon>
        </template>
        <v-list-item-title>Đăng xuất</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped></style>
