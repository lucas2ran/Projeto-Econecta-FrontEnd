import * as React from 'react';
import { Button, Box, Grid, Paper, Typography } from '@mui/material'
import './Home.css'

function Home() {
    return (
        <Grid container gap={4} alignItems={'center'} justifyContent={'center'} style={{ backgroundColor: '#3e5997' }}>
            <Grid item xs={4}>
                <Box p={8} color={'white'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2}>
                    <Typography align='center' fontWeight={900} variant='h3'>Sejam todos muito bem vindos!</Typography>
                    <Typography align='center' variant='body1'>Expresse suas idéias e se conecte com os demais...</Typography>
                    <Button variant='outlined' className='outlinedButton'>Ver Postagens</Button>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <img src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-reciclagem_114360-9307.jpg?t=st=1684336352~exp=1684336952~hmac=1ee8dff85938cb6c2e7aa1af4161af426b5db699c4f70ade9a7d0a4cb4501f82"
                 alt="" width={'100%'} />
            </Grid>
        </Grid>
    );
}
export default Home;