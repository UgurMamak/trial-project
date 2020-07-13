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
    const data = [];
    const menuList = [];
    const subList = [];

    this.state.menus.map((items) =>
      items.key === "main" ? menuList.push(items) : subList.push(items)
    );
    console.log("menulist", menuList);
    console.log("sublist", subList);
    menuList.map((items) =>
      items.items.map((item, i) =>
        data.push(<MainMenu subList={subList} key={i} item={item} />)
      )
    );

    return <div>{data}</div>;
  }
}
