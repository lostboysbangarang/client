<template>
    <header>
        <nav class="container" id="navBar">
            <div class="container" id="mini">
                <div v-show="!mobile" class="logo">
                    <img src='~assets/svg/logo.svg' alt='logo' class='svg logo'>
                </div>
                <div v-show="mobile" class="logo mobile">
                    <img src='~assets/svg/logo.svg' alt='logo' class='svg logo'>
                </div>
                <div class="nav-links" v-if="!mobile">
                    <ul>
                        <li class="link">
                            <nuxt-link class="link__hover-effect" to='/'>.About()</nuxt-link>
                        </li>
                        <li class="link">
                            <nuxt-link class="link__hover-effect" to='/'>.Projects()</nuxt-link>
                        </li>
                        <li class="link">
                            <nuxt-link class="link__hover-effect" to='/'>.Contact()</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link class="link__hover-effect" to='/'>.Login()/.Register()</nuxt-link>
                        </li>
                        <li class="adjust">
                            <img class='svg' src="~assets/svg/adjust.svg" alt="" @click="colorSwitch(this)">
                        </li>
                    </ul>
                </div>
                <div v-if="mobile" @click="toggleMobileNav">
                    <img v-if="mobile && !mobileNav" class='svg icon' :src="require('assets/svg/blinds-raised.svg')" alt="">
                    <img v-else class='svg icon' :src="require('assets/svg/blinds.svg')" alt="">
                </div>
                <!-- <div @click="toggleMobileNav" v-else>
                </div> -->
                <!-- <div class="menu">
                    <div class="icon">
                    </div>
                </div> -->
                <transition name="nav-links">
                    <div class="nav-links" id="mobile" v-if="mobile && mobileNav">
                        <ul>
                            <li class="adjust">
                                <img class='svg' src="~assets/svg/adjust.svg" alt="">
                            </li>
                            <li class="link">
                                <nuxt-link class="link__hover-effect" to='/'>.About()</nuxt-link>
                            </li>
                            <li class="link">
                                <nuxt-link class="link__hover-effect" to='/'>.Projects()</nuxt-link>
                            </li>
                            <li class="link">
                                <nuxt-link class="link__hover-effect" to='/'>.Contact()</nuxt-link>
                            </li>
                            <li class="link">
                                <nuxt-link class="link__hover-effect" to='/'>.Login()/.Register()</nuxt-link>
                            </li>
                        </ul>
                        <!-- <div class="nav-links">
                        </div> -->
                    </div>
                </transition>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Nav',
        asyncData() {},
        data() {
            
            return {
                mobile: null,
                mobileNav: false,
                windowWidth: null,
                navHeight: null,
                navH : { navHeight: null, },
                
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
            window.addEventListener('resize', this.checkScreen);
            this.checkScreen();
            // this.navTall();
            
            
            
        },
        mounted() {
            // console.log(`Test:\t`, this.$el.offsetHeight)
            this.navTall();
            // console.log(`navHeight:\t`, this.navHeight)
        },
        beforeUpdate() {},
        updated() {},
        beforeDestroy() {},
        destroyed() {},
        methods: {
            checkScreen() {
                this.windowWidth = window.innerWidth;
                if(this.windowWidth <= 860) {
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
            },
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav;
                console.log(this.mobileNav)
            },
            navTall() {
                this.navHeight = this.$el.offsetHeight
            },
            colorSwitch() {
                let cooler = this.$el.parentElement.parentElement.className;
                // console.log(cooler)
                let elly= this.$el.parentElement.parentElement;
                switch(cooler) {
                    case 'dark-mode':
                        // console.log(elly.classList)
                        elly.classList.toggle('dark-mode');
                        // console.log(elly.classList)
                        elly.classList.toggle('light-mode');
                        // console.log(elly.classList)
                    break;
                    case 'light-mode':
                        elly.classList.toggle('light-mode');
                        elly.classList.toggle('dark-mode');
                    break;
                    
                }
            }
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
    .link__hover-effect {
        position: relative;
        &:after {
            content: "";
            position: absolute;
            bottom: -3px;
            height: 3px;
            width: 0;
            right: 0;
            background-color: var(--color-links);
            transition: all 300ms ease;
        }
        &:hover:after {
            left: 0;
            width: 100%;
        }
    }
    .link__hover-effect--dark {
        position: relative;
        &:after {
            content: "";
            position: absolute;
            bottom: -3px;
            height: 3px;
            width: 0;
            right: 0;
            background-color: #fafafa;
            transition: all 300ms ease;
        }
        &:hover:after {
            left: 0;
            width: 100%;
        }
    }
    header {
        opacity: 1;
        visibility: visible;
        transition: all 400ms ease;
        // position: absolute;
        // top: 0;
        // left: 0;
        .container {
            width: 100%;
            // height: 6vh;
            margin: 0 auto;
            padding-top: 12px;
            background-color: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
            
            #mini {
                max-width: 1200px;
                justify-content: space-between;
                .logo {
                    width: 42px;
                    height: auto;
                    img {
                        // filter: invert(78%) sepia(44%) saturate(5544%) hue-rotate(342deg) brightness(99%) contrast(99%);
                    }
                    &.mobile {
                        padding-left: 24px;
                    }
                }
                
                .nav-links {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    ul {
                        display: flex;
                        list-style: none;
                        li {
                            margin: 0 12px;
                            a {
                                text-decoration: none;
                                // color: $buttonI;
                                font-weight: 600;
                            }
                            img {
                                height: 90%;
                                // filter: invert(78%) sepia(44%) saturate(5544%) hue-rotate(342deg) brightness(99%) contrast(99%);
                            }
                        }
                    }
                    &#mobile {
                        padding: 24px;
                        padding-left: 4px;
                        width: 50%;
                        max-width: 240px;
                        display: flex;
                        flex-direction: column;
                        align-items: top;
                        justify-content: flex-start;
                        position: fixed;
                        height: 100%;
                        background-color: $charcoal;
                        top: 0;
                        left: 0;
                        z-index: 30;
                        ul {
                            flex-direction: column;
                            li {
                                &.link {
                                    padding-top: 16px;
                                }
                                img {
                                    width: 20%;
                                    height: auto;
                                }
                            }
                        }
                    }
                }
                img {
                    // margin: 0;
                    // padding: 0;
                    // height: inherit;
                    // display: flex;
                    // flex-direction: column;
                    &.icon {
                        height: 42px;
                        width: auto;
                        position: absolute;
                        top: 24px;
                        right: 24px;
                        cursor: pointer;
                        // filter: invert(78%) sepia(44%) saturate(5544%) hue-rotate(342deg) brightness(99%) contrast(99%);
                    }
                }
                // .menu {
                //     // background-color: #fafafa;
                //     margin-left: 12px;
                //     position: fixed;
                //     top: 0;
                //     right: 0;
                //     // display: flex;
                //     // justify-content: center;
                //     // align-items: center;
                //     height: 100%;
                    
                // }
    
            }
        }
    }
</style>