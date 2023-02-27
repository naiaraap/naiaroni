import Inicio from 'pages/Inicio';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const { username } = useParams();
  const navigate = useNavigate();
  /* if (username !== 'naiarapantuza') {
    return(<Inicio />);
  } */
  return(
    <div>
      <h1>Administradores</h1>
      <ul>
        <li>
          <Link to='/useraccountmanagement/naiarapantuza'>
            Naiara Pantuza
          </Link>
        </li>
      </ul>
    </div>
  );
}
//onClick={() => navigate('/useraccountmanagement/naiarapantuza')}