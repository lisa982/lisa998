<template>
  <div class="app">
      <p>列表中英文切换</p>
    <ul>
      <li v-for="(item,i) in nav" :key="i">{{$t(item.name)}}</li>
      <!-- <li><p>{{ $t('wbnr') }}</p></li> -->
     
    </ul>
    <p>单个中英文切换</p>
    <li>{{$t('single.name')}}</li>
  <button  @click="check" class="chanage">{{lang}}</button>
  </div>
</template>

<script>
// import Vue from "vue";
export default {
  data() {
    return {
      nav:[
        {
          name:'nav[0].name'
        },
          {
          name:'nav[1].name'
        },
          {
          name:'nav[2].name'
        },
          {
          name:'nav[3].name'
        },
      ],
      lang: "en",
         txt: this.$t("single.name"),
    };
  },
  mounted() {
  
  },created () {
      let that = this;
    // 将lang的值储存进去
    sessionStorage.setItem("lang", that.lang);  
  },
  methods: {
    check() {
      let that = this;
      if (that.lang == "zh") {
        that.lang = "en";
        console.log(that.lang);
        that.$i18n.locale = "zh";
        // sessionStorage.setItem("lang", that.lang);
      } else {
        that.lang = "zh";
        that.$i18n.locale = "en";
        // sessionStorage.setItem("lang", that.lang);
      }
    }
  }
};
</script>

<style>
.chanage {
  cursor: pointer;
}
</style>