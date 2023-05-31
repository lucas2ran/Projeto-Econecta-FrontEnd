import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
      dispatch(addToken(''));
      toast.info('Usuario deslogado',{
        position:"top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    })
      navigate('/login')
  }

    var navbarComponent;

    if(token != "") {
      navbarComponent =
        <AppBar position="static" style={{ backgroundColor: "#f5ebdd" }}>
        <Toolbar variant="dense">
          <Grid container justifyContent={"space-between"}>
            <Box>
              <Typography variant="h5" color="#32301d">
                <img style={{height: "33px"}} src="https://ik.imagekit.io/0emfpelsr/Econecta__4__-_Copia-removebg-preview.png?updatedAt=1685458339025%22"></img>
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start" >
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" className="cursor" >
                    Home
                  </Typography>
                </Box>
              </Link>
              <Link to="/postagem" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" className="cursor">
                  Postagens
                </Typography>
              </Box>
              </Link>
              <Link to="/tema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" className="cursor">
                  Temas
                </Typography>
              </Box>
              </Link>
              <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" className="cursor">
                  Cadastrar tema
                </Typography>
              </Box>
              </Link>
              <Link to="/sobre" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit" className="cursor">
                    Sobre nós
                  </Typography>
                </Box>
              </Link>
                <Box mx={1} className="cursor" onClick={goLogout}>
                  <Typography variant="h6" color="inherit" className="cursor">
                    Logout
                  </Typography>
                </Box>         
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>

    }

  return (
    <>
    {navbarComponent}
    </>
  );
}
export default Navbar;