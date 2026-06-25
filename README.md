# Score Counter Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Database: PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue.svg)
![Language: JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow.svg)
![Language: HTML](https://img.shields.io/badge/Language-HTML-orange.svg)
![Style: CSS](https://img.shields.io/badge/Style-CSS-purple.svg)
![Framework: Express](https://img.shields.io/badge/Framework-Express-lightgrey.svg)

A reusable starter kit for building score‑tracking web apps. Provides core components for point entry, live updates, and match history, with modular logic adaptable to different sports or games.

## 🚀 Features
- Simple point entry with intuitive controls
- Real‑time score updates
- Match history tracking
- Modular scoring logic (easy to adapt for padel, tennis, basketball, etc.)
- Clean UI components ready for customization


## 🛠️ Getting Started
1. Clone the repo & install dependencies:  
    ```bash
    git clone https://github.com/yourname/score-counter-boilerplate.git
    cd score-counter-boilerplate
    npm install
    ```
2. Update configuration in `config/.env`:
    ```bash
    PORT=3000
    DB_USER=your_postgres_username
    DB_PASS=your_postgres_password
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=score_counter
    NODE_ENV=development
    ```

3. Run migrations & seed:
    ```bash
    npm run db:migrate
    npm run db:seed
    ```
3. Run the app:
    ```bash
    npm run dev
    ```