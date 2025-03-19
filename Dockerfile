# Use the official Nginx image as the base
FROM nginx:alpine

# Copy our HTML file to the default Nginx public directory
COPY index.html /usr/share/nginx/html/

# The command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
