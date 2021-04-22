<template>
  <main>
    <header-main :msg="texto" class="cabecera"/>
    <img :src="img" :alt="name" class="main-imeg" />
    <div class="content main">
      <h1 class="main-title">Equipos de futbol</h1>
      <p class="main-content">
        Esta es una página que utliza una API para presentar a los principales equipos de futbol
        tratando de incluir toda sus información para hacerlo lo más divertida posible, puedes buscar
        información de muchos equipos en Europa, América y demás continentes.
      </p>
      <formulario class="main-search"/>
    </div>
  </main>
</template>

<script>
import HeaderMain from "../components/Header";
import Formulario from '../components/Form.vue';

export default {
  name: "Home",
  components: { HeaderMain, Formulario },

  data(){
    return {
        texto:"Guia de equipos de futbol",
        name:"Futbol",
        img:'https://s19499.pcdn.co/wp-content/uploads/2020/08/soccer-ball-istock-featured.jpg'
    }
  }
};
</script>
<style scoped>
.main{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
}
.main-imeg{
    width: 100%;
    min-height: 50vh;
    object-fit: cover;
    filter: grayscale(60%);
    position: relative;

}
.content{
  position: absolute;
  top:15%;
}
.main-title{
  text-align: center;
  color: rgb(107, 224, 61);;
  font-size: 3rem;
  margin-top: 5rem;
  min-width: 50%;
}
.main-content{
  margin-top: 2.5rem;
  font-size: 2rem;
  max-width: 80%;
  text-align: justify;
  color: #eee;
}
.main-search{
  margin-top: 2.5rem;
  max-width: 80%;
}
</style>
