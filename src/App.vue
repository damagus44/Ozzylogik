<template>
  <div id="app">
      <loader
        v-if="loadderState"
      />
      <router-view/>
  </div>
</template>

<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";

</style>
<script>
    import Loader from "./components/loader";
    export default {
        components: {Loader},
        computed:{
            loadderState: function () {
                return this.$store.getters.getLoaderState;
            }
        },
    }
</script>
