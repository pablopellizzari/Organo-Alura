import './Form.css';
import TextField from '../TextField';
import DropDown from '../DropDown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {


    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onCollaboratorRegistered({
            name: name,
            role: role,
            image: image,
            team: team
        });

        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    return (
        <section className="formulary">
            <form onSubmit={handleSubmit}>
                <h1>Preencha os dados para criar o card do colaborador</h1>
                <TextField
                    label="Nome"
                    placeholder="Digite o seu nome"
                    value={name}
                    onChange={value => setName(value)}
                    required={true}
                />
                <TextField
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    value={role}
                    onChange={value => setRole(value)}
                    required={true}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite a URL da sua imagem"
                    value={image}
                    onChange={value => setImage(value)}
                />
                <DropDown
                    label="Time"
                    itens={props.teams}
                    value={team}
                    onChange={value => setTeam(value)}
                    required={true}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )



}

export default Form;