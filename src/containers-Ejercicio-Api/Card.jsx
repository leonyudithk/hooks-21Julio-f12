import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CardPintar = ({ categoria }) => {

    const [pintar, setPintar] = useState([])

    useEffect(() => {
        getApi(categoria)
            .then(pintarImg => setPintar(pintarImg))
    }, [categoria])

    const getApi = async (categoria) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=5&api_key=VB3008QFTwD5SgXniRnEa6UjwcBpXkIt`
        const resp = await fetch(url)
        const { data } = await resp.json()
        console.log(data)

        const datosImpor = data.map((datos) => {
            return {
                id: datos.id,
                title: datos.title,
                url: datos.images.original.url
            }

        })
        console.log(datosImpor)
        return datosImpor

    }

    return (
        categoria !== undefined ?
            <div>
                {
                    pintar.map((img)=>(
                        <Card sx={{ maxWidth: 345 }} key={img.id}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img.url} 
                            alt="green iguana"
                        />
                       
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {img.title}
                            </Typography>
                         </CardContent>
                       
                    </Card>

                    ))
                }
            </div>
        
           
            : null
   
    );
};

export default CardPintar;