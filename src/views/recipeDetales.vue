<template>
    <div class="container">
        <div class="recipe">
            <img  v-bind:src="selectedRecipe.image" alt="">
            <h2>{{selectedRecipe.title}}</h2>
        </div>

        <div class="ingredients">
                <div class="ingredient" v-for="item in selectedRecipe.missedIngredients" v-bind:key="item.id" @click="selectIngredient(item)">
                    <img class="img" v-bind:src="item.image" alt="">
                    <h3>{{item.name}}</h3>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recipeDetales",

        computed:{
            selectedRecipe: function () {
                return this.$store.getters.getSelectedRecipe;
            }
        },
        methods:{
            selectIngredient: function (item) {
                this.$store.dispatch('selectIngredient', item).then(()=>{
                    this.$router.push({path: '/Ingredient'});
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        margin-top: 5%;
        .recipe{
            width: 100%;
            padding: 3%;
            background-color: rgba(206, 66, 199, 0.12);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            h2 {
                margin-left: 15px;
            }
        }
        .ingredients{
            padding: 3% 5%;
            display: flex;
            flex-direction: column;
            background-color: rgba(128, 128, 128, 0.17);
            .ingredient{
                margin: 3px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                cursor: pointer;
                background-color: white;
                .img{
                    margin-left: 10px;
                    max-height: 80px;
                    max-width: 80px;
                }
                h3 {
                    padding-left: 3%;
                }
            }
            .ingredient:hover {
                transform: scale(1.05);
                z-index: 1;
                transition: transform .3s;
            }
        }
    }


</style>
