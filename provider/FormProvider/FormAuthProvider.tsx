import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState
} from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

interface Props {
  // types
  children?: ReactNode | undefined;
}

const AuthContext = createContext(undefined);

// user signup account
export const auth = getAuth();
const SignUpAccount = (email: any, password: any) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const useAuth = () => useContext(AuthContext);

export const FormAuthProvider: FC<Props> = ({ children }) => {
  // intial store values

  const [user, setUser] = useState<string | null | undefined>();
  const [JWT, setJWT] = useState<string | null | undefined>();

  const initialUserState = {
    user,
    JWT
  };

  return (
    <>
      <AuthContext.Provider value={initialUserState}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default useAuth;
