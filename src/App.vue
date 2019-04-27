<template>
    <div id="app">
        <Heading class="margin-bottom"/>
        <TextArea @inputData="onTextAreaComponentChange"/>
        <PDFExport :pdfText=this.pdfText />
        <Translator class="margin-bottom margin-top"/>
        <hr>
        <Phases class="margin-bottom margin-top"/>
    </div>
</template>

<script>
    import TextArea from './components/TextArea.vue'
    import Translator from "./components/Translator";
    import Heading from "./components/Heading";
    import Phases from "./components/Phases";
    import PDFExport from "./components/PDFExport";

    export default {
        name: 'app',
        components: {
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
        margin-left: 42%;
        margin-right: 40%;
        margin-bottom: 4%;
    }
</style>
