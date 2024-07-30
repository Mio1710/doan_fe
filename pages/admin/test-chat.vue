<template>
  <div class="d-flex flex-column flex-grow-1">
    <div class="d-flex align-center">
      <h1 class="mb-6">Giảng viên</h1>
      <v-spacer />
    </div>
    <div class="px-3 d-flex">
      <v-spacer />
      <v-btn color="primary" small>
        <v-icon left small>mdi-plus</v-icon>
        Test chat
      </v-btn>
    </div>
    <div class="pa-2">
      <app-text-field v-model="message" label="Nhập nội dung" @keyup.enter="onSend" />
      <v-btn @click="onSend">Send message</v-btn>
    </div>
    <div>
      <div v-for="(mes, index) in messages" :key="index">
        {{ index }}:
        {{ mes }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, useContext } from '@nuxtjs/composition-api'
import { io } from 'socket.io-client'
import AppTextField from '~/components/common/atoms/AppTextField.vue'

export default defineComponent({
  components: {
    AppTextField
  },
  setup() {
    const { $auth } = useContext()
    const message = ref('')
    const messages = ref([])
    const socket = io('http://localhost:8080')
    onMounted(() => {
      const mes = 'Hello world'
      socket.connect()
      socket.auth = {
        token: $auth.user.token
      }
      socket.emit('connection', mes)
      console.log('mes', mes, $auth)
      socket.on('receive', (data) => {
        console.log('receive message', data)
        messages.value.push(data)
      })
    })

    const onSend = () => {
      socket.emit('send', message.value)
      messages.value.push(message.value)
      message.value = ''
      console.log('send message', message.value)
    }

    return {
      message,
      messages,
      onSend
    }
  }
})
</script>
<style lang="scss">
.app-filter {
  .filter-component,
  span {
    flex: 0 1 200px;

    .v-autocomplete .v-select__selections {
      flex-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .v-chip__content {
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
    }
  }
}
</style>
