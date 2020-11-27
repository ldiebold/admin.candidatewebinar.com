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

    <q-input
      filled
      :type="passwordVisible ? 'text' : 'password'"
      v-model="form.password"
      label="Password"
      class="q-mb-md"
    >
      <template #append>
        <q-icon
          :name="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
          class="cursor-pointer"
          @click="passwordVisible = !passwordVisible"
        />
      </template>

      <template #after>
        <q-btn
          icon="mdi-refresh"
          flat
          round
          @click="generateRandomPassword"
        />
      </template>
    </q-input>

    <br />

    <q-btn
      label="Create"
      color="primary"
      @click="handleSubmit"
    />
  </div>
</template>

<script>
import SelectUserRole from 'components/SelectUserRole.vue'

export default {
  props: {

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
      this.$MUser.$create(this.form)
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

  data () {
    return {
      passwordVisible: false,

      form: {
        name: null,
        email: null,
        role: null,
        password: null
      }
    }
  }
}

</script>
