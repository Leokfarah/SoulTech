import { Link, useNavigate } from "react-router-dom"
import Input from "../../components/input/Input"
import SoulHeader from "../../components/soulHeader/SoulHeader"
import Button from '@mui/material/Button';
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigateHome = useNavigate();
    const estaLogado = localStorage.getItem('usuarioLogado');

    useEffect(() => {

        if (estaLogado) {
            return navigateHome('/home');
        }

    }, []);

    function clickLogButton() {
        if (!email) {
            alert('Digite um email válido!');
            return
        }

        if (!password) {
            alert("Digite sua senha");
            return
        }

        const validaUsuario = JSON.parse(localStorage.getItem(email) || "{}")

        if (validaUsuario.email !== email) {
            alert("Email inválido");
            return
        }

        if (validaUsuario.password !== password) {
            alert("Senha não confere");
            return
        }

        localStorage.setItem('usuarioLogado', validaUsuario.email)

        alert(`Bem vindo, ${validaUsuario.name}`);
        return navigateHome('/home')
    }

    return (
        <>
            <SoulHeader href="/" titulo='LOGIN' />

            <Grid container direction="column" justifyContent="center" alignItems="center" rowSpacing={1.5}>
                <Grid item sx={{ mt: "5em" }}>
                    <Input id="email" label="E-mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                </Grid>

                <Grid item>
                    <Input id="senha" label="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" style={{ marginBottom: "1em", marginTop: "1em" }} onClick={clickLogButton}>Entrar</Button>
                </Grid>

                <Grid item>
                    <Link style={{ textDecoration: 'none', color: '#808080' }} to="./cadastro">Cadastro</Link>
                </Grid>
            </Grid>
        </>
    )
}

export default Login