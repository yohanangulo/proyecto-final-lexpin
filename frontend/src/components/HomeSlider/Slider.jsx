import SlideOne from '@/components/HomeSlider/SlideOne'
import SlideTwo from '@/components/HomeSlider/SlideTwo'
import SlideThree from '@/components/HomeSlider/SlideThree'
import SlideFour from '@/components/HomeSlider/SlideFour'

export default function Slider() {
  return (
    <div style={{aspectRatio: 285/134}} className="entry-slider">
      <div className="flexslider" id="flexslider-hero">
        <ul className="slides clearfix">
          <SlideOne />
          <SlideTwo />
          <SlideThree />
          <SlideFour />
        </ul>
      </div>
    </div>
  )
}
