# 🚀 Deployment Instructions for Miniko

## 1. Deploying Docker Compose in Daemon Mode
To deploy the Docker Compose using docker-compose-batched.yml in daemon mode, use the following command:
```bash
docker-compose -f docker-compose-batched.yml up -d
```

## 2. 📥 Download Brazilian Ecommerce Dataset
You can download the Brazilian Ecommerce dataset from the following link:
👉 [Download Brazilian Ecommerce Dataset](https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce) 👈

## 3. 🌐 Connecting Trino using DBeaver
To connect Trino using DBeaver, follow these instructions:
- Open DBeaver and click on "New Database Connection"
- Select "Trino" as the database type
- Enter the Trino server host, port, and authentication details
- Click "Test Connection" to ensure the connection is successful
- Click "Finish" to save the connection details