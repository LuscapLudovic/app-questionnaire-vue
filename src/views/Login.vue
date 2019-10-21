<template>
    <div class="homeLogin">
        <form>
            <div class="form-label-group">
                <input type="nom" id="inputNom" v-model="utilisateur.nom" class="form-control" placeholder="nom" required="" autofocus="">

                <input type="nom" id="inputPrenom" v-model="utilisateur.prenom" class="form-control" placeholder="prenom" required="" autofocus="">

                <input type="entreprise" id="inputEntreprise" v-model="utilisateur.entreprise" class="form-control" placeholder="entreprise" required="" autofocus="">
            </div>
            <button v-if="utilisateur" class="btn btn-lg btn-primary btn-block" type="submit" @click.once="submit">Connexion</button>
        </form>
    </div>
</template>

<script>
    import Questionnaire from "@/views/Questionnaire";

    export default {
        name: "login",
        props: {
            msg : String
        },
        data() {
            return {
                utilisateur : {
                    nom : "",
                    prenom : "",
                    entreprise : ""
                }
            }
        },
        methods : {
            submit() {
                this.$router.push({name: 'questionnaire', params: {Questionnaire: "questionnaire"}});
            }
        },
        // mise en place portée globale information utilisateur. //////////////////
        submit: function(){
          this.$emit("inputData", this.utilisateur);
          this.utilisateur = utilisateur.prenom;
        }
        // pas encore fonctionnel ///////////////////////////////
    }
</script>

<style scoped>
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
    }
    .homeLogin{
        width: 400px;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
    }
    .form-label-group{
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>