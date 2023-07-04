import { Container, Profile } from './styles'

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/hyanmarcos.png" alt="Foto do usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Hyan Martins</strong>
                </div>
            </Profile>
            
        </Container>
    )
}