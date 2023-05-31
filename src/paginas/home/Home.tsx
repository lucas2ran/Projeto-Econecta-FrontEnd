import React, { useEffect } from 'react';
import {Button} from '@material-ui/core';
import {Grid, Typography} from '@mui/material'
import {Box} from '@mui/material';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate , Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import { toast } from 'react-toastify';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function Home() {

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
    
      const items = [

        <img src="https://cdn.discordapp.com/attachments/1094734846821138462/1113110623115554897/screenshot-17-6.png" role="presentation" style={{ marginTop: '1%', width: '80%', height: '300px' }}/>,
        <img src="https://cdn.discordapp.com/attachments/1094734846821138462/1113110996052103281/set-items-secondary-use-upcycling_530689-775.png" role="presentation" style={{ marginTop: '1%', width: '80%', height: '300px' }}/>,
        <img src="https://cdn.discordapp.com/attachments/1094734846821138462/1113111083960520724/upcycle-plastic-bottles-5526525-4622611.png" role="presentation" style={{ marginTop: '1%', width: '80%', height: '300px' }}/>,
      ];

    return (
<>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">

                <Grid item xs={12}>
                <AliceCarousel mouseTracking items={items} autoPlay autoPlayInterval={1000} infinite responsive={responsive} />                
                </Grid>

                <Grid alignItems="center" item xs={8}>

                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        
                        <Link to='/postagem' className="text-decorator-none">
                            <Button variant="outlined" className="botão">Ver Postagens</Button>
                        </Link>

                    </Box> 

                </Grid>


                <Grid xs={12} className="postagens">
                    <TabPostagem/>
                </Grid>

            </Grid>
        </>
    );
}
export default Home;