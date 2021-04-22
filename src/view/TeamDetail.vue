<template>
    <div>
        <header-main :msg="asset[0].strTeam" class="cabecera"/>
        <main>
          <img :src="asset[0].strStadiumThumb" :alt="asset[0].strStadium" class="main-imeg"/>
          <div class="main">
            <img :src="asset[0].strTeamBadge" :alt="asset[0].strTeam" class="image1"/>
            <img :src="asset[0].strTeamJersey" :alt="asset[0].strTeam" class="image2"/>
            <br/>
            <h2 class="texto">Liga: {{ asset[0].strLeague }}</h2>
            <h2 class="texto">Fundación: {{ asset[0].intFormedYear }}</h2>
            <h2 class="texto">Estadio: {{ asset[0].strStadium }}</h2>
            <p v-if="asset[0].strDescriptionES == null" class="main-content">
              {{ asset[0].strDescriptionEN }}
            </p>
            <p class="main-content">{{ asset[0].strDescriptionES }}</p>
          </div>
        </main>
    </div>
</template>

<script>
import api from "../api";
import HeaderMain from "../components/Header";

export default {
  name: "TeamDetail",
  components: { HeaderMain },

  data() {
    return {
      asset: [],
    };
  },

  created() {
    const id = this.$route.params.id;
    api.getAssetName(id).then(asset => (this.asset = asset))
  }
};
</script>
<style scoped>
.main-imeg{
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: grayscale(75%);
  position: relative;
}
.main{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: absolute;
  top:15%;
  margin-top: 3rem;
}
.main-content{
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin-left: 3rem;
  font-size: 1.5rem;
  max-width: 90%;
  text-align: justify;
  color: #fff;
  background: rgba(54, 54, 54, 0.6);
}
.image1{
  margin-top: 2.5rem;
  object-fit: contain;
  height: 35vh;
  width: 50%;
}
.image2{
  margin-top: 1.5rem;
  object-fit: contain;
  height: 45vh;
  width: 50%;
  margin-left: 30;
}
.texto{
  margin-top: 2rem;
  font-size: 3.5rem;
  color: rgba(247, 222, 3, 0.993);
  -webkit-text-stroke: .5px black;
/*   background: rgba(54, 54, 54, 0.4); */
}
</style>>