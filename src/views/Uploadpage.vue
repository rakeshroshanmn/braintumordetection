<template>
  <div class="upload">
    <input type="file" @change="onupload" placeholder="Upload" />
  </div>
</template>

<script>
export default {
  methods: {
    onupload(e) {
      console.log(e);
    },
  },
};
</script>
