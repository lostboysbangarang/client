<template>
    <div>
        <img class="shape shape0" src="~assets/svg/semi circle.svg" alt="">
        <img src="~assets/svg/circle.svg" alt="" class="shape shape1">
        <img src="~assets/svg/squiggly.svg" alt="" class="shape shape2">
        <img src="~assets/svg/circle.svg" alt="" class="shape shape3">
        <img src="~assets/svg/triangle.svg" alt="" class="shape shape4">
        <img src="~assets/svg/circle.svg" alt="" class="shape shape5">
        <img src="~assets/svg/squiggly.svg" alt="" class="shape shape6">
        <img src="~assets/svg/circle.svg" alt="" class="shape shape7">
        <img src="~assets/svg/semi circle.svg" alt="" class="shape shape8">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .shape {
        position: fixed;
        z-index: 0;
        @media (max-width: 800px) {
            display: none;
        }

    }
    .shape0 {
        top: 15vh;
        left: 5vw;
    }
    .shape1 {
        top: 15vh;
        left: 50vw;
    }
    .shape2 {
        top: 15vh;
        left: 80vw;
    }
    .shape3 {
        top: 50vh;
        left: 5vw;
    }
    .shape4 {
        top: 50vh;
        left: 50vw;
    }
    .shape5 {
        top: 50vh;
        left: 80vw;
    }
    .shape6 {
        top: 85vh;
        left: 5vw;
    }
    .shape7 {
        top: 85vh;
        left: 50vw;
    }
    .shape8 {
        top: 85vh;
        left: 80vw;
    }
</style>