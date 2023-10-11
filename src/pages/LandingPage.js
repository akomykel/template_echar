import React from 'react';
import { TopNavbarClassic } from '../component/Navbar';
import { getLandingPageSettings, getThemeSettings } from '../utils/Settings';
import { SliderWithCaption } from '../component/Carousel';
import { getColors } from '../utils/Colors';
import HeroSection from '../component/Hero';
import Footer from '../component/Footer';

const LandingPage = () => {
  let { bgColor } = getThemeSettings();
  let { isUsingSlider } = getLandingPageSettings();
  const color = getColors();

  return (
    <>
      <div style={{backgroundColor:bgColor}}>
        <div className="container">
          <TopNavbarClassic />
        </div>
      </div>

      { isUsingSlider ? <SliderWithCaption /> : <HeroSection /> }

      {/* Start of About */}
      <div style={{backgroundColor:color.vision_of_light}}>
        <div className="container col-xxl-8 px-4 py-2">
	        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6 mx-auto d-block">
			        <img 
                src="https://oneminuteenglish.org/wp-content/uploads/2021/09/Get-the-Gist-72.png" 
                className="d-block mx-lg-auto img-fluid" 
                alt="" 
                loading="lazy" 
              />
		        </div>

		        <div className="col-lg-6">
			        <div className="lc-block mb-3">
				        <div editable="rich">
					        <h6 className="fw-bold fs-4">A Few Words About the Company</h6>
				        </div>
			        </div>

			        <div className="lc-block mb-3">
				        <div editable="rich">
					        <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum.
					        </p>
				        </div>
			        </div>

			        <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                <a className="btn btn-outline-secondary px-4 me-md-2" href="#" role="button">Learn More</a>
			        </div>
		        </div>
	        </div>
        </div>
      </div>
      {/* End of About */}

      <Footer />
    </>
  );
}
 
export default LandingPage;