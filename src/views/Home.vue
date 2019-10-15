<template>
  <div class="mt-2 pt-5">

<b-list-group>
  <b-list-group-item v-for="(list, key) in lists" :key="key" @dblclick="remove(list.number)">{{list.text}}</b-list-group-item>

</b-list-group>

  </div>
</template>

<script>

export default {
  computed: {
    lists () {
      return this.$store.state.lists
    }
  },
  methods: {
    remove (id) {
      this.$store.dispatch('remove', id)
    }
  }

}
</script>
