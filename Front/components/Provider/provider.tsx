// Importações necessárias

import { ApolloProvider } from "@apollo/client";
import client from "@/services/client"; // Ajuste o caminho conforme necessário
import { ReactNode } from "react";

// Componente Providers adaptado para React Native
const Providers = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Providers;
