import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import * as action from "../../actions";
import { Input, Button } from "antd";
import Buttons from "../Buttons";

const { TextArea } = Input;

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mdedata: `
# Header 1
## Header 2
      
text data

1. dfasf
2. dsafsdf
---
- dsfadf
- dsfadfasdf
`
    };
  }

  componentDidMount() {
    this.props.mdeState(this.state.mdedata);
  }

  handleChange = e => {
    this.setState({ mdedata: e.target.value });
    this.props.mdeState(e.target.value);
  };

  render() {
    return (
      <div className="div_textarea">
        <form>
          <TextArea
            className="textarea"
            onChange={this.handleChange}
            defaultValue={this.state.mdedata}
          />
        </form>
        <br />
        <Buttons mdedata={this.state.mdedata} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    mdeState: data => {
      dispatch(action.mdeState(data));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Editor);
