import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


import SubMenu from "./subMenu";
export default class mainMenu extends Component {
  render() {
    console.log("resimlerr:", this.props.item.image);
 

    return (
      <div>
       
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          
            
            <img src={this.props.item.image} />
            {this.props.item.name}
          </AccordionSummary>

          {this.props.item.items.length !== 0
            ? this.props.item.items.map((item) => (
                <div key={item.name}>
                  {item.subMenus ? <SubMenu item={item.subMenus} /> : ""}

                  <br />
                  {item.name}
                </div>
              ))
            : ""}
        </Accordion>
      </div>
    );
  }
}
