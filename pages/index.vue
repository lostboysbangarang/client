<template>
    <body class="dark-mode">
        <div @mousemove="wheee" class="container">
            <Nav />
            <div class="body">
                <BodyIndex />
            </div>
            <div class='CM'>
                <ContactModal />
            </div>
            <div class="projects">
                <Projects />
            </div>
            <Shapes />
            <a href="#" class="scroll" v-scroll-to="{
                el: '.projects',
                container: 'body',
                offset: -80
                }">
                <div class="scrollIcon click"></div>
            </a>
        </div>        
    </body>
</template>

<script>
export default {
    name: 'Index',
    asyncData() {},
    data() {
        return {
            colors: ['system', 'light', 'dark']
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
        // console.log(this)
    },
    mounted() {    },
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    methods: {
        // fixHeight = () => {
        //     let height = this.$children[0].clientHeight;
        // }
        wheee(event) {
            const scaleFact = 1 / 20;
            const shapes = document.querySelectorAll(".shape");
            const shapesII = document.querySelectorAll(".shape");
            var xPos = event.clientX * scaleFact;
            var yPos = event.clientY * scaleFact;
            for (let i=0; i < shapes.length; i++) {
                const isOdd = i % 2 !==0;
                var oddInt;
                if (isOdd) {
                    oddInt = 1;
                } else {
                    oddInt = -1;
                }
                xPos = xPos * oddInt;
                yPos = yPos * oddInt;
                shapesII[i].style.transform = `translate(${xPos}px, ${yPos}px)`;
            }
        }
    },
}
</script>

<style lang="scss">
    // @use('@/assets/scss/vars.scss')
    .container {
        // background-color: #fafafa;
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: center;
        &.dark {
            background-color: $blue;
        }
        // .CM {
        //     display: flex;
        //     width: fit-content;
        //     height: fit-content;
        //     background-color: red;

        // }
        .scroll {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateY(-50%);
            &Icon {
                width: 20px;
                height: 30px;
                border: 2px solid var(--color-mouse);
                border-radius: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                &:after {
                        content: "";
                        width: 4px;
                        height: 6px;
                        background-color: var(--color-mouse);
                        border-radius: 2px;
                        animation: scroll 1000ms infinite alternate-reverse;

                }
            }
        }
    }
    
</style>