<template>
  <div class="container">
      <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10 col-12">
              <div class="content-title">
                <b>{{ attributes.title }}</b>
              </div>
              <div class="content-detail">
                <i class="el-icon-time"></i> {{ attributes.date }} - {{ attributes.time }}
              </div>
              <component :is="selectedArticle" />
              <disqus />
          </div>
          <div class="col-md-1"></div>
      </div>
  </div>
</template>

<script>
import Disqus from '~/components/disqus/'
export default {
  components:{
    Disqus
  },
  head(){
    return {
      title: `${this.attributes.title} | commee.in.th`
    }
  },
  validate ({ app, params }) {
    return app.$articleService.getArticles().includes(params.title)
  },
  data() {
    return {
      attributes: {},
      selectedArticle: null
    };
  },
  created () {
    const markdown = require(`~/articles/${this.$route.params.title}/index.md`)
    this.attributes = markdown.attributes
    this.selectedArticle = markdown.vue.component
  }
}
</script>
<style lang="sass" src="./content.sass"></style>
