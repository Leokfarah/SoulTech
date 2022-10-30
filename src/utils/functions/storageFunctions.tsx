import { User, Notes } from "../../interfaces/Interfaces";

export default function setLocalStorage({ name, email, password, notes }: User) {

    const User: User = {
        name: name,
        email: email,
        password: password,
        notes: notes,
    }

    if (localStorage.getItem(email)) {
        alert('Usuário já cadastrado')
        return
    }

    alert('Conta Criada com sucesso!')

    localStorage.setItem(email, JSON.stringify(User))
}
