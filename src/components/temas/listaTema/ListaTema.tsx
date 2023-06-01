import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])
        let navigate = useNavigate();
        const dispatch = useDispatch();
        const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
        );

  useEffect(()=>{
    if(token == ''){
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

    // async function getTema(){
    //     await busca("/temas", setTemas, {
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    // }

  async function getTema(){
        
    try {
        await busca("/tema", setTemas, {
        headers: {
        'Authorization': token
        }
    })
    } catch (error: any) {
        if(error.toString().includes('403')) {
            toast.info('O seu token expirou, logue novamente!',{
              position:"top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
          })


            dispatch(addToken(''));
            navigate('/login')
        }
    }
}


  useEffect(()=>{
    getTema()
  }, [temas.length])
  return (
    <>
    <body className="bgposttemas">
    <Typography variant="h3" color="textSecondary" component="h1" align="center" className="titulotema" style={{padding: "35px"}}>Temas que você encontra por aqui...</Typography>

<Box display="flex" flexDirection="row" >

{temas.map(tema =>(
  <Box m={2}>
    
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Tema
        </Typography>
        <Typography variant="h5" component="h2">
          {tema.descricao}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="center" mb={1.5} >

          <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
            <Box mx={1}>
              <Button variant="contained" className="marginLeft outlinedButtonD" size='small' 
                  style={{
                    borderColor: "white",
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold"
                  }}>
                atualizar
              </Button>
            </Box>
          </Link>
          <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
            <Box mx={1}>
              <Button variant="contained" size='small' className="outlinedButtonD"
                  style={{
                    borderColor: "white",
                    backgroundColor: "orangered",
                    color: "white",
                    fontWeight: "bold"
                  }}>
                deletar
              </Button>
            </Box>
          </Link>
        </Box>
      </CardActions>
    </Card>

    
  </Box>
  ))
}

</Box>

    </body>
    
      
    </>
  
  );
}


export default ListaTema;