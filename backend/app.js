import express from 'express'
import bodyParser from 'body-parser'
import routerGet from "./rotas/rotaGet.js";

const app = express();

app.use(bodyParser.json())
app.use((_req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next()
})

app.use(routerGet)

export default app
