import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
       navigate('/login')
    }
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar variant="dense">
          <Grid container justifyContent={"space-between"}>
            <Box>
              <Typography variant="h5" color="inherit">
                Econecta
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Link to="/postagem" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
              </Link>
              <Link to="/tema" >
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
              </Link>
              <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar tema
                </Typography>
              </Box>
              </Link>
              <Link to="/sobre" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Sobre nós
                  </Typography>
                </Box>
              </Link>
                <Box mx={1} className="cursor" onClick={goLogout}>
                  <Typography variant="h6" color="inherit">
                    Logout
                  </Typography>
                </Box>         
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;