import React from 'react'

import BarChart from "../components/BarChart";
import { HorizontalBar } from "../components/HorizontalBar";
import Layout from '../components/Layout';
function Bar() {
  return (
      <>
      <Layout>
    <div className="size"><BarChart/></div>
    <div className="size"><HorizontalBar/></div>
    </Layout>
    </>
  )
}

export default Bar