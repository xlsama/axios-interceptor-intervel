<script setup>
import request from '@/utils/request'

const v1 = async () => {
  const { data } = await request.get('http://localhost:233/v1')
  console.log(data)
}

const v2 = async () => {
  const { data } = await request.get('http://localhost:233/v2')
  console.log(data)
}
</script>

<template>
  <button @click="v1">v1</button>
  <br />
  <br />
  <button @click="v2">v2</button>
</template>

<style>
body {
  text-align: center;
  margin-top: 200px;
}
</style>
