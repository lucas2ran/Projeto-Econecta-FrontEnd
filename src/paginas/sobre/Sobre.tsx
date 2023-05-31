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


import React, { useEffect } from 'react';
import {Button} from '@material-ui/core';
import {Grid, Typography} from '@mui/material'
import {Box} from '@mui/material';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate , Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import { toast } from 'react-toastify';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function Sobre() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado",{
                position:"top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            navigate("/login")
        }
    }, [token])

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
      // const items = [

      //   <img src="https://cdn.discordapp.com/attachments/1094734846821138462/1113110623115554897/screenshot-17-6.png" role="presentation" style={{ marginTop: '1%', width: '80%', height: '300px' }}/>,
      //   <img src="https://cdn.discordapp.com/attachments/1094734846821138462/1113110996052103281/set-items-secondary-use-upcycling_530689-775.png" role="presentation" style={{ marginTop: '1%', width: '80%', height: '300px' }}/>,
      //   <img src="https://cdn.discordapp.com/attachments/1094734846821138462/1113111083960520724/upcycle-plastic-bottles-5526525-4622611.png" role="presentation" style={{ marginTop: '1%', width: '80%', height: '300px' }}/>,
      // ];

    return (
<>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">

                {/* <Grid item xs={12}>
                <AliceCarousel mouseTracking items={items} autoPlay autoPlayInterval={1000} infinite responsive={responsive} />                
                </Grid> */}

                <Grid alignItems="center" item xs={6}>

                    <Box >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Imagine um estilo de vida onde você pode transformar itens que iriam para o lixo em novas peças incríveis?</Typography>
                      
                    </Box>

                </Grid>

                <Grid xs={2}>
                      <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Econecta é uma rede social sustentável que une pessoas com o mesmo ideal. Com criatividade e simplicidade, a 
                        Econecta é uma plataforma que ajuda a promover um estilo de vida mais sustentável e colaborativo, enquanto ajuda a salvar o planeta. Junte-se a nós e comece a transformar o mundo em um lugar melhor, um passo de cada vez.</Typography>                
                </Grid>

                
                <Grid xs={2}>
                      <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">A Econecta é a solução perfeita para levar o conhecimento de sustentabilidade até você, de forma simples, criativa e acessível. Conecte-se com outros usuários e descubra temas incríveis de upcycling em nossa plataforma. Aqui, você encontrará inspiração, relaxamento e um estilo de vida útil ao planeta. Um verdadeiro detox das outras redes sociais. 
                        Venha transformar sua experiência online e fazer a diferença no mundo. Junte-se à Econecta agora!</Typography>
                </Grid>
          </Grid>
        </>
    );
}
export default Sobre;