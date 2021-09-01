<template>
  <div class="knowmore">
    <div class="container">
      <div class="founderbg">
        <div class="container-fluid">
          <div class="founder row">
            <div class="col-12 col-lg-6 col-xl-6 col-sm-12 col-md-6">
              <div class="card mx-auto">
                <div class="imgBx">
                  <img
                    src="../assets/Home.svg"
                    alt="Founder's Image"
                    class="homeimg"
                  />
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-6 col-sm-12 col-md-6">
              <div class="aboutteext">
                <p class="column">
                  Magnetic resonance imaging (MRI) and computed tomography (CT)
                  scans are used most often to look for brain diseases. <br />
                  These scans will almost always show a brain tumor, if one is
                  present.
                  <vs-divider border-style="solid" color="dark"
                    >How this works</vs-divider
                  >
                  We use aws rekognition service to check whether the ct scanned
                  image contains a tumor or not.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
</style>
