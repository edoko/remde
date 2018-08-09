import React, { Component } from "react";
import { Row, Col } from "antd";
import View from "../View";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetch: true
    };
  }

  componentDidMount() {
    this.props.fetchContent(this.props.match.params.id);
  }
  render() {
    return (
      <Row>
        <Col xs={12}>
          <View states={this.state.isFetch} content={this.props.content} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    content: state.data.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContent: contentId => {
      dispatch(actions.fetchContent(contentId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
