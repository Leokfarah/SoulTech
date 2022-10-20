import {Link} from "react-router-dom"
import Input from "../../components/input/Input"
import SoulHeader from "../../components/soulHeader/SoulHeader"
import Button from '@mui/material/Button';

const Login: React.FC = () => {
    return (
        <>
            <SoulHeader titulo='LOGIN' />
            <Input label="E-mail"></Input>
            <Input label='Senha'></Input>
            <Button variant="contained">Entrar</Button>
            <Link to="./cadastro"><br />Cadastro</Link>
        </>
    )
}


export default Login