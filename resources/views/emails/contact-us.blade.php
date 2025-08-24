<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Message - Fort Breeze Hotel</title>
    <!-- Bootstrap CSS -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet" />
    <!-- Font Awesome -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <style>
        body {
            background-color: #f8f9fa;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .email-container {
            max-width: 700px;
            margin: 20px auto;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .hotel-header {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url("https://fortbreezehotel.com/images/image40.jpg");
            background-size: cover;
            background-position: center;
            color: white;
            padding: 2rem;
            text-align: center;
        }

        .hotel-logo {
            font-size: 2.5rem;
            color: #c19a6b;
        }

        .content-section {
            padding: 2rem;
        }

        .message-box {
            background-color: #f8f9fa;
            border-left: 4px solid #c19a6b;
            padding: 1.5rem;
            border-radius: 4px;
        }

        .info-label {
            font-weight: 600;
            color: #2a5555;
            margin-bottom: 0.3rem;
        }

        .info-value {
            margin-bottom: 1rem;
            padding-left: 1rem;
        }

        .footer {
            background-color: #2a5555;
            color: white;
            padding: 1.5rem;
            text-align: center;
        }

        .action-btn {
            background-color: #c19a6b;
            border: none;
            padding: 10px 25px;
            font-weight: 600;
        }

        .action-btn:hover {
            background-color: #a58256;
        }

        .divider {
            border-top: 1px solid #dee2e6;
            margin: 1.5rem 0;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <!-- Header -->
        <div class="hotel-header">
            <i class="hotel-logo fas fa-hotel"></i>
            <h1 class="h3 mt-2">Fort Breeze Hotel</h1>
            <p class="mb-0">Fort Portal Tourism City, Uganda</p>
        </div>

        <!-- Content -->
        <div class="content-section">
            <h2 class="h4 text-center mb-4" style="color: #2a5555">
                <i class="fas fa-envelope me-2"></i>New Contact Form Submission
            </h2>

            <div class="row mb-4">
                <div class="col-md-6">
                    <p class="info-label">First Name:</p>
                    <p class="info-value">{{ $data['firstName'] }}</p>
                </div>
                <div class="col-md-6">
                    <p class="info-label">Last Name:</p>
                    <p class="info-value">{{ $data['lastName'] }}</p>
                </div>
            </div>

            <div class="mb-4">
                <p class="info-label">Email Address:</p>
                <p class="info-value">
                    <a href="mailto:{{ $data['email'] }}" class="text-decoration-none">
                        <i class="fas fa-envelope me-2"></i>{{ $data['email'] }}
                    </a>
                </p>
            </div>

            <div class="mb-4">
                <p class="info-label">Message:</p>
                <div class="message-box">
                    <p class="mb-0">{{ $data['message'] }}</p>
                </div>
            </div>

            <div class="divider"></div>

            <div class="d-flex justify-content-center mt-4">
                <a href="mailto:{{ $data['email'] }}" class="btn action-btn me-3">
                    <i class="fas fa-reply me-2"></i>Reply to Guest
                </a>
                <button class="btn btn-outline-secondary">
                    <i class="fas fa-phone me-2"></i>Call Guest
                </button>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="row">
                <div class="col-md-6 text-md-start">
                    <h5 class="mb-3">Fort Breeze Hotel</h5>
                    <p class="mb-1">Saaka Road</p>
                    <p class="mb-1">Fort Portal Tourism City, Uganda</p>
                    <p class="mb-1">+256 772 614 705 / +256 393 240 934</p>
                    <p class="mb-0">info@fortbreezehotel.com</p>
                </div>
                <div class="col-md-6 text-md-end mt-3 mt-md-0">
                    <h5 class="mb-3">Follow Us</h5>
                    <div class="social-links">
                        <a href="#" class="text-white me-2"><i class="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#" class="text-white me-2"><i class="fab fa-twitter fa-lg"></i></a>
                        <a href="#" class="text-white me-2"><i class="fab fa-instagram fa-lg"></i></a>
                        <a href="#" class="text-white"><i class="fab fa-tripadvisor fa-lg"></i></a>
                    </div>
                </div>
            </div>
            <div
                class="divider"
                style="border-color: rgba(255, 255, 255, 0.2)"></div>
            <p id="footer-year" class="mb-0"></p>

            <script>
                const year = new Date().getFullYear();
                document.getElementById(
                    "footer-year"
                ).textContent = `© ${year} Fort Breeze Hotel. All rights reserved.`;
            </script>

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
    </div>

    <!-- Bootstrap JS (not strictly necessary for email but included for completeness) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>