import React from "react";
/* 作为中间站，接受一个组件作为参数，返回一个组件作为返回值，有正常组件的生命周期，
但是render函数并没有自己的东西，但是会将传进来的组件传出去的同时，添加上属性传出*/
export default function withTimer(WrappedComponent) {
  return class extends React.Component {
    state = { time: new Date() };
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        time: new Date()
      });
    }
    render() {
      return <WrappedComponent time={this.state.time} {...this.props} />;
    }
  };
}
