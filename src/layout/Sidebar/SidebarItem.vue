<template>
  <div>
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <v-list-item v-if="onlyOneChild.meta" :to="resolvePath(item.path)">
        <v-list-item-icon>
          <v-icon v-text="onlyOneChild.meta.icon"/>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="generateTitle(onlyOneChild.meta.title)"/>
        </v-list-item-content>
      </v-list-item>
    </template>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import generateTitle from '@/utils/generateTitle'

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    generateTitle,
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }

      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
