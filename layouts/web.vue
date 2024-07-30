<template>
  <v-app class="d-flex flex-grow-1">
    <v-app-bar app class="toolbar-header" color="primary" dense flat>
      <div class="d-flex justify-between w-full items-center">
        <div class="text-white">
          <v-icon class="mr-1" color="white">mdi-phone</v-icon>
          <span class="mr-2">Call us : 0283.8940 390</span>

          <v-icon class="mr-1" color="white">mdi-email</v-icon>
          <span>
            E-mail :
            <a class="tw-text-white" href="mailto:csm@iuh.edu.vn">csm@iuh.edu.vn</a>
          </span>
        </div>
        <div class="d-flex align-center">
          <v-btn v-if="$auth.user.type === 'student'" class="mr-2 company" color="#ffffff20" dark small to="/company">
            Thông tin thực tập
          </v-btn>
          <toolbar-user v-if="$auth.user" @change-password="onChangePassword" />
        </div>
      </div>
    </v-app-bar>
    <v-main class="transition-all duration-500 md:bg-[#f5f5f7]">
      <div class="h-full">
        <nuxt />
      </div>
    </v-main>
    <!--    Chat bot  -->
    <div class="fixed bottom-0 right-5">
      <v-tooltip left>
        <template #activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            class="absolute right-0 bottom-5"
            color="primary"
            fab
            style="position: absolute"
            v-on="on"
            @click="showChatBox = !showChatBox"
          >
            <v-icon role="img">mdi-human-greeting-proximity</v-icon>
          </v-btn>
        </template>
        <span>Liên hệ quản trị viên</span>
      </v-tooltip>
      <div v-if="showChatBox" class="relative right-[70px]">
        <message @close-chat="showChatBox = false" />
      </div>
    </div>
    <footer class="bg-blue-950 text-white pt-3">
      <v-container class="px-0 pb-0" fluid>
        <v-row>
          <v-col cols="12" md="5">
            <div class="p-2">
              <v-img class="mb-2" contain height="100px" src="/images/logo.png" />
              <div>
                Chào mừng các bạn đến với Hệ thống học tập trực tuyến của trường Đại học Công nghiệp TP.HCM, kênh thông
                tin cung cấp các khóa học trực tuyến của nhà trường cho các bạn sinh viên.
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="3">
            <div class="text-2xl font-bold">Liên kết</div>
            <div class="footer-link">
              <div class="my-1">
                <a href="https://iuh.edu.vn/" target="_blank">Website Nhà Trường</a>
              </div>
              <div class="my-1">
                <a href="https://csm.iuh.edu.vn/" target="_blank">Website Trung Tâm QTHT</a>
              </div>
              <div class="my-1">
                <a href="https://sv.iuh.edu.vn/" target="_blank">Cổng thông tin sinh viên</a>
              </div>
              <div class="my-1">
                <a href="https://lms.iuh.edu.vn/" target="_blank">LMS</a>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-2xl font-bold">Liên hệ</div>
            <div>
              <div class="my-1">
                <span>Trung tâm Quản trị Hệ thống - Trường Đại học Công nghiệp TP.HCM</span>
              </div>
              <div class="my-1">
                <v-icon color="white">mdi-phone-classic</v-icon>
                <span>Phone : 0283.8940 390 - ext 838</span>
              </div>
              <div class="my-1">
                <v-icon color="white">mdi-email</v-icon>
                <span>E-mail : csm@iuh.edu.vn</span>
              </div>
              <div class="my-1">
                <a href="https://lms.iuh.edu.vn/" target="_blank">LMS</a>
              </div>
              <div class="my-1">
                <div>Follow us</div>
                <a href="https://www.facebook.com/csm.iuh.edu.vn" target="_blank">
                  <v-icon class="fb_icon" color="white" size="50">mdi-facebook</v-icon>
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="text-center bg-black py-2">Copyright © 2024 - Phát triển bởi Nguyễn Quang Tú - Nguyễn Thị Lê</div>
      </v-container>
    </footer>
    <change-password-dialog ref="changePassword" />
  </v-app>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import ToolbarUser from '@/components/common/share/ToolbarUser'
import Message from '~/components/web/home/organisms/Message.vue'
import ChangePasswordDialog from '~/components/web/organisms/ChangePasswordDialog.vue'

export default defineComponent({
  components: {
    ChangePasswordDialog,
    Message,
    ToolbarUser
  },
  middleware: ['user'],
  setup(_, { refs }) {
    const showChatBox = ref(false)
    const onChangePassword = () => {
      refs.changePassword.open()
    }

    return {
      showChatBox,
      onChangePassword
    }
  }
})
</script>

<style lang="scss" scoped>
.theme--light.v-tabs > .v-tabs-bar {
  background-color: transparent !important;

  .v-tab--active {
    color: #fff;
    background-color: #ffffff40;
  }
}
.v-application a {
  color: white;

  &:hover {
    text-decoration: underline;
  }
}

.footer-link > a {
  color: white;
  text-decoration: underline;

  &:hover {
    color: var(--v-primary-base);
    text-decoration: unset;
  }
}
.fb_icon {
  margin-top: 5px;

  &:hover {
    color: #0866ff !important;
  }
}
.company {
  text-decoration: unset !important;
  &:hover {
    text-decoration: unset !important;
  }
}
</style>
