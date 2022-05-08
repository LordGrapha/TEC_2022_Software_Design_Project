<template>
    <div>
        <div>
            <button v-on:click="todos" style="margin: 10px" class="w-100 btn btn-lg btn-primary">Todos los estacionamientos</button>
        </div>        
        <div>
            <button v-on:click="funcionarios" style="margin: 10px" class="w-100 btn btn-lg btn-primary">Funcionarios de la institución</button>
        </div>        
        <div>
            <button v-on:click="estadistica" style="margin: 10px" class="w-100 btn btn-lg btn-primary">Estadistica franjas horarias</button>
        </div>        
        <div>
            <button v-on:click="funcionarios_cedula" style="margin: 10px" class="w-100 btn btn-lg btn-primary">Funcionario por cedula</button>
        </div>
    </div>

</template>


<script>
export default {
    data(){
        return{
            event: "click"
        }
    },
    methods:{
        todos: function (event) {
            alert('Todos los estacionamientos')
        },
        funcionarios: function (event) {
            alert('Funcionarios de la institución')
        }, 
        estadistica: function (event) {
            alert('Estadistica de franjas horarias')
        },  
        funcionarios_cedula: function (event) {
            alert('Funcionario por cédula')
        }                      
    }

}
</script>

<style>

</style>