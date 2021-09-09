import 'tailwindcss/tailwind.css'
import 'styles/app.scss'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>АйСиТи Групп</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="ICT GROUP" />
        <meta name="keywords" content="АйСиТи Групп, Ай Си Ти Групп, Ай Си Ти, АйСиТи, АйТи Компани, АйТи, АйТүүлс, iTools, АйДэйм, iTheme, СиНэт, Cnet, Фибо Глобал, Fibo Global, Дата Сайнс, Data Science, Трэйд, Trade, ЮБИ ЭКСЧЕНЖ, UBEX, ZIP, AI Tech, АйКонтент, iContent, MIB rating, Жамуха, Jamuha" />
        <meta name="author" content="Phill Anderson" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width ,shrink-to-fit-no" />
        <link rel="icon" type="image/png" sizes="56x32" href="/images/favi.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
