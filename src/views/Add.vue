<template>
    <div class="mt-2 pt-4">
        <b-container fluid>
            <b-row class="my-1">
                <b-col sm="2">
                <label for="input-small">Small:</label>
                </b-col>
                <b-col sm="6">
                <b-form-input id="input-small" size="sm" placeholder="Add a todo" v-model="todo"></b-form-input>
                 <b-button variant="success" class="mt-2" @click="addTodo">Button</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo () {
      this.$store.dispatch('addTodo', this.todo)
    }
  }
}
</script>
