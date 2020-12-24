<template>
    <div class="cabeza">
        <h1>SESIONES</h1>
        <alert :message="message" v-if="showMessage"></alert>
        <button id="add" type="button" class="btn btn-success btn-sm" v-on:click="add()">
          Add Sesión
        </button>
        <div class="menu">
            <b-tabs content-class="mt-3" >
            <p><b-tab title="UNIDAD 1" active >
                <div id="sesion1" v-for="(d, index) in list" :key="index">
                    <b-card 
                        no-body
                        style="max-width: 20rem;"
                        img-src="https://image.freepik.com/vector-gratis/suministros-regreso-escuela-estilo-plano_24908-56959.jpg"
                        img-alt="Image"
                        img-top
                    >
                        <template #header >
                        <h4 class="mb-0">{{ d.tema }}</h4>
                        </template>

                        <b-card-body>
                        <b-card-title>{{ d.Unidad.nombre }}</b-card-title>
                        <b-card-text>{{ d.estado }}
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </b-card-text>
                        </b-card-body>

                        <b-list-group flush>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
                        </b-list-group>


                        <b-card-footer>This is a footer</b-card-footer>
                    </b-card>
                </div>
            </b-tab></p>
            
            </b-tabs>
        </div>
        <footer>
    <h3>@Copyright Anthony.Alcahuasi</h3>
</footer>
    </div>
</template>

<script>
import Alert from "./Alert.vue";
import client from "../api";

export default {
  name: "Sesion",
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
      this.$router.push("/sesion/form/" + id);
    },
    add: function () {
      this.$router.push("/sesion/form");
    },
    getList: function () {
      client
        .get("/v1/sesion")
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
        .delete(`/v1/sesion/${id}`)
        .then(() => {
          this.getList();
          this.message = "Sesión removed!";
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
<style scoped>
.cabeza{
    margin-top: 40px;
}
#add{
    margin: 0 100px 0px 300px;
    font-size: 30px;
}

.enviar{
    width: 20%;
    margin-left: 800px;
    margin-top: -30px;
}
.boton{
    margin-left: 200px;
    margin-top: -23px;
}
.menu{
    width: 70%;
    margin-left: 300px;
    margin-top: 60px;
}
h1{
    font-family: 'Bangers', cursive;
    margin-left: 200px;
    color: #c97515;
    font-size: 80px;
}

#sesion3{
    margin-left: 970px;
    margin-top: -740px;
}
footer{
    height: 50px;
    color: rgb(0, 0, 0);
    background: rgb(255, 185, 56);
    text-align: center;
    margin-top: 40px;
}
footer >h3{
    font-size: 20px;
    margin-bottom: 20px;
}
</style>