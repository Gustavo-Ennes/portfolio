<template>
  <main class='bg-dark bg-mario text-center'>
    <b-row align-h="center" align-v="center" class='bg-fade'>
      <b-col class='vh-100 d-flex align-items-center'>
        <h1 class='w-100 mono display-4 text-light txtShdw'>Sorry, we're under maintenance</h1>
      </b-col>
    </b-row>
  </main>
</template>

<script>
export default {
  name: 'MaintenanceScreen'
}
</script>

<style lang="scss" scoped>
.bg{
  &-mario{
    background: url(https://gonintendo.com/system/file_uploads/uploads/000/015/365/original/mario-builder.png)center no-repeat;
  }
  &-fade{
    background-color: rgba(255, 255, 0, 0.2);
  }
}
.txtShdw{
  background-color:rgba(0, 0, 0, 0.35);
}
</style>