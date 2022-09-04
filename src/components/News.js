import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export class News extends Component {
  
  articles = [
    {
      "source": { "id": "google-news-fr", "name": "Google News (France)" },
      "author": null,
      "title": "Des produits plus légers mais plus chers : la ministre Olivia Grégoire saisit la répression des fraudes après l'enquête de FoodWatch sur la \"shrinkflation\"",
      "description": "Selon l'ONG, plusieurs produits de grande consommation ont vu leur format diminuer, mais leur prix gonfler.",
      "url": "https://www.francetvinfo.fr/sante/alimentation/des-produits-plus-legers-mais-plus-chers-la-ministre-olivia-gregoire-saisit-la-repression-des-fraudes-apres-l-enquete-de-foodwatch-sur-la-shrinkflation_5339074.html",
      "urlToImage": "https://www.francetvinfo.fr/pictures/A2Uuq6QSqAaODDarW3TBdePZv_Q/1500x843/2022/09/02/phpC1FBZ6.jpg",
      "publishedAt": "2022-09-02T14:05:32+00:00",
      "content": "Selon l'ONG, plusieurs produits de grande consommation ont vu leur format diminuer, mais leur prix gonfler. \"On ne joue pas avec le portefeuille des Français\", estime Olivia Grégoire. La ministre dél… [+1241 chars]"
    },
    {
      "source": { "id": "le-monde", "name": "Le Monde" },
      "author": "Le Monde avec AFP",
      "title": "Lindt, Danone et Kiri accusés de « shrinkflation » sur les produits alimentaires",
      "description": "L’ONG Foodwatch met en cause six marques de la grande distribution qui ont modifié la taille de leurs produits-phares ces dernières années pour ne pas trop augmenter les prix.",
      "url": "https://www.lemonde.fr/economie/article/2022/09/02/grande-distribution-lindt-danone-et-kiri-accuses-de-shrinkflation-sur-les-produits-alimentaires_6139924_3234.html",
      "urlToImage": "https://img.lemde.fr/2022/08/01/0/0/4032/2688/1440/960/60/0/056b73a_1659321848618-080-hl-rmilani-1801978.jpg",
      "publishedAt": "2022-09-02T07:21:09Z",
      "content": "Une cliente fait ses courses dans un supermarché, le 28 juillet 2022. RICCARDO MILANI / HANS LUCAS VIA AFP\r\nNestlé, Lindt &amp; Sprüngli ou encore Danone ont trouvé la solution pour ne pas trop augme… [+5165 chars]"
    },
    {
      "source": { "id": "medical-news-today", "name": "Medical News Today" },
      "author": "Amber Charles Alexis, MSPH, RDN",
      "title": "Not all plant-based diets are the same: Junk veggie food and its impact on health",
      "description": "Not all plant-based diets are equally healthy. There are 'junk' plant-based foods that can increase health risks. How can a person follow a healthy plant-based diet?",
      "url": "http://www.medicalnewstoday.com/articles/not-all-plant-based-diets-are-the-same-junk-veggie-food-and-its-impact-on-health",
      "urlToImage": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/08/honest-nutrition-feature-001.jpg",
      "publishedAt": "2022-08-23T13:00:00Z",
      "content": "Plant-based diets\r\n refer to diets that are based on foods made from plants, and include vegetarian and vegan diets. \r\nWhile vegan diets exclude all animal products, vegetarian options which exclude … [+7155 chars]"
    },
    {
      "source": { "id": "the-times-of-india", "name": "The Times of India" },
      "author": "Dipak K Dash",
      "title": "Government to provide 5 kg free food grains to poor for May & June",
      "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
      "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2021-04-23T04:23:00Z",
      "content": null
    }
  ]
 static defaultProps = { //setting defaultprops using static in class based components
   country : 'in',
   pagesize: 15,
   category: 'general'

 }
 static propTypes={   //setting prop types using static in class based components
  country: PropTypes.string,
  category: PropTypes.string,
  pagesize: PropTypes.number
 }
 constructor(){
  super();
  console.log("çpns")
  this.state={
    articles: this.articles,
    page: 1,
    totalResults: this.totalResults,
    loading: false
  }
 }

 async componentDidMount(){ //life cycle method , runs after render method
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2689543fbee84174b5fbafa1c46251de&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
   let data = await fetch(url); //async allows you to use await through which async fn (cmd in this case) will run only after await promise is resolved
   let parsedData = await data.json(); //converts data to json
   this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})
 }
 handleprevclick=async()=>{
  console.log("heuio");
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2689543fbee84174b5fbafa1c46251de&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
  this.setState({loading:true})
  let data = await fetch(url); 
  let parsedData = await data.json(); 
  
 this.setState({
   page:this.state.page-1,
   articles: parsedData.articles,
   loading:false
 });

 }
 handlenextclick =async()=>{
  
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2689543fbee84174b5fbafa1c46251de&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
  this.setState({loading:true})
   let data = await fetch(url); 
   let parsedData = await data.json(); 
   
  this.setState({
    page:this.state.page+1,
    articles: parsedData.articles,
    loading:false
  })
 }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='my-4 text-center' >Our Top Headlines For Today</h2>
        {this.state.loading &&<Spinner/>}
        <div className="row my-4">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4 mb-4" key={element.url}>
            <NewsItem title= {element.title?element.title.slice(0,45): ''} author= {element.author?element.author : 'Unknown'} source= {element.source.name?element.source.name : 'Unknown'} date={element.publishedAt}  description= {element.description?element.description.slice(0,88): 'Check the page to read more about this news........'} imageUrl= {element.urlToImage?element.urlToImage: 'https://www.newsblare.com/wp-content/uploads/2019/06/business-news.jpg'} newsUrl={element.url}/>
             </div>
          })}
          
        </div>
        <div className="container my-2 d-flex justify-content-end">
        <button disabled={this.state.page<=1} type="button"  onClick={this.handleprevclick} className="btn btn-dark mx-4"> &larr; Previous</button>
        <button disabled={this.state.page===Math.ceil(this.state.totalResults/this.props.pagesize)} type="button"  onClick={this.handlenextclick}  className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News