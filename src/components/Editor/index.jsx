import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import * as action from "../../actions";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mdedata: ""
    };
  }

  handleChange = e => {
    this.setState({ mdedata: e.target.value });
    this.props.mdeState(e.target.value);
  };

  render() {
    return (
      <div className="div_textarea">
        <Form>
          <FormGroup>
            <Input
              type="textarea"
              name="text"
              className="textarea"
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
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
