import React, { Component } from "react";
import { connect } from "react-redux";
import marked from "marked";
import "./style.css";

class View extends Component {
  render() {
    return (
      <div>
        <div
          className="div_view"
          dangerouslySetInnerHTML={{
            __html: marked(this.props.datas, { sanitize: true })
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    datas: state.data.datas
  };
};

export default connect(
  mapStateToProps,
  null
)(View);
