import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import * as action from "../../actions";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { saveAs } from "file-saver/FileSaver";

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

  handleSaveFile = e => {
    let blob = new Blob([this.state.mdedata], { type: "text/plain" });
    saveAs(blob, "test.md");
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
        <br />
        <Button color="primary" onClick={this.handleSaveFile}>
          Save
        </Button>
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
