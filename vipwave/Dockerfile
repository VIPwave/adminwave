# 베이스 이미지
FROM node:18-alpine AS builder

WORKDIR /app

# 패키지 설치
COPY package.json package-lock.json ./
RUN npm ci

# 애플리케이션 빌드
COPY . .
RUN npm run build

# 실행 환경 구성
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public

EXPOSE 3000

CMD ["npm", "run", "start"]
