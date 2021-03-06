import React, { Component } from "react";


class Section extends Component {

  render () {
  return (
      <section className={`section container ${this.props.className}`}>
        {this.props.children}
      </section>
  );
  }
}

export default Section;