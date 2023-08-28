import Link from "next/link";

const SlideThree = () => {
  return (
    <li>
      <img src="/slider/3.jpg" alt="" />
      <div className="img-holder img-3" />
      <div className="hero-holder left-align">
        <div className="hero-lines white">
          <h1 className="hero-heading white">Autumn 2023</h1>
          <p className="white">Make Everyday a Runaway</p>
          <p className="white">Clothes You Will Love</p>
        </div>
        <Link href="/products" className="btn btn-lg btn-white">
          <span>Shop Now</span>
        </Link>
      </div>
    </li>
  );
};
export default SlideThree;
