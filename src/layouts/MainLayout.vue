<template>
  <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    v-if="visible"
  >
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="mdi-menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />

          <q-toolbar-title>
            Quasar App
          </q-toolbar-title>

          <q-btn
            flat
            icon="mdi-logout"
            round
            @click="handleLogout"
          />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-1"
      >
        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >
            Menu
          </q-item-label>

          <q-item
            v-for="item in menuItems"
            :key="item.label"
            clickable
            :to="item.to"
          >
            <q-item-section>
              <q-item-label>
                {{ item.label }}
              </q-item-label>
              <q-item-label caption>
                {{ item.description }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </transition>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  methods: {
    handleLogout () {
      this.visible = false
      const vm = this
      this.$auth.logout()
        .then(() => {
          setTimeout(() => {
            vm.$router.go('/login')
          }, 300)
        })
    }
  },

  mounted () {
    setTimeout(() => {
      this.visible = true
    }, 400)
  },

  data () {
    return {
      leftDrawerOpen: false,

      visible: false,

      menuItems: [
        {
          icon: 'person',
          label: 'Users',
          description: 'manage user accounts',
          to: '/users'
        },
        {
          icon: 'calendar',
          label: 'Events',
          description: 'create and edit events',
          to: '/events'
        }
      ]
    }
  }
}
</script>
