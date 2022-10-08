import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import styles from '../styles/global.module.css'

function MyApp({ Component, pageProps }) {
    const location = useRouter()
    if (location.pathname === '/home') {
        return (
            <Component {...pageProps} />
        )
    } else {
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
}

export default MyApp