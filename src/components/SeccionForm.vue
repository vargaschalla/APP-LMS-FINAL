<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>Sección Form</h1>
        <hr />
        <br /><br />
        <alert :message="message" v-if="showMessage"></alert>
        <button
          type="button"
          class="btn btn-success btn-sm"
          v-on:click="back()"
        >
          Cancel
        </button>
        <br /><br />ID= {{ d.ID }}

        <b-form @submit="onSubmit" @reset="onReset" class="w-100">

          <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Sección">
            <b-form-input id="input-sm" size="sm" placeholder="Enter Sección" type="text" v-model="d.nombre" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Alias">
            <b-form-input id="input-sm" size="sm" placeholder="Enter Alias" type="text" v-model="d.alias" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Estado">
            <b-form-input id="input-sm" size="sm" placeholder="Enter Estado" type="text" v-model="d.estado" required></b-form-input>
          </b-form-group>
      
          <b-button-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-button-group>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "./Alert.vue";
import client from "../api";

export default {
  name: "SeccionForm",
  data: function () {
    return {
      message: "",
      showMessage: false,
      d: {
        ID: "",
        nombre: "",
        alias: "",
        estado: "",
      },

    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    
    back: function () {
      this.$router.push("/seccion");
    },

    create: function (payload) {
      client
        .post("/v1/seccion", payload)
        .then(() => {
          console.log(payload);

          this.message = "Sección added!";
          this.showMessage = true;
          this.$router.push("/seccion?msg="+this.message);
        })
        .catch((error) => {
          this.message = error;
          this.showMessage = true;
          console.log(error);
        });
    },
    initForm: function () {
      //this.d.ID = '';
      this.d.nombre = "";
      this.d.alias = "";
      this.d.estado = "";
    },
    onSubmit: function (evt) {
      evt.preventDefault();

      const payload = {
        nombre: this.d.nombre,
        alias: this.d.alias,
        estado: this.d.estado,
      };
      if (this.d.ID > 0) {
        this.update(payload, this.d.ID);
      } else {
        this.create(payload);
      }
      this.initForm();
    },
    onReset: function (evt) {
      evt.preventDefault();
      //this.initForm();
      evt.target.reset();
    },

    getById: function (id) {
      client
        .get(`/v1/seccion/${id}`)
        .then((res) => {
          this.d = res.data;
        })
        .catch((error) => {
          this.message = error;
          this.showMessage = true;
          console.error(error);
        });
    },

    update: function (payload, id) {
      client
        .put(`/v1/seccion/${id}`, payload)
        .then(() => {
          console.log(payload);

          this.message = "Sección updated!";
          this.showMessage = true;
          this.$router.push("/seccion?msg="+this.message);
        })
        .catch((error) => {
          this.message = error;
          this.showMessage = true;
          console.error(error);
          //this.getBooks();
        });
    },
  },

  created: function () {
    this.d.ID = this.$route.params.id;
    if (this.d.ID > 0) {
      this.getById(this.d.ID);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  color: #42b983;
}
</style>