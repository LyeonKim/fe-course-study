// import '@/styles/globals.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

function App({ Component, pageProps }) {
  //모든 페이지에서 해당 client를 알 수 있도록, <ApolloClient>를 만들어 client 변수값을 받고, <Component>를 감싸준다
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
      /*
        uri ?
        = protocol(scheme) + URN + URL
          (+) urn url은 교집합을 가진다
      */ 

    cache: new InMemoryCache()
  });

  return (
      <ApolloProvider client={client}> 
        <Component {...pageProps} />
      </ApolloProvider>
    )
}

export default App;
