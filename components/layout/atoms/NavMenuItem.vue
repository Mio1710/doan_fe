<template>
  <div>
    <v-list-item link :to="menuItem.link">
      <v-list-item-icon class="mr-2">
        <v-icon>
          {{ menuItem.icon || 'mdi-circle-medium' }}
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          {{ menuItem.name }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: {
    menuItem: {
      type: Object,
      default: () => {}
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>
