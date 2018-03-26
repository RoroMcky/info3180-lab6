/* Add your Application JavaScript */
Vue.component('app-header', {
    template: `
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
              <a class="navbar-brand" href="#">VueJS App</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                  </li>
                </ul>
              </div>
            </nav>
        </header>    
    `,
    data: function() {}
});

Vue.component('app-footer', {
    template: `
        <footer>
            <div class="container">
                <p>Copyright &copy {{ year }} Flask Inc.</p>
            </div>
        </footer>
    `,
    data: function() {
        return {
            year: (new Date).getFullYear()
        }
    }
});

const newsList = Vue.component('news-list', {
    template: ` <div class='news'>
                    <h2>News</h2>
                    <div id='thing'></div>
                    <div class='containers'>
                    <div v-for='article in articles' class='news__item grip-item'>
                    <h5>{{ article.title }}</h5>
                    <img class='news' v-bind:src='article.urlToImage' height="300" width="300"/>
                    <p>{{article.description}}</p>
                    </div>
                    </div> ` ,
    created: function() {
        let self = this;
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2c3dcd8ecdfb4bb2a42cf8366a32beba')
        .then(function(response) {
            return response.json(); 
          }) 
          .then(function(data) { 
            console.log(data); 
            self.articles = data.articles;
          }); 
    },
    data: function() {
        return {
            articles: []
            
        }
        
    } 
});

let app = new Vue({
    el: '#app',
    data: {
        welcome: 'Hello World! Welcome to VueJS'
    }
});


