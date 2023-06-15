import { useEffect } from "react";
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
import "./Sobre.css";

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
        className="bgSobre"
      >
        <Grid xs={8}>
          <Typography
            variant="h3"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="textoSobre"
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
              className="textoSobre"
            >
              A Econecta é a solução perfeita para levar o conhecimento de
              sustentabilidade até você, de forma simples, criativa e acessível.
              Conecte-se com outros usuários e descubra temas incríveis de
              upcycling em nossa plataforma. Aqui, você encontrará inspiração,
              relaxamento e um estilo de vida útil ao planeta. Um verdadeiro
              detox das outras iconeInd sociais. Venha transformar sua
              experiência online e fazer a diferença no mundo. Junte-se à
              Econecta agora!
            </Typography>

            <Divider orientation="vertical" flexItem></Divider>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textoSobre"
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
        <Grid xs={4} alignContent={"center"} textAlign={"center"}>
          <img src="https://ik.imagekit.io/0emfpelsr/Econecta__4_-removebg-preview.png?updatedAt=1686252188066" />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <AppBar position="static" style={{ backgroundColor: "#f5ebdd" }}>
          <Tabs centered indicatorColor="secondary">
            <Tab label="Desenvolvedores" value="1" className="font-text" />
          </Tabs>
        </AppBar>
      </Grid>

      {/* Grid dos desenvolvedores */}

      <Grid display="flex" flexDirection="row">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="1%"
          alignItems="center"
          style={{ backgroundColor: "#f79031" }}
        >
          <img
            src="https://github.com/chris-kauffmann.png"
            style={{ borderRadius: "300px", height: "200px", width: "200px" }}
          />

          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="titulo"
          >
            Christine Kauffmann
          </Typography>

          <Typography>
            Sempre fui muito curiosa e adorava desmontar meus brinquedos para
            entender como eles funcionavam. Minha paixão pela tecnologia vem
            desde a infancia, adorava passar horas instalando emuladores no
            computador. Tenho conhecimentos em Python, React, Bootstrap, Java,
            Spring Boot e agora estou em busca de oportunidades para aplicar
            seus conhecimentos e continuar aprendendo.
          </Typography>

          <Box display="flex">
            <a
              href="https://www.linkedin.com/in/christine-outi-kauffmann/"
              target="_blank"
            >
              <LinkedInIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>

            <a href="https://github.com/chris-kauffmann" target="_blank">
              <GitHubIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="1%"
          alignItems="center"
          style={{ backgroundColor: "#e65847" }}
        >
          <img
            src="https://github.com/jubbeez.png"
            style={{ borderRadius: "300px", height: "200px", width: "200px" }}
          />

          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="titulo"
          >
            Júlia Guarnieri
          </Typography>

          <Typography>
            Meu nome é Júlia e estudo Engenharia de Software na UNINTER. Cursei
            um ano e meio psicologia antes de me apaixonar por tecnologia.
            Recentemente realizei alguns cursos de front end e finalizei o curso
            de full stack da Generation. Atualmente trabalho em Global Operation
            Center na Sintel S.A
          </Typography>

          <Box display="flex">
            <a
              href="https://www.linkedin.com/in/julia-guarnieri-dev/"
              target="blank"
            >
              <LinkedInIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>

            <a href="https://github.com/jubbeez" target="blank">
              <GitHubIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="1%"
          style={{ backgroundColor: "#f79031" }}
          alignItems="center"
        >
          <img
            src="https://github.com/juliana-inocencio.png"
            style={{ borderRadius: "300px", height: "200px", width: "200px" }}
          />

          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="titulo"
          >
            Juliana Inocencio
          </Typography>

          <Typography>
            Estou no segundo semestre de análise e desenvolvimento de sistemas e
            sou Desenvolvedora Fullstack Java React pela Generation Brazil. Sou
            formada em direito, mas não me identifiquei com curso e decidi
            procurar uma nova direção profissional. Encontrei na tecnologia uma
            carreira e sou apaixonada pela área
          </Typography>

          <Box display="flex">
            <a
              href="https://www.linkedin.com/in/juliana-inocencio/"
              target="blank"
            >
              <LinkedInIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>

            <a href="https://github.com/juliana-inocencio" target="blank">
              <GitHubIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="1%"
          alignItems="center"
          style={{ backgroundColor: "#e65847" }}
        >
          <img
            src="https://github.com/lariaparecida.png"
            style={{ borderRadius: "300px", height: "200px", width: "200px" }}
          />

          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="titulo"
          >
            Larissa Aparecida
          </Typography>

          <Typography>
            Desde criança sou apaixonada por computadores, e encontrei na
            programação a oportunidade de transformar vidas criando facilidades.
            Com habilidades em Java, MySQL, Spring Boot, React e muito mais,
            estou em busca de um desafio profissional que me permita aplicar
            minha dedicação e paixão por esse campo fascinante.
          </Typography>

          <Box display="flex">
            <a
              href="https://www.linkedin.com/in/larissaparecida/"
              target="blank"
            >
              <LinkedInIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>

            <a href="https://github.com/lariaparecida" target="blank">
              <GitHubIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="1%"
          alignItems="center"
          style={{ backgroundColor: "#f79031 " }}
        >
          <img
            src="https://github.com/lucas2ran.png"
            style={{ borderRadius: "300px", height: "200px", width: "200px" }}
          />

          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="titulo"
          >
            Lucas Vinícius
          </Typography>

          <Typography>
            Estudante de desenvolvimento web em transição de carreira, busco
            alcançar uma colocação que me proporcionará aplicar tudo o que
            aprendi e venho aprendendo nessa área tão ampla e cheia de
            oportunidades. Recentemente concluí o BootCamp da generarion Brasil,
            onde aprendi tecnologias como: Java, Javascript,SpringBoot, React,
            TypeScript. Me sinto muito confiante para iniciar um trabalho
            muito promissor!
          </Typography>

          <Box display="flex">
            <a
              href="https://www.linkedin.com/in/lucasviniciusxavier/"
              target="blank"
            >
              <LinkedInIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>

            <a href="https://github.com/lucas2ran" target="blank">
              <GitHubIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding="1%"
          alignItems="center"
          style={{ backgroundColor: "#e65847" }}
        >
          <img
            src="https://github.com/RenanG7.png"
            style={{ borderRadius: "300px", height: "200px", width: "200px" }}
          />

          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h3"
            align="center"
            className="titulo"
          >
            Renan Gonçalves
          </Typography>

          <Typography>
            Estou em transição de carreira porem sempre tive um certo gosto por
            tudo o que envolvia tecnologia, me planejei para participar do
            bootcamp da Generation que foi meu divisor de águas, aonde descobri
            uma paixão profissional pela área de TI. Agora formado como
            desenvolvedor fullstack, estou buscando oportunidades para aplicar
            minhas habilidades técnicas e não técnicas e me encaixar no mercado
            de trabalho.
          </Typography>

          <Box display="flex">
            <a
              href="https://www.linkedin.com/in/renan-gon%C3%A7alvez-a2416926b/"
              target="blank"
            >
              <LinkedInIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>

            <a href="https://github.com/RenanG7" target="blank">
              <GitHubIcon
                fontSize="large"
                style={{ color: "white", fontSize: "50px" }}
              />
            </a>
          </Box>
        </Box>
      </Grid>

      {/* separaaaaaaaaaaaaa */}

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
          padding="2%"
          style={{ backgroundColor: "black", width: "20%" }}
        >
          <img
            src="https://github.com/chris-kauffmann.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

          <Box className="textinhoLinkedinGithub" style={{ paddingLeft: "5%" }}>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "white" }}
            >
              Christine Kauffmann
            </Typography>

            <Box display="flex">
              <a
                href="https://www.linkedin.com/in/christine-outi-kauffmann/"
                target="blank"
              >
                <LinkedInIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>

              <a href="https://github.com/chris-kauffmann" target="blank">
                <GitHubIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          padding="2%"
          style={{ backgroundColor: "black", width: "20%" }}
        >
          <img
            src="https://github.com/jubbeez.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

          <Box className="textinhoLinkedinGithub" style={{ paddingLeft: "5%" }}>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "white" }}
            >
              Júlia Guarnieri
            </Typography>

            <Box display="flex">
              <a
                href="https://www.linkedin.com/in/julia-guarnieri-dev/"
                target="blank"
              >
                <LinkedInIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>

              <a href="https://github.com/jubbeez" target="blank">
                <GitHubIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          padding="2%"
          style={{ backgroundColor: "black", width: "20%" }}
        >
          <img
            src="https://github.com/juliana-inocencio.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

          <Box className="textinhoLinkedinGithub" style={{ paddingLeft: "5%" }}>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "white" }}
            >
              Juliana Inocencio
            </Typography>

            <Box display="flex">
              <a
                href="https://www.linkedin.com/in/juliana-inocencio/"
                target="blank"
              >
                <LinkedInIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>

              <a href="https://github.com/juliana-inocencio" target="blank">
                <GitHubIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          padding="2%"
          style={{ backgroundColor: "black", width: "20%" }}
        >
          <img
            src="https://github.com/lucas2ran.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

          <Box className="textinhoLinkedinGithub" style={{ paddingLeft: "5%" }}>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "white" }}
            >
              Lucas Vinícius
            </Typography>

            <Box display="flex">
              <a
                href="https://www.linkedin.com/in/lucasviniciusxavier/"
                target="blank"
              >
                <LinkedInIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>

              <a href="https://github.com/lucas2ran" target="blank">
                <GitHubIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          padding="2%"
          style={{ backgroundColor: "black", width: "20%" }}
        >
          <img
            src="https://github.com/RenanG7.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

          <Box className="textinhoLinkedinGithub" style={{ paddingLeft: "5%" }}>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "white" }}
            >
              Renan Gonçalves
            </Typography>
            <Box display="flex">
              <a
                href="https://www.linkedin.com/in/renan-gon%C3%A7alvez-a2416926b/"
                target="blank"
              >
                <LinkedInIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>

              <a href="https://github.com/RenanG7" target="blank">
                <GitHubIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          padding="2%"
          style={{ backgroundColor: "black", width: "20%" }}
        >
          <img
            src="https://github.com/lariaparecida.png"
            style={{ borderRadius: "300px", height: "100px", width: "100px" }}
          />

          <Box className="textinhoLinkedinGithub" style={{ paddingLeft: "5%" }}>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "white" }}
            >
              Larissa Aparecida
            </Typography>
            <Box display="flex">
              <a
                href="https://www.linkedin.com/in/larissaparecida/"
                target="blank"
              >
                <LinkedInIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>

              <a href="https://github.com/lariaparecida" target="blank">
                <GitHubIcon
                  fontSize="large"
                  style={{ color: "white", fontSize: "50px" }}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Grid> */}
    </>
  );
}
export default Sobre;
