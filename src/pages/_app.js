import { GeneralLayout } from "@/component/layout";
import "@/styles/globals.css";
import { Lexend, Lato, Noto_Sans } from "next/font/google";
import store from "@/redux/store";
import { Provider } from "react-redux";

const lexend = Lexend({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });
const notoSans = Noto_Sans({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const renderWithLayout =
    Component.setLayout ||
    function (page) {
      return <GeneralLayout>{page}</GeneralLayout>;
    };
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        {renderWithLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  );
}
