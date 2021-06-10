<template>
    <div class="loadContainer">
        <div class="loader">
            <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                    <div class="circle"></div>
                </div><div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "loader"
    }
</script>

<style scoped lang="scss" >
    .loadContainer{
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: dimgrey;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
