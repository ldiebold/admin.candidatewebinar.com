<template>
  <q-select
    v-bind="$attrs"
    v-on="$listeners"
    :options="options"
  />
</template>

<script>

export default {
  props: {

  },

  components: {

  },

  computed: {
    options () {
      const roles = ['candidate', 'ibo']

      if (this.$MUser.getSessionUser().role === 'super admin') {
        roles.push('admin', 'super admin')
      }

      return roles
    }
  },

  methods: {

  },

  data () {
    return {

    }
  }
}

</script>
