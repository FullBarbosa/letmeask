import {Link} from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {

  const {user} = useAuth()

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração sinalizando perguntas e respostas" />
        <strong>Crie salas de &amp; ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img
            src={logoImg}
            alt="letmeask"
          />
          <h1>{user?.name}</h1>
          <h2>Criar um nova sala</h2>
          <form >
            <input
              type="text"
              placeholder="Home on sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente?
            <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
