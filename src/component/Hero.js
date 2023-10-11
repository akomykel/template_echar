import React from 'react';
import Button from 'react-bootstrap/Button';
import { getHeroSectionSettings } from '../utils/Settings';

const TypeOrdinary = () => {
  return (
    <section className='heroImage'>
      <div className="textContainer">
        <div className="row">
          <div className="col-12">
            <div className="headerText" style={{'margin-top':'2em'}}>HUMAN RESOURCES</div>
          </div>
        </div>
      </div>

      <div className="textContainer" style={{'margin-top':'3em'}}>
        <div className="container">
            <div className="subText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        </div>
      </div>

      <div className="textContainer pb-5" style={{marginTop:'4em'}}>
        <Button variant="info">Get started</Button>
      </div>
    </section>
  );
}

const TypeLeftImage = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
	    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
		    <div className="col-lg-6">
			    <div className="lc-block mb-3">
				    <div editable="rich">
					    <h2 className="fw-bold display-5">Responsive left-aligned hero with image</h2>
				    </div>
			    </div>

			    <div className="lc-block mb-3">
				    <div editable="rich">
					    <p className="lead">
                Quickly design and customize responsive mobile-first sites with Bootstrap, 
                the world's most popular front-end open source toolkit, 
                featuring Sass variables and mixins, responsive grid system, 
                extensive prebuilt components, and powerful JavaScript plugins.
					    </p>
				    </div>
			    </div>

			    <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
            <a className="btn btn-primary px-4 me-md-2" href="#" role="button">Click me, I'm a button</a>
				    <a className="btn btn-outline-secondary px-4" href="#" role="button">Click me, I'm a button</a>
			    </div>
		    </div>

        <div className="col-10 col-sm-8 col-lg-6 mx-auto d-block">
			    <img 
            src="https://img.freepik.com/premium-photo/businessman-holding-magnifier-searching-human-icons-human-development-recruitment-concept-human-resource-management-hrm-concept-customer-review-satisfaction-feedback-survey-concept_228338-891.jpg" 
            className="d-block mx-lg-auto img-fluid" 
            alt="" 
            loading="lazy" 
          />
		    </div>
	    </div>
    </div>
  );
}

const TypeRightImage = () => {
  return (
    <div className="container col-xxl-8 px-4 py-2">
	    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 mx-auto d-block">
			    <img 
            src="https://img.freepik.com/premium-photo/businessman-holding-magnifier-searching-human-icons-human-development-recruitment-concept-human-resource-management-hrm-concept-customer-review-satisfaction-feedback-survey-concept_228338-891.jpg" 
            className="d-block mx-lg-auto img-fluid" 
            alt="" 
            loading="lazy" 
          />
		    </div>

		    <div className="col-lg-6">
			    <div className="lc-block mb-3">
				    <div editable="rich">
					    <h2 className="fw-bold display-5">Responsive left-aligned hero with image</h2>
				    </div>
			    </div>

			    <div className="lc-block mb-3">
				    <div editable="rich">
					    <p className="lead">
                Quickly design and customize responsive mobile-first sites with Bootstrap, 
                the world's most popular front-end open source toolkit, 
                featuring Sass variables and mixins, responsive grid system, 
                extensive prebuilt components, and powerful JavaScript plugins.
					    </p>
				    </div>
			    </div>

			    <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
            <a className="btn btn-primary px-4 me-md-2" href="#" role="button">Click me, I'm a button</a>
				    <a className="btn btn-outline-secondary px-4" href="#" role="button">Click me, I'm a button</a>
			    </div>
		    </div>
	    </div>
    </div>
  );
}

const HeroSection = () => {
  let { style } = getHeroSectionSettings();

  switch(style) {
    case 'ordinary':
      return <TypeOrdinary />
    case 'leftImage':
      return <TypeLeftImage />
    case 'rightImage':
      return <TypeRightImage />
    default:
      return;
  }
}

export default HeroSection;