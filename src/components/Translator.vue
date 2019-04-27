<template>
    <div class="center">
        <h2>Translator</h2>
        <vs-input label-placeholder="German" v-model="textToTranslate"/>
        <vs-input label-placeholder="French" v-model="translatedText"/>
        <br>
        <vs-button v-on:click="translate">Translate</vs-button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Translator',
        data() {
            return {
                textToTranslate: '',
                translatedText: ''
            }
        },
        methods: {
            translate: function () {
                let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=fr&dt=t&q=${this.textToTranslate}`;
                axios.get(url)
                    .then(response => {
                        this.translatedText = response.data[0][0][0]
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
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
