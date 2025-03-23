# Utilise une image Node.js pour construire le site
FROM node:18-alpine AS builder

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de dépendances (package.json, package-lock.json)
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du code source
COPY . .

# Construit le site VitePress
RUN npm run docs:build

# Utilise une image Nginx pour servir le site
FROM nginx:alpine

# Copie les fichiers construits depuis l'étape de construction
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html

# Copie la configuration Nginx
COPY ./.config/nginx.conf /etc/nginx/conf.d/default.conf

# Expose le port 80 (par défaut pour Nginx)
EXPOSE 80