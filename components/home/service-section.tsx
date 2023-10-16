import React from 'react';

import ServiceBox from './service-section/service-box';

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our services
          </h2>
        </div>
        <div className="row">
          <ServiceBox
                        title="IDEATION AND CONCEPT DEVELOPMENT"
            description="At Sledge Entertainment Limited, we excel at turning creative visions into captivating concepts. 
            Our skilled team specializes in ideation, crafting the perfect foundation for your project. Let's bring your 
             to life – from imagination to extraordinary reality."
          />
          <ServiceBox
            title="SCRIPT WRITING"
            description="Scriptwriting is our forte at Sledge Entertainment Limited. We have a dedicated team of experienced
             professionals who specialize in crafting engaging narratives, bringing your ideas to life with words that resonate on screen."
          />
          <ServiceBox
            title="PRODUCTION"
            description="Production is where Sledge Entertainment Limited truly shines. With a team of seasoned professionals, 
            we transform your vision into reality, executing a seamless and top-notch production process from inception to completion."
          />
          <ServiceBox
            title="AUDIO FINAL MIX"
            description="Audio final mix is where Sledge Entertainment Limited perfects the auditory experience. Our dedicated sound engineers meticulously blend and refine the audio elements, ensuring that every sound, from dialogue to music, harmonizes seamlessly and immerses the audience in your project."
          />
          <ServiceBox
            title="GRAPHICS DESIGN"
            description="Graphic design is a cornerstone of our creative arsenal. Our talented designers craft visuals that not
             only captivate but also communicate your project's essence effectively. With an eye for aesthetics and a passion for innovation, we bring your ideas to life through compelling graphics."
          />
          <ServiceBox
            title="FINAL PACKAGING"
            description="Final packaging is the culmination of our meticulous work at Sledge Entertainment Limited. We ensure your project is presented flawlessly, ready for its audience. 
                        Our attention to detail in packaging guarantees a polished and professional presentation that leaves a lasting impression."
          />
          <ServiceBox
            title="PHOTOGRAPHY"
            description="ledge Entertainment Limited also offers expert photography services. Our experienced team excels in capturing 
            the essence of your project with precision and creativity, delivering stunning visuals that enhance your storytelling."
          />
          <ServiceBox
            title="EDITING"
            description="Editing is where Sledge Entertainment Limited truly transforms raw footage into cinematic brilliance. Our
             skilled editing team assembles and refines your content, ensuring a polished and captivating final product that leaves
              a lasting impression."
          />
          <ServiceBox
            title="COLOR GRADING"
            description="Color grading is an art form at Sledge Entertainment Limited. Our expert colorists enhance the visual appeal
             of your content, creating a mood and tone that aligns perfectly with your vision. With a keen eye for detail, we bring depth 
             and vibrancy to your project."
          />
          <ServiceBox
            title="CINEMATOGRAPHY"
            description="Production is where Sledge Entertainment Limited truly shines. With a team of seasoned professionals, we transform your vision into reality, executing a seamless and top-notch production process from inception to completion."
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
