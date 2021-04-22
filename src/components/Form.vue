<template>
  <form name="formulario" action="#" target="_blank" class="form">
        <select name="pais" id="pais" @change="cambio()" class="form-elem">
            <option value="0">Selecciona</option>
            <option value="4350">Mexico</option>
            <option value="4335">España</option>
            <option value="4328">Inglaterra</option>
            <option value="4331">Alemania</option>
            <option value="4332">Italia</option>
            <option value="4334">Francia</option>
            <option value="4344">Portugal</option>
            <option value="4337">Paises Bajos</option>
            <option value="4346">Estados Unidos</option>
            <option value="4406">Argentina</option>
            <option value="4351">Brasil</option>
            <option value="4633">Japon</option>
            <option value="4497">Colombia</option>
            <option value="4351">Brasil</option>
        </select>
        <select name="equipos" id="equipos" class="form-elem">
            <option v-for="teams in asset" :key="teams.id" :value="teams.strTeam">
                {{ teams.strTeam }}
            </option>
        </select>
        <button v-on:click="goToTeam()" class="form-button">Buscar</button>
    </form>
</template>

<script>
import api from "../api";
export default {
  name: "Formulario",
  data(){
    return {
      asset: [],
      nombre: String
    }
  },
  methods: {
    cambio(){
      let id = document.getElementById('pais').value;
      api.getAssetId(id).then(asset => (this.asset = asset));
      this.$emit('nnombre'.teams.strTeam)
    },
    goToTeam() {
      let id = document.getElementById('equipos').value.replace(" ","_");
      this.$router.push({ name: "Team detail", params: { id } });
    }
  }
}
</script>
<style>
.form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  min-width: 70%;
}
.form-elem{
  height: 4rem;
  max-width: 30%;
  margin-left: 4rem;
}
.form-button{
  margin-left: 4rem;
  height: 3rem;
}
</style>