<template>
<div class="container">
<div class="row">
  <div class="col-lg-4 col-xs-12 p-2" v-for="(article, index) in articles" :key="index">
    <div class="articles-card">
      <div class="articles-wrap text-center">
         <nuxt-link :to="article.url">
          <div class="articles-image" :style="{
            'height': '300px',
            'background-image': 'url(' + article.cover + ')',
            'background-position': 'center',
            'background-size': 'cover'
          }">
          </div>
        </nuxt-link>
        <div class="articles-content">
          <nuxt-link :to="article.url">
            <div class="articles-title">
            <b> {{ article.title }} </b>
            </div>
          </nuxt-link>
          <div class="articles-detail">
            <i class="el-icon-time"></i> {{ article.date }} - {{ article.time }}
          </div>
          <div class="article-description">
            {{ article.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      articles: this.$articleService.getArticleAttributes(),
    };
  },
}
</script>
<style lang="sass" src="./articles.sass"></style>
