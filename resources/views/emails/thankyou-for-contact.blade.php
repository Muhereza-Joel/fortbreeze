<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You - Fort Breeze Hotel</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <style>
    body {
      background-color: #f8f9fa;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .hotel-header {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("https://fortbreezehotel.com/images/image40.jpg");
      background-size: cover;
      background-position: center;
      color: white;
      padding: 4rem 0;
      text-align: center;
    }

    .thankyou-container {
      background: white;
      border-radius: 10px;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      margin: -50px auto 3rem;
      max-width: 800px;
      position: relative;
    }

    .hotel-logo {
      font-size: 2.8rem;
      color: #c19a6b;
    }

    .btn-primary {
      background-color: #c19a6b;
      border-color: #b08d5f;
      padding: 10px 25px;
    }

    .btn-primary:hover {
      background-color: #a58256;
      border-color: #95774d;
    }

    .divider {
      border-top: 1px solid #e9ecef;
      margin: 1.5rem 0;
    }

    h2 {
      color: #2a5555;
      font-weight: 600;
    }

    .thank-you-icon {
      font-size: 4rem;
      color: #28a745;
      margin-bottom: 1.5rem;
    }

    .contact-info {
      background-color: #f8f9fa;
      border-radius: 8px;
      padding: 1.5rem;
    }

    .info-item {
      margin-bottom: 1rem;
    }

    .info-item i {
      color: #c19a6b;
      margin-right: 10px;
      font-size: 1.2rem;
      width: 24px;
    }

    footer {
      background-color: #2a5555;
      color: white;
      margin-top: auto;
      padding: 2rem 0;
    }

    .social-links a {
      color: white;
      margin: 0 10px;
      font-size: 1.5rem;
    }

    .confirmation-details {
      background-color: #f8f9fa;
      border-radius: 8px;
      padding: 1.5rem;
      margin-top: 1.5rem;
    }
  </style>
</head>

<body>
  <header class="hotel-header">
    <div class="container">
      <i class="hotel-logo fas fa-hotel"></i>
      <h1 class="display-4 mt-2">Fort Breeze Hotel</h1>
      <p class="lead">Fort Portal Tourism City, Uganda</p>
    </div>
  </header>

  <div class="container">
    <div class="thankyou-container">
      <div class="row">
        <div class="col-md-12 p-5">
          <div class="text-center">
            <div class="thank-you-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <h2 class="mb-3">Thank You for Contacting Us!</h2>
            <p class="lead">
              We have received your message and will respond within 24 hours.
            </p>
          </div>

          <div class="divider"></div>

          <div class="confirmation-details">
            <h4 class="mb-3">Your Message Details</h4>
            <div class="row mb-3">
              <div class="col-md-6">
                <p class="form-label">
                  <strong>First Name:</strong> {{ $data['firstName'] }}
                </p>
              </div>
              <div class="col-md-6">
                <p class="form-label">
                  <strong>Last Name:</strong> {{ $data['lastName'] }}
                </p>
              </div>
            </div>

            <div class="mb-3">
              <p class="form-label">
                <strong>Email:</strong> {{ $data['email'] }}
              </p>
            </div>

            <div class="mb-4">
              <p class="form-label"><strong>Message:</strong></p>
              <p class="p-3 bg-white rounded">{{ $data['message'] }}</p>
            </div>
          </div>

          <div class="divider"></div>

          <div class="contact-info">
            <h4 class="mb-3">Direct Contact Information</h4>
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Saaka Road, Fort Portal Tourism City, Uganda</span>
            </div>
            <div class="info-item">
              <i class="fas fa-phone"></i>
              <span>+256 772 614 705 / +256 393 240 934</span>
            </div>
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <span>info@fortbreezehotel.com</span>
            </div>
          </div>

          <div class="text-center mt-4">
            <p>
              In the meantime, you can explore more about Fort Breeze Hotel:
            </p>
            <div class="mt-3">
              <a
                href="https://fortbreezehotel.com/rooms"
                class="btn btn-primary me-2">Our Accommodations</a>
              <a
                href="https://fortbreezehotel.com/restaurant-and-bar"
                class="btn btn-outline-secondary">Restaurant and Bar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="text-center">
    <div class="container">
      <div class="social-links mb-3">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-tripadvisor"></i></a>
      </div>
      <p id="footer-year" class="mb-0"></p>

      <script>
        const year = new Date().getFullYear();
        document.getElementById("footer-year").textContent =
          `© ${year} Fort Breeze Hotel. All rights reserved.`;
      </script>
      <p>
        Saaka Road, Fort Portal Tourism City, Uganda | +256 772 614 705 / +256
        393 240 934 | info@fortbreezehotel.com
      </p>
      <p class="small text-white pt-2">
        Powered by
        <a
          href="https://github.com/Muhereza-Joel"
          target="_blank"
          rel="noopener noreferrer"
          class="fw-bold text-white text-decoration-underline d-inline-flex align-items-center">
          MOELS GROUP
        </a>
      </p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>