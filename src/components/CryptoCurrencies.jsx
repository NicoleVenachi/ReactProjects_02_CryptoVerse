import React, { useState } from 'react'

import millify from 'millify';

import { Link } from 'react-router-dom';

import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

function CryptoCurrencies({ simplified }) {

  //usando simplified, sabemos cuántas mostrar (si estoy en homepage o en la pagína de cryptos)
  //el count se lo paso al query, para hacer un limit
  const count = simplified ? 10 : 100

  //traemos el query (de la data, solo el cryptoList)
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);



  //estado para almacenar las cryptos (valor incial, los coins que trigo)
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  console.log("🚀 ~ file: CryptoCurrencies.jsx:24 ~ CryptoCurrencies ~ cryptoList?.data?.coins:", cryptoList?.data?.coins)


  //miesntras corga, smuestra loading
  if (isFetching) return 'Loading ...';

  return (

    <>
      {/* gutters, son espacios entre items [top-bottom, lef-rigth*/}
      <Row gutter={[32, 32]} className='crypto-card-container'>
        { //mapeamos cada currency y hacemos layout
          cryptos?.map((currency) => (
            //tamano total para small devices ..
            <Col xs={24} sm={12} lg={6}
              className='crypto-card'
              key={currency.id}>
              {/* dirrecionamiento dinámioco por cada currency 
                en cada col, meto la info total en una card

                hoverable
              */}

              <Link to={`/crypto/${currency.id}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className='crypto-image' src={currency.iconUrl} alt={currency.name} />}
                  hoverable
                >
                  <p> Price: {millify(currency.price)}</p>
                  <p> Market Cap: {millify(currency.marketCap)}</p>
                  <p> Daily Change: {millify(currency.change)} $</p>

                </Card>
              </Link>

            </Col>

          ))
        }
      </Row>
    </>

  )
}

export default CryptoCurrencies
