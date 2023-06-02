import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Grid, Typography,  AppBar,
  Box,
  Divider,
  Tab,
  Tabs,
} from "@mui/material";
import "./Home.css";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import { toast } from "react-toastify";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ListaPostagem from "../../components/postagens/listaPostagem/ListaPostagem";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

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

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <img
      src="https://www.decorfacil.com/wp-content/uploads/2019/04/20190425upcycling-6.jpg"
      role="presentation"
      style={{ marginTop: "20%", width: "100%", height: "350px" }}
    />,
    <img
      src="https://www.decorfacil.com/wp-content/uploads/2019/04/20190425upcycling-20.jpg"
      role="presentation"
      style={{ marginTop: "20%", width: "100%", height: "350px" }}
    />,
    <img
      src="https://www.decorfacil.com/wp-content/uploads/2019/04/20190425upcycling-22.jpg"
      role="presentation"
      style={{
        marginTop: "20%",
        width: "100%",
        height: "350px",
      }}
    />,
    <img
      src="https://www.decorfacil.com/wp-content/uploads/2019/04/20190425upcycling-33.jpg"
      role="presentation"
      style={{
        marginTop: "20%",
        width: "100%",
        height: "350px",
      }}
    />,
    <img
      src="https://www.decorfacil.com/wp-content/uploads/2019/04/20190425upcycling-47.jpg"
      role="presentation"
      style={{
        marginTop: "20%",
        width: "100%",
        height: "350px",
      }}
    />,
    <img
      src="https://www.decorfacil.com/wp-content/uploads/2019/04/20190425upcycling-52.jpg"
      role="presentation"
      style={{
        marginTop: "20%",
        width: "100%",
        height: "350px",
      }}
    />,
    <img
      src="https://www.decorfacil.com/wp-content/uploads/2019/04/20190425upcycling-59.jpg"
      role="presentation"
      style={{
        marginTop: "20%",
        width: "100%",
        height: "350px",
      }}
    />,
  ];

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid item xs={12}></Grid>

        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6} paddingRight={"20px"}>
          <AliceCarousel
            animationType="fadeout"
            mouseTracking
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            responsive={responsive}
          />
        </Grid>

        <Grid xs={12} className="postagens bgHome">
                    <TabPostagem />
<Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>

            <Link to="/postagem" className="text-decorator-none">
              <Button variant="outlined" className="botão">
                Ver Postagens
              </Button>
            </Link>
          </Box>
          <ListaPostagem/>
        </Grid>
      </Grid>

      <Grid container xs={12}>
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
      </Grid>
    </>
  );
}
export default Home;
