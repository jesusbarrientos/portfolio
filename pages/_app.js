import '../styles/styles.css'
import { Provider } from 'react-redux'
import store from './../redux/store'
import ThemeProvider from '../components/ThemeProvider'

function App({ Component, pageProps }) {
    return (
		<Provider store={store}>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
		</Provider>
	)
}

export default App
