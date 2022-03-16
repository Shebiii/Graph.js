import { Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import BarChart from '../components/BarChart'
import { HorizontalBar } from '../components/HorizontalBar'
import Layout from '../components/Layout'
function Charts() {
  const [stores, setStores] = useState<any>([])
  const [selectedStores, setselectedStores] = useState<any>('')
  const [selectedOption, setselectedOption] = useState<any>('Product type')
  const [storeData, setStoreData] = useState<any>()
  const [latestLaunchedProducts, setLatestLaunchedProducts] = useState<any>([])
  useEffect(() => {
    axios
      .get('http://localhost:8080/getAllStores')
      .then((res) => {
        console.log('res', res)
        setStores(res.data.payload.data)
        setselectedStores(res.data.payload.data[0])
        handleSelectStore(res.data.payload.data[0])
      })
      .catch((err) => {
        alert('failed to load files 1')
      })
  }, [])
  const handleSelectStore = (e: string) => {
    if (e !== selectedStores) {
      setLatestLaunchedProducts([])
      setselectedStores(e)
      axios
        .post('http://localhost:8080/getJsonFiles', { store: e })
        .then((res) => {
          console.log('res', res)
          setStoreData(res.data.payload.data)
          lastThreeMonth(res?.data?.payload?.data?.product_by_date)
        })
        .catch((err) => {
          alert('failed to load files 2')
        })
    }
  }
  const handleSelectType = (e: any) => {
    setselectedOption(e)
  }
  const lastThreeMonth = (products: any) => {
    setLatestLaunchedProducts([])
    let initalDate = new Date()
    let threeMonthDate = new Date(initalDate.setMonth(initalDate.getMonth() - 3))
    let currentDate = new Date()
    products.map((product: any) => {
      let date = new Date(product.DATE)
      if (date.getTime() < currentDate.getTime() && date.getTime() > threeMonthDate.getTime()) {
        console.log('product', product)
        setLatestLaunchedProducts((prevState: any) => [...prevState, product])
        // let launchProducts:any = [...latestLaunchedProducts]
        // launchProducts.push(product)
        // console.log("launchProducts",launchProducts)
        // setLatestLaunchedProducts(launchProducts)
      }
    })
  }
  return (
    <Layout>
      <Container maxWidth="xl">
        <Paper className="dropdownContainer">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box className=" dropdownBox">
                <Typography className="dropdownLabel pt-2">Select Store:</Typography>
                <Dropdown className="ml-5">
                  <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                    {selectedStores}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {stores.map((item: any) => (
                      <Dropdown.Item onClick={() => handleSelectStore(item)}>{item}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className=" dropdownBox">
                <Typography className="dropdownLabel pt-2">Select Type:</Typography>
                <Dropdown className="">
                  <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                    {selectedOption}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleSelectType('Product type')}>
                      By Product Type
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSelectType('By Date')}>
                      By Date
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper className="chartContainer">
          <Typography variant="h5" className="chartHeading">Product Count</Typography>
          <div className="size">
            <HorizontalBar
              productTypeData={storeData?.product_by_type}
              dateTypeData={storeData?.product_by_date}
              selectedOption={selectedOption}
            />
          </div>
        </Paper>
        <Paper className="chartContainer">
        <Typography variant="h5" className="chartHeading">Products launched in last 3 months</Typography>
          <div className="size">
            <BarChart latestLaunchedProducts={latestLaunchedProducts} />
          </div>{' '}
        </Paper>
        
      </Container>
    </Layout>
  )
}

export default Charts
