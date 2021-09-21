<template>
  <div class="knowmore">
    <div class="container">
      <div class="founderbg">
        <div class="container-fluid">
          <div class="founder row mb-5">
            <div class="col-12 col-lg-6 col-xl-6 col-sm-12 col-md-6">
              <div class="card mx-auto">
                <div class="imgBx">
                  <img
                    src="../assets/Home.png"
                    alt="Home Image"
                    class="homeimg"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-6 col-sm-12 col-md-6">
              <div class="aboutteext">
                <p class="column">
                  Computed tomography (CT) scans are used most often to look for
                  brain diseases. <br />
                  These scans will almost always show a brain tumor, if one is
                  present.
                  <vs-divider border-style="solid" color="dark"
                    >How this works</vs-divider
                  >
                  We use aws rekognition custom labels to check whether the ct
                  scanned image contains a tumor or not.
                </p>
                <div class="column">
                  <input
                    class="aboutteext"
                    type="file"
                    @change="onupload"
                    placeholder="Upload"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col mt-5">
              <video width="800" controls autoplay>
                <source
                  src="../assets/video_2021-09-20_21-58-04.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <vs-popup class="holamundo" title="Result" :active.sync="popupActivo">
        <div>
          <h3>The service is currently not available</h3>
          <img
            src="../assets/server_down.svg"
            alt="Server Down"
            class="server_down"
            width="450px"
            height="450px"
            srcset=""
          />
          <h5>Close and Scroll down for working model</h5>
        </div>
      </vs-popup>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      popupActivo: false,
    };
  },
  methods: {
    //eslint-disable-next-line
    onupload(e) {
      // console.log(e);
      // let file = e.target.files[0];
      // this.S3Client.uploadFile(file).then((data) => {
      //   console.log("IMAGE UPLOADED");
      //   axios
      //     .post(
      //       "http://braintumordetection-env.eba-wmsrw2dw.ap-south-1.elasticbeanstalk.com/",
      //       data
      //     )
      //     .then((response) => {
      //       console.log(response);
      this.popupActivo = true;
      //       if (response.data.CustomLabels[0].Name == "yes") {
      //         this.popups = "yes";
      //       } else if (response.data.CustomLabels[0].Name == "no") {
      //         this.popups = "no";
      //       }
      //     });
      // });
    },
  },
  computed: {},
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

video {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}

.founderbg {
  padding-bottom: 5px !important;
  padding-top: 5px;
}
.homeimg {
  max-width: 100%;
}
.aboutteext p {
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  font-size: 16px;
  line-height: 40px;
  height: 100%;
}

@media (max-width: 1000px) and (min-width: 700px) {
  .aboutteext p {
    line-height: 20px;
  }
}

@media (max-width: 1200px) and (min-width: 990px) {
  .aboutteext p {
    padding: 20px 0;
  }
}

@media screen and (min-width: 1210px) {
  .aboutteext p {
    padding: 70px 0;
  }
}
</style>
