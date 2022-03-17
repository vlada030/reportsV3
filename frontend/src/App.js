import { useState, useEffect } from 'react';
import axios from 'axios'

import logo from './logo.svg';

function App() {

  const [connState, setConnState] = useState("proveravam...");

  

  useEffect(() => {
      const tackleBackend = async () => {
          try {
              const response = await axios({
                  method: 'post',
                //   url: "http://localhost:443/api/v1/reports/dom/1111112",
                  url: "http://localhost:443/api/v1/auth/login",
                  data: {
                    email: "vlada030@gmail.com",
                    password: "123456"
                  }
              });

              setConnState("radi - ulogovan");

          } catch (err) {
              const statusCode = err.response.status.toString(10)
              const message = err.response.data.error;

              if (statusCode.startsWith('4')) {
                  setConnState(`radi - ${message}`);
                  return
              }

              setConnState("ne radi");
          }
      };

      tackleBackend()
    }, [])

  return (
      <div className="text-center">
          <header className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-xl text-white">
              <img
                  src={logo}
                  className="h-[50vmin] pointer-events-none app-logo-animation"
                  alt="logo"
              />
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="text-[#61dafb] hover:text-[#03a2ce] transition-colors"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
              <p>Veza sa backendom ?</p>
              {connState === "proveravam..." ? (
                  <p className="text-3xl text-orange-300">{connState}</p>
              ) : connState.startsWith("radi") ? (
                  <p className="text-3xl text-green-600">{connState}</p>
              ) : (
                  <p className="text-3xl text-red-600">{connState}</p>
              )}
          </header>
      </div>
  );
}

export default App;
