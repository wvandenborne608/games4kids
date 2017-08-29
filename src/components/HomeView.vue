<template>
  <div class="wrapper">
    <div v-for="game in this.games" class="panel" @click="displayGame(game.id)">
      <div>
        <img :src="game.url" />
      </div>  
      <div class="panel_title">
        <span>
         {{ game.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import data from '../data'
  export default {
    methods: {
      displayGame (id) {
        this.$router.push({name: 'game', params: { id: id }})
      }
    },
    data () {
      return {
        'games': data.games
      }
    }
  }
</script>


<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 40px;
  font-family: 'Open Sans', 'sans-serif';
  background-color: #fff;
  color: #444;
}

h1,
p {
  margin: 0 0 1em 0;
}

.wrapper {
  max-width: 940px;
  margin: 0 20px;
  display: grid;
  grid-gap: 10px;
}


/* no grid support? */

.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.wrapper {
  display: grid;
  margin: 0 auto;
  margin-top:20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
}

.panel {
  /* needed for the flex layout*/
  flex: 1 1 200px;
  text-align: center;
  position: relative;
}

.panel > div > img {
  border-radius: 10px;
}


/* We need to set the margin used on flex items to 0 as we have gaps in grid.  */

@supports (display: grid) {
  .wrapper > * {
    margin: 0;
  }
}

.panel_title {
    position: absolute;
    top: 0;
    background: rgba(255, 255, 255, 0.5);
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: 200px; /* Need a specific value to work */
    border-radius: 10px;
    padding-top:5px;
    padding-bottom:5px;
    font-weight: bold;
}

</style>