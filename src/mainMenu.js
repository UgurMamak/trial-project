import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Radio from "@material-ui/core/Radio";
import SubMenu from "./subMenu";
export default class mainMenu extends Component {
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
            <img
              src={this.props.item.image}
              style={{ height: "50px", width: "50px" }}
            />
            {this.props.item.name}
          </AccordionSummary>

          {this.props.item.items.map((item, i) => (
            <div key={i} style={{ textIndent: "50px" }}>
              {!item.subMenus ? (
                <Radio
                  checked={this.state.selectedValue === item.name}
                  onChange={this.handleChange}
                  value={item.name}
                  name="radio-button-demo"
                />
              ) : (
                ""
              )}
              <img src={item.image} style={{ height: "50px", width: "50px" }} />
              {item.name}
              <b>{"   Fiyat: " + item.price}</b>

              {item.subMenus
                ? item.subMenus.map((subMenu, j) => (
                    <SubMenu
                      key={j}
                      item={subMenu}
                      subList={this.props.subList}
                    />
                  ))
                : ""}
            </div>
          ))}
        </Accordion>
      </div>
    );
  }
}
