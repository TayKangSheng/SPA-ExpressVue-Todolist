<template lang="html">
  <main-layout>
    <h2>New Todo</h2>
    <form id="newTodo" action="/api/todos/new" method="post">
      <input type="text" name="todo[text]" v-model="text" placeholder="todo text">
      <br><br>
      <a href="/todos" class="btn btn-default">Back</a>
      <input type="submit" v-on:click.prevent="createTodo" class="btn btn-success">
    </form>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import page from 'page'

export default {
  components: {
    MainLayout
  },
  data: {
    text: ''
  },
  methods: {
    createTodo: function(){
      $.ajax({
        context: this,
        url: '/api/todos/new',
        type: 'POST',
        data: $('form#newTodo').serialize()
      }).done(function(data){
        page.redirect(`/todos/${data.id}`)
      })
    }
  }
}
</script>

<style>
</style>
