import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Information</h4>
            <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890">123-456-7890</a></p>
          </div>
          <div className="col-md-6">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
