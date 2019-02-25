import React, { Component } from "react";
import { Link } from "react-router-dom";
class news extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: true
    };
  }
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=311c608ea05e478288580b921fc53bf8`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ news: data.articles, loading: false });
        console.log("url: ", data.articles[0].url);
      })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading....</h1>;
    } else {
      return (
        <div className="news">
          {this.state.news.map(item => {
            return (
              <div className="card card-body mb-3">
                <div className="row">
                  <div className="col-md-2">
                    <img className="" src={item.urlToImage} alt="" />

                    <br />
                  </div>
                  <div className="col-md-10">
                    <p className="lead">
                      {" "}
                      <Link to={item.url} target="_blank">
                        {item.title}
                      </Link>
                    </p>
                    <p className="font-size:18px">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default news;
