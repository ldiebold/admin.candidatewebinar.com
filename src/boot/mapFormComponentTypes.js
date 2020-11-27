import Vue from 'vue'
import {
  BDatetime
} from '@agripath/quasar-ui-base-components/src'

Vue.prototype.$schemaFormConfig = {
  fieldComponents: {
    datetime: BDatetime
  }
}
