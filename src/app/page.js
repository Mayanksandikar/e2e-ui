import Image from 'next/image'
import { Footer } from './Footer'
import { Header } from './Header'
import styles from './page.module.css'
import { Register } from './Register'

export default function Home() {
  return (
    <div>
     <Header/>
     <Register/>
     
     <Footer/>
     
    </div>
    )
}
