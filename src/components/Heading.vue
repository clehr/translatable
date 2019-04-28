<template xmlns:v-touch="http://www.w3.org/1999/xhtml">
    <div>
        <h2>{{tapText}}</h2>

        <span v-touch:tap="tapHandler">Tap Me</span>

    </div>
</template>

<script>
    export default {
        name: 'Heading',
        data() {
            return {
                tapText: 'Welcome'
            }
        },
        methods: {
            tapHandler() {
                this.tapText = 'Tap worked'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
