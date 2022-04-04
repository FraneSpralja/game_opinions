import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {

        juegos: [],
        opiniones: [],

    },

    getters: {
        getJuegosEnOpiniones(state) {
            const { juegos, opiniones } = state;
            const getFullData = [];
            opiniones.forEach(opinion => {
                const juegoRelacionadoConLaOpinion = juegos.find((juego) => {
                    return juego.id === opinion.idJuego
                });

                const juegosYOpiniones = {
                    opinion: {...opinion },
                    juegos: {...juegoRelacionadoConLaOpinion },
                };

                getFullData.push(juegosYOpiniones);
            });

            return getFullData;
        },

        get_OpinionById: (state) => (id) => {
            const { opiniones } = state;
            const opinion = opiniones.find((o) => o.id == id);
            return opinion;
        }

    },

    mutations: {
        SET_JUEGOS(state, juegos) {
            state.juegos = juegos;
        },

        AGREGAR_OPINION(state, opinion) {
            state.opiniones.push(opinion);
        },

        ELIMINAR_OPINION_DE_LA_TABLA(state, indice) {
            state.opiniones.splice(indice, 1);
        },

        EDITAR_OPINION(state, { indice, opinion }) {
            const opiniones = [...state.opiniones];
            opiniones[indice] = opinion;
            state.opiniones = opiniones;

        }
    },

    actions: {
        agregar_Opiniones({ commit }, opinion) {
            commit("AGREGAR_OPINION", opinion);
        },

        async get_Juegos({ commit }) {
            const url = '/games.json';
            const response = await axios.get(url);
            console.log(response);
            const { data: juegos } = response;
            let crearIdAleatorioPorJuego = juegos.map((e) => `JJ${Math.floor(Math.random()*999)}`);
            for (let i = 0; i < juegos.length; i++) {
                juegos[i].id = crearIdAleatorioPorJuego[i]
            }
            commit("SET_JUEGOS", juegos);
        },

        eliminar_Opinion_De_La_Tabla({ commit, state }, id) {
            const { opiniones } = state;
            const indiceDeLaOpinion = opiniones.findIndex((o) => o.id === id);

            commit("ELIMINAR_OPINION_DE_LA_TABLA", indiceDeLaOpinion)
        },
        editar_Opinion({ commit, state }, opinion) {
            const { opiniones } = state;
            const { id } = opinion;

            const indiceDeLaOpinion = opiniones.findIndex((o) => o.id === id);

            commit("EDITAR_OPINION", { indice: indiceDeLaOpinion, opinion });
        },
    },

    modules: {}
});

store.dispatch("get_Juegos")

export default store;