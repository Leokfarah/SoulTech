import {Link} from "react-router-dom"
import Input from "../../components/input/Input"
import SoulHeader from "../../components/soulHeader/SoulHeader"
import Button from '@mui/material/Button';


const Cadastro: React.FC = () => {
    return (
        <>
         <SoulHeader titulo='CADASTRO' />
         <Input label="Nome Completo"></Input>
         <Input label="E-mail"></Input>
         <Input label='Senha'></Input>
         <Input label='Repita a senha'></Input>
         <Button variant="contained">Cadastrar</Button>
         <Link to="/"><br/>Voltar para o Login</Link>
        </>
    )
}

export default Cadastro
