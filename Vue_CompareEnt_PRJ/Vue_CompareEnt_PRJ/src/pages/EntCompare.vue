<template>
  <div style="margin-top:50px;">
    <b-container class="bv-example-row">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Enterprise name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.first_name"
                placeholder="Enter enterprise name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Province:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.first_province"
                placeholder="Enter province"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="Enterprise name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.second_name"
                placeholder="Enter enterprise name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Province:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.second_province"
                placeholder="Enter province"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>

      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import VueAxios from "vue-axios";
import axios from "axios";
export default {
  data() {
    return {
      form: {
        first_name: "",
        second_name: "",
        first_province: "",
        second_province: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios.post("http://localhost:3000/data", this.form).then(() => {
        alert(JSON.stringify(this.form));
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.form.first_name = ""),
        (this.form.second_name = ""),
        (this.form.first_province = ""),
        (this.form.second_province = ""),
        // Trick to reset/clear native browser form validation state
        (this.show = false);
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
