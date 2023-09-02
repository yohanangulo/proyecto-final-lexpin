'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useScripts } from "@/hooks/useScripts";

export default function AboutUs() {
  useScripts()
  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        <section className="section-wrap about-us pb-60">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <img src="img/about_us.jpg" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <h4 className="about-intro uppercase">about our shop</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestiae cupiditate fugit veniam maiores dolor at sunt consequatur maxime laboriosam perferendis rerum repudiandae ad, ea eaque consectetur debitis laborum facere?
                  Suscipit dolores repellendus, alias dignissimos sint quo magni vitae ad reprehenderit deleniti veniam nobis voluptates rerum. Cum incidunt, animi praesentium, reiciendis fugit enim fugiat expedita iste quo odio accusantium quos?
                  Cum, recusandae adipisci possimus, cupiditate corporis vel id assumenda, corrupti ipsam commodi sapiente minima error repudiandae nesciunt ipsa reprehenderit totam ipsum architecto culpa distinctio. Odio culpa delectus nesciunt voluptate nihil?
                </p>
              </div>
              <div className="col-sm-3 col-sm-offset-1">
                <div className="statistic">
                  <span>2023</span>
                  <h4 className="uppercase">year of foundation</h4>
                </div>
                <div className="statistic">
                  <span>2</span>
                  <h4 className="uppercase">partners work with us</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
