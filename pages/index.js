import styles from '../styles/Home.module.css';
import Main from './components/Main';
import axios from 'axios';
import { useState } from 'react';


const backendUrl = process.env.NEXT_PUBLIC_THINGS_API;
const tokenUrl = `${backendUrl}api/token/`;
export default function Home() {
  const [token, setToken] = useState('');
  const [refresh, setRefresh] = useState('');

  const logIn = async ()=>{
    // console.log(process.env.NEXT_PUBLIC_THINGS_API)
    const config = {
      username:"admin",
      password:"abcd1234"
    }
    const authTokens=await axios.post(tokenUrl, config);
    setToken(authTokens.data.access);
    setRefresh(authTokens.data.refresh);

  }
  if(!token){
    return(<>
    <button onClick={logIn}>Login</button>
    </>)
  }
  return (
    <div className={styles.container}>
      <Main token = {token} refresh= {refresh}/>
    </div>
  )
}
