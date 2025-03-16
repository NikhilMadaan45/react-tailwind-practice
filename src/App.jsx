import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";


export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}