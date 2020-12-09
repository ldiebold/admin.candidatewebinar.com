<template>
  <BDialogButton
    v-bind="$attrs"
    v-on="$listeners"
    ref="dialogButton"
  >
    <q-card-section>
      <CreateUserForm @success="() => $refs.dialogButton.hide()" />
    </q-card-section>
  </BDialogButton>
</template>

<script>
import { BDialogButton } from '@agripath/quasar-ui-base-components/src'
import CreateUserForm from 'components/CreateUserForm.vue'

export default {
  props: {

  },

  components: {
    BDialogButton,
    CreateUserForm
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
