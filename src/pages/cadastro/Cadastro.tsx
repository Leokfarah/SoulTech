import { Link, useNavigate } from "react-router-dom"
import Input from "../../components/input/Input"
import SoulHeader from "../../components/soulHeader/SoulHeader"
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import { User, Notes } from '../../interfaces/Interfaces'
import { useState } from "react";
import setLocalStorage from "../../utils/functions/storageFunctions";

const Cadastro: React.FC = () => {
    // const [user, setUser] = useState<User | null>(null)
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rePassword, setRePassword] = useState<string>("")
    const navigateLogin = useNavigate();

    const notes: Array<Notes> = []

    function handleClick() {
        if (!name) {
            alert('Digite um nome válido!')
            return
        }
        if (!email) {
            alert('Digite um email válido!')
            return
        }
        if (!password) {
            alert('Digite uma senha válido!')
            return
        }
        if (password !== rePassword) {
            alert('As senhas não conferem!')
            return
        }

        setLocalStorage({ name, email, password, notes })

        return navigateLogin('/')

    }

    return (
        <Grid>
            <SoulHeader href="/cadastro" titulo='CADASTRO' />

            <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={1.5}>

                <Grid item sx={{ mt: "5em" }}>
                    <Input id="nome-completo" label="Nome Completo" type="text" value={name} onChange={(e) => setName(e.target.value)}></Input>
                </Grid>

                <Grid item>
                    <Input id="email-cadastro" label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                </Grid>

                <Grid item>
                    <Input id="senha-cadastro" label='Senha' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                </Grid>

                <Grid item>
                    <Input id="repassword-cadastro" label='Repita a senha' type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)}></Input>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" style={{ marginBottom: "1em", marginTop: "1em" }} onClick={handleClick}>Cadastrar</Button>
                </Grid>

                <Grid item>
                    <Link style={{ textDecoration: 'none', color: '#808080' }} to="/">Voltar para o Login</Link>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Cadastro
