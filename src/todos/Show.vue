<template lang="html">
  <main-layout>
    <h2> Todo {{ this.id }} </h2>
    <p class="well"> {{ todo.text }} </p>
    <a href="/todos" class="btn btn-default">Back</a>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'

export default {
  props: ['id'],
  created: function(){
    /* Do Ajax to /api/todos replace todolist here */
    var self = this
    $.ajax("/api/todos/"+self.id, {
      context: this,
      dataType: "json"
    }).done(function(data){
      self.todo = data
    })
  },
  data: function(){
    return {
      todo: {}
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style lang="css">
</style>
