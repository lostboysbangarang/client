<template>
    <div class='container'>
        <button @click="peekAboo = !peekAboo" class="mailBtn click">
            <img :src="require(`~/assets/svg/mail.svg`)" alt="">
        </button>
        <transition name="LtoR" appear>
            <div v-if="peekAboo" class="modal">
                <div class="modalHalf about">
                    <h3 class="title">
                        A bit about me:
                    </h3>
                    <h4 class="subtitle">
                        Full-Stack Web Dev
                    </h4>
                    <p class="para">
                        I am a 25 year old American <span>Full-Stack Website Developer</span> with a strong passion for
                        developing websites with great <span>user experiences</span>.
                        <br>    <br>
                        I currently take on any <span>coding bootcamps</span> that I can to learn
                        how to solve extremely difficult, and complex problems to the best of my abilities.
                        <br>    <br>
                        I hope this site does it's best to impress you;
                        <br>
                        For I am a <span>Wizard</span> and this keyboard <span>My Staff</span>.

                    </p>
                    <div class="languages">
                        <figure>
                            <img class="HTML" :src="require(`~/assets/svg/html5.svg`)" alt="">
                            <span class="name">
                                HTML
                            </span>
                        </figure>
                        <figure>
                            <img class="CSS" :src="require(`~/assets/svg/css.svg`)" alt="">
                            <span class="name">
                                SCSS/SASS
                            </span>
                        </figure>
                        <figure>
                            <img class="js" :src="require(`~/assets/svg/js.svg`)" alt="">
                            <span class="name">
                                JavaScript
                            </span>
                        </figure>
                        <figure>
                            <img class="Node" :src="require(`~/assets/svg/node-js.svg`)" alt="">
                            <span class="name">
                                Node.js
                            </span>
                        </figure>
                        <figure>
                            <img class="vue" :src="require(`~/assets/svg/vuejs.svg`)" alt="">
                            <span class="name">
                                Vue.js
                            </span>
                        </figure>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="RtoL">
            <div v-if="peekAboo" class='modal'>
                <div class="modalHalf contact">
                    <img class="exit click" onclick="toggleModal()" title="Exit Portal" :src="require(`~/assets/svg/exit.svg`)" alt="">
                    <h3 class="title titleContact">
                        Let's have a chat!
                    </h3>
                    <h4 class="subtitle subContact">
                        I'm currently open to new opportunities.
                    </h4>
                    <form onsubmit="contact(event)" class="contactForm">
                        <div class="item">
                            <label class="label">Name</label>
                            <input type="text" class="input" name="user_name" required></input>
                        </div>
                        <div class="item">
                            <label class="label">Email</label>
                            <input type="email" class="input" name="user_email" required></input>
                        </div>
                        <div class="item">
                            <label class="label">Message</label>
                            <textarea type="text" class="input" name="message" required></textarea>
                        </div>
                        <button class="formSubmit button" id="contactSubmit">Send it my way</button>
                    </form>
                    <div class="overlay loading">
                        <img :src="require(`~/assets/svg/spinner.svg`)" alt="">
                    </div>
                    <div class="overlay success">
                        Thanks for the message!
                        <br>    <br>
                        It will be sent to my email via jQuery magic.
                        <br>    <br>
                        I look forward to speaking with you soon!
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'ContactModal',
        asyncData() {},
        data() {
            // var peekAboo = false;
            return {
                peekAboo: null,
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
            // console.log(this.$el.children);
            // this.peekAboo();
            this.curtains()
        },
        beforeUpdate() {},
        updated() {},
        beforeDestroy() {},
        destroyed() {},
        methods: {
            curtains() {
                console.log(`\n\tCurtains\n\n`)
                console.log(this.$el.children)
            }
            // peekAboo(open) {
            //     console.log(this.$el.children[0])
            //     if (!open) {
            //         this.$el.children[0].style.class = "modal open"
            //         this.open = !open;
            //     } else {
            //         this.$el.children[0].style.class = "modal"
            //         this.open = !open;
            //     }
            // }
        },
    }
</script>

<style lang="scss" scoped>

    .container {
        height: 0px;
    }
    .LtoR-enter-active, .LtoR-leave-active {
        transition: all 1500ms;
    }
    .LtoR-enter, .LtoR-leave-to {
        transform: translateX(-150%) translateY(-135%) !important;

    }
    .RtoL-enter-active, .RtoL-leave-active {
        transition: all 1500ms;
    }
    .RtoL-enter, .RtoL-leave-to {
        transform: translateX(150%) translateY(-135%) !important;

    }
    .mailBtn {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: none;
        background-color: whitesmoke;
        cursor: pointer;
        // position: sticky;
        & img {
            width: 48px;
            height: auto;
            // filter: invert(100%) sepia(98%) saturate(18%) hue-rotate(24deg) brightness(105%) contrast(100%);
            filter: invert(11%) sepia(47%) saturate(4502%) hue-rotate(305deg) brightness(86%) contrast(98%);
        }
        position: fixed;
        bottom: 32px;
        right: 40px;
        @media (max-width: 800px) {
            width: 56px;
            height: 56px;
            right: 32px;
        }
    }
    .modal {
        position: relative;
        top:    0%;
        left:   0%;
        z-index: 25;
        transform: translate(11.25%, -135%);
        width: 90%;
        max-width: 1200px;
        height: 720px;
        // visibility: hidden;
        border-radius: 24px;
        // overflow: hidden;
        display: flex;
        // z-index: -1;
        // transition: all 800ms ease;
        // @media (max-width: 800px) {
        //     display: flex;
            
        // }
        &Half {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            // transition: all 300ms ease-in;
            // @media (max-width: 800px) {
            //     flex-direction: row;
            // }
        }
        & .about {
            background-color: rgb(245, 245, 245);
            display: flex;
            flex-direction: column;
            // transform: translateX(-150%);
            & h3 {
                font-size: 32px;
            }
            & h4 {
                font-size: 16px;
                margin: 16px 0 24px 0;
            }
            & .para {
                margin: 40px 16px;
                & span {
                    color: #E36414;
                    font-weight: 800;
                }
                & br {
                    margin: 24px 0;
                }
            }
            & .languages {
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
                & figure {
                    // width: 20%;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    & img {
                        height: 72px;
                        width: auto;
                    }
                    & .HTML {
                        filter: invert(15%) sepia(75%) saturate(6859%) hue-rotate(344deg) brightness(60%) contrast(103%);
                    }
                    & .CSS {
                        filter: invert(22%) sepia(95%) saturate(402%) hue-rotate(145deg) brightness(91%) contrast(95%);
                    }
                    & .js {
                        filter: invert(67%) sepia(68%) saturate(2607%) hue-rotate(342deg) brightness(99%) contrast(98%);
                    }
                    & .Node {
                        filter: invert(9%) sepia(31%) saturate(7347%) hue-rotate(307deg) brightness(93%) contrast(96%);
                    }
                    & .vue {
                        filter: invert(20%) sepia(58%) saturate(5950%) hue-rotate(155deg) brightness(98%) contrast(88%);
                    }
                    & .name {
                        position: absolute;
                        bottom: -16px;
                        transform: scale(0);
                        transition: all 300ms ease;
                    }
                    &:hover .name {
                        transform: scale(1);
                    }
                }
            }
        }
        & .contact {
            background-color: $charcoal;
            color: white;
            display: flex;
            flex-direction: column;
            // justify-content: center;
            // transform: translateX(10vw);
            align-items: center;
            position: relative;
            transform: translate(100%, -100%);
            & .title, .subtitle {
                color: white;
            }
            & .title {
                font-size: 32px;
            }
            & .subtitle {
                font-size: 16px;
                margin: 16px 0 24px 0;
            }
            & .contactForm {
                width: 72%;
                & input, textarea {
                    width: 100%;
                    background-color: $charcoal;
                    color: white;
                    outline: none;
                    border: 1px solid whitesmoke;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    height: 40px;
                    // transition: all 300ms ease;
                }
                & textarea {
                    resize: vertical;
                    height: 104px;
                    margin-top: 16px;
                }
                & label {
                    font-size: 14px;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
                & .item {
                    margin-bottom: 24px;
                }
                & input:hover, textarea:hover {
                    border-color: $blue;
                }
                & input:focus, textarea:focus {
                    border-color: $buttonII;
                }
                & button {
                    font-size: 16px;
                    font-weight: 600;
                    position: relative;
                    display: inline-block;
                    cursor: pointer;
                    outline: none;
                    border: 0;
                    background: $buttonI;
                    color: whitesmoke;
                    vertical-align: middle;
                    text-decoration: none;
                    border-radius: .75em;
                    &.button {
                        padding: 1.25em 2em;
                        // @media (max-width: 800px) {
                        //     padding: .25em 1em;
                        // }
                        line-height: 1.5;
                        border: 2px solid $buttonIV;
                        transform-style: preserve-3d;
                        transition: transform 150ms cubic-bezier(0, 0, .58, 1), background 150ms cubic-bezier(0, 0, .58, 1);
                        &::before {
                            position: absolute;
                            content: "";
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: $buttonIV;
                            border-radius: inherit;
                            box-shadow: 0 0 0 2px $buttonIV, 0 .625em 0 0 $buttonI;
                            transform: translate3d(0, .75em, -1em);
                        }
                        &:hover {
                            background: $buttonII;
                            transform: translate(0em, .25em);
                            &::before {
                                box-shadow: 0 0 0 2px $buttonIV, 0 .5em 0 0 $buttonI;
                                transform: translate3d(0, 0.5em, -2em);
                            }
                        }
                        &:active {
                            background: $buttonII;
                            transform: translate(0em, 0.75em);
                            &::before {
                            box-shadow: 0 0 0 2px $buttonIV, 0 .25em 0 0 $buttonI;
                            transform: translate3d(0, 0.25em, -1em);
                            
                            }
                        }
                    }
                }
            }
            & .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: none;
                justify-content: center;
                align-items: center;
                &.loading {
                    background-color: #202020;
                    z-index: -1;
                    & img {
                        height: 104px;
                        width: auto;
                        filter: invert(100%) sepia(98%) saturate(18%) hue-rotate(24deg) brightness(105%) contrast(100%);
                        animation: loading 1600ms infinite linear;
                    }
                }
                &.success {
                    background-color: $blue;
                    font-size: 40px;
                    text-align: center;
                    padding: 12px;
                    line-height: 1.25;
                    z-index: -1;
                }
            }
            & .exit {
                position: absolute;
                top: 30px;
                right: 40px;
                filter: invert(50%) sepia(84%) saturate(3067%) hue-rotate(355deg) brightness(93%) contrast(92%);
                height: 40px;
                width: auto;
                z-index: 100;
            }
        }
        
    }
</style>