import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import "./Home.css";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import { toast } from "react-toastify";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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
        </Grid>
      </Grid>
    </>
  );
}
export default Home;
