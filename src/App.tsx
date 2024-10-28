import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle from './global'
function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <ListaVagas />
    </>
  )
}

export default App
