<template>
    <div class="custom-control custom-checkbox" id="question">
        <input type="checkbox" id="reponse1" value="reponse1" v-model="checkedRep">
        <label for="reponse1">reponse1</label>
        <input type="checkbox" id="reponse2" value="reponse2" v-model="checkedRep">
        <label for="reponse2">reponse2</label>
        <input type="checkbox" id="reponse3" value="reponse3" v-model="checkedRep">
        <label for="reponse3">reponse3</label>
        <br>

    </div>
</template>

<script>
    import Login from "@/views/Login";

    export default {
        name: "Questionnaire",
        el: 'question',
        data() {
            return {
                checkedRep: []
            }
        }

    }
</script>

<style scoped>

</style>