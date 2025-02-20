import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import client from "@/lib/graphql/apollo-client";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
