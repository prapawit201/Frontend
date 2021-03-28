<template>
  <div>
    <div class="form">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 card-form"
      >
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <center><b-avatar size="8rem" style="margin-bottom:2rem"></b-avatar></center>
          <b-form-group
            id="input-group-2"
            label="Your Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.firstname"
              placeholder="Enter your Firstname"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Lastname:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.lastname"
              placeholder="Enter your Lastname"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-card>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstname: null,
        lastname: null
      },
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.firstname = null;
      this.form.lastname = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style>
.form{
  /* max-width: 100%; */
  padding-top: 7rem;
}
.card-form {
  border-radius: 10px;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
</style>
