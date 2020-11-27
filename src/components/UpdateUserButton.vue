<template>
  <BDialogButton
    v-bind="$attrs"
    v-on="$listeners"
    ref="dialogButton"
  >
    <q-card-section>
      <UpdateUserForm
        @success="$refs.dialogButton.hide()"
        :user="user"
      />
    </q-card-section>
  </BDialogButton>
</template>

<script>
import { BDialogButton } from '@ldiebold/quasar-ui-process-base-components/src'
import UpdateUserForm from 'components/UpdateUserForm.vue'

export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  },

  components: {
    BDialogButton,
    UpdateUserForm
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
