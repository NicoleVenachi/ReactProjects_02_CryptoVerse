import React from 'react'

import millify from 'millify'

import { Typography, Row, Col, Statistic } from 'antd'

import { Link } from 'react-router-dom'

//api
import { useGetCryptosQuery } from '../services/cryptoApi'
import { CryptoCurrencies, News } from './'

//destructuro Typo y le saco Title
const { Title } = Typography



//Redux toolkit para hacer fetch de data
function Homepage() {

  //en homepage siempre traigo 10 unicamente, para alivianar el query
  const { data, isFetching } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  //si está cargando los datos, aviso
  if (isFetching) return 'Loading ....'

  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>

      <Row>
        <Col span={12}>
          <Statistic
            title='Total Cryptocurrencies'
            value={globalStats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Exchange'
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Market Cap'
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total 24h Volume'
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title='Total Markets'
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'> Top 10 Crypto currencies in the wolrd</Title>
        <Title level={3} className='show-more'>
          <Link to="/cryptocurrencies"> Show more </Link>
        </Title>
      </div>

      <CryptoCurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'> Latest Crypto news </Title>
        <Title level={3} className='show-more'>
          <Link to="/news"> Show more </Link>
        </Title>
      </div>

      <News simplified />
    </>

  )
}

export default Homepage
