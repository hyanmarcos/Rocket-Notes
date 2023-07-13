import { Container, Form, Background } from './styles'

import { Input } from '../../components/input'
import { FiMail, FiLock } from 'react-icons/fi'

import { Button } from '../../components/Button'

export function SignIn() {
    return(
        <Container>

            <Form action="">
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e grrenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input type="text" placeholder='E-mail' icon={FiMail} />

                <Input type="password" placeholder='Senha' icon={FiLock} />

                <Button title='Entrar' />

                <a href="#">
                    Criar Conta
                </a>
            </Form>

            <Background/>

        </Container>

    )
}