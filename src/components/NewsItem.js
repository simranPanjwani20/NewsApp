import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl,newsUrl, author, date,source}= this.props;
    return (
      <div className="card body" style={{ width: "18rem" }}>
      <img className="img" style={{height: "190.67px"}} src={imageUrl} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{title} <span class="badge badge-secondary">{source}</span></h5>
        <p className="card-text">
          {description}
        </p>
        <p class="card-text"><small class="text-muted">By {author} on {new Date (date).toGMTString()} </small></p>
        <a href={newsUrl} className="btn btn-primary">
        Read more
        </a>
      </div>
    </div>
   
    )
  }
}

export default NewsItem