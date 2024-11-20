import express, {Request, Response} from 'express'; 
import cors from 'cors'; 

const app = express(); 

app.use(cors());
app.use(express.json()); 
interface RegisterRequestBody { 
  username: string, 
  password: string, 

}
app.post('/register', (req: Request<{}, {}, RegisterRequestBody>, res:Response)=> {
  const {username, password} = req.body; 
  res.status(200).json({msg: username, password});
})

app.listen(4000);
