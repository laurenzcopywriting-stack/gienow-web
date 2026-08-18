import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rahmen } from '../Rahmen'
import { Fingerapotheke } from '../seiten/Fingerapotheke'
import '../styles/base.css'
import '../styles/bausteine.css'
import '../styles/seiten.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rahmen logo="hell">
      <Fingerapotheke />
    </Rahmen>
  </StrictMode>
)
