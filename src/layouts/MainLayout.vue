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
            Admin
          </q-toolbar-title>

          <MSelectAppButton
            icon="mdi-apps"
            dense
            flat
            current-app-name="admin"
            :user="user"
          />

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
            v-for="item in availableMenuItems"
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
import { MSelectAppButton } from '@ldiebold/quasar-ui-process-model-components/src'

export default {
  name: 'MainLayout',
  components: { MSelectAppButton },
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
    this.$MTutorialVideo.$get()

    setTimeout(() => {
      this.visible = true
    }, 400)
  },

  computed: {
    user () {
      return this.$MUser.getSessionUser()
    },

    availableMenuItems () {
      return this.menuItems.filter(menuItem => {
        if (menuItem.role === 'super admin') {
          return this.user.role === 'super admin'
        }
        return true
      })
    }
  },

  data () {
    return {
      leftDrawerOpen: false,

      visible: false,

      menuItems: [
        {
          label: 'Users',
          description: 'manage user accounts',
          to: '/users',
          role: 'admin'
        },
        {
          label: 'Events',
          description: 'create and edit events',
          to: '/events',
          role: 'admin'
        },
        {
          label: 'Personal Candidates',
          description: 'manage candidate accounts',
          to: '/candidates',
          role: 'admin'
        },
        {
          label: 'Tutorial Videos',
          description: 'Teach IBOs the site',
          to: '/tutorial-videos',
          role: 'super admin'
        }
      ]
    }
  }
}
</script>
