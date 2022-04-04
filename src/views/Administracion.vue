<template>
    <div class="admin">
        <h1>Esto es Administración</h1>
        <hr>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Autor
                        </th>
                        <th>
                            Juego
                        </th>
                        <th>
                            Opinión
                        </th>
                    </tr>
                </thead>
                <tbody v-for="(opinion, i) in getJuegosEnOpiniones" :key="i">
                    <TablaAdministracion :opinion="opinion" />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import TablaAdministracion from '@/components/TablaAdministracion.vue';
import { mapGetters } from "vuex";

export default {

components:{
    TablaAdministracion,
},

computed:{
    ...mapGetters(["getJuegosEnOpiniones"])
}

}
</script>

<style>
.admin{
    height: 100vh;
}
</style>