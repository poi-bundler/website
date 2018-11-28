<template>
  <div class="version-selector">
    <select @change="handleSelect">
      <option value="v12" selected>v12</option>
      <option value="v10">v10</option>
      <option value="v9">v9</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(e) {
      if (e.target.value === 'v10') {
        window.location.href = 'https://v10--poi.netlify.com/'
      } else if (e.target.value === 'v9') {
        window.location.href = 'https://poi9.netlify.com'
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

