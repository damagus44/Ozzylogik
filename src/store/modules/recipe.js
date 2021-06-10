import axios from 'axios'

export default {
    state: {
        recipes: [],
        selectedRecipe: {},
        selectedIngredient: {},
        showLoader: false
    },
    mutations: {
        updateRecipes: function (state, searchResult) {
            state.recipes = searchResult;
        },
        updateRecipe: function (state, recipe) {
            state.selectedRecipe = recipe;
        },
        updateIngredient: function (state, ingredient) {
            state.selectedIngredient = ingredient;
        },
        updateLoaderState: function (state, status) {
            state.showLoader = status;
        }

    },
    actions: {
        searchRecipe: function (ctx, search) {
            ctx.commit('updateLoaderState', true)
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=7f89970e72714da7a2b779f47e130551&ingredients='+search+'&number=10',
                headers: {'Content-Type': 'application/json'},
            }).then((data) => {
                const searchResult = data.data;
                ctx.commit('updateRecipes', searchResult)
                setTimeout(() => ctx.commit('updateLoaderState', false), 500);
            }, (err) => {
                console.log(err);
            })
        },
        selectRecipe: function (ctx, recipe) {
            ctx.commit('updateRecipe', recipe)
        },
        selectIngredient: function (ctx, ingredient) {
            ctx.commit("updateIngredient", ingredient)
        }
    },
    getters: {
        allRecipes: function(state){
            return state.recipes
        },
        getSelectedRecipe: function (state) {
            return state.selectedRecipe
        },
        getSelectedIngredient: function (state) {
            return state.selectedIngredient
        },
        getLoaderState: function (state) {
            return state.showLoader
        }
    }
}
