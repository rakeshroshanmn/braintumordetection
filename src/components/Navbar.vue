<template>
  <div class="nav_bar">
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          <a href="/" style="text-decoration: none">Brain Tumor Detection</a>
        </vs-navbar-title>
      </div>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    activeItem: 0,
  }),
};
</script>

<style scoped>
.nav_bar {
  margin-bottom: 40px;
}
</style>
