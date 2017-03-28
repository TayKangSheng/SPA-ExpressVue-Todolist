<template>
  <main-layout>
    <div>
      <h1 v-if="flash!==''"> Flash: {{ flash }} </h1>
      <h2> Todo List <a class="btn btn-default" href="/todos/new" style="float:right;">New</a></h2>
      <div class="well" v-for="(value,key) in todolist">
        <h4>id: {{ key }}</h4>
        <h6>{{ value.text }}</h6>
        <a class="btn btn-default" v-bind:href="'/todos/'+key">Show</a>
        <a class="btn btn-default" v-on:click="deleteTodo(key)">Delete</a>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    created: function(){
      /* Do Ajax to /api/todos replace todolist here */
      $.ajax("/api/todos", {
        context: this,
        dataType: "json"
      }).done(function(data){
        this.todolist = data
      })
    },
    data: function(){
      return {
        todolist: [],
        flash: ''
      }
    },
    components: {
      MainLayout
    },
    methods: {
      deleteTodo: function(id){
        console.log('delete')
        // this.flash = "delete"
        $.ajax({
          context: this,
          url: '/api/todos/'+id,
          type: 'DELETE'
        }).done(function(data){
          this.flash = "Deleted"
          this.getTodos()
        })
      },
      getTodos: function(){
        $.ajax("/api/todos", {
          context: this,
          dataType: "json"
        }).done(function(data){
          this.todolist = data
        })
      }
    }
  }
</script>

<style>
</style>
