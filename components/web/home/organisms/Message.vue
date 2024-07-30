<template>
  <v-card class="message-box z-10" elevation="5" height="450" width="320">
    <div class="d-flex flex-column h-full">
      <v-card class="message-box" height="40">
        <v-row class="pa-1">
          <v-col class="py-0" cols="8">
            <v-avatar size="32">
              <v-img src="/images/avatars/default.png" />
            </v-avatar>
          </v-col>
          <v-col class="py-0" cols="4">
            <div class="d-flex justify-space-between pt-1">
              <v-icon size="24">mdi-video</v-icon>
              <v-icon size="24">mdi-minus-thick</v-icon>
              <v-icon size="24" @click="$emit('close-chat')">mdi-close-thick</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <div class="message-content px-1">
        <div v-for="(item, index) in messages" :key="index">
          <div v-if="item.sender.maso === $auth.user.maso" class="d-flex justify-end">
            <div class="bg-amber-400 rounded">{{ item.msg }}</div>
          </div>
          <div v-else>
            {{ item.msg }}
          </div>
        </div>
      </div>
      <div class="h-[40px] px-1 d-flex items-center">
        <div class="list-icon">
          <v-icon size="20">mdi-paperclip</v-icon>
          <v-icon v-if="!message" class="px-2" size="20">mdi-emoticon-happy-outline</v-icon>
          <v-icon v-if="!message" size="20">mdi-send</v-icon>
        </div>
        <div class="input-text ml-1 d-flex" :class="message ? 'w-full' : ''">
          <v-text-field
            v-model="message"
            class="p-2 w-fit"
            dense
            filled
            hide-details
            placeholder="Nhập tin nhắn"
            rounded
            @keyup.enter="onSend"
          />
          <v-icon class="ml-1" size="20">mdi-thumb-up</v-icon>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import { defineComponent, onMounted, ref, useContext } from '@nuxtjs/composition-api'
import { io } from 'socket.io-client'
export default defineComponent({
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
      messages.value.push({
        sender: {
          maso: $auth.user.maso
        },
        msg: message.value
      })
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
.message-box {
  border-radius: 5px 5px 0 0 !important;

  .message-content {
    height: calc(100% - 80px);
  }
}
.input-text {
  .v-text-field--rounded > .v-input__control > .v-input__slot {
    padding: 0 10px;
  }
}
</style>
