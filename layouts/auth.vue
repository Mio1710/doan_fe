<template>
  <v-app>
    <div class="d-flex flex-column flex-md-row flex-grow-1 text-center pt-[60px]">
      <v-sheet class="layout-side d-none d-md-flex flex-md-column align-center mx-auto mx-md-1 px-2">
        <div class="pa-2">
          <div class="display-2 font-weight-bold primary--text">
            {{ $config.appName }}
          </div>
          <div class="title my-2">Welcome!</div>
        </div>
        <img alt="logo" class="w-full rounded-sm mt-3" src="/images/logo.png" />
      </v-sheet>

      <div class="d-flex flex-column flex-grow-1 justify-center align-center pa-2 pa-md-4">
        <div class="layout-content ma-auto w-full">
          <nuxt />
        </div>
        <div class="overline mt-4">{{ $config.appName }}</div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
.layout-side {
  width: 420px;
}

.layout-content {
  max-width: 480px;
}
</style>
