import { Button } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Button >Hello there </Button>
      <Landing/>
    </div>
  )
}
