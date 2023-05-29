import { useState } from "react";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import Login from "./paginas/login/Login";
import "./App.css";
import Sobre from "./paginas/sobre/Sobre";
import ListaPostagem from "./components/postagens/listaPostagem/ListaPostagem";
import ListaTema from "./components/temas/listaTema/ListaTema";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import store from "./store/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (

    <Provider store={store}>
          <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div style={{ minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<CadastroUsuario />} />
              <Route path="/tema" element={<ListaTema />} />
              <Route path="/postagem" element={<ListaPostagem />} />
              <Route path="/formularioPostagem" element={<CadastroPost />} />
              <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </Provider>

  );
}

export default App;
