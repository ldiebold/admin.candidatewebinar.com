<template>
  <div>
    <q-input
      filled
      v-model="form.name"
      label="Name"
      class="q-mb-md"
    />

    <q-input
      filled
      v-model="form.email"
      label="Email"
      class="q-mb-md"
    />

    <SelectUserRole
      filled
      v-model="form.role"
      label="Role"
      class="q-mb-md"
    />

    <br>

    <q-btn
      label="Update"
      color="primary"
      @click="handleSubmit"
    />
  </div>
</template>

<script>
import SelectUserRole from 'components/SelectUserRole.vue'

export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  },

  components: {
    SelectUserRole
  },

  computed: {

  },

  methods: {
    generateRandomPassword () {
      var pwdChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      var pwdLen = 10
      this.form.password = Array(pwdLen).fill(pwdChars).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('')
    },

    handleSubmit () {
      this.user.$update(this.form)
        .then(this.handleSuccess)
        .catch(this.handleError)
    },

    handleSuccess (response) {
      this.$emit('input', false)
      this.$emit('success', response)
    },

    handleError (error) {
      console.log(error)
    }
  },

  created () {
    Object.keys(this.form).forEach(fieldKey => {
      if (this.user[fieldKey]) {
        this.form[fieldKey] = this.user[fieldKey]
      }
    })
  },

  data () {
    return {
      form: {
        name: null,
        email: null,
        role: null
      }
    }
  }
}

</script>
