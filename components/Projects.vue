<template>
    <div>
        <Project 
            v-for="projInfo in projectInfo[0].projects"
            :key="projInfo.id"
            :projectsSection="projInfo"
        />
        <!-- <Project 
            v-for="(projInfo, index) in projectInfo"
            :key="index"
            :projectsSection="projInfo"
        /> -->
    </div>
</template>

<script>
    import projects from '@/assets/js/data.js'
    export default {
        name: 'Projects',
        asyncData() {},
        data() {
            return {
                projectInfo: projects,
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
            // console.log(`Project Dat:\t`, this.projectInfo)
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
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
    }
</style>