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
    <vs-popup class="holamundo" title="Result" :active.sync="popupActivo">
      <div v-if="popups == 'yes'">
        <img src="../assets/Yes.gif" alt="The end is near" />
        <p>Yes its a tumor 😥</p>
      </div>
      <div v-if="popups == 'no'">
        <img src="../assets/No.gif" alt="The end is near" />
        <p>Hurrah its not a tumor 🤗</p>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import S3 from "aws-s3";
import axios from "axios";
export default {
  data() {
    return {
      popupActivo: false,
      popups: String,
    };
  },
  methods: {
    onupload(e) {
      console.log(e);
      let file = e.target.files[0];
      this.S3Client.uploadFile(file).then((data) => {
        console.log("IMAGE UPLOADED");
        axios
          .post(
            "http://braintumordetection-env.eba-wmsrw2dw.ap-south-1.elasticbeanstalk.com/",
            data
          )
          .then((response) => {
            console.log(response);
            this.popupActivo = true;
            if (response.data.CustomLabels[0].Name == "yes") {
              this.popups = "yes";
            } else if (response.data.CustomLabels[0].Name == "no") {
              this.popups = "no";
            }
          });
      });
    },
  },
  computed: {
    config() {
      return {
        bucketName: "braintumornewclient",
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
