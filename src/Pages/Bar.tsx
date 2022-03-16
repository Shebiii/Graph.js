import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import BarChart from "../components/BarChart";
import { HorizontalBar } from "../components/HorizontalBar";
import Layout from '../components/Layout';
function Bar() {
  const[stores,setStores]=useState([])
  const[selectedStores,setselectedStores]=useState("")
  const [selectedOption,setselectedOption]=useState<string>("Product type");
  const [storeData,setStoreData]=useState<any>();
  useEffect(()=>{
    axios.get("http://localhost:8080/getAllStores").then((res)=>{
      console.log("res",res)
      setStores(res.data.payload.data)
      setselectedStores(res.data.payload.data[0])
      handleSelectStore(res.data.payload.data[0])
    }).catch((err)=>{
      alert("failed to load files")
    })
  },[])
  const handleSelectStore=(e:string)=>{
    if(e!==selectedStores){
    setselectedStores(e)
    axios.post("http://localhost:8080/getJsonFiles",{store:e}).then((res)=>{
      console.log("res",res)
      setStoreData(res.data.payload.data)
    }).catch((err)=>{
      alert("failed to load files")
    })}
  }
  const handleSelectType=(e:any)=>{
    setselectedOption(e)  
  }
  return (
      <>
      <Layout>
      <Dropdown className="pt-5">
  <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
    {selectedStores}
  </Dropdown.Toggle>
  <Dropdown.Menu>
    {stores.map((item)=><Dropdown.Item onClick={()=>handleSelectStore(item)}>{item}</Dropdown.Item>)}
  </Dropdown.Menu>
</Dropdown>
<Dropdown className="pt-5">
  <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
    {selectedOption}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>handleSelectType('Product type')}>By Product Type</Dropdown.Item>
    <Dropdown.Item onClick={()=>handleSelectType('By Date')}>By Date</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    <div className="size"><BarChart productTypeData={storeData?.product_by_type} dateTypeData={storeData?.product_by_date} selectedOption={selectedOption}/></div>
    <div className="size"><HorizontalBar productTypeData={storeData?.product_by_type} dateTypeData={storeData?.product_by_date} selectedOption={selectedOption}/></div>
    </Layout>
    </>
  )
}

export default Bar