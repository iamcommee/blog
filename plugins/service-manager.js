import Vue from 'vue'
import ArticleService from '~/services/article-service'

export default ({ store }, inject) => {
  let services = [
    { name: 'articleService', class: ArticleService}
  ]

  services.forEach(service => {
    Vue.use(service.class, service.store ? store : undefined)
    inject(service.name, Vue.prototype[`$${service.name}`])
  })
}
