<template>
  <q-page>
    <UsersTable
      :users="users"
      style="height: calc(100vh - 50px)"
    >
      <template #top-right>
        <MShowTutorialVideoButton
          class="q-mr-sm"
          title="Managing Users"
        />
      </template>
    </UsersTable>
  </q-page>
</template>

<script>
import UsersTable from 'components/UsersTable.vue'

export default {
  name: 'UsersPage',

  components: {
    UsersTable
  },

  data () {
    return {

    }
  },

  created () {
    this.$MUser.$get()
  },

  computed: {
    users () {
      return this.$MUser.all()
    }
  }
}
</script>
