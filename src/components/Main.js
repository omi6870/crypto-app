import React, { useEffect, useState } from 'react'
import './Main.css';
import axios from 'axios';
import Coin from './Coin';




function  Main() {

    const[coins, setCoins]=useState([])
    const [Search , setSearch]=useState("")

useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(res=>{
       
        setCoins(res.data);
    }).catch(error=>{
        console.log(error)
    })
},[])
// console.log(coins)

const handelChange=(e)=>{
    setSearch(e.target.value)
   
}

const filteredCoins =coins.filter(Coin=>
Coin.name.toLowerCase().includes(Search.toLocaleLowerCase())

)

  return (
    <div className='coin-app'>
<div className='coin-search'>
    <h1 >Search a currency</h1>
    <input type="text" placeholder='Search here' onChange={handelChange}></input>
</div><br/><br/>
{filteredCoins.map((coin)=>{
return(
    <Coin
    key={coin.id}
    name={coin.name}
    image={coin.image}
    symbol={coin.symbol}
    volume={coin.total_volume}
    price={coin.current_price}
    priceChange={coin.price_change_percentage_24h}
    marketcap={coin.market_cap}
    />
)
})}
    </div>
  )
}

export default Main;