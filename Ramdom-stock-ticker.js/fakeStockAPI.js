export function getStockData() {
    return {
        name: 'KhanCORP',
        sym: 'KHA',
        price: (Math.random()*3).toFixed(2),
        time: new Date().toLocaleTimeString()
}}