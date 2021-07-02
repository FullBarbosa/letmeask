import {Link, useHistory} from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

 
export function NewRoom() {

  const {user} = useAuth();
  const [newRoom, setNewRoom] = useState(''); 
  const history = useHistory();

 async function handleCreateRoom(event:FormEvent){
   event.preventDefault();

   if(newRoom.trim() === ''){
    return;
   }

   const roomRef = database.ref('rooms');

   const firebaseRoom = await roomRef.push({
     title: newRoom,
     authorId: user?.id,
   })

   history.push(`/room/${firebaseRoom.key}`)
 }

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
        
          <h2>Criar um nova sala</h2>
          <form onSubmit={handleCreateRoom} >
            <input
              type="text"
              placeholder="Home on sala"
              onChange={event => setNewRoom(event.target.value)}
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
