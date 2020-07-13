import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SubMenu from "./subMenu";
export default class mainMenu extends Component {
  render() {
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {this.props.item.name}
          </AccordionSummary>

          {this.props.item.items.map((item) => (
            <div>
        
              {item.name}

              {item.subMenus
                ? item.subMenus.map((subMenu) => (
                    <SubMenu item={subMenu} subList={this.props.subList} />
                  ))
                : ""}
            </div>
          ))}
        </Accordion>
      </div>
    );
  }
}
