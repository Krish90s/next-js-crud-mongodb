import Main_Layout from "../Components/Layouts/main_layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Main_Layout>
      <Component {...pageProps} />
    </Main_Layout>
  );
}

export default MyApp;
