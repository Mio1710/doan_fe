<template>
  <v-menu left offset-y transition="slide-y-transition">
    <template #activator="{ on }">
      <div class="d-flex align-center gap-1">
        <v-badge bordered color="success" dot light offset-x="10" offset-y="10">
          <v-avatar class="cursor-pointer" size="40" v-on="on">
            <v-img :src="$auth.user.avatar_url | userImageDefault" />
          </v-avatar>
        </v-badge>
        <div>
          <p class="mb-0 text-sm font-bold text-truncate">{{ $auth.user.name }}</p>
        </div>
      </div>
    </template>

    <!-- user menu list -->
    <v-list dense nav>
      <v-list-item v-if="$auth.user.is_admin !== 1" to="/profile">
        <v-list-item-icon>
          <v-icon small>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Tài khoản của tôi</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="my-1" />

      <v-list-item @click="$emit('change-password')">
        <v-list-item-icon>
          <v-icon small>mdi-account-key-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Đổi mật khẩu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-1" />

      <v-list-item @click="logout">
        <v-list-item-icon>
          <v-icon small>mdi-logout-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Đăng xuất</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { defineComponent, useContext, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $auth } = useContext()
    const router = useRouter()
    const logout = () => {
      $auth.logout().then(() => {
        router.push('/')
      })
    }

    return {
      logout
    }
  }
})
</script>
