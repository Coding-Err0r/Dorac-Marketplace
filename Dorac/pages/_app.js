import 'bootstrap/dist/css/bootstrap.css';
import { MoralisProvider } from 'react-moralis';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={String(process.env.NEXT_PUBLIC_APP_ID)}
      serverUrl={String(process.env.NEXT_PUBLIC_SERVER_URL)}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}
export default MyApp;