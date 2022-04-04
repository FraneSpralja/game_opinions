<template>
    <div>
        <h1>Últimos Video Juegos</h1>
        <hr>
        <Galeria />
    </div>
</template>

<script>
import Galeria from "@/components/Galeria.vue"
import {mapActions} from "vuex";

export default {
components:{
    Galeria,
},
methods:{
    ...mapActions(["get_Juegos"])
},

mounted(){
    this.get_Juegos()
}

}
</script>

<style>

</style>