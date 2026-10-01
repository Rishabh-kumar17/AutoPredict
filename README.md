# AutoPredict

AutoPredict is an enterprise-grade vehicle price estimation platform. Utilizing an Extra Trees Regressor machine learning model, the application provides accurate, real-time market valuations for used vehicles based on multi-dimensional parameters including brand, depreciation curves, mileage penalties, and condition multipliers.

The platform is designed with a microservices architecture, separating the client interface, API gateway, and machine learning inference engine into distinct containerized services for robust scalability and deployment.

---

## Architecture Overview

The system is composed of three primary services orchestrated via Docker Compose:

1. **Frontend Interface (React / Vite)**
   - High-performance Single Page Application (SPA) served via Nginx.
   - Implements responsive data visualization (Recharts) and dynamic UI states.
2. **Backend API Gateway (Node.js / Express)**
   - RESTful API handling input validation, rate-limiting, and CORS.
   - Features a robust fallback valuation engine to ensure high availability.
3. **ML Inference Service (Python / FastAPI)**
   - Isolated microservice dedicated to executing the `extra_trees_model.pkl`.
   - Ensures the Node.js event loop remains unblocked during heavy model inference.

```text
[ Client ] -> [ Nginx :80 ] -> [ Node.js API :5000 ] -> [ Python ML API :8000 ]
```

---

## Technical Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Phosphor Icons, Recharts
- **Backend API**: Node.js, Express, Axios
- **ML Inference**: Python 3.11, FastAPI, Uvicorn, Scikit-Learn, Pandas, Numpy
- **Infrastructure**: Docker, Docker Compose, Nginx, AWS EC2

---

## Project Structure

```text
autopredict/
├── Frontend/                 # React SPA & Nginx configuration
├── Backend/                  # Node.js API Service
├── ml_inference/             # Python FastAPI Service & ML Model
├── docs/                     # Technical documentation
│   ├── AWS_EC2_DEPLOYMENT.md
│   └── MODEL.md
├── docker-compose.yml        # Multi-container orchestration
└── README.md                 # Project documentation
```

---

## Getting Started

### Prerequisites

- **Docker**: Engine version 20.10.x or higher
- **Docker Compose**: Version 2.x or higher
- **Git**: Version control

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/autopredict.git
   cd autopredict
   ```

2. **Configure Environment Variables**
   Create a `.env` file in the `Backend` directory:
   ```bash
   cat << 'EOF' > Backend/.env
   PORT=5000
   NODE_ENV=development
   ML_INFERENCE_URL=http://ml-inference:8000/predict
   FRONTEND_URL=http://localhost:80
   EOF
   ```

3. **Initialize the Application**
   Deploy the microservices using Docker Compose:
   ```bash
   docker-compose up --build
   ```

4. **Access the Services**
   - Application Interface: `http://localhost:80`
   - Node API Health Check: `http://localhost:5000/api/health`
   - ML API Health Check: `http://localhost:8000/health`

---

## Deployment

The application is configured for production deployment on AWS EC2 Ubuntu instances. 

For comprehensive deployment instructions, including setting up Security Groups, SSH, SSL certificates via Certbot, and Nginx reverse proxy configuration, please refer to the deployment manual:
- [AWS EC2 Deployment Guide](docs/AWS_EC2_DEPLOYMENT.md)

---

## Machine Learning Integration

The core prediction logic relies on an Extra Trees Regressor serialized model. For detailed information regarding model architecture, input schemas, and expected outputs, refer to the model documentation:
- [ML Model Technical Specification](docs/MODEL.md)

---

## Security Protocols

- **Rate Limiting**: Configured at the API gateway layer to prevent abuse.
- **CORS**: Strictly enforced origin policies via environment variables.
- **Container Isolation**: Internal service communication happens over a private Docker bridge network; only the Nginx port (80) is exposed to the host network.

## License

Copyright (c) 2026. All rights reserved.
