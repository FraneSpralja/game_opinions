<template>
        <tr>
            <th>
                {{opinion.opinion.id}}
            </th>
            <td>
                {{opinion.opinion.autor.name}}
            </td>
            <td>
                {{opinion.juegos.name}}
            </td>
            <td>
                {{opinion.opinion.opinion}}
            </td>
            <td>
                <button @click="eliminar_Opinion_De_La_Tabla(opinion.opinion.id)">❌</button>
            </td>
            <td>
                <button @click="irAEditarOpinion(opinion.opinion.id)">✏</button>
            </td>
        </tr>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: 'TablaAdministracion',

    props:["opinion",],

    methods:{
        ...mapActions(["eliminar_Opinion_De_La_Tabla",]),

        irAEditarOpinion(id){
            this.$router.push(`/editar-opinion/${id}`);
        }
    }
}
</script>

<style>

</style>