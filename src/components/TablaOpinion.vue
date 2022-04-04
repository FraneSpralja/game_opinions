<template>
    <div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="opinion.opinion.id">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <p>
                        Opinión creada por <strong> {{opinion.opinion.autor.name}} </strong> para el juego <strong> {{opinion.juegos.name}} </strong>
                    </p>
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" :aria-labelledby="opinion.opinion.id" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>
                            <strong>Opinion:</strong> {{opinion.opinion.opinion}}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'TablaOpinion',
    props:["opinion",]
}
</script>

<style>

</style>