<template>
  <div>
<Header></Header>
  </div>
</template>

<script>
import Header from './web/common/header'
export default {
  components: {
    Header
  },
  data() {
    return {
      nav: [
        {
          name: "中英文切换",
          url: "/Lang"
        },
        {
          name: "elementui",
          url: "/ElementUI"
        }
      ]
    };
  },
  mounted() {
    $(function(){
      console.log("ghbdsakl")
    })
  }
};
</script>

<style>
</style>