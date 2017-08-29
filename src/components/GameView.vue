<template>
  <div class="mdl-grid">
    test
  </div>
</template>

<script>
import data from '../data'
export default {
  data () {
    return {
      'games': data.games
    }
  }
}
</script>

<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .description {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>