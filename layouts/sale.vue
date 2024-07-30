<template>
  <v-app class="d-flex flex-grow-1">
    <!-- Navigation -->
    <v-navigation-drawer v-model="drawer" app class="elevation-1" color="#6a76ab" dark floating>
      <!-- Navigation menu info -->
      <template #prepend>
        <div class="pa-2">
          <div class="title font-weight-bold text-uppercase white--text">ELE - DEVICE Sale</div>
        </div>
      </template>
      <sale-menu />
    </v-navigation-drawer>

    <!-- Toolbar -->
    <v-app-bar app dense light>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-btn color="#6a76ab" small to="/">
        <span class="text-white">Shopping</span>
      </v-btn>
      <v-spacer />
      <div class="d-block">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" :fluid="$vuetify.breakpoint.lgOnly">
        <v-layout>
          <nuxt />
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent, onMounted, ref, useContext, useRouter } from '@nuxtjs/composition-api'
import SaleMenu from '@/components/layout/organisms/SaleMenu'

export default defineComponent({
  components: {
    SaleMenu
  },
  setup() {
    const drawer = ref(true)
    const { $auth } = useContext()
    const router = useRouter()

    onMounted(() => {
      if ($auth.user.is_admin !== 0) {
        router.push('/admin/classes')
      }
    })
    return {
      drawer
    }
  }
})
</script>
