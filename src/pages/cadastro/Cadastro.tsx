import {Link} from "react-router-dom"
import Input from "../../components/input/Input"
import SoulHeader from "../../components/soulHeader/SoulHeader"
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";


const Cadastro: React.FC = () => {
    return (
        <>
         <SoulHeader href="/cadastro" titulo='CADASTRO' />
       
        <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={1.5}>
            <Grid item sx={{mt: "5em"}}>
                <Input id="nome-completo" label="Nome Completo" type="text"></Input>
            </Grid>

            <Grid item>
                <Input id="email-cadastro" label="E-mail" type="email"></Input>
            </Grid>

            <Grid item>
                <Input id="senha-cadastro" label='Senha' type="password"></Input>
            </Grid>

            <Grid item>
                <Input id="repassword-cadastro" label='Repita a senha' type="password"></Input>
            </Grid>

            <Grid item xs={12}>
                <Button variant="contained" style={{marginBottom: "1em", marginTop: "1em"}}>Cadastrar</Button>
            </Grid>

            <Grid item>
                <Link style={{ textDecoration: 'none', color: '#808080'}} to="/">Voltar para o Login</Link>
            </Grid>

        </Grid>
</>

    )
}

export default Cadastro
