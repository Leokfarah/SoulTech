import {Link} from "react-router-dom"
import Input from "../../components/input/Input"
import SoulHeader from "../../components/soulHeader/SoulHeader"
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";

const Login: React.FC = () => {
    return (
        <>
            <SoulHeader href="/" titulo='LOGIN' />
       
            <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={1.5}>
                <Grid item sx={{mt: "5em"}}>
                    <Input id="email" label="E-mail" type="text"></Input>
                </Grid>

                <Grid item>
                    <Input id="senha" label="Senha" type="password"></Input>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" style={{marginBottom: "1em", marginTop: "1em"}}>Entrar</Button>
                </Grid>

                <Grid item>
                        <Link style={{ textDecoration: 'none', color: '#808080'}} to="./cadastro">Cadastro</Link>
                </Grid>

            </Grid>

        </>
    )
}


export default Login