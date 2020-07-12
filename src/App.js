import React, { Component } from "react";

import MainMenu from "./mainMenu";
export default class App extends Component {
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

    this.state.menus.map((items) =>
      items.key === "main"
        ? items.items.map((item) =>
            menuList.push(<MainMenu key={item.name} image={item.image} item={item} />)
          )
        : ""
    );

    return (
      <div>
        {menuList}
        {/*console.log(this.state.menus)*/}
      </div>
    );
  }
}
