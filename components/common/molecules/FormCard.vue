<template>
  <app-form v-slot="{ handleSubmit }">
    <v-card>
      <v-card-title v-if="!hiddenTitle">
        <slot name="title">
          <span class="text-h5">{{ title }}</span>
        </slot>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <slot />
      </v-card-text>
      <v-divider />
      <v-card-actions v-if="!hiddenActions">
        <v-btn v-if="canDelete" class="px-2" color="error" @click="$emit('delete')">
          {{ deleteText || 'Xóa' }}
        </v-btn>
        <v-spacer />
        <v-btn v-if="canCancel" class="px-2 mr-1" :disabled="loading" text @click="$emit('cancel')">
          {{ cancelText || 'Hủy' }}
        </v-btn>
        <v-btn v-if="!hideSubmit" class="px-2" color="primary" :loading="loading" @click="handleSubmit(submit)">
          <span v-if="submitText">{{ submitText }}</span>
          <span v-else>
            {{ isUpdate ? updateText || 'Sửa' : createText || 'Tạo' }}
          </span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </app-form>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import AppForm from '@/components/common/atoms/AppForm'

export default defineComponent({
  name: 'FormCard',
  components: {
    AppForm
  },
  props: {
    title: {
      type: String,
      default: null
    },
    hiddenTitle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    isUpdate: {
      type: Boolean,
      default: false
    },
    canDelete: {
      type: Boolean,
      default: false
    },
    canCancel: {
      type: Boolean,
      default: true
    },
    submitText: {
      type: String,
      default: null
    },
    createText: {
      type: String,
      default: null
    },
    updateText: {
      type: String,
      default: null
    },
    deleteText: {
      type: String,
      default: null
    },
    cancelText: {
      type: String,
      default: null
    },
    hideSubmit: {
      type: Boolean,
      default: false
    },
    hiddenActions: {
      type: Boolean,
      default: false
    }
  },
  setup(_, { emit }) {
    const submit = () => {
      emit('submit')
    }

    return {
      submit
    }
  }
})
</script>
