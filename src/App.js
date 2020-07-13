import React, { Component } from "react";

import MainMenu from "./mainMenu";

import Deneme from  "./Deneme"
import Deneme2 from "./Deneme2"
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
    const subList=[];

    

    this.state.menus.map((items) =>
      items.key === "main"
        ? items.items.map((item) =>
            menuList.push(<MainMenu key={item.name} image={item.image} item={item} />)
          )
        : subList.push(items)
    );
  

    return (
      <div>
        {/*menuList*/}
        {/*console.log(this.state.menus)*/}
        
        <Deneme2/>
      </div>
    );
  }
}
