const express = require("express")
const next = require("next")
const routes = require('./routes')

var compression = require('compression')

const dev = (process.env.NODE_ENV !== "production")
const PORT = process.env.PORT || 3000

const app = next({dev})
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

app.prepare().then(()=>{
    const server = express()
    server.use(compression())
    server.use(handler)
    server.get("*", (req, res) => {
        return handle(req, res)
    })
    server.listen(PORT, err => {
        if(err) throw err
        console.log(`> Ready on http://localhost:${PORT}`)
    })
})