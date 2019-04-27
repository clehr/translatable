<template>
    <div class="center">
        <h2>Translator</h2>

        <br>
        <vs-button v-on:click="translate">Translate (Enter)</vs-button>
        <br>
        <br>
        <div class="dropdown">
            <vs-dropdown>
                <a class="a-icon" href="#">
                    Source language
                    <vs-icon class="" icon="expand_more"></vs-icon>
                </a>

                <vs-dropdown-menu class="menu">
                    <vs-dropdown-item v-for="language in languages" v-bind:key="language.name"
                                      v-on:click="setSourceLanguage">
                        {{language.name}}
                    </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>
        </div>

        <vs-input :label-placeholder=sourceLanguage v-model="textToTranslate" @keyup.enter="translate"/>
        <br>

        <div class="dropdown">
            <vs-dropdown>
                <a class="a-icon" href="#">
                    Target language
                    <vs-icon class="" icon="expand_more"></vs-icon>
                </a>

                <vs-dropdown-menu class="menu">
                    <vs-dropdown-item v-for="language in languages" v-bind:key="language.name"
                                      v-on:click="setTargetLanguage">
                        {{language.name}}
                    </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>
        </div>
        <vs-input :label-placeholder=targetLanguage v-model="translatedText" @keyup.enter="translate"/>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Translator',
        data() {
            return {
                textToTranslate: '',
                translatedText: '',
                languages: [{name: "German", locale: "de"},
                    {name: "French", locale: "fr"},
                    {name: "Spanish", locale: "es"},
                    {name: "Chinese", locale: "zh"},
                    {name: "Portuguese", locale: "ps"}],
                sourceLanguage: '',
                targetLanguage: '',
            }
        },
        methods: {
            translate: function () {
                let sourceLocale = this.languages.find(language => this.sourceLanguage === language.name).locale;
                let targetLocale = this.languages.find(language => this.targetLanguage === language.name).locale;
                let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLocale}&tl=${targetLocale}&dt=t&q=${this.textToTranslate}`;
                axios.get(url)
                    .then(response => {
                        this.translatedText = response.data[0][0][0]
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            },
            setSourceLanguage: function (event) {
                this.sourceLanguage = event.target.innerText
            },
            setTargetLanguage: function (event) {
                this.targetLanguage = event.target.innerText
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

    .dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .a-icon {
        outline: none;
        text-decoration: none !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    i {
        font-size: 18px;
    }
    .menu {
        width:100px;
    }

</style>
