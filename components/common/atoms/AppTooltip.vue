<template>
  <v-tooltip bottom :open-delay="100">
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </v-tooltip>
</template>

<script>
export default {
  name: 'AppTooltip'
}
</script>
