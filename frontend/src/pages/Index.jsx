
import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap-icons.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/owl.theme.default.min.css';
import '../assets/css/medi_tach.css';

import slider1 from '../assets/images/slider/Slider (1).jpg';
import slider2 from '../assets/images/slider/Slider (2).jpg';
import slider3 from '../assets/images/slider/Slider (3).jpg';
import gallery1 from '../assets/images/gallery/Galary (1).jpg';
import gallery2 from '../assets/images/gallery/Galary (2).jpg';
import review1 from '../assets/images/reviews/beautiful-woman-face-portrait-brown-background.jpeg';
import review2 from '../assets/images/reviews/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg';
import review3 from '../assets/images/reviews/portrait-british-woman.jpeg';
import review4 from '../assets/images/reviews/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg';



function Index() {
  return (
    <div id="top">
      <main>
        <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
          <div className="container">
            <a className="navbar-brand mx-auto d-lg-none" href="index.html">
              Madad
              <strong className="d-block">महिला और पुरुष</strong>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#hero">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#timeline">
                    Our Activity
                  </a>
                </li>

                <a className="navbar-brand d-none d-lg-block" href="index.html">
                  Madad
                  <strong className="d-block">महिला & पुरुष</strong>
                </a>

                <li className="nav-item">
                  <a className="nav-link" href="#reviews">
                    Reviews
                  </a>
                </li>

                {/* Removed Doctors and Blog from public navigation */}
                {/* <li className="nav-item">
                                <a className="nav-link" href="doctors.html">Doctors</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="blog.html">Blog</a>
                            </li> */}

                <li className="nav-item">
                  <a className="nav-link" href="#booking">
                    Get Consult
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="admin-login.html">
                    Admin Panel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="hero" id="hero">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  id="myCarousel"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={slider1}
                        className="img-fluid"
                        alt=""
                      />
                    </div>

                    <div className="carousel-item">
                      <img
                        src={slider2}
                        className="img-fluid"
                        alt=""
                      />
                    </div>

                    <div className="carousel-item">
                      <img
                        src={slider3}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="heroText d-flex flex-column justify-content-center">
                  <h1 className="mt-auto mb-2">
                    Better
                    <div className="animated-info">
                      <span className="animated-item">health</span>
                      <span className="animated-item">days</span>
                      <span className="animated-item">lives</span>
                    </div>
                  </h1>

                  <p className="mb-4">
                    बेहतर स्वास्थ्य सिर्फ़ शरीर तक सीमित नहीं होता, बल्कि आपके यौन
                    जीवन और अंतरंग संतुष्टि से भी गहराई से जुड़ा होता है। जब आप
                    अपने सेक्सुअल वेलनेस का ख्याल रखते हैं—चाहे वह सुरक्षित और
                    सुखद संबंध हों, आत्मविश्वास से जुड़ी बातें हों, या अपने साथी
                    के साथ खुलकर संवाद हो—तो न सिर्फ़ आपका स्वास्थ्य सुधरता है
                    बल्कि हर दिन और भी खुशनुमा बनता है। यही छोटे-छोटे बदलाव आपको
                    देते हैं बेहतर स्वास्थ्य, बेहतर दिन और एक संतुलित, संतुष्ट और
                    पूर्ण जीवन। <i>Writer: Rohit Kumar.</i>
                  </p>

                  <div className="heroLinks d-flex flex-wrap align-items-center">
                    <a
                      className="custom-link me-4"
                      href="#about"
                      data-hover="Learn More"
                    >
                      Learn More
                    </a>

                    <p className="contact-phone mb-0">
                      <i className="bi-phone"></i> +91 000000000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <h2 className="mb-lg-3 mb-3">About US</h2>

                <p>
                  हम मानते हैं कि यौन स्वास्थ्य सिर्फ़ शारीरिक ज़रूरत नहीं, बल्कि
                  मानसिक संतुलन, आत्मविश्वास और रिश्तों की गहराई का भी अहम हिस्सा
                  है। हमारा उद्देश्य है कि हर व्यक्ति बिना झिझक अपने sexual
                  wellness को समझे, अपनाए और उसका सही ख्याल रखे।{' '}
                </p>
                <br />

                <p>हम आपके लिए लाते हैं –</p>

                <ul>
                  <li>
                    विश्वसनीय जानकारी ताकि आप सही निर्णय ले सकें।
                  </li>
                  <li>
                    विशेषज्ञ मार्गदर्शन ताकि आपकी समस्याओं का समाधान सुरक्षित और
                    वैज्ञानिक तरीक़े से हो।{' '}
                  </li>
                  <li>
                    गोपनीयता और सम्मान, क्योंकि हम जानते हैं कि यह विषय व्यक्तिगत
                    और संवेदनशील है।
                  </li>
                  <li>
                    हमारा विश्वास है कि जब यौन स्वास्थ्य संतुलित और संतुष्ट होता
                    है, तभी आप वास्तव में बेहतर स्वास्थ्य, बेहतर दिन और बेहतर
                    जीवन जी पाते हैं।{' '}
                  </li>
                </ul>
                {/* 

                            <p>You can feel free to use this CSS template for your medical profession or health care related websites. You can <a rel="nofollow" href="http://paypal.me/templatemo" target="_blank">support us a little</a> via PayPal if this template is good and useful for your work.</p> */}
              </div>

              <div className="col-lg-4 col-md-5 col-12 mx-auto">
                <div className="featured-circle bg-white shadow-lg d-flex justify-content-center align-items-center">
                  <p className="featured-text">
                    <span className="featured-number">12</span> Years
                    <br /> of Experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 ps-0">
                <img
                  src={gallery1}
                  className="img-fluid galleryImage"
                  alt="sexual wellness consultation"
                  title="Confidential Sexual Wellness Consultation"
                />
              </div>

              <div className="col-lg-6 col-12 pe-0">
                <img
                  src={gallery2}
                  className="img-fluid galleryImage"
                  alt="sexual health education session"
                  title="Empowering Sexual Health Education"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding pb-0" id="timeline">
          <div className="container">
            <div className="row">
              <h2 className="text-center mb-lg-5 mb-4">Our Timeline</h2>

              <div className="timeline">
                <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                  <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                    <h3 className=" text-light">Sexual Health Awareness</h3>

                    <p>
                      Educating individuals and couples on sexual health, safe
                      practices, and wellness to promote better relationships
                      and well-being.
                    </p>
                  </div>

                  <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                    <i className="bi-patch-check-fill timeline-icon"></i>
                  </div>

                  <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                    <time>2023-07-31 Saturday</time>
                  </div>
                </div>

                <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4">
                  <div className="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                    <h3 className=" text-light">Relationship Counseling</h3>

                    <p>
                      Providing professional counseling to improve
                      communication, intimacy, and satisfaction in
                      relationships for a healthier sexual life.
                    </p>
                  </div>

                  <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                    <i className="bi-book timeline-icon"></i>
                  </div>

                  <div className="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-date">
                    <time>2023-07-15 Thursday</time>
                  </div>
                </div>

                <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                  <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                    <h3 className=" text-light">
                      Certified Sex Therapists
                    </h3>

                    <p>
                      Our team of certified sex therapists offering specialized
                      guidance for sexual health issues and enhancing intimacy.
                    </p>
                  </div>

                  <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                    <i className="bi-file-medical timeline-icon"></i>
                  </div>

                  <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                    <time>2023-06-28 Monday</time>
                  </div>
                </div>

                <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4">
                  <div className="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                    <h3 className=" text-light">Sexual Wellness Clinics</h3>

                    <p className="mb-0 pb-0">
                      Dedicated clinics providing comprehensive sexual health
                      services, including consultations and treatments.
                    </p>

                    <p>
                      Ensuring privacy and professional care for all your
                      sexual wellness needs.
                    </p>
                  </div>

                  <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                    <i className="bi-globe timeline-icon"></i>
                  </div>

                  <div className="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-date">
                    <time>2023-05-30 Sunday</time>
                  </div>
                </div>

                <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                  <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                    <h3 className=" text-light">
                      Intimacy Enhancement Programs
                    </h3>

                    <p>
                      Programs designed to enhance intimacy and sexual
                      satisfaction for couples through education and exercises.
                    </p>
                  </div>

                  <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                    <i className="bi-person timeline-icon"></i>
                  </div>

                  <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                    <time>2023-05-18 Tuesday</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding pb-0" id="reviews">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-lg-5 mb-4">Our Patients</h2>

                <div className="owl-carousel reviews-carousel">
                  <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                    <div className="reviews-stars">
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star"></i>
                    </div>

                    <p className="text-primary d-block mt-2 mb-0 w-100">
                      <strong>Best Health Care</strong>
                    </p>

                    <p className="reviews-text w-100">
                      Phasellus ligula ante, tempus ac imperdiet ut, mattis ac
                      nibh. Orci varius natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus.
                    </p>

                    <img
                      src={review1}
                      className="img-fluid reviews-image"
                      alt=""
                    />

                    <figcaption className="ms-4">
                      <strong>Marie</strong>

                      <span className="text-muted">Patient</span>
                    </figcaption>
                  </figure>

                  <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                    <div className="reviews-stars">
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star"></i>
                    </div>

                    <p className="text-primary d-block mt-2 mb-0 w-100">
                      <strong>Doctor cares everyone!</strong>
                    </p>

                    <p className="reviews-text w-100">
                      Donec in elementum orci, nec posuere ligula. Quisque
                      vulputate diam et ullamcorper ullamcorper. Pellentesque
                      vestibulum neque at leo fermentum mattis.
                    </p>

                    <img
                      src={review2}
                      className="img-fluid reviews-image"
                      alt=""
                    />

                    <figcaption className="ms-4">
                      <strong>Ben Walker</strong>

                      <span className="text-muted">Recovered</span>
                    </figcaption>
                  </figure>

                  <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                    <div className="reviews-stars">
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                    </div>

                    <p className="text-primary d-block mt-2 mb-0 w-100">
                      <strong>Great services!</strong>
                    </p>

                    <p className="reviews-text w-100">
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Donec sit amet velit vitae
                      purus aliquam efficitur.
                    </p>

                    <img
                      src={review3}
                      className="img-fluid reviews-image"
                      alt=""
                    />

                    <figcaption className="ms-4">
                      <strong>Laura Zono</strong>

                      <span className="text-muted">New Patient</span>
                    </figcaption>
                  </figure>

                  <figure className="reviews-thumb d-flex flex-wrap align-items-center rounded">
                    <div className="reviews-stars">
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star"></i>
                      <i className="bi-star"></i>
                    </div>

                    <p className="text-primary d-block mt-2 mb-0 w-100">
                      <strong>Best Advices</strong>
                    </p>

                    <p className="reviews-text w-100">
                      Integer posuere erat a ante venenatis dapibus posuere
                      velit aliquet. Maecenas faucibus mollis interdum. Donec
                      ullamcorper nulla non metus auctor fringilla.
                    </p>

                    <img
                      src={review4}
                      className="img-fluid reviews-image"
                      alt=""
                    />

                    <figcaption className="ms-4">
                      <strong>Rosey</strong>

                      <span className="text-muted">Almost Recovered</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" id="booking">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 mx-auto">
                <div className="booking-form">
                  <h2 className="text-center mb-lg-3 mb-2">
                    Book an appointment
                  </h2>

                  <form id="bookingForm" role="form">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Full name"
                          required
                        />
                      </div>

                      <div className="col-lg-6 col-12">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          className="form-control"
                          placeholder="Email address"
                          required
                        />
                      </div>

                      <div className="col-lg-6 col-12 d-flex align-items-center">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          pattern="[0-9]{10}"
                          maxLength="10"
                          className="form-control"
                          placeholder="Phone"
                          required
                        />
                        <button
                          type="button"
                          id="sendOtpBtn"
                          className="btn btn-primary ms-2"
                        >
                          Send OTP
                        </button>
                      </div>
                      <div
                        className="col-lg-6 col-12 d-flex align-items-center mt-2"
                        id="otpSection"
                        style={{ display: 'none' }}
                      >
                        <input
                          type="text"
                          name="otp"
                          id="otp"
                          maxLength="6"
                          className="form-control"
                          placeholder="Enter OTP"
                          required
                        />
                        <button
                          type="button"
                          id="verifyOtpBtn"
                          className="btn btn-success ms-2"
                        >
                          Verify OTP
                        </button>
                      </div>

                      <div className="col-lg-6 col-12">
                        <input
                          type="date"
                          name="date"
                          id="date"
                          defaultValue=""
                          className="form-control"
                        />
                      </div>

                      <div className="col-12">
                        <textarea
                          className="form-control"
                          rows="5"
                          id="message"
                          name="message"
                          placeholder="Additional Message"
                        ></textarea>
                      </div>

                      <div className="col-lg-3 col-md-4 col-6 mx-auto">
                        <button
                          type="submit"
                          className="form-control"
                          id="submit-button"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-padding" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 me-auto col-12">
              <h5 className="mb-lg-4 mb-3">Opening Hours</h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex">Sunday : Closed</li>

                <li className="list-group-item d-flex">
                  Monday, Tuesday - Firday
                  <span>8:00 AM - 3:30 PM</span>
                </li>

                <li className="list-group-item d-flex">
                  Saturday
                  <span>10:30 AM - 5:30 PM</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-12 my-4 my-lg-0">
              <h5 className="mb-lg-4 mb-3">Our Clinic</h5>

              <p>
                <a href="mailto:developer.mhrony@gmail.com">mail@gmail.com</a>
              </p>

              <p>Gomti Nagar, Lucknow.</p>
            </div>

            <div className="col-lg-3 col-md-6 col-12 ms-auto">
              <h5 className="mb-lg-4 mb-3">Socials</h5>

              <ul className="social-icon">
                <li>
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>

                <li>
                  <a href="#" className="social-icon-link bi-twitter"></a>
                </li>

                <li>
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>

                <li>
                  <a href="#" className="social-icon-link bi-youtube"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="col-lg-12 col-12 ms-auto "
        style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}
      >
        <p className="copyright-text">
          Copyright Madad 2025. All Rights Reserved. Design:{' '}
          <a
            href="https://www.linkedin.com/in/engineerrohit26/"
            target="_parent"
          >
            Rohit Kumar
          </a>
        </p>
      </div>
      <div className="whatsapp-float">
        <a
          href="https://wa.me/910000000000?text=Hello%20Madad,%20I%20need%20help%20with%20sexual%20wellness"
          target="_blank"
          title="Chat with us on WhatsApp"
        >
          <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp Chat" />
        </a>
      </div>
    </div>
  );
}

export default Index;
