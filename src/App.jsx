import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { CoL, Row } from "react-bootstrap"
import AlertLibrary from "./AlertLibrary"
import AllTheBooks from "./AllTheBooks"

function App() {
  return (
    <>
      <section className="d-flex flex-column min-vh-100">
        <header>
          <NavBar />
        </header>
        <main className="flex-grow-1">
          <AlertLibrary></AlertLibrary>
          <Row>
            <CoL className="d-flex flex-column ">
              <AllTheBooks></AllTheBooks>
            </CoL>
          </Row>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </section>
    </>
  )
}

export default App
