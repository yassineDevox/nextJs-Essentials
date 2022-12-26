import { AppProps } from "next/app"
import { PersistGate } from "redux-persist/integration/react"
import { store } from "store"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"

const App = ({ Component, pageProps }: AppProps) => {
  
  if (typeof window == "undefined") return <Provider store={store}>hello bro !</Provider>

  return <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)} >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </>
}
export default App