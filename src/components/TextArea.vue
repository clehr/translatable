<template>
    <div>
        <vs-textarea v-on:change="changePDFText" v-model="pdfText" label="Enter the text you want to translate here" width="300px" height="500px"/>
    </div>
</template>

<script>
    export default {
        name: 'TextArea',
        data() {
            return {
                pdfText: ''
            }
        },
        methods: {
            changePDFText() {
                this.$emit("inputData", this.pdfText);
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
