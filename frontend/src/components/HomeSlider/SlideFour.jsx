import Link from "next/link";

const SlideFour = () => {
  return (
    <li>
      <img src="/slider/4.jpg" alt="slider img 4" />
      <div className="img-holder img-4" />
      <div className="hero-holder text-center right-align">
        <div className="hero-lines white">
          <h1 className="hero-heading white">Summer 2023</h1>
          <p className="white">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <p className="white">aliquid voluptatum labore corrupti.</p>
        </div>
        <Link href="/products" className="btn btn-lg btn-white">
          <span>Shop Now</span>
        </Link>
      </div>
    </li>
  );
};
export default SlideFour;
