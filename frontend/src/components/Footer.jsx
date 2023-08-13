const Footer = () => {
  return (
    <footer className="footer footer-type-1 bg-white">
      <div className="container">
        <div className="footer-widgets top-bottom-dividers pb-mdm-20">
          <div className="row">
            <div className="col-md-2 col-sm-4 col-xs-4 col-xxs-12">
              <div className="widget footer-links">
                <h5 className="widget-title uppercase">Información</h5>
                <ul className="list-no-dividers">
                  <li>
                    <a href="#">Nuestras tiendas</a>
                  </li>
                  <li>
                    <a href="#">Sobre Nosotros</a>
                  </li>
                  <li>
                    <a href="#">Trabaja con nosotros</a>
                  </li>
                  <li>
                    <a href="#">Datos de envio</a>
                  </li>
                  <li>
                    <a href="#">terminos &amp; Condiciones</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-4 col-xxs-12">
              <div className="widget footer-links">
                <h5 className="widget-title uppercase">Ayuda</h5>
                <ul className="list-no-dividers">
                  <li>
                    <a href="#">Contáctanos</a>
                  </li>
                  <li>
                    <a href="#">Seguimiento de orden</a>
                  </li>
                  <li>
                    <a href="#">F.A.Q</a>
                  </li>
                  <li>
                    <a href="#">Políticas de privacidad</a>
                  </li>
                  <li>
                    <a href="#">Devoluciones</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-4 col-xxs-12">
              <div className="widget footer-links">
                <h5 className="widget-title uppercase">Cuenta</h5>
                <ul className="list-no-dividers">
                  <li>
                    <a href="#">Mi cuenta</a>
                  </li>
                  <li>
                    <a href="#">Favoritos</a>
                  </li>
                  <li>
                    <a href="#">Historia de ordenes</a>
                  </li>
                  <li>
                    <a href="#">Ofertas para ti</a>
                  </li>
                  <li>
                    <a href="#">Seguimiento de orden</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="widget">
                <h5 className="widget-title uppercase">Sobre Nosotros</h5>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate, ab dolores. Quisquam similique veritatis architecto
                  debitis, necessitatibus autem esse ducimus.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="widget footer-get-in-touch">
                <h5 className="widget-title uppercase">Ubícanos</h5>
                <address className="footer-address">
                  <span>Address:</span> Lorem ipsum dolor sit, amet adipisicing, Venezuela
                </address>
                <p>
                  Phone:{" "}
                  <span>+ 58 414-2356733</span>
                  <br />
                  <span>+ 58 412-9613339</span>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:nuestrocorreo@gmail.com">
                    nuestrocorreo@gmail.com
                  </a>
                </p>
                <div className="social-icons rounded mt-20">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  {/* <a href="#">
                    <i className="fa fa-google-plus" />
                  </a> */}
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  {/* <a href="#">
                    <i className="fa fa-vimeo" />
                  </a> */}
                </div>
              </div>
            </div>{" "}
            {/* end stay in touch */}
          </div>
        </div>
      </div>{" "}
      {/* end container */}
      <div className="bottom-footer bg-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 copyright sm-text-center">
              <span>© Cool Store | Proyecto Final Bootcamp Lexpin</span>
            </div>
            <div className="col-sm-4 text-center">
              <div id="back-to-top">
                <a href="#top">
                  <i className="fa fa-angle-up" />
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 space-x-4 footer-payment-systems text-right sm-text-center mt-sml-10">
              <i className="fa fa-cc-paypal" />{' '}
              <i className="fa fa-cc-visa" />{' '}
              <i className="fa fa-cc-mastercard" />{' '}
              <i className="fa fa-cc-discover" />{' '}
              <i className="fa fa-cc-amex" />{' '}
            </div>
          </div>
        </div>
      </div>
      {/* end bottom footer */}
    </footer>
  );
};
export default Footer;
