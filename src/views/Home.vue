<template>
    <div class="main">

        <div class="container">
            <div class="header">
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <textarea id="textarea1" class="materialize-textarea"  type="text" v-model="search"  @keydown.enter="onEnter($event)"></textarea>
                                <label for="textarea1">enter the name of the ingredient and press enter</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="content">
                <div class="resultElement" v-for="item in allRecipes" v-bind:key="item.id" @click="selectRecipe(item)">
                    <img class="img" v-bind:src="item.image" alt="">
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
    components: {},
    data () {
        return {
            search:'',
        }
    },
    computed:{
      allRecipes: function () {
          return this.$store.getters.allRecipes;
      }
    },

    methods:{
      onEnter: function (event) {
          event.preventDefault();
          this.$store.dispatch('searchRecipe', this.search).then(()=>{
              this.search = '';
          })

      },
     selectRecipe: function (item) {
         this.$store.dispatch('selectRecipe', item).then(()=>{
             this.$router.push({path: '/Recipe'});
         });
     }
    }

}
</script>


<style scoped lang="scss">
    .container{
        margin-top: 5%;
        .header{
            padding: 3%;
            width: 100%;
            background-color: rgba(206, 66, 199, 0.12);
            .row{
                margin-bottom: 0;
            }
        }
        .content{
            padding: 3% 5%;
            display: flex;
            flex-direction: column;
            background-color: rgba(128, 128, 128, 0.17);
            .resultElement{
                margin: 3px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                cursor: pointer;
                background-color: white;
                .img{
                    max-height: 80px;
                    max-width: 80px;
                }
                p {
                    padding-left: 3%;
                }
            }
            .resultElement:hover {
                transform: scale(1.05);
                z-index: 1;
                transition: transform .3s;
            }

        }
    }


</style>
