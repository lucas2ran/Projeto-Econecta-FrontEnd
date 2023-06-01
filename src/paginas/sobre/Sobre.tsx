import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import "react-alice-carousel/lib/alice-carousel.css";
function Sobre() {
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

  return (
    <>
      <Grid
        container
        alignItems={"center"}
        py={2}
        direction="row"
        className="caixa"
      >
        <Grid xs={6}>
          <Typography
            variant="h3"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="titulo"
          >
            Imagine um estilo de vida onde você pode transformar itens que iriam
            para o lixo em novas peças incríveis?
          </Typography>
          <Box display="flex" alignItems={"center"}>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              A Econecta é a solução perfeita para levar o conhecimento de
              sustentabilidade até você, de forma simples, criativa e acessível.
              Conecte-se com outros usuários e descubra temas incríveis de
              upcycling em nossa plataforma. Aqui, você encontrará inspiração,
              relaxamento e um estilo de vida útil ao planeta. Um verdadeiro
              detox das outras redes sociais. Venha transformar sua experiência
              online e fazer a diferença no mundo. Junte-se à Econecta agora!
            </Typography>

            <Divider orientation="vertical" flexItem></Divider>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Econecta é uma rede social sustentável que une pessoas com o mesmo
              ideal. Com criatividade e simplicidade, a Econecta é uma
              plataforma que ajuda a promover um estilo de vida mais sustentável
              e colaborativo, enquanto ajuda a salvar o planeta. Junte-se a nós
              e comece a transformar o mundo em um lugar melhor, um passo de
              cada vez.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={6} alignContent={"center"} textAlign={"center"}>
          <img src="https://ik.imagekit.io/0emfpelsr/four-save-planet-set-icons_603843-3157.avif?updatedAt=1684785329029" />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <AppBar position="static" style={{ backgroundColor: "#f5ebdd" }}>
          <Tabs centered indicatorColor="secondary">
            <Tab label="Desenvolvedores" value="1" className="font-text" />
          </Tabs>
        </AppBar>
      </Grid>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        paddingX="10px"
      >
        <a
          href="https://www.linkedin.com/in/christine-outi-kauffmann/"
          target="_blank"
        >
          <LinkedInIcon className="redes" />
        </a>
        <img
          src="https://github.com/chris-kauffmann.png"
          style={{ borderRadius: "300px", height: "300px", width: "300px" }}
        />

        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <a
            href="https://www.linkedin.com/in/julia-guarnieri-dev/"
            target="blank"
          >
            <img
              src="https://github.com/jubbeez.png"
              style={{ borderRadius: "300px", height: "300px", width: "300px" }}
            />
          </a>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          paddingX="10px"
        >
          <a
            href="https://www.linkedin.com/in/juliana-inocencio/"
            target="blank"
          >
            <img
              src="https://github.com/juliana-inocencio.png"
              style={{ borderRadius: "300px", height: "300px", width: "300px" }}
            />
          </a>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          paddingX="10px"
        >
          <a
            href="https://www.linkedin.com/in/lucasviniciusxavier/"
            target="blank"
          >
            <img
              src="https://github.com/lucas2ran.png"
              style={{ borderRadius: "300px", height: "300px", width: "300px" }}
            />
          </a>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          paddingX="10px"
        >
          <a
            href="https://www.linkedin.com/in/renan-gon%C3%A7alvez-a2416926b/"
            target="blank"
          >
            <img
              src="https://github.com/RenanG7.png"
              style={{ borderRadius: "300px", height: "300px", width: "300px" }}
            />
          </a>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          paddingX="10px"
        >
          <a href="https://www.linkedin.com/in/larissaparecida/" target="blank">
            <img
              src="https://github.com/lariaparecida.png"
              style={{ borderRadius: "300px", height: "300px", width: "300px" }}
            />
          </a>
        </Box>
      </Box>
    </>
  );
}
export default Sobre;
