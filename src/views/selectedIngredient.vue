<template>
    <div class="container">
        <div class="ingredient">
            <img  v-bind:src="ingredient.image" alt="">
            <h2>{{ingredient.aisle}}</h2>
        </div>


        <div class="content">
            <div class="resultElement" v-for="item in allRecipes" v-bind:key="item.id" @click="selectRecipe(item)">
                <img class="img" v-bind:src="item.image" alt="">
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "selectedIngredient",
        data () {
            return {
                ingredient:{},
            }
        },
        mounted: function() {
            this.ingredient = this.$store.getters.getSelectedIngredient;
             this.$store.dispatch('searchRecipe', this.ingredient.aisle);
        },
        computed:{
            allRecipes: function () {
                return this.$store.getters.allRecipes;
            }
        },


    }
</script>

<style lang="scss" scoped>
    .container{
        margin-top: 5%;
        .ingredient{
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
