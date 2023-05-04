import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

//headers de la petición a la API
const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'b837f6a487msh708c739dc03d785p1beeb5jsn1f70ef1bda8e',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
  //nombre del reducer path
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),

  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
})

export const {
  useGetCryptosQuery,
} = cryptoApi;

// const url = 
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'content-type': 'application/octet-stream',
// 		'X-RapidAPI-Key': 'b837f6a487msh708c739dc03d785p1beeb5jsn1f70ef1bda8e',
// 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// 	}
// };
