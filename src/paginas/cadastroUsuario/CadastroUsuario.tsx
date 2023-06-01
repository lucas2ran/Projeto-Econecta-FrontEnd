import { Box } from "@mui/material";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let history = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });
  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });
  useEffect(() => {
    if (userResult.id != 0) {
      history("/login");
    }
  }, [userResult]);
  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      toast.success("Usuario cadastrado com sucesso", {
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
      toast.error(
        "Dados inconsistentes. Favor verificar as informações de cadastro.",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        }
      );
    }
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="imagem2"
    >
      <Grid alignItems="center">
        <Box className="login-card1 card-header1 card-body1">
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textosL"
            >
              Cadastrar
            </Typography>
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Digite seu e-mail"
              variant="outlined"
              name="usuario"
              margin="normal"
              type="text"
              fullWidth
              className="custom-txfield"
            />
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Digite seu nome"
              variant="outlined"
              name="nome"
              margin="normal"
              type="text"
              fullWidth
              className="custom-txfield"
            />
            <TextField
              value={user.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="foto"
              label="URL da foto"
              variant="outlined"
              name="foto"
              margin="normal"
              type="text"
              fullWidth
              className="custom-txfield"
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Digite uma senha com no minimo 8 caracteres"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
              className="custom-txfield"
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="Confirmar Senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
              className="custom-txfield"
            />

            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button
                  className="outlinedButtonC  btnCancelar"
                  variant="contained"
                  color="secondary"
                  style={{
                    borderColor: "white",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                className="outlinedButtonC"
                variant="contained"
                color="secondary"
                type="submit"
                style={{
                  borderColor: "white",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Cadastrar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Já tem uma conta?
              </Typography>
            </Box>
            <Link to="/login" className="text-decoration">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textoLink"
              >
                {" "}
                Clique aqui para logar
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
