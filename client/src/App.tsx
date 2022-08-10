import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useGoogleOneTapLogin } from '@react-oauth/google';

import { useStore } from './hooks/useStore';
import Profile from './components/Profile';
function App() {
  const { authData } = useStore();

  const setAuthData = useStore((state: any) => state.setAuthData);
  return (
    <div className='App'>
      <GoogleOAuthProvider clientId='1028953907365-4bh5l4c74dinjmur0klu663p1kbdfhdg.apps.googleusercontent.com'>
        <div>
            <GoogleLogin
              useOneTap
              onSuccess={async (credentialResponse) => {
                const response = await axios.post(
                  'http://localhost:3001/login',
                  {
                    token: credentialResponse.credential,
                  }
                );
                const data = response.data;

                localStorage.setItem('authData', JSON.stringify(data));
                setAuthData(data);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
l        </div>

        <Profile />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
