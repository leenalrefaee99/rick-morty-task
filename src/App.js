import logo from './logo.svg';
import './App.css';
import { client } from "./ApolloClient/client";
import { ApolloProvider } from '@apollo/client';
import Characters from './characters';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Characters/>
      </div>
    </ApolloProvider>
  );
}

export default App;
