import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, GlobalStyle } from './global'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App
