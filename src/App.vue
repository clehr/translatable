<template>
    <div id="app">
        <Heading class="margin-bottom"/>
        <TextArea @inputData="onTextAreaComponentChange"/>
        <PDFExport :pdfText=this.pdfText />
        <hr>
        <Translator class="margin-bottom margin-top"/>
        <hr>
        <Phases class="margin-bottom margin-top"/>
        <Impressum/>
    </div>
</template>

<script>
    import TextArea from './components/TextArea.vue'
    import Translator from "./components/Translator";
    import Heading from "./components/Heading";
    import Phases from "./components/Phases";
    import PDFExport from "./components/PDFExport";
    import Impressum from "./components/Impressum";

    export default {
        name: 'app',
        components: {
            Impressum,
            PDFExport,
            Phases,
            Heading,
            Translator,
            TextArea
        },
        data: function () {
            return {
                pdfText: ''
            };
        },
        methods: {
            onTextAreaComponentChange(value) {
                this.pdfText = value
            }
        }
    }
</script>

<style>
    html {
        background-color: #fdfdfd;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 40px;
    }

    .margin-bottom {
        margin-bottom: 30px;
    }

    .margin-top {
        margin-top: 20px;
    }

    .center {
        margin-left: 45%;
        margin-right: 45%;
        margin-bottom: 4%;
    }
</style>
