<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title class="headline text-h6">Xác nhận xóa</v-card-title>
      <v-card-text class="body-1">Bạn có chắc chắn muốn xóa không?</v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="cancel">Hủy</v-btn>
        <v-btn color="error" text @click="confirm">Xác nhận</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      resolve: null
    }
  },
  methods: {
    open() {
      this.dialog = true
      return new Promise((resolve) => {
        this.resolve = resolve
      })
    },
    confirm() {
      this.dialog = false
      this.resolve(true)
    },
    cancel() {
      this.dialog = false
      this.resolve(false)
    }
  }
}
</script>

<style scoped>
.v-dialog {
  &__card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  &__title {
    color: #333;
  }

  &__text {
    color: #666;
  }

  &__actions {
    justify-content: flex-end;
  }

  &__btn {
    min-width: 80px;
  }
}
</style>
