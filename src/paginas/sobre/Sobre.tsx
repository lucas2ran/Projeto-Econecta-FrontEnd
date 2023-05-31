// import React from 'react';
// import './Sobre.css';
// import { Box, Button, Grid, TextField, Typography } from '@mui/material';

// function Sobre() {
//   return (
//     <Grid
//       container
//       alignItems={'center'}
//       justifyContent={'center'}
//       className="container"
//     >
//       <Box className="card">
//         <form className="form">
//           <Typography variant="h3" align="center" textTransform={'uppercase'} className="form-title" color='#fff'>
//             Sobre
//           </Typography>
//           <Box className="form-input">

//           </Box>
//           <Box className="form-input">

//           </Box>

//         </form>
//       </Box>
//     </Grid>
//   );
// }

// export default Sobre;

import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
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
      <Grid container direction="row" className="caixa">
        <Grid item xs={6}>
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
        </Grid>

        <Grid container>
          <Grid item xs>
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
          </Grid>
          <Divider orientation="vertical" flexItem></Divider>
          <Grid item xs>
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
          </Grid>
          <Grid xs={6} style={{ padding: "30px", alignItems: "center" }}>
            <Box>
              <img
                src="https://ik.imagekit.io/0emfpelsr/four-save-planet-set-icons_603843-3157.avif?updatedAt=1684785329029"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default Sobre;
