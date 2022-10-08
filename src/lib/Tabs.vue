<template>
  <div v-for="(t, index) in titles" :key="index">{{ title }}</div>
  <component v-for="(c, index) in defaults" :is="c" :key="index" />
</template>
<script lang="ts">
import Tab from "./Tab.vue";

export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return { defaults, titles };
  },
};
</script>
