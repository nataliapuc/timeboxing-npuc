import { useState } from 'react';
import './App.css'; 

// Vista 1
const Login = ({ cambiarVista }) => (
  <div className="container">
    <div className="card">
      <h2 style={{ textAlign: 'center' }}>Timeboxing</h2>
      <p className="text-muted" style={{ textAlign: 'center', marginBottom: '30px' }}>
        Inicia sesión para organizar tu día
      </p>

      <div className="input-group">
        <label>Usuario o Correo</label>
        <input type="text" placeholder="nataliapuc" />
      </div>

      <div className="input-group">
        <label>Contraseña</label>
        <input type="password" placeholder="••••••••" />
      </div>

      <button className="btn" onClick={() => cambiarVista('dashboard')}>Entrar</button>
    </div>
  </div>
);

// Vista 2
const Dashboard = ({ cambiarVista }) => (
  <div className="container">
    <div className="card card-large">
      <h2>Hola de nuevo!! </h2>
      <p className="text-muted">Este es tu resumen de actividades para hoy.</p>

      <div className="grid">
        <div className="stat-box">
          <h3>3</h3>
          <p className="text-muted">Bloques completados</p>
        </div>
        <div className="stat-box">
          <h3>4</h3>
          <p className="text-muted">Bloques pendientes</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
        <button className="btn" onClick={() => cambiarVista('planificador')}>Abrir Planificador</button>
        <button className="btn btn-outline" onClick={() => cambiarVista('login')}>Cerrar Sesión</button>
      </div>
    </div>
  </div>
);

// Vista 3
const Planificador = ({ cambiarVista }) => (
  <div className="container">
    <div className="card card-large">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <h2>Tu Planificador</h2>
        <button className="btn btn-outline" style={{ width: 'auto', padding: '8px 15px' }} onClick={() => cambiarVista('dashboard')}>
          Volver
        </button>
      </div>

      <div className="timeblock">
        <strong>09:00 AM - 11:00 AM</strong>
        <p style={{ margin: '5px 0 0 0' }}>Desarrollo Frontend (React)</p>
      </div>

        <div className="timeblock" style={{ borderLeftColor: '#10b981', backgroundColor: '#ecfdf5' }}>
        <strong>11:00 AM - 11:30 AM</strong>
        <p style={{ margin: '5px 0 0 0', color: '#065f46' }}>Descanso / Café</p>
      </div>
      
      <div className="timeblock" style={{ borderLeftColor: '#f59e0b', backgroundColor: '#fffbeb' }}>
        <strong>11:30 AM - 01:30 PM</strong>
        <p style={{ margin: '5px 0 0 0', color: '#92400e' }}>Backend (NestJS API)</p>
      </div>

      <button className="btn" style={{ marginTop: '20px' }}>+ Agregar Nuevo Bloque</button>
    </div>
  </div>
);

function App() {
  const [vista, setVista] = useState('login');

  return (
    <div>
      {vista === 'login' && <Login cambiarVista={setVista} />}
      {vista === 'dashboard' && <Dashboard cambiarVista={setVista} />}
      {vista === 'planificador' && <Planificador cambiarVista={setVista} />}
    </div>
  );
}

export default App;