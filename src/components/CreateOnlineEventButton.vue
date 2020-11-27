<template>
  <BDialogButton
    v-bind="$attrs"
    v-on="$listeners"
    ref="dialogButton"
  >
    <q-card-section>
      <CreateOnlineEventForm @success="() => $refs.dialogButton.hide()" />
    </q-card-section>
  </BDialogButton>
</template>

<script>
import { BDialogButton } from '@ldiebold/quasar-ui-process-base-components/src'
import CreateOnlineEventForm from 'components/CreateOnlineEventForm.vue'

export default {
  props: {

  },

  components: {
    BDialogButton,
    CreateOnlineEventForm
  },

  computed: {

  },

  methods: {

  },

  data () {
    return {

    }
  }
}

</script>
