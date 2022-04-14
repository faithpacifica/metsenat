<template>
    <div class="tabs">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane class="el-tabs__item" label="JISMONIY SHAXS" name="individuals">
        <IndividualsForm/>
        </el-tab-pane>
      <el-tab-pane class="el-tabs__item" label="YURIDIK SHAXS" name="entities">
        <EntityForm/>
      </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import EntityForm from "../Mainpage/EntityForm.vue"
import IndividualsForm from "../Mainpage/IndividualsForm.vue"

export default {
  components:{
    EntityForm,
    IndividualsForm

  },
    data(){
        return {
            activeName: 'individuals'
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}


</script>



<style >
.el-tabs__active-bar{
      background: #3366FF;
}

</style>