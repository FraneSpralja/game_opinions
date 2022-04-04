<template>
    <div>
        <div class="galeria">
            <div v-for="(juego, i) in juegos" :key="i">
                <Juegos :juego="juego" />
            </div>
        </div>
    </div>
</template>

<script>
import Juegos from './Juegos.vue';
import { mapState } from 'vuex';

export default {

name: 'Galeria',
components:{
    Juegos,
},

computed:{
    ...mapState(["juegos"]),
}

}
</script>

<style>

.galeria {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

@media (min-width: 265px) and (max-width: 780px) {
    .galeria {
        grid-template-columns: 1fr;
    }
}

</style>