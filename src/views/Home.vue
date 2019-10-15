<template>
  <div class="mt-2 pt-5">

<b-list-group >
  <p>double click to remove a todo</p>
  <b-list-group-item  v-for="(list, key) in theList"  :key="key" @dblclick="remove(list.number)">{{list.text}}</b-list-group-item>

</b-list-group>

  </div>
</template>

<script>

export default {
  computed: {
    lists () {
      return this.$store.state.lists
    },
    theList () {
      if (this.lists.length < 1) {
        return [{ number: null, text: 'you dont have any more todos' }]
      } else {
        return this.lists
      }
    }
  },
  methods: {
    remove (id) {
      this.$store.dispatch('remove', id)
    }
  }

}
</script>
