import React from "react";
import ReviewModule from "./components/reviewModule.jsx";
const axios = require("axios");
// import logo from "./logo.svg";
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      reviewDataSet: [],
      summary: { total: -1, avgRating: -1 },
      errorStatus: true
    };
  }

  roundToHalf(value) {
    var converted = parseFloat(value); // Make sure we have a number
    var decimal = converted - parseInt(converted, 10);
    decimal = Math.round(decimal * 10);
    if (decimal == 5) {
      return parseInt(converted, 10) + 0.5;
    }
    if (decimal < 3 || decimal > 7) {
      return Math.round(converted);
    } else {
      return parseInt(converted, 10) + 0.5;
    }
  }

  componentDidMount() {
    var urlparse = window.location.href.split("/");
    var productId;
    if (isNaN(urlparse[urlparse.length - 2]) === false) {
      this.setState({error: false});
      console.log("PRODUCT ID IS PARSEABLE ==> ", this.state.errorStatus);
     
      productId = urlparse[urlparse.length - 2];
    } else {
      console.log("PRODUCT ID IS NOT PARSEABLE")
      this.setState({errorStatus: true});
      productId = -1;
    }
    
    console.log("ERROR ISNAN STATE ==> ",  isNaN(urlparse[urlparse.length - 2]));

    console.log("URLPARSER WOWOWOWOW===> ", urlparse);
    console.log("ERROR STATUS ON CLIENT ===> ", this.state.errorStatus);
    if (productId > -1) {
    console.log("NO ERROR ON CLIENT!");
    axios
      .get(`/reviews/api/${productId}`)
      .then(res => {
        this.setState({
          reviewDataSet: res.data,
          errorStatus: false
        });
        var sumRating = 0;
        res.data.forEach(el => {
          sumRating += el.rating;
        });
        var avgRating = sumRating / res.data.length;
        avgRating = this.roundToHalf(avgRating);
        this.setState({
          summary: {
            total: res.data.length,
            avgRating: avgRating
          }
        });
      })
      .catch(err => console.log("ERROR: axios.get /api/:productId", err));
    } else {

    }
  }

  render() {
    if (this.state.error) {
      return <div>Loading ..</div>
    }
    else{
    return (
      <div className="App">
        {this.state.productId > 0 ? (
          <ReviewModule
            productid={this.state.productId}
            reviewdataset={this.state.reviewDataSet}
            reviewsummary={this.state.summary}
          />
        ) : (
          <div>
            PASS IN A PRODUCT REVIEWS TO THE MICROSERVICE TO GET REVIEWS
          </div>
        )}
      </div>
    );
    }
  }
}

export default App;
