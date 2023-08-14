import '@/assets/css/bootstrap.min.css';
import "@/assets/css/magnific-popup.css"
import "@/assets/css/font-icons.css"
import "@/assets/css/sliders.css"
import "@/assets/css/style.css"
import "@/assets/css/animate.min.css"

export const metadata = {
  title: "Cool Store",
  description: "Tienda en linea para la venta de ropa deportiva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google fonts */}
        <link
          href="http://fonts.googleapis.com/css?family=Maven+Pro:400,700%7CRaleway:300,400,700%7CPlayfair+Display:700"
          rel="stylesheet"
        ></link>

        {/* favicons */}
        <link
          href="http://fonts.googleapis.com/css?family=Maven+Pro:400,700%7CRaleway:300,400,700%7CPlayfair+Display:700"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="img/favicon.ico" />
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="img/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="img/apple-touch-icon-114x114.png"
        />
      </head>
      <body className="relative">
        {/* <Loader /> */}
        {children}
        </body>
    </html>
  );
}
