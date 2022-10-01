<template>
  <div>
    导航栏 | <router-link to="/">Uu</router-link> |
    <router-link to="/xxx">Uu2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
