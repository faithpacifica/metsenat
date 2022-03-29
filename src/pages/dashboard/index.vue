<template >
   <ProHeader/>
   <div class="pt-[48px] pb-[50px] bg-[#E5E5E5] h-screen ">
   
        <router-view></router-view>
   </div>
 
</template>


<script>

import ProHeader from '@/components/AdminPageComponents/ProHeader/ProHeader.vue';

export default {
    components:{
        ProHeader,
    }
}
</script>
<style >
    
</style>