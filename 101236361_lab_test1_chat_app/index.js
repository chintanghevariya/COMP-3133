const app = require('express')
const http = require('http').createServer(app)
const cors = require('cors')
const req = require('express/lib/request')
const res = require('express/lib/response')

const mongoose = require('mongoose')
const parcer = require('body-parcer')


