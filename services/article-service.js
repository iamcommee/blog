export default class ArticleService {

  static install(_Vue) {
    _Vue.prototype.$articleService = new ArticleService(_Vue)
  }

  getArticles() {

    let readFiles = require.context('~/articles/', true, /\.md$/)
    let articles = []

    readFiles.keys().forEach(function(item){
      articles.push(item.replace('./', '').replace('/index.md', ''))
    })

    return articles

  }

  getArticleAttributes() {

    let readFiles = require.context('~/articles/', true, /\.md$/)
    let articleAttributes = []

    readFiles.keys().forEach(function(item){

      let dir = item.replace('./', '').replace('/index.md', '')
      let markdown = require(`~/articles/${dir}/index.md`)
      let attributes = markdown.attributes

      articleAttributes.push(
        {
          dir: dir,
          url: attributes.url,
          title: attributes.title,
          description: attributes.description,
          cover: attributes.cover,
          date: attributes.date,
          time: attributes.time
        }
      )

    })

    return articleAttributes.sort(this.compareValues('date','desc'));

  }

  // NOTE compare function from https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
  compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

}
