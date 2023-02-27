import Inicio from 'pages/Inicio';
import { useParams } from 'react-router-dom';

export default function UserAccountManagement() {
  const { username } = useParams();
  if (username !== 'naiarapantuza') {
    return(<Inicio />);
  }
  return(
    <div>
      <h1>
        Usuário: {username}
      </h1>
    </div>
  );
}