import SectionTitle from '../section-title/SectionTitle';
import './resume.css';

export default function Resume({ reference }) {
  return (
    <section id='resume' className='resume' ref={reference}>
      <div className='container'>
        <SectionTitle title='Resume' subtitle='My Experience' />
        <div className='row resume-container'>
          <div className='col-lg-6'>
            <h3 className='resume-title'>Summary</h3>
            <div className='resume-item pb-0'>
              <h4>Jerry Doran</h4>
              <p>
                <em>
                  I am a self-motivated and self-driven software engineer with a
                  passion for learning new skills and technologies to stay
                  focused on current software development trends and have many
                  years of experience developing applications in enterprise
                  settings.
                </em>
              </p>
              <p>Contact</p>
              <ul>
                <li>Email: jerry-doran@hotmail.com</li>
                <li>Web: jerrydoran.dev</li>
              </ul>
            </div>
            <h3 className='resume-title'>Education</h3>
            <div className='resume-item'>
              <h4>Bachelor of Science - Computer Information Systems</h4>
              <h5>2001 - 2004</h5>
              <p>
                <em>ACCIS</em>
              </p>
            </div>
            <div className='resume-item'>
              <h4>MBA - Finance</h4>
              <h5>1997 - 2000</h5>
              <p>
                <em>Youngstown State University</em>
              </p>
            </div>
            <div className='resume-item'>
              <h4>Bachelor of Science - Physics</h4>
              <h5>1986 - 1990</h5>
              <p>
                <em>Duquesne University</em>
              </p>
            </div>
            {/* <h3 className='resume-title'>Accomplishments</h3>
            <ul>
              <li>
                Acted as the liaison between software supplier and the
                organization in the implementation of an MRP system resulting in
                $50,000 annual savings.
              </li>
              <li>
                Developed database applications to manage product/process
                information, supplier/customer satisfaction and key departmental
                metrics.
              </li>
              <li>
                Developed invoicing and reporting system for finance department
                through the use of automation which resulted in improved work
                efficiency by 40%.
              </li>
            </ul> */}
          </div>
          <div className='col-lg-6'>
            <h3 className='resume-title'>Professional Experience</h3>
            <div className='resume-item'>
              <h4>Senior Applications Engineer</h4>
              <h5>2014 - Present</h5>
              <p>
                <em>PCC Airfoils, Minerva, OH</em>
              </p>
              <ul>
                <li>
                  Develop and manage automated information systems used for
                  evaluation of key departmental metrics.
                </li>
                <li>
                  Database application development and deployment for various
                  users throughout the organization.
                </li>
                <li>
                  Provide technical instruction and training to departmental
                  personnel.
                </li>
              </ul>
            </div>
            <div className='resume-item'>
              <h4>Senior Engineer</h4>
              <h5>2006 - 2014</h5>
              <p>
                <em>PCC Airfoils, Minerva, OH</em>
              </p>
              <ul>
                <li>
                  Identified and evaluated new material and process technologies
                  that extended product capabilities and new job startups.
                </li>
                <li>
                  Developed quality system database to track and manage customer
                  returns and requirements.
                </li>
              </ul>
            </div>
            <div className='resume-item'>
              <h4>Information Systems Manager</h4>
              <h5>2004 - 2006</h5>
              <p>
                <em>American Cap Company, Wheatland, PA</em>
              </p>
              <ul>
                <li>
                  Developed annual business plans and key performance indicators
                  that reflect operational performance for critical processes,
                  methodologies and technologies within the organization.
                </li>
                <li>
                  Developed automated database systems for monitoring
                  company-wide performance metrics to ensure accuracy and
                  efficiency of measurements.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
