<script setup>
import { reactive } from 'vue';

  const estado = reactive({
    num1: '',
    num2: '',
    resultado: '',
    operacao: 'adição',
  })

  const setResultado = () => {
    const { operacao } = estado;
    
    switch (operacao) {
      case 'adição':
        estado.resultado = estado.num1 + estado.num2;
        break
      case 'subtração':
        estado.resultado = estado.num1 - estado.num2;
        break
      case 'multiplicação':
        estado.resultado = estado.num1 * estado.num2;
        break
      case 'divisão':
        estado.resultado = estado.num1 / estado.num2;
        break
    }
  }
</script>

<template>
  <div class="container my-5">
    <form >
      <div class="row">
        <div class="col">
          <label class="form-label" for="num1">Digite o 1º número:</label>
          <input @keyup="setResultado" v-model="estado.num1" class="form-control" type="number" id="num1">
        </div>
        <div class="col">
          <label class="form-label" for="num2">Digite o 2º número:</label>
          <input @keyup="setResultado" v-model="estado.num2" class="form-control" type="number" id="num2">
        </div>
        <div class="col">
          <label for="operacao" class="form-label">Operação:</label>
          <select v-model="estado.operacao" @change="setResultado" class="form-select" id="operacao">
            <option value="adição">Adição</option>
            <option value="subtração">Subtração</option>
            <option value="multiplicação">Multiplicação</option>
            <option value="divisão">Divisão</option>
          </select>
          {{ estado.operacao }}
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col">
        <h5 class="mt-4" id="resultado" >O resultado da {{ estado.operacao }} é {{ estado.resultado}}</h5>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

