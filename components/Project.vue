<template>
    <section>
        <div @mouseover="backgroundUp()" @mouseleave="backgroundDown()" class="background"></div>
        <img  :src="require(`~/assets/svg/${projectsSection.image}`)" alt="" />
        <div @mouseover="backgroundUp()" @mouseleave="backgroundDown()"  class="container">
            <h3 class="title">{{ projectsSection.title }}</h3>
            <h4 class="subtitle">
                <span
                    v-for="(langs, index) in projectsSection.subtitle"
                    :key="index"
                    >
                    {{langs}},&thinsp;
                </span>
            </h4>
            <p class="para">{{ projectsSection.para }}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Project',
        props: ['projectsSection'],
        asyncData() {},
        data() {
            return {
                hover: false,
            }
        },
        fetch() {},
        computed: {
        },
        async beforeCreate() {
            },
        created() {
            },
        beforeMount() {
            this.$el.children[1].addEventListener(`mouseenter`, this.hoverMe)
        },
        mounted() {
            // console.log(`Project:\t`, this.hover)
            // console.log(`\nFinder:\n`, this.$el.children)
            // console.log(this.hoverMe())

        },
        beforeUpdate() {},
        updated() {},
        beforeDestroy() {},
        destroyed() {},
        methods: {
            // hoverMe() {
            //     while (this.hover) {
            //         console.log(`\nTrue\n`)
            //     }
            //     console.log(`Hi`)
            //     console.log(this)
            //     return true;
            // },
            backgroundUp() {
                this.$el.children[0].style.opacity = 0.7;
                this.$el.children[0].style.zindex = 0;
                this.$el.children[2].style.transform = "translateY(0%)";
                this.$el.children[2].style.zindex = "15";
                this.$el.children[1].style.filter = "blur(5px)";
                this.$el.children[1].style.tranform = "scale(1.07)"
            },
            backgroundDown() {
            this.$el.children[0].style.opacity = 0;
            // this.$el.children[0].style.zindex = 0;
            this.$el.children[2].style.transform = "translateY(175%)";
            this.$el.children[2].style.zindex = "15";
            this.$el.children[1].style.filter = "blur(0px)";
            this.$el.children[1].style.tranform = "scale(1.0)"
        }

        },
        
    }
</script>

<style lang="scss" scoped>
    section {
        // padding: 48px 0px;
        margin-bottom: 48px;
        width: 100%;
        max-width: 1200px;
        // background-color: red;
        position: relative;
        border-radius: 24px;
        overflow: hidden;
        box-shadow: 0 20px 80px 0 rgba(0,0,0,0.45);
        img {
            width: 100%;
            transition: all 450ms ease;
        }
        .container {
            position: absolute;
            background-color: transparent;
            top: 50%;
            left: 90px;
            transform: translateY(175%);
            max-width: 550px;
            z-index: 15;
            transition: all 450ms ease;
            @media (max-width: 800px) {
                text-overflow: ellipsis;
                left: 8px;
                margin-top: 4px;
            }
            & .title, .subtitle, .para {
                color: whitesmoke;
                text-align: start;
            }
            & .title {
                font-size: 40px;
                @media (max-width: 800px) {
                    font-size: 24px;
                }
            }
            & .subtitle {
                margin: 8px 0;
                @media (max-width: 800px) {
                    margin: 0;
                }
            }
            & .para {
                margin: 16px 0;
                color: whitesmoke;
                z-index: 15;
                @media (max-width: 800px) {
                    margin: 0;
                    text-overflow: ellipsis;
                }
            }
        }
        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: $charcoal;
            z-index: 10;
            opacity: 0;
            transition: opacity 300ms, transform 450ms ease;
            // &:hover {
            //     opacity: 0.7;
            // }
            // &:hover + .description {
            //     transform: translateY(-50%);
            // }
            // &:hover + img {
            //     transform: scale(1.07);
            //     filter: blur(5px);
            // }
        }


    }
</style>