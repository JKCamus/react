import React, { useEffect, useState } from "react";

function MyHook(props) {
  useLoggingLife("myHooks");
  const [current, setCurrent] = useState(true);
  const handleClick = (params) => {
    setCurrent(!current);
  };
  return (
    <div>
      <h1>myHooks</h1>
      <button onClick={handleClick}>切换组件</button>
      {current ? <Home></Home> : <Profile></Profile>}
    </div>
  );
}

export default MyHook;

const Home = (params) => {
  useLoggingLife("Home");
  return <h1>Home</h1>;
};

const Profile = () => {
  useLoggingLife("Profile");
  return <h1>Profile</h1>;
};

const useLoggingLife = (name) => {
  useEffect(() => {
    console.log(`${name}组件被创建出来了`);
    return () => {
      console.log(`${name}组件被销毁掉了`);
    };
  }, []);
};
