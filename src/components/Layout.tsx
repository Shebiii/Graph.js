import React from 'react'
import logo from "../logo.svg";
import "../Pages/Home.css";
function Layout(props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  return (
    <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Charts</h2>
      {props.children}
    </div>
    </div>
  )
}

export default Layout