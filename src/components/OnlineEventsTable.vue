<template>
  <RManageModelTable
    :model-class="$MOnlineEvent"
    role="admin"
    :visible-columns="visibleColumns"
  >
    <template #create-button>
      <RCreateButton
        v-show="$MUser.getSessionUser().role === 'super admin'"
        role="admin"
        :model-class="$MOnlineEvent"
        icon="mdi-plus"
        class="q-ml-md"
        size="sm"
        round
        color="primary"
        :form-props="{
          inputProps: {
            filled: true,
            class: ['q-my-sm']
          }
        }"
      />
    </template>
  </RManageModelTable>
  <!-- <q-table
    v-bind="$attrs"
    v-on="$listeners"
    :data="onlineEvents"
    :columns="columns"
  >
    <template #top>
      <q-space />

      <CreateOnlineEventButton
        round
        icon="add"
      />
    </template>

    <template #body-cell-start_time="props">
      <td>
        {{ $dayjs(props.row.start_time).format('DD/MM/YYYY h:mmA') }}
      </td>
    </template>

    <template #body-cell-end_time="props">
      <td>
        {{ $dayjs(props.row.end_time).format('DD/MM/YYYY h:mmA') }}
      </td>
    </template>

    <template #body-cell-automated="props">
      <td class="text-center">
        {{ props.row.automated ? 'yes' : 'no' }}
      </td>
    </template>

    <template #body-cell-video_url="props">
      <q-td class="text-center">
        <q-btn
          icon="open_in_new"
          color="blue"
          flat
          dense
          v-if="props.row.video_url"
          @click="openURL(props.row.video_url)"
        />
      </q-td>
    </template>

    <template #body-cell-edit="props">
      <td class="text-center">
        <UpdateOnlineEventButton
          flat
          icon="edit"
          round
          dense
          color="blue-4"
          :online-event="props.row"
        />
      </td>
    </template>

    <template #body-cell-delete="props">
      <td class="text-center">
        <MDeleteButton
          :model="props.row"
          model-name="Event"
          flat
          icon="delete"
          round
          dense
          color="red-4"
        />
      </td>
    </template>
  </q-table> -->
</template>

<script>
// import { MDeleteButton } from '@ldiebold/quasar-ui-process-base-components/src'
// import CreateOnlineEventButton from 'components/CreateOnlineEventButton.vue'
// import UpdateOnlineEventButton from 'components/UpdateOnlineEventButton.vue'
import { RManageModelTable, RCreateButton } from '@agripath/quasar-ui-rest-components/src'
import { openURL } from 'quasar'

export default {
  props: {
    onlineEvents: {
      required: true,
      type: Array
    }
  },

  components: {
    // MDeleteButton,
    // CreateOnlineEventButton,
    // UpdateOnlineEventButton,
    RManageModelTable,
    RCreateButton
  },

  computed: {
    visibleColumns () {
      const sessionUser = this.$MUser.getSessionUser()

      const visibleColumns = [
        'title',
        'description',
        'start_time',
        'end_time',
        'video_url'
      ]

      if (sessionUser.role === 'super admin') {
        visibleColumns.push('update', 'delete')
      }

      return visibleColumns
    }
  },

  methods: {

  },

  data () {
    return {
      openURL
    }
  }
}

</script>
