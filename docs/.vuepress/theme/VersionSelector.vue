<template>
  <div class="version-selector">
    <select @change="handleSelect">
      <option value="v11" selected>v11</option>
      <option value="v10">v10</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(e) {
      if (e.target.value === 'v10') {
        window.location.href = 'https://v10--poi.netlify.com/'
      }
    }
  }
}
</script>

<style scoped>
.version-selector {
  padding: 1.5rem 1.5rem 0;
}
</style>

