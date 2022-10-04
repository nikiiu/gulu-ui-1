<template>
  <div :size="size">
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props, context) {
    const { size, level, ...rest } = context.attrs;

    return { size, level, rest };
  },
};
</script>
<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>
