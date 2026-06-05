# Aqqib - Multi-AI Assistant Platform

<div align="center">

**An all-in-one AI platform combining ChatGPT, Claude, DeepSeek, Image & Video Generation**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Documentation](#-documentation)

</div>

---

## 🌟 Features

### 🤖 Multi-Model Chat Interface
- **ChatGPT** (GPT-4, GPT-3.5-Turbo) - OpenAI
- **Claude** (Claude 3 Opus, Sonnet) - Anthropic
- **DeepSeek** - Next-gen reasoning model
- Real-time streaming responses
- Conversation history & management

### 🎨 Image Generation
- DALL-E 3 integration
- Stable Diffusion v3
- Multiple styles & sizes
- Real-time preview

### 🎬 Video Generation
- AI-powered video creation
- Script-to-video conversion
- Text-to-video synthesis

### 👤 User Management
- Secure authentication (JWT + OAuth2)
- User profiles & settings
- API usage tracking
- Chat history

## 🛠️ Tech Stack

### Frontend
- Next.js 14+ (React 18)
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- Socket.io (Real-time)

### Backend
- Express.js + TypeScript
- PostgreSQL
- Redis
- Bull (Job Queue)
- JWT & Passport.js

### Infrastructure
- Docker & Docker Compose
- GitHub Actions (CI/CD)

## 📁 Project Structure

```
Aqib-ai/
├── frontend/           # Next.js Frontend
├── backend/            # Express.js Backend
├── services/           # Microservices (optional)
├── docs/               # Documentation
├── docker-compose.yml
├── .env.example
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- Git

### Using Docker Compose

```bash
git clone https://github.com/aqibrafi342-pixel/Aqib-ai.git
cd Aqib-ai
cp .env.example .env
docker-compose up -d
```

Access:
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000

## 📖 Documentation

- [Setup Guide](./docs/SETUP.md)
- [API Documentation](./docs/API.md)
- [Architecture](./docs/ARCHITECTURE.md)

## 📄 License

MIT

## 👥 Contributors

- aqibrafi342-pixel
