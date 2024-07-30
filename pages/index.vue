<template>
  <div>
    <div class="bg-white d-flex items-center py-2">
      <nuxt-link to="/">
        <v-img contain src="/images/logo.png" width="200" />
      </nuxt-link>
      <v-spacer />
      <div>
        <v-tabs v-model="tab">
          <v-tab>Trang chủ</v-tab>
          <v-tab>Doanh nghiệp</v-tab>
          <v-tab>Giảng viên hướng dẫn</v-tab>
        </v-tabs>
      </div>
    </div>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <slide-bar />
      </v-tab-item>
      <v-tab-item>
        <company />
      </v-tab-item>
      <v-tab-item>
        <list-teachers />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import SlideBar from '@/components/web/molecules/SlideBar.vue'
import Company from '~/components/web/home/organisms/Company.vue'
import ListTeachers from '~/components/web/home/organisms/ListTeachers.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { ListTeachers, Company, SlideBar },
  layout: 'web',
  middleware: ['student'],

  setup() {
    const tab = ref(0)
    return {
      tab
    }
  }
})
</script>
