<template>
  <v-data-table
    v-bind="$attrs"
    class="flex-grow-1"
    :dense="dense"
    :footer-props="footerProps"
    :headers="headers"
    :items="items"
    :items-per-page="itemsPerPage"
    v-on="$listeners"
  >
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'AppDataTable',
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    },
    itemsPerPage: {
      type: Number,
      default: 50
    },
    footerProps: {
      type: Object,
      default: () => ({
        'items-per-page-options': [10, 20, 50, 100]
      })
    },
    dense: {
      type: Boolean,
      default: false
    }
  }
}
</script>
