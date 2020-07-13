import React, { Component } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class Deneme extends Component {
  state = {
    menus: [],
  };
  getMenus = () => {
    fetch("http://localhost:3000/menus")
      .then((res) => res.json())
      .then((data) => this.setState({ menus: data }));
  };

  componentDidMount() {
    this.getMenus();
  }
  render() {
    const menuList = [];
    const subList = [];

    this.state.menus.map((items) =>
      items.key === "main" ? menuList.push(items) : subList.push(items)
    );

    console.log("menulist", menuList);
    console.log("sublist", subList);
    const deneme = menuList.map((items) =>
      items.items.map((item) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {item.name}
          </AccordionSummary>

          {item.items.map((menuName) => (
            <div>
              {/*console.log("ff", menuName)*/}

              {menuName.subMenus ? (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    {menuName.name}
                  </AccordionSummary>

                  {console.log("submenuss:", menuName.subMenus)}
                  {menuName.subMenus.map((menu) => (
                    <div>
                      {console.log("menu", menu)}
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          {menu}
                        </AccordionSummary>

                        {subList.map((subItem) =>
                          subItem.key === menu
                            ? subItem.items.map((menu2) => (
                                <div>{menu2.name}</div>
                              ))
                            : ""
                        )}
                      </Accordion>
                    </div>
                  ))}
                </Accordion>
              ) : (
                menuName.name
              )}
            </div>
          ))}
        </Accordion>
      ))
    );

    return <div>{deneme}</div>;
  }
}
