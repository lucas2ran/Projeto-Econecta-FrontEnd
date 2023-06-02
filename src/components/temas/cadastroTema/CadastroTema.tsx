import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import "./CadastroTema.css";
import { red } from "@mui/material/colors";

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/tema/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("tema " + JSON.stringify(tema));

    if (id != undefined) {
      console.log(tema);
      put(`/tema`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Tema atualizado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      post(`/tema`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Tema cadastrado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    navigate("/tema");
  }

  return (
    <body className="bgcadtema">
      <Container maxWidth="sm" className="topo">
        <form onSubmit={onSubmit}>
          <Typography
            variant="h3"
            color="textSecondary"
            component="h1"
            align="center"
            className="titulotema"
          >
            Cadastre seu tema!
          </Typography>

          <div className="cadtemabox1">
            <Typography
              variant="h3"
              color="textSecondary"
              component="h1"
              align="center"
              className="textotema"
            >
              Sobre o que você gostaria de falar?
            </Typography>
          </div>

          <div className="cadtemabox2">
            <TextField
              value={tema.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
              id="descricao"
              label="Descrição"
              variant="outlined"
              name="descricao"
              margin="normal"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="outlinedButtonCT"
              style={{
                borderColor: "white",
                backgroundColor: "#09221a",
                color: "white",
              }}
            >
              Finalizar
            </Button>
          </div>
        </form>
      </Container>
    </body>
  );
}

export default CadastroTema;
