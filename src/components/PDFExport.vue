<template>
    <div class="center">
        <vs-button v-on:click="createPDF">Export to PDF</vs-button>
    </div>
</template>

<script>
    import jsPDF from 'jspdf'

    export default {
        name: 'PDFExport',
        props: {
            pdfText: String
        },
        methods: {
            createPDF() {
                let pdfName = 'test';
                var doc = new jsPDF();
                doc.text(this.pdfText, 10, 10);
                doc.save(pdfName + '.pdf');
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

    p {
        margin: 10px 10px 10px 10px;
    }

</style>
