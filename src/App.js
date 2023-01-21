import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Btn from './Components/Btn';

function App() {
  const [name, setName] = useState ('');
  const [password, setPassword] = useState ('');
  const [message, setMessage] = useState ('');
  const [displayAlert, setDisplayAlert] = useState (false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayAlert(true);
    if (name == 'ADL' && password =='252525') {
      setMessage('Sesión fue iniciada correctamente');
    } else{
      setMessage('Datos Incorrectos');
    }
  };

  return (
    <div className="App container w-50">
      <h1 className="text-center">
        Bienvenido
      </h1>
      {displayAlert && <div className={`alert ${ message =='Sesión fue iniciada correctamente' ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input 
            type="text" 
            id='name' 
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }} 
            className="form-control" 
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id='password' 
            defaultValue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }} 
            className="form-control" 
          />
        </div>
        <div className="mt-3">
          { name != ''  && password != '' && <Btn text="Iniciar sesión" />}
        </div>
      </form>
    </div>
  );
}

export default App;
