import React from 'react'

import millify from 'millify'

import { Typography, Row, Col, Statistic } from 'antd'

import { Link } from 'react-router-dom'

//api
import { useGetCryptosQuery } from '../services/cryptoApi'

//destructuro Typo y le saco Title
const { Title } = Typography



//Redux toolkit para hacer fetch de data
function Homepage() {

  const { data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;
  console.log("🚀 ~ file: Homepage.jsx:23 ~ Homepage ~ globalStats:", globalStats)

  console.log("🚀 ~ file: Homepage.jsx:22 ~ Homepage ~ data:", data);

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
    </>

  )
}

export default Homepage
