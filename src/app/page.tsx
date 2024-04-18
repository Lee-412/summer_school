import Image from 'next/image'
import styles from './page.module.css'
import { Container } from '@mui/material'
import AppHeader from '@/Component/header/header.component'

export default function Home() {
  return (
    <Container>
      <AppHeader />
    </Container>
  )
}
