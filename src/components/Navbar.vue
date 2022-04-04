<template>
    <div class="nav">
        <div class="logoApp">
            <router-link to="/">🎮🗯 GameOpinion</router-link>
        </div>
        <div class="burguer"><a class="burguer-anchor" href="#" @click="menuAnimation">🍔</a></div>
        <nav>
            <router-link to="/">🏠Home</router-link> |
            <router-link to="/opinion">💬Opiniones</router-link> |
            <router-link to="/admin">📃Administracion</router-link> 
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods:{
        menuAnimation(){
            
        }
    }
}
</script>

<style >
.nav{
    background: #292929;
    color: #c7c7c7;
    padding: 20px 40px;
    margin-bottom: 30px;
}

.burguer{
    display: none;
}

.logoApp a{
    text-decoration: none;
    color: #c7c7c7;
    font-weight: bold;
    font-size: 20px;
}

.nav nav {
    margin-left: auto;
}

.nav nav a {
    color: #c7c7c7;
    text-decoration: none;
}

@media (min-width: 230px) and (max-width: 650px){
    .logoApp {
        margin: auto;
        text-align: center;
        margin-bottom: 7px;
    }
    .nav {
        width: 100%;
        padding: 20px 0;
    }

    .nav nav {
        width: 100%;
    }
}
</style>