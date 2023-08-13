export const metadata = {
  title: "Cool Store",
  description: "Tiendo en linea para la venta de ropa deportiva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/css/style.css"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/css/magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/css/font-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/css/sliders.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/css/style.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/yohanangulo/cdn/css/animate.min.css"
        />

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
      <body className="relative">{children}</body>
    </html>
  );
}
