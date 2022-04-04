<template>
    <div>
        <div class="card">
            <img :src="juego.background_image" class="card-head">
            <div class="card-body">
                <h4 class="card-title">Título: {{juego.name}}</h4>
                <div class="card-text">
                    <div class="rating text-small">Rating: {{juego.rating}}</div>
                    <div class="date text-small">Released: {{juego.released}}</div>
                    <div class="update text-small">Update: {{juego.updated}}</div>
                </div>
            </div>
            <div class="card-button">
                <button 
                @click="juegoSelected = juego.id"
                data-bs-toggle="modal" :data-bs-target="`#${juego.id}`">
                💬 opinar
                </button>
            </div>
        </div>
        <!-- MODAL -->
        <div class="modal fade" :id="juego.id">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-body">
                    <h3>Agregar Opinion para: {{juego.name}}</h3>
                    <div class="form">
                        <div class="form-box">
                            <label>Nombre autor:</label>
                            <input v-model="opinion.autor.name">
                        </div>
                        <div class="form-box">
                            <label>Opinión</label>
                            <textarea cols="30" rows="7" v-model="opinion.opinion"></textarea>
                        </div>
                        <div class="form-box-button">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar ❌</button>
                            <button type="button" class="btn btn-primary" @click="agregarOpinion">Guardar ✔</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapMutations} from "vuex";

export default {
    name: "Juegos",
    data(){
        return{
            juegoSelected: null,
            opinion:{
                autor:{
                    name: "",
                },
                opinion: "",
            }
        }
    },

    methods:{
        ...mapMutations(["AGREGAR_OPINION"]),
        agregarIdAJuegos(){
            
        },

        agregarOpinion(){
            const { juegoSelected} = this;
            const opinion = {
                ...this.opinion};
            opinion.idJuego = juegoSelected;
            opinion.id = Math.floor(Math.random()*999);
            this.AGREGAR_OPINION(opinion);
        }
    },

    props:["juego"],

}
</script>

<style scoped>

.card {
    height: 444px;
    width: 250px;
    margin: 30px auto;
    border-radius: 10px;
    text-align: center;
}

.card-head {
    width: 249px;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.card-body {
    border-left: 1px solid #a5a5a5;
    border-right: 1px solid #a5a5a5;
}

.card-title {
    margin-top: 0;
    padding-top: 10px;
}

.rating, .date, .update {
    border-top: 1px solid #a5a5a5;
}

.update {
    border-bottom: 1px solid #a5a5a5;
}

.text-small {
    font-size: 13px;
    padding: 7px 0;
}

.card-button {
    padding: 7px 0;
    border-left: 1px solid #a5a5a5;
    border-right: 1px solid #a5a5a5;
    border-bottom: 1px solid #a5a5a5;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.card-button button{
    margin: 10px auto;
    padding: 5px 15px;
    background: linear-gradient(180deg, #8995fc, #3a46b1);
    color: #fff;
    border: 1px solid #8995fc;
    border-radius: 25px;
    box-shadow: 0 2px 4px #808080;
}

.form {
    padding: 10px;
    text-align: left;
}

.form-box {
    display: flex;
    flex-flow: column;
    margin-bottom: 10px;
}

.form-box-button{
    display: flex;
    flex-flow: row wrap;
}

.form-box-button button {
    margin: auto;
}

.form-box input, .form-box textarea {
    border: 1px solid #bdbdbd;
    border-radius: 10px;
}

</style>