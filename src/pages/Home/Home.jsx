import React, { Component } from 'react';
import SimpleTestimonial from "./components/SimpleSay/SimpleTestimonial";
import ProductInfo from "./components/ProductInfo/ProductInfo";

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <SimpleTestimonial/>
        <ProductInfo/>
      </div>
    );
  }
}
