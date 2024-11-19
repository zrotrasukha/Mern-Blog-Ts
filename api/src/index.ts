import express, {Request, Response} from 'express'; 
import cors from 'cors'; 

const app = express(); 

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4000'], // Allow these origins
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json()); 

app.post('/register', (req: Request, res:Response)=> {
  res.json({msg: 'everything is okay!'});
})

app.listen(4000); 
