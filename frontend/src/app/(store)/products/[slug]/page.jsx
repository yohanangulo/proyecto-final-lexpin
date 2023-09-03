import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import { appFirebase } from '@/config/firebase'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ProductActions from "@/components/ProductActions";
import { notFound } from "next/navigation";
import { formatter } from "@/lib/utils";
import { Scripts } from "@/components/Scripts";
import { getAuthSession } from "@/lib/auth";


const Product = async ({ params : { slug } }) => {
  // useScripts()
  const db = getFirestore(appFirebase)
  
  const productRef = doc(db, 'products', slug)

  const productPromise = getDoc(productRef)
  const authPromise = getAuthSession()

  const [res, session] = await Promise.all([productPromise, authPromise])
  
  
  const product = res.data()


  if(!product) {
    notFound()
  }

  return (
    <>
      <Scripts />
      <Header />
      <main className="content-wrapper oh">
      
        <section className="section-wrap single-product key={i}">
          <div className="container relative">
            <div className="row">
              <div className="col-sm-6 col-xs-12 mb-60">
                <div
                  className="flickity flickity-slider-wrap mfp-hover"
                  id="gallery-main"
                >
                  <div className="gallery-cell">
                    <a
                      href={product?.imagen}
                      className="lightbox-img"
                    >
                      <img
                        src={product?.imagen }
                        alt="product imagen"
                      />
                      <i className="icon arrow_expand" />
                    </a>
                  </div>

                </div>
                {/* end gallery main */}
                
                {/* end gallery thumbs */}
              </div>{" "}
              {/* end col img slider */}
              <div className="col-sm-6 col-xs-12 product-description-wrap">
                <h1 className="product-title">{product?.name}</h1>
                <span className="rating">
                  <a href="#">3 Reviews</a>
                </span>
                <span className="price">
                  <ins>
                    <span className="ammount">{formatter.format(product.price)}</span>
                  </ins>
                </span>
                <p className="product-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam accusantium tenetur vitae molestiae cumque rerum.
                  Accusantium impedit consequatur mollitia aperiam labore!
                  Officia at facere eveniet rerum molestiae voluptate blanditiis
                  quia.
                </p>
                {session && <ProductActions userId={session.user._id} {...product} slug={slug}/>}
                <div className="product_meta">
                  <span className="posted_in">
                    Categoría: <a href="#">{product?.category}</a>
                  </span>
                  <span className="posted_in">
                    Publicado por: <a href="#">Username</a>
                  </span>
                </div>
                <div className="socials-share clearfix">
                  <div className="social-icons rounded">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* end col product description */}
            </div>{" "}
            {/* end row */}
            {/* tabs */}
            <div className="row">
              <div className="col-md-12">
                <div className="tabs tabs-bb">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#tab-description" data-toggle="tab">
                        description
                      </a>
                    </li>
                  </ul>{" "}
                  {/* end tabs */}
                  {/* tab content */}
                  <div className="tab-content">
                    <div
                      className="tab-pane fade in active"
                      id="tab-description"
                    >
                      <p>{ product.description }</p>
                    </div>
                  </div>{" "}
                  {/* end tab content */}
                </div>
              </div>{" "}
              {/* end tabs */}
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end container */},
        </section>
        ,{/* end single product */}
        {/* Related Items */}
        {/* <section className="section-wrap related-products pt-0">
          <div className="container">
            <div className="row heading-row">
              <div className="col-md-12 text-center">
                <h2 className="heading uppercase">
                  <small>Related Products</small>
                </h2>
              </div>
            </div>
            <div className="row row-10">
              <div
                id="owl-related-products"
                className="owl-carousel owl-theme nopadding"
              >
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};
export default Product;
