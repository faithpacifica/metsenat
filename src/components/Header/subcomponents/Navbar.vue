<template>
    <nav class="navbar flex items-center  font-['SF Pro Text'] font-bold text-[14px] leading-[21px] text-[#28293D]">
       <router-link class='navbar__link mr-[20px] ' to='/' active-class="active">Asosiy</router-link>
       <router-link class='navbar__link mr-[20px] ' to='/grants' active-class="active">Grantlar</router-link>
       <router-link class='navbar__link mr-[20px] ' to='/tax-exemption' active-class="active">Soliq imtiyozlari</router-link>

       <router-link class='enter-btn mr-[39px]  flex items-center' to="/authorization">
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.375 3.75H10.875C10.179 3.75074 9.51179 4.02755 9.01967 4.51967C8.52754 5.01179 8.25074 5.67904 8.25 6.375V11.25H15.4392L12.9698 8.78016C12.8351 8.63836 12.7611 8.44955 12.7636 8.25398C12.7661 8.0584 12.8449 7.87155 12.9832 7.73325C13.1215 7.59495 13.3084 7.51614 13.504 7.51364C13.6995 7.51114 13.8884 7.58513 14.0302 7.71984L17.7802 11.4698C17.9207 11.6105 17.9997 11.8012 17.9997 12C17.9997 12.1988 17.9207 12.3895 17.7802 12.5302L14.0302 16.2802C13.8884 16.4149 13.6995 16.4889 13.504 16.4864C13.3084 16.4839 13.1215 16.4051 12.9832 16.2668C12.8449 16.1285 12.7661 15.9416 12.7636 15.746C12.7611 15.5505 12.8351 15.3616 12.9698 15.2198L15.4392 12.75H8.25V17.625C8.25 19.1273 9.83391 20.25 11.25 20.25H18.375C19.071 20.2493 19.7382 19.9725 20.2303 19.4803C20.7225 18.9882 20.9993 18.321 21 17.625V6.375C20.9993 5.67904 20.7225 5.01179 20.2303 4.51967C19.7382 4.02755 19.071 3.75074 18.375 3.75V3.75Z" fill="black"/>
            <path d="M3.75 11.25C3.55109 11.25 3.36032 11.329 3.21967 11.4697C3.07902 11.6103 3 11.8011 3 12C3 12.1989 3.07902 12.3897 3.21967 12.5303C3.36032 12.671 3.55109 12.75 3.75 12.75H8.25V11.25H3.75Z" fill="black"/>
        </svg>

            Kirish
       </router-link>     
    </nav>
</template>

<script>
export default {
   
}
</script>

<style scope>
svg{
    display:inline;
}
.navbar__link {
     border-bottom:2px solid transparent;
     transition:all 0.5s ease-in-out;
}
.navbar .active{
    border-bottom:2px solid #3366FF;
}

.navbar__link:hover {
    border-bottom:2px solid #3366FF;
}

/* RESPONSIVE */
@media (max-width: 767px) {
  .enter-btn{
    margin:0;
  } 
}
</style>