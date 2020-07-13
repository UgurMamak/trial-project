import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class subMenu extends Component {
  render() {
    return (
      <div>
        {/*this.props.subList.map((subItem) =>
          this.props.item === subItem.key ? (
            <Accordion>
              {console.log("key deger", subItem.key)}
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {this.props.item}
              </AccordionSummary>
            </Accordion>
          ) : (
            ""
          )
        )*/}

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
                  <div>{subMenuItem.name}</div>
                ))
              : ""
          )}
        </Accordion>
      </div>
    );
  }
}
