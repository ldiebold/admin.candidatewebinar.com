<template>
  <q-page>
    <OnlineEventsTable
      style="height: calc(100vh - 50px)"
      :online-events="online_events"
    />
  </q-page>
</template>

<script>
import OnlineEvent from '../models/OnlineEvent'
import OnlineEventsTable from 'components/OnlineEventsTable.vue'

export default {
  name: 'EventsPage',

  components: {
    OnlineEventsTable
  },

  created () {
    this.$MOnlineEvent.$get()
  },

  computed: {
    online_events () {
      return OnlineEvent.all()
    }
  }
}
</script>
