FROM denoland/deno:1.23.3

WORKDIR /app

COPY . .

EXPOSE 3000

CMD deno run  --allow-all --watch main.ts
