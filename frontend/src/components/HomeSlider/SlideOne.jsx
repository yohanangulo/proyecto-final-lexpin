import Link from "next/link";

const SlideOne = () => {
  return (
    <li>
      <img src="/slider/1.jpg" />
      <div className="img-holder img-1" />
      <div className="hero-holder text-center right-align">
        <div className="hero-lines">
          <h1 className="hero-heading color-primary">2023 Collection</h1>
          <h4 className="hero-subheading uppercase color-primary">
            GET IN THE TREND
          </h4>
        </div>
        <Link href="/products" className="btn btn-lg btn-white">
          <span>Shop Now</span>
        </Link>
      </div>
    </li>
  );
};
export default SlideOne;
