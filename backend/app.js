const start = require('./logic/main')
const writeFile = require('./util/writeFile')

const writeFile_path = './data/download/month_aapl_minute_data.csv'
const readFile_path = './data/download/month_aapl_minute_data.csv'

// writeFile(writeFile_path)
start(readFile_path)

// node app