<template>
  <div class="upload">
    <input type="file" @change="onupload" placeholder="Upload" />
  </div>
</template>

<script>
import S3 from 'aws-s3';
import axios from 'axios'
export default {
  methods: {
    onupload(e) {
      console.log(e);
      let file = e.target.files[0];
      this.S3Client.uploadFile(file).then(data => {
        console.log("IMAGE UPLOADED")
        axios.post('http://localhost:3000/', data)
         .then(response => console.log(response));
      })
    },
  },
  computed: {
    config() {
      return {
        bucketName: "braintumorclient",
        region: "ap-south-1",
        accessKeyId: "AKIAVWQWMJSREWHMQKNI",
        secretAccessKey: "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",
      };
    },
    S3Client() {
      return new S3(this.config);
    },
  },
};
</script>
