<template>
    <div>
        <vs-button class="center" v-on:click="createPDF" type="line" size="large" icon="get_app">Print as PDF</vs-button>
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

</style>
