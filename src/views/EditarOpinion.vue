<template>
    <div class="edit">
        <h1>Editar Opinion</h1>
        <hr>
        <div class="form">
            <div class="form-box">
                <label>Nombre</label>
                <input v-model="opinionEditando.autor.name">
            </div>
            <div class="form-box">
                <label>Opinión</label>
                <textarea v-model="opinionEditando.opinion"></textarea>
            </div>
            <div class="form-box-button">
                <button class="button button-save" @click="EditarOpinionLocal">Guardar 👌🏻</button>
                <button class="button button-cancel">Cancelar ❌</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'EditarOpinion',
    data(){
        return{
            opinionEditando: {
                autor:{
                    name: "",
                },
                opinion: "",
            },
        }
    },
    props:["id",],
        methods:{
            ...mapActions(["editar_Opinion"]),
    
            EditarOpinionLocal(){
                const { opinion } = this;
                this.editar_Opinion(opinion);
                this.$router.push("/admin")
            }
        },
    computed:{
        ...mapGetters(["get_OpinionById"]),
        opinion(){
            const {id} = this;
            return {
                ...this.get_OpinionById(+id),
                autor: {...this.get_OpinionById(+id).autor}};
        }
    },
    mounted(){
        this.opinionEditando = this.opinion;
    }
}
</script>

<style scoped>
.edit{
    height: 100vh;
}

.form{
    width: 60%;
    margin: auto;
}

.form-box {
    display: flex;
    flex-flow: column;
    text-align: left;
    margin-bottom: 15px;
}

.form-box label{
    margin-bottom: 10px;
}

.form-box input {
    border: 1px solid #9c9c9c;
}

.form-box textarea {
    border: 1px solid #9c9c9c;
}

.form-box input, .form-box textarea {
    border-radius: 7px;
    padding: 3px 7px;
}

.form-box-button{
    display: flex;
    flex-flow: row;
}

.form-box-button button{
    margin: auto;
}

.button{
    border-radius: 25px;
    color: #fff;
    padding: 3px 15px;
}

.button-save{
    background: linear-gradient(180deg, #27bd0c, #147a02);
    border: 1px solid #27bd0c;
}

.button-cancel{
    background: linear-gradient(180deg, #c90101, #8e0000);
    border: 1px solid #c90101;
}
</style>