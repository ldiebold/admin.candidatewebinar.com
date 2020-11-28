<template>
  <q-table
    v-bind="$attrs"
    v-on="$listeners"
    :data="usersFiltered"
    :columns="columns"
    :pagination="initialPagination"
  >
    <template #top>
      <div class="text-h4 text-grey-8">
        Users
      </div>

      <CreateUserButton
        round
        icon="mdi-plus"
        size="sm"
        class="q-ml-md"
      />

      <q-input
        class="q-ml-lg"
        dense
        placeholder="Search"
        outlined
        v-model="search"
        autofocus
        clearable
        :debounce="150"
      />
    </template>

    <template #body-cell-edit="props">
      <td class="text-center">
        <UpdateUserButton
          v-if="canManageUser(props.row)"
          flat
          icon="mdi-pencil"
          round
          dense
          color="blue-4"
          :user="props.row"
        />
      </td>
    </template>

    <template #body-cell-delete="props">
      <td class="text-center">
        <MDeleteButton
          :model="props.row"
          v-if="canManageUser(props.row)"
          model-name="User"
          flat
          icon="mdi-delete"
          round
          dense
          color="red-4"
        />
      </td>
    </template>
  </q-table>
</template>

<script>
import { MDeleteButton } from '@ldiebold/quasar-ui-process-base-components/src'
import CreateUserButton from 'components/CreateUserButton.vue'
import UpdateUserButton from 'components/UpdateUserButton.vue'

export default {
  props: {
    users: {
      required: true,
      type: Array
    }
  },

  components: {
    MDeleteButton,
    CreateUserButton,
    UpdateUserButton
  },

  computed: {
    usersFiltered () {
      if (!this.search) {
        return this.users
      }

      return this.users.filter(user => {
        return String(user.name).toLowerCase()
          .includes(String(this.search).toLowerCase())
      })
    },

    columns () {
      return [
        {
          align: 'left',
          field: 'name',
          label: 'Name',
          name: 'name'
        },
        {
          align: 'left',
          field: 'email',
          label: 'Email',
          name: 'email'
        },
        {
          align: 'left',
          field: 'role',
          label: 'Role',
          name: 'role'
        },
        {
          align: 'center',
          field: 'edit',
          label: 'Edit',
          name: 'edit'
        },
        {
          align: 'center',
          field: 'delete',
          label: 'Delete',
          name: 'delete'
        }
      ]
    }
  },

  methods: {
    canManageUser (user) {
      const sessionUser = this.$MUser.getSessionUser()
      if (sessionUser.role === 'super admin') {
        return true
      }

      if (user.role === 'admin') {
        return false
      }

      return true
    }
  },

  data () {
    return {
      initialPagination: {
        descending: false,
        rowsPerPage: 20
        // rowsNumber: xx if getting data from a server
      },

      search: ''
    }
  }
}

</script>
