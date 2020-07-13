import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";

export default class subMenu extends Component {
  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  };

  state = { selectedValue: "" };
  render() {
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {this.props.item}
          </AccordionSummary>

          {this.props.subList.map((subMenu) =>
            subMenu.key === this.props.item
              ? subMenu.items.map((subMenuItem) => (
                  <div style={{ textIndent: "75px" }}>
                    <Radio
                      checked={this.state.selectedValue === subMenuItem.name}
                      onChange={this.handleChange}
                      value={subMenuItem.name}
                      name="radio-button-demo"
                    
                    />

                    <img
                      src={subMenuItem.image}
                      style={{ height: "50px", width: "50px" }}
                    />
                    {subMenuItem.name}
                    {subMenuItem.price ? (
                      <b>{"   Fiyat: " + subMenuItem.price}</b>
                    ) : (
                      ""
                    )}
                  </div>
                ))
              : ""
          )}
        </Accordion>
      </div>
    );
  }
}
