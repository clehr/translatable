<template>
    <div class="center">
        <h2>Translator</h2>
        <vs-input label-placeholder="German" v-model="value1"/>
        <vs-input label-placeholder="French" v-model="value2"/>
        <br>
        <vs-button v-on:click="translate">Translate</vs-button>
    </div>
</template>

<script>
    import {Vue} from "vue-axios";

    export default {
        name: 'Translator',
        data() {
            return {
                value1: '',
                value2: ''
            }
        },
        methods: {
            translate: function () {
                Vue.axios.get("https://api.predic8.de/shop/").then((response) => {
                    console.log(response.data)
                })
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

    div {
        margin-left: auto;
        margin-right: auto;
    }

</style>
