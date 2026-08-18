import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rahmen } from '../Rahmen'
import { Start } from '../seiten/Start'
import '../styles/base.css'
import '../styles/bausteine.css'
import '../styles/seiten.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rahmen logo="hell">
      <Start />
    </Rahmen>
  </StrictMode>
)
