<template>
<div class="test">
    <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>
     <b-button variant="outline-success" @click="nextPage()">Success</b-button>
  </b-card>
</div>

</template>

<script>
export default {
    methods: {
        nextPage(){
            this.$router.push('/form')
        }
    },
}
</script>

<style>

</style>