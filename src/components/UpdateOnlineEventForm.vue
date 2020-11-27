<template>
  <div>
    <q-input
      filled
      v-model="form.title"
      label="Title"
      class="q-mb-md"
    />

    <q-input
      filled
      type="textarea"
      v-model="form.description"
      label="Description"
      class="q-mb-md"
    />

    <BDateTime
      filled
      v-model="form.start_time"
      label="Start"
      class="q-mb-md"
      today-btn
    />

    <BDateTime
      filled
      v-model="form.end_time"
      label="End"
      class="q-mb-md"
      today-btn
    />

    <q-input
      filled
      type="text"
      v-model="form.video_url"
      label="Wistia Video Url"
      class="q-mb-md"
    >
      <template #prepend>
        <q-icon name="videocam" />
      </template>
    </q-input>

    <q-toggle
      v-model="form.automated"
      label="automated"
      class="q-mb-md"
    />

    <br />

    <q-btn
      label="Update"
      color="primary"
      @click="handleSubmit"
    />
  </div>
</template>

<script>
import { BDateTime } from '@ldiebold/quasar-ui-process-base-components/src'

export default {
  props: {
    onlineEvent: {
      required: true,
      type: Object
    }
  },

  components: {
    BDateTime
  },

  computed: {

  },

  methods: {
    handleSubmit () {
      this.onlineEvent.$update(this.form)
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
      if (this.onlineEvent[fieldKey]) {
        this.form[fieldKey] = this.onlineEvent[fieldKey]
      }
    })
  },

  data () {
    return {
      form: {
        title: null,
        description: null,
        start_time: null,
        end_time: null,
        video_url: null,
        automated: false
      }
    }
  }
}

</script>
