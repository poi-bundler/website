<template>
  <Layout>
    <VersionSelector slot="sidebar-top"/>
  </Layout>
</template>

<script>
import Layout from '@default-theme/Layout.vue'
import VersionSelector from './VersionSelector.vue'

export default {
  components: {
    Layout,
    VersionSelector
  }
}
</script>
