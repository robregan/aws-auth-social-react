import React from 'react';
import Game from './components/Game'
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default theme
import Auth from 'aws-amplify'
import aws_exports from './aws-exports'
Auth.configure(aws_exports)

const App = () => {
 const { signOut } = useAuthenticator()
 const styles = {
  width: '200px',
  margin: '0 auto',
  alignItems: 'center',
};

 return(
   <>
  <Game />
  <button styles={styles} onClick={signOut}>Sign Out</button>
  </>
 ) 
}
export default withAuthenticator(App);
