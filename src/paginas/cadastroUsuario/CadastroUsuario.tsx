import { AppBar,
  Box,
  Divider,
  Tab,
  Tabs,
  Grid
} from "@mui/material";
import { Typography, Button, TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ListaPostagem from "../../components/postagens/listaPostagem/ListaPostagem";

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
                    backgroundColor: "#09221a",
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
                  backgroundColor: "#09221a",
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
      {/* <Grid container xs={12}>
        <AppBar position="static" style={{ backgroundColor: "#f5ebdd" }}>
          <Tabs centered indicatorColor="secondary">
            <Tab label="Desenvolvedores" value="1" className="font-text" />
          </Tabs>
        </AppBar>
      </Grid>
    
      <Grid display="flex">
        <Box 
        display="flex"
        padding="2%" style={{ backgroundColor: "#1d5040", width:"20%"}}>
          <img
            src="https://github.com/chris-kauffmann.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

          <Box className="textinhoLinkedinGithub" style={{paddingLeft:"5%"}}>

            <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            style={{color:"white"}}
          >
            Christine Kauffmann
            </Typography>

              <Box display="flex">
                <a
                  href="https://www.linkedin.com/in/christine-outi-kauffmann/"
                  target="blank"
                >
                  <LinkedInIcon fontSize="large" style={{ color: "white", fontSize: "50px"}} />
                </a>

                <a href="https://github.com/chris-kauffmann" target="blank">
                  <GitHubIcon fontSize="large" style={{ color: "white",  fontSize: "50px"}} />
                </a>
              </Box>
          </Box>
        </Box>

    
        <Box 
        display="flex"
        padding="2%" style={{ backgroundColor: "#1d5040", width:"20%"}}>
          <img
            src="https://github.com/jubbeez.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

        <Box className="textinhoLinkedinGithub" style={{paddingLeft:"5%"}}>

        <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            style={{color:"white"}}
          >
            Júlia Guarnieri
        </Typography>

              <Box display="flex">
                <a
                  href="https://www.linkedin.com/in/julia-guarnieri-dev/"
                  target="blank"
                >
                  <LinkedInIcon fontSize="large" style={{ color: "white", fontSize: "50px"}} />
                </a>

                <a href="https://github.com/jubbeez" target="blank">
                  <GitHubIcon fontSize="large" style={{ color: "white",  fontSize: "50px"}} />
                </a>
              </Box>
          </Box>
        </Box>

        <Box 
        display="flex"
        padding="2%" style={{ backgroundColor: "#1d5040" , width:"20%"}}>
          <img
            src="https://github.com/juliana-inocencio.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

      <Box className="textinhoLinkedinGithub" style={{paddingLeft:"5%"}}>


            <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            style={{color:"white"}}
          >
            Juliana Inocencio
        </Typography>

          <Box display="flex">
            <a
              href="https://www.linkedin.com/in/juliana-inocencio/"
              target="blank"
            >
              <LinkedInIcon fontSize="large" style={{ color: "white", fontSize: "50px"}} />
            </a>

            <a href="https://github.com/juliana-inocencio" target="blank">
              <GitHubIcon fontSize="large" style={{ color: "white",  fontSize: "50px"}} />
            </a>
          </Box>
          </Box>
        </Box>

        <Box 
        display="flex"
        padding="2%" style={{ backgroundColor: "#1d5040" , width:"20%"}}>
          <img
            src="https://github.com/lucas2ran.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

      <Box className="textinhoLinkedinGithub" style={{paddingLeft:"5%"}}>
            <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            style={{color:"white"}}
          >
            Lucas Vinícius
            </Typography>

          <Box display="flex">
            <a
              href="https://www.linkedin.com/in/lucasviniciusxavier/"
              target="blank"
            >
              <LinkedInIcon fontSize="large" style={{ color: "white", fontSize: "50px"}} />
            </a>

            <a href="https://github.com/lucas2ran" target="blank">
              <GitHubIcon fontSize="large" style={{ color: "white",  fontSize: "50px"}} />
            </a>
          </Box>
          </Box>
        </Box>

        <Box 
        display="flex"
        padding="2%" style={{ backgroundColor: "#1d5040" , width:"20%"}}>
          <img
            src="https://github.com/RenanG7.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

      <Box className="textinhoLinkedinGithub" style={{paddingLeft:"5%"}}>


          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            style={{color:"white"}}
          >
            Renan Gonçalves
            </Typography>
          <Box display="flex">
            <a
              href="https://www.linkedin.com/in/renan-gon%C3%A7alvez-a2416926b/"
              target="blank"
            >
              <LinkedInIcon fontSize="large" style={{ color: "white", fontSize: "50px"}} />
            </a>

            <a href="https://github.com/RenanG7" target="blank">
              <GitHubIcon fontSize="large" style={{ color: "white",  fontSize: "50px"}} />
            </a>
          </Box>
          </Box>
        </Box>

        <Box 
        display="flex"
        padding="2%" style={{ backgroundColor: "#1d5040" , width:"20%"}}>
          <img
            src="https://github.com/lariaparecida.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

      <Box className="textinhoLinkedinGithub" style={{paddingLeft:"5%"}}>

          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            style={{color:"white"}}
          >
            Larissa Aparecida
            </Typography>
          <Box display="flex">
            <a
              href="https://www.linkedin.com/in/larissaparecida/"
              target="blank"
            >
              <LinkedInIcon fontSize="large" style={{ color: "white", fontSize: "50px"}} />
            </a>

            <a href="https://github.com/lariaparecida" target="blank">
              <GitHubIcon fontSize="large" style={{ color: "white",  fontSize: "50px"}} />
            </a>
          </Box>
        </Box>
    </Box>
      </Grid> */}
    </Grid>

    
  );
}

export default CadastroUsuario;
