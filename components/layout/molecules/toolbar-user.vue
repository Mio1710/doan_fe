<script setup lang="ts">
import ChangePasswordDialog from '~/components/common/organisms/ChangePasswordDialog.vue'

const { signOut, data } = useAuth()
const logout = () => {
  signOut()
  navigateTo('/login')
}
</script>

<template>
  <v-menu left offset-y transition="slide-y-transition">
    <template #activator="{ props }">
      <div v-bind="props" class="cursor-pointer d-flex items-center">
        <v-badge bordered color="success" dot>
          <v-avatar size="40">
            <v-img alt="John" src="/images/avatars/default.png" />
          </v-avatar>
        </v-badge>
        <span class="mx-2 font-weight-bold">{{ data?.hodem }} {{ data?.ten }}</span>
      </div>
    </template>

    <!-- user menu list -->
    <v-list>
      <v-list-item  @click="console.log('Xem trang cá nhân')">
        <template #prepend>
          <v-icon small>mdi-account</v-icon>
        </template>
        <v-list-item-title>Tài khoản của tôi</v-list-item-title>
      </v-list-item>
      <v-divider class="my-1" />

      <v-list-item @click="console.log('Đổi mật khẩu')">
        <template #prepend>
          <v-icon small>mdi-account-key-outline</v-icon>
        </template>
        <v-list-item-title>
          <change-password-dialog :user="data" />
        </v-list-item-title>
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
