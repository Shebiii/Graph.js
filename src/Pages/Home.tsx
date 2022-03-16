import { Paper, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import StartIcon from '@mui/icons-material/Start'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import './Home.css'
function Home() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const clickHandler = () => {
    setLoading(true)
    axios
      .get('http://localhost:8080/getAllProducts')
      .then(() => {
        setLoading(false)
        console.log('success')
        navigate('/charts')
      })
      .catch((err) => {
        alert('failed to load files')
        setLoading(false)
      })
  }
  return (
    <>
      <Layout>
        <Paper elevation={3} className="paperContainer">
          <Typography variant="h3" className="pt-5 mt-5">
            Hi There!
          </Typography>
          <Typography variant="h5" className="pt-5 ">
            Click the button below to start the scrapping process
          </Typography>
          <LoadingButton
            color="info"
            onClick={clickHandler}
            loading={loading}
            endIcon={<StartIcon />}
            variant="contained"
            className="startButton"
          >
            {loading ? 'Processing' : 'Start'}
          </LoadingButton>
          {loading && (
            <Typography className="pt-3">Please be patient. It might take some time</Typography>
          )}
        </Paper>
      </Layout>
    </>
  )
}

export default Home
