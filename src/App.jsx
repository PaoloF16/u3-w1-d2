import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import AlertLibrary from "./AlertLibrary"
import AllTheBooks from "./AllTheBooks"
import SingleBook from "./SingleBook"
import BookList from "./BookList"

function App() {
  return (
    <>
      <section className="d-flex flex-column min-vh-100">
        <header>
          <NavBar />
        </header>
        <main className="flex-grow-1">
          <AlertLibrary></AlertLibrary>
          {/* Welcome Alert */}
          <BookList></BookList>

          {/* Area Single Book */}
          <AllTheBooks></AllTheBooks>
          {/* Area Books */}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </section>
    </>
  )
}

export default App
