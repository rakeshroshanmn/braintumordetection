<template lang="html">
  <div class="centerx">
    <vs-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      @on-success="successUpload"
    />
  </div>
</template>

<script>
export default {
  methods: {
    successUpload() {
      this.$vs.notify({
        color: "success",
        title: "Upload Success",
        text: "The upload was success",
      });
    },
  },
};
</script>
