<template>
  <q-page>
    <MUsersTable
      style="height: calc(100vh - 50px)"
      fetch
      :role="$MUser.getSessionUser().role"
    >
      <template #top-right>
        <MShowTutorialVideoButton
          class="q-mr-sm"
          title="Managing Users"
        />
      </template>
    </MUsersTable>
  </q-page>
</template>

<script>
import { MUsersTable } from '@ldiebold/quasar-ui-process-model-components/src'

export default {
  name: 'UsersPage',

  components: {
    MUsersTable
  },

  data () {
    return {}
  },

  created () {
  },

  computed: {

  }
}
</script>
