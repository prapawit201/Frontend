<template>
  <div class="color">
    <div>
      <b-carousel
        id="carousel-no-animation"
        style="text-shadow: 0px 0px 2px #000"
        no-animation
        indicators
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=23"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <br /><br />
    <div class="test">
      <b-container fluid class="p-4 bg-dark">
        <b-row>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://picsum.photos/250/250/?image=54"
              alt="Image 1"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://picsum.photos/250/250/?image=58"
              alt="Image 2"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              thumbnail
              fluid
              src="https://picsum.photos/250/250/?image=59"
              alt="Image 3"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <br /><br />
    <center>
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-button variant="outline-success" class="btn" @click="nextPage()"
          >Register</b-button
        >
      </b-card>
    </center>
  </div>
</template>

<script>
export default {
  methods: {
    nextPage() {
      this.$router.push("/form");
    }
  }
};
</script>

<style>
.mb-2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.btn {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.color {
  margin: 1% 5%;
  padding-bottom: 5%;
}
</style>
