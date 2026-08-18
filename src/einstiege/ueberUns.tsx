import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rahmen } from '../Rahmen'
import { UeberUns } from '../seiten/UeberUns'
import '../styles/base.css'
import '../styles/bausteine.css'
import '../styles/seiten.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rahmen logo="dunkel">
      <UeberUns />
    </Rahmen>
  </StrictMode>
)
