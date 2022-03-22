<template>
  <el-pagination
    :page-size="10"
    :pager-count="5"
    layout="prev, pager, next"
    :total="100"
  />
</template>

<script>
// TODO:qiberganiga qarab tugirlash netdan element paginaciya temasini qidirish

export default {};

</script>

<style>
.el-pager li{
  margin-right:12px !important;
  width:32px;
  border-radius: 4px;
  font-weight: 500;
font-size: 14px;
line-height: 20px;
}

.el-pager li.is-active{
  color:#3366FF;
}

.btn-prev {
  margin-right:12px !important;
}

.el-icon{
  font-size:18px !important;
 font-weight:bold;
}

.el-icon svg {
  fill: #979797;
}

</style>
