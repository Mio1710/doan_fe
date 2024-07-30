<template>
  <v-card flat rounded="0" theme="dark">
    <v-window v-model="onboarding" class="h-4/5" dark show-arrows>
      <v-window-item class="w-screen h-4/5">
        <v-img src="/images/slidebar/1.png" />
      </v-window-item>
      <v-window-item class="w-screen h-4/5">
        <v-img src="/images/slidebar/2.png" />
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
export default {
  name: 'SlideBar',
  data() {
    const length = [1, 2, 3, 4]
    const onboarding = 1

    return {
      onboarding,
      length
    }
  },

  methods: {
    next(item) {
      this.onboarding = this.onboarding + 1 > this.length.indexOf(item) ? 1 : this.onboarding + 1
    },
    prev(item) {
      this.onboarding = this.onboarding - 1 <= 0 ? this.length.indexOf(item) : this.onboarding - 1
    }
  }
}
</script>

<style scoped></style>
