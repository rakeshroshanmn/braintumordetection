<template>
  <div class="knowmore">
    <div class="container">
      <div class="founderbg">
        <div class="container-fluid">
          <div class="founder row">
            <div class="col-12 col-lg-6 col-xl-6 col-sm-12 col-md-6">
              <div class="column">
                <input
                  class="aboutteext"
                  type="file"
                  @change="onupload"
                  placeholder="Upload"
                />
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-6 col-sm-12 col-md-6">
              <div class="card mx-auto">
                <div class="imgBx">
                  <img
                    src="../assets/Upload.svg"
                    alt="Upload Image"
                    class="Uploadimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import S3 from "aws-s3";
import axios from "axios";
export default {
  methods: {
    onupload(e) {
      console.log(e);
      let file = e.target.files[0];
      this.S3Client.uploadFile(file).then((data) => {
        console.log("IMAGE UPLOADED");
        axios
          .post("http://localhost:3000/", data)
          .then((response) => console.log(response));
      });
    },
  },
  computed: {
    config() {
      return {
        bucketName: "braintumordetection",
        region: "ap-south-1",
        accessKeyId: "AKIAX4MFRFGGNCBMO5FC",
        secretAccessKey: "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",
      };
    },
    S3Client() {
      return new S3(this.config);
    },
  },
};
</script>

<style>
p {
  color: #010181;
  font-weight: 300;
}

img {
  max-width: 800px;
  margin-bottom: 40px;
}
.founderbg {
  padding-bottom: 5px !important;
  padding-top: 5px;
}
.Uploadimg {
  max-width: 100%;
}
</style>
