import { Grid } from "@mui/material"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Title = styled.h1`
    color: black;
    font-size: 50px;
`;


const NotFound: React.FC = () =>{
    return (
        <>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item sx={{mt: "100px"}}>
                    <Title>ERROR 404</Title>
                </Grid>

                <Grid item>
                    <Link style={{ textDecoration: 'none', color: '#808080'}} to="/"><h3>Voltar para a página da SoulTech</h3></Link>
                </Grid>

            </Grid>
        </>
    )
}

export default NotFound