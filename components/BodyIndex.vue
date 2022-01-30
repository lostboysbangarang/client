<template>
    <div class="container">
        <header class="header">
            <div class="content">
                <h1 class="title">
                    Hej
                </h1>
                <h1 class="titleSecondary">
                    I'm Hayden
                </h1>
                <p class="headerP">
                    I'm a <b class="purp">Full-Stack Web Dev</b> with a strong passion for learning new languages and techniques. <br>
                    Here's a bit more <b onclick="toggleModal()" class="purp click">about me</b>.
                </p>
                <div class="socials">
                    <a href="" target="_blank" class="links click">
                        <img class="click svg" src="~assets/svg/github.svg" alt="">
                    </a>
                    <a href="" target="_blank" class="links click">
                        <img class="click svg" src="~assets/svg/linkedin.svg" alt="">
                    </a>
                    <a href="" target="_blank" class="links click">
                        <img class="click svg" src="~assets/svg/file-pdf.svg" alt="">
                    </a>
                    <a href="" target="_blank" class="links click">
                        <img class="click svg" src="~assets/svg/discord.svg" alt="">
                    </a>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue';
    export default {
        name: 'BodyIndex',

        components: {
            Nav
        },

        asyncData() {},
        data() {
            return {
                navHeight: null,
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
        },
        mounted() {
            // console.log(`test:\t`, Nav)
            // console.log(Nav)
            // this.navHeight = Nav.methods.navTall()
        },
        beforeUpdate() {},
        updated() {},
        beforeDestroy() {},
        destroyed() {},
        methods: {
        },
    }
</script>

<style lang="scss" scoped>

    // $purp: #5F0F40;
    // $charcoal: #303030;
    // $buttonI: #FB8B24;
    // $buttonII: #E36414;
    // $buttonIII: #9A031E;
    // $buttonIV: #5F0F40;
    // $blue: #0F4C5C;
    
    .container {
        opacity: 1;
        transition: all 400ms ease;
        visibility: visible;
        background-color: inherit;
        width: 100vw;
        height: calc(100vh - 77px);
        .header {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 1000px;
            & .title, .titleSecondary {
                font-size: 76px;
                margin-bottom: 12px;
                text-align: left;
                line-height: 1;
                @media (max-width: 800px) {
                    font-size: 40px;
                    margin-left: 16px;
                }
            }
            & .titleSecondary {
                color: var(--color-primary);
            }
            & .headerP {
                line-height: 2;
                font-size: 24px;
                max-width: 520px;
                color: var(--color);
                @media (max-width: 800px) {
                    font-size: 16px;
                    margin-left: 16px
                }
                b {
                    color: var(--color-primary);
                }
            }
            .socials {
                @media (max-width: 800px) {
                    margin-left: 16px;
                }
                & .links {
                    & img {
                        height: 32px;
                        width: auto;
                        margin-right: 8px;
                        // filter: var(--filter-primary);
                    }
                    text-decoration: none;
                }
            }
        }
        // &.dark {
        //     // background-color: inherit;
        //     .header {
        //         .title {
        //             color: whitesmoke;
        //         }
        //         .titleSecondary {
        //             color: $buttonII;
        //         }
        //         .headerP {
        //             color: whitesmoke;
        //             b {
        //                 color: $buttonII;
        //             }
        //         }
        //         .socials {
        //             a {
        //                 img {
        //                     filter: var(--filter);
        //                 }
        //             }
        //         }
        //     }
        // }
    }
</style>