<template>
  <RManageModelTable
    :model-class="$MOnlineEvent"
    role="admin"
    :visible-columns="visibleColumns"
    :merge-fields="mergeFields"
    :update-button-props="{
      formProps: {
        inputProps: {
          filled: true,
          class: ['q-my-sm']
        }
      }
    }"
    :search="{
      fields: ['title', 'description', 'start_time', 'end_time']
    }"
  >
    <template #body-cell-video_url="scope">
      <q-td>
        <q-btn
          @click="openURL(scope.row.video_url)"
          icon="mdi-open-in-new"
          flat
          color="blue-8"
          padding="4px"
          :props="scope.props"
        />
      </q-td>
    </template>

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
</template>

<script>
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
    const vm = this
    return {
      openURL,

      mergeFields: {
        end_time: {
          format (onlineEvent) {
            return vm.$dayjs(onlineEvent.end_time).format('DD/MM/YYYY h:mmA')
          }
        },

        start_time: {
          format (onlineEvent) {
            return vm.$dayjs(onlineEvent.start_time).format('DD/MM/YYYY h:mmA')
          }
        },

        video_url: {
          form: {
            label: 'Video'
          }
        }
      }
    }
  }
}

</script>
