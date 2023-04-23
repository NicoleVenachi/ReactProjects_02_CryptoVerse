import React from 'react'

import {Routes, Route, Link} from 'react-router-dom'

import {Layout, Typography, Space} from 'antd'

import {NavBar, Homepage, Exchanges, CryptoCurrencies, CryptoDetails, News} from './components'
// , Layout, Footer
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='navBar'> 
        <NavBar />
      </div>

      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={ <Homepage /> }/>
              <Route path='/exchanges' element={ <Exchanges /> }/>
              <Route path='/cryptoCurrencies' element={ <CryptoCurrencies /> }/>
              <Route path='/crypto/:coinId' element={ <CryptoDetails /> }/>
              <Route path='/news' element={ <News /> }/>
              <Route path='*' element={ <p> Not Found</p> }/>
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title 
            level={5} 
            style={{color:'white', textAlign: 'center'}}
          >
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>

          <Space>
            <Link to='/'> Home </Link>
            <Link to='/exchanges'> Exchanges </Link>
            <Link to='/news'> News </Link>
          </Space>
        </div>
      </div>

      
    </div>
  )
}

export {App}
