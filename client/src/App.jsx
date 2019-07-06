import React from "react";
import ReviewModule from "./components/reviewModule.jsx";
const axios = require("axios");
// import logo from "./logo.svg";
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productId: 1, reviewDataSet: [] };
  }

  componentDidMount() {
    axios
      .get("/api/1")
      .then(res => {
        console.log("RES.DATA ==> ", res.data);
        this.setState({
          reviewDataSet: res.data
        });
      })
      .catch(err => console.log("ERROR: axios.get /api/:productId", err));
  }
  render() {
    return (
      <div className="App">
        {this.state.productId > 0 ? (
          <ReviewModule
            productid={this.state.productId}
            reviewdataset={this.state.reviewDataSet}
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

export default App;
