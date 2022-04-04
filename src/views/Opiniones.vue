<template>
    <div class="opinion">
        <h1>Esto es Opiniones</h1>
        <hr>
        <div v-if="getJuegosEnOpiniones != 0">
            <div v-for="(opinion, i) in getJuegosEnOpiniones" :key="i">
                <TablaOpinion :opinion="opinion"  />
            </div>
        </div>
        <div v-else>
            No existen opiniones
        </div>
    </div>
</template>

<script>
import TablaOpinion from '@/components/TablaOpinion.vue';
import {mapGetters} from "vuex";
export default {
    components:{
        TablaOpinion,
    },
    computed:{
        ...mapGetters(["getJuegosEnOpiniones",])
    }
}
</script>

<style>
.opinion{
    height: 100vh;
}
</style>