<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>Person Form</h1>
        <hr />
        <br /><br />
        <button
          type="button"
          class="btn btn-success btn-sm"
        >
          Cancel
        </button>
        

        <b-form @submit="onSubmit" @reset="onReset" class="w-100">
          <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Titulo">
            <b-form-input id="input-sm" size="sm" placeholder="Enter Name" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Tema">
            <b-form-input id="input-sm" size="sm" placeholder="Enter Apellido Paterno" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="Estado">
            <b-form-input id="input-sm" size="sm" placeholder="Enter Apellido Materno" type="text" required></b-form-input>
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