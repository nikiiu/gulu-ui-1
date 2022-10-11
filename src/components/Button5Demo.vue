<demo>支持 loading</demo>
<template>
  <Button loading>加载中</Button>
  <Button>加载完毕</Button>
</template>
<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: { Button },
};
</script>
