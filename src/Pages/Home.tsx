
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Layout from '../components/Layout';
import logo from "../logo.svg";
import "./Home.css"
function Home() {
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
    const clickHandler=()=>{
      setLoading(true)
      // navigate("/bar")
    }
  return (<>
    {loading?
      <div className='loader'><img src={logo} className="App-logo" alt="logo" style={{height:"200px"}}/></div>:
   <Layout>
      <Button variant="dark" onClick={clickHandler} className="mt-5">Call Products</Button>
  </Layout>}
  </>
  )
}

export default Home