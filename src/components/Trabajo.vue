<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>CRUD Trabajo</h1>

        <hr />
        <br /><br />
        <alert :message="message" v-if="showMessage"></alert>
        <button type="button" class="btn btn-success btn-sm" v-on:click="add()">
          Add Trabajo
        </button>
        <br /><br />
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre/Trabajo</th>
              <th scope="col">Nombres</th>
              <th scope="col">Secuencia</th>
              <th scope="col">Recurso</th>
              <th scope="col">Fecha Inicio</th>
              <th scope="col">Fecha Fin</th>
              <th scope="col">Fecha Entrega</th>
              <th scope="col">Nota</th>
              <th scope="col">Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d, index) in list" :key="index">
              <td>{{ d.ID }}</td>
              <td>{{ d.nombre }}</td>
              <td>{{ d.Person.nombre }} {{ d.Person.paterno }}</td>
              <td>{{ d.Secuencia.nombre }}</td>
              <td>{{ d.Recurso.nombre }}</td>
              <td>{{ d.fechainicio }}</td>
              <td>{{ d.fechafin }}</td>
              <td>{{ d.fechaentrega }}</td>
              <td>{{ d.nota }}</td>
              <td>{{ d.estado }}</td>

              <td>
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-warning btn-sm"
                    @click="edit(d.ID)"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    @click="onDelete(d)"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "./Alert.vue";
import client from "../api";

export default {
  name: "Trabajo",
  data: function () {
    return {
      list: [],
      message: "",
      showMessage: false,
    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    edit: function (id) {
      this.$router.push("/trabajo/form/" + id);
    },
    add: function () {
      this.$router.push("/trabajo/form");
    },
    getList: function () {
      client
        .get("/v1/trabajo")
        .then((res) => {
          this.list = res.data.r;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    onDelete: function (d) {
      var r = confirm("Eliminar ?");
      if (r == true) {
        this.delete(d.ID);
      }
    },
    delete: function (id) {
      client
        .delete(`/v1/trabajo/${id}`)
        .then(() => {
          this.getList();
          this.message = "Trabajo removed!";
          this.showMessage = true;
        })
        .catch((error) => {
          console.error(error);
          this.getList();
        });
    },
  },

  created: function () {

    this.message = this.$route.query.msg;
    //console.log(this.message);

    if (typeof(this.message) !=='undefined') {// || this.message !== null
      this.showMessage = true;
     // this.makeToast("Hecho", this.message, "success");
    }

    this.getList();
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