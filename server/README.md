# Smart On Accessories — Backend (scaffold)

This folder is a placeholder for the future Node.js / Express backend.
No routes are wired to the frontend yet — the UI uses dummy data from
`src/data/products.ts`.

## Suggested structure

```
server/
  src/
    index.js          # Express app entry
    routes/
      products.js
      orders.js
      contact.js
    controllers/
    models/
    middleware/
  package.json
```

## Getting started (later)

```bash
cd server
npm init -y
npm install express cors dotenv
node src/index.js
```