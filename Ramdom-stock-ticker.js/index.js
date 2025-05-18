import { getStockData } from "./fakeStockAPI.js";

console.log(getStockData())
setInterval(() => {
    const stockData = getStockData()
    renderStockTicker(stockData)
}, 1500);

let prevPrice = null
function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    const {name, sym, price, time} = stockData

    const priceDirectionIcon = price > prevPrice? "🟢" : prevPrice > price ? "🔻" : "⚫"
    const priceElement = document.createElement('p')
    priceElement.textContent = priceDirectionIcon
    stockDisplayPriceIcon.innerText = ''
    stockDisplayPriceIcon.appendChild(priceElement)


    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time

    prevPrice = price
}

