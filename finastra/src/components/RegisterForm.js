import React, { useState } from 'react';
import './css/RegisterForm.css';
// Make sure to import bootstrap CSS if not already imported at app level
// import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    mobile: '',
    email: '',
    website: '',
    privacyPolicy: false
  });
  
  const [validated, setValidated] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleFocus = (field) => {
    setFocused(field);
  };
  
  const handleBlur = () => {
    setFocused(null);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    
    setValidated(true);
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          jobTitle: '',
          company: '',
          mobile: '',
          email: '',
          website: '',
          privacyPolicy: false
        });
        setValidated(false);
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  // Helper function to check if a field is valid
  const isFieldValid = (field) => {
    if (!validated) return true;
    
    // Email validation
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(formData.email);
    }
    
    // URL validation
    if (field === 'website') {
      if (!formData.website) return true; // Optional field
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
      return urlRegex.test(formData.website);
    }
    
    // Other fields - just check if not empty
    return formData[field] !== '';
  };
  
  if (submitted) {
    return (
      <div className="register-section d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="success-message text-center p-5 animate__animated animate__fadeIn">
                <div className="success-icon mb-4">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <h2 className="mb-3">Registration Successful!</h2>
                <p className="lead">Thank you for registering, {formData.firstName}!</p>
                <p>We've sent a confirmation email to <strong>{formData.email}</strong>.</p>
                <p>We look forward to seeing you at the event!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="register-section d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-white register-text">
            <h1 className="animate__animated animate__fadeInLeft">Register Now</h1>
            <h5 className="animate__animated animate__fadeInLeft animate__delay-1s">Join us for an unforgettable experience!</h5>
            
            <div className="registration-steps mt-5 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-text">Fill the form</div>
              </div>
              <div className="step-connector"></div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-text">Receive confirmation</div>
              </div>
              <div className="step-connector"></div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-text">Join the event</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-box animate__animated animate__fadeInRight">
              <div className="form-progress-indicator mb-3">
                <div className="progress" style={{ height: "8px" }}>
                  <div 
                    className="progress-bar progress-bar-striped progress-bar-animated" 
                    role="progressbar" 
                    style={{ 
                      width: `${Object.values(formData).filter(Boolean).length / Object.keys(formData).length * 100}%` 
                    }}
                  ></div>
                </div>
                <div className="text-end text-muted form-progress-text">
                  <small>
                    {Object.values(formData).filter(Boolean).length} of {Object.keys(formData).length} completed
                  </small>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} noValidate className={validated ? 'was-validated' : ''}>
                <div className={`mb-3 form-floating ${focused === 'firstName' ? 'focused-input' : ''}`}>
                  <input 
                    type="text" 
                    className={`form-control ${validated && !isFieldValid('firstName') ? 'is-invalid' : ''}`}
                    id="firstName"
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('firstName')}
                    onBlur={handleBlur}
                    required 
                  />
                  <label htmlFor="firstName">First Name</label>
                  <div className="invalid-feedback">Please provide your first name.</div>
                </div>
                
                <div className={`mb-3 form-floating ${focused === 'lastName' ? 'focused-input' : ''}`}>
                  <input 
                    type="text" 
                    className={`form-control ${validated && !isFieldValid('lastName') ? 'is-invalid' : ''}`}
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('lastName')}
                    onBlur={handleBlur}
                    required 
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <div className="invalid-feedback">Please provide your last name.</div>
                </div>
                
                <div className={`mb-3 form-floating ${focused === 'jobTitle' ? 'focused-input' : ''}`}>
                  <input 
                    type="text" 
                    className={`form-control ${validated && !isFieldValid('jobTitle') ? 'is-invalid' : ''}`}
                    id="jobTitle"
                    name="jobTitle"
                    placeholder="Job Title" 
                    value={formData.jobTitle}
                    onChange={handleChange}
                    onFocus={() => handleFocus('jobTitle')}
                    onBlur={handleBlur}
                    required 
                  />
                  <label htmlFor="jobTitle">Job Title</label>
                  <div className="invalid-feedback">Please provide your job title.</div>
                </div>
                
                <div className={`mb-3 form-floating ${focused === 'company' ? 'focused-input' : ''}`}>
                  <input 
                    type="text" 
                    className={`form-control ${validated && !isFieldValid('company') ? 'is-invalid' : ''}`}
                    id="company"
                    name="company"
                    placeholder="Company" 
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => handleFocus('company')}
                    onBlur={handleBlur}
                    required 
                  />
                  <label htmlFor="company">Company</label>
                  <div className="invalid-feedback">Please provide your company name.</div>
                </div>
                
                <div className={`mb-3 form-floating ${focused === 'mobile' ? 'focused-input' : ''}`}>
                  <input 
                    type="tel" 
                    className={`form-control ${validated && !isFieldValid('mobile') ? 'is-invalid' : ''}`}
                    id="mobile"
                    name="mobile"
                    placeholder="Mobile Number" 
                    value={formData.mobile}
                    onChange={handleChange}
                    onFocus={() => handleFocus('mobile')}
                    onBlur={handleBlur}
                    required 
                  />
                  <label htmlFor="mobile">Mobile Number</label>
                  <div className="invalid-feedback">Please provide a valid phone number.</div>
                </div>
                
                <div className={`mb-3 form-floating ${focused === 'email' ? 'focused-input' : ''}`}>
                  <input 
                    type="email" 
                    className={`form-control ${validated && !isFieldValid('email') ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required 
                  />
                  <label htmlFor="email">Email Address</label>
                  <div className="invalid-feedback">Please provide a valid email address.</div>
                </div>
                
                <div className={`mb-3 form-floating ${focused === 'website' ? 'focused-input' : ''}`}>
                  <input 
                    type="url" 
                    className={`form-control ${validated && !isFieldValid('website') ? 'is-invalid' : ''}`}
                    id="website"
                    name="website"
                    placeholder="Company Website URL" 
                    value={formData.website}
                    onChange={handleChange}
                    onFocus={() => handleFocus('website')}
                    onBlur={handleBlur}
                    required 
                  />
                  <label htmlFor="website">Company Website URL</label>
                  <div className="invalid-feedback">Please provide a valid URL.</div>
                </div>
                
                <div className="mb-3 text-white checkbox-area">
                  <div className="form-check animate__animated animate__pulse animate__delay-3s">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="privacyCheck"
                      name="privacyPolicy"
                      checked={formData.privacyPolicy}
                      onChange={handleChange}
                      required 
                    />
                    <label className="form-check-label" htmlFor="privacyCheck">
                      By filling out the registration form to attend our event, you agree and consent to <a href="#" className="privacy-link">Cogent Solutions Privacy Policy</a>.
                    </label>
                    {validated && !formData.privacyPolicy && (
                      <div className="invalid-feedback d-block">
                        You must agree to the privacy policy.
                      </div>
                    )}
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="btn register-button w-100 position-relative"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Processing...
                    </>
                  ) : 'Register'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;