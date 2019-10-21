<template>
    <div class="custom-control custom-checkbox question" id="question">
        <input type="checkbox" id="reponse1" value="reponse1" v-model="checkedRep">
        <label for="reponse1">reponse1</label>
        <br>
        <input type="checkbox" id="reponse2" value="reponse2" v-model="checkedRep">
        <label for="reponse2">reponse2</label>
        <br>
        <input type="checkbox" id="reponse3" value="reponse3" v-model="checkedRep">
        <label for="reponse3">reponse3</label>
        <br>
    </div>
</template>

<script>

    import Login from "@/views/Login";
    export default {
        name: "Questionnaire",
        components: {Login},
        data() {
            return {
                checkedRep: []
            }
        }
    }

</script>

<style scoped>
    .question{
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;
    }
</style>