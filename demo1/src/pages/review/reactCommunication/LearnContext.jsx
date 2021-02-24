import React, { Component } from "react";
import "./normal.css"
import style from './style.module.css'

const UserContext = React.createContext({
  nickname: "camus",
  level: 1,
});
class ProfileHeader extends Component {
  render() {
    console.log("里外context不一样", this.context);
    return (
      <>
        <div className="normalCss">{this.context.nickname}</div>
        <div className={style.testModule}>{this.context.nickname}</div>
      </>
    );
  }
}

ProfileHeader.contextType = UserContext;

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}
export default class LearnContext extends Component {
  constructor() {
    super();
    this.state = {
      nickname: "kobe",
      level: 99,
    };
  }
  render() {
    return (
      <>
        <UserContext.Provider value={this.state}>
          <Profile></Profile>
        </UserContext.Provider>
        {/* <ProfileHeader></ProfileHeader> */}
      </>
    );
  }
}
