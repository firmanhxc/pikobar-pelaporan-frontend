<template>
  <div>
    <v-list shaped>
      <div
        style="margin: 2rem;"
      >
        <v-btn
          v-if="roles[0] === 'dinkeskota'"
          id="addsurvey"
          class="bottom-add-survey"
          depressed
          @click="handleCreate"
        >
          <v-icon left>add_circle_outline</v-icon>
          Tambah Kasus
        </v-btn>
      </div>
      <v-list-item-group v-model="item" class="sidebar" color="primary">
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
        />
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  data: () => ({
    drawer: null,
    item: null
  }),
  computed: {
    ...mapGetters('permission', [
      'permission_routes'
    ]),
    ...mapGetters('user', [
      'roles'
    ])
  },
  methods: {
    async handleCreate() {
      await this.$store.dispatch('reports/resetFormPasien')
      await this.$router.push('/laporan/stepper')
    }
  }
}
</script>
