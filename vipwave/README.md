This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Style guide

1. padding, margin
   레이아웃 영역은 header를 따릅니다. (mx-5) <br/>
   이 외에 기본적으로 2 사용 / 큰 섹션 나눌때는 5 사용 (p-2, p-5)

2. border
   border는 1px, solid만 사용하며 <br/>
   큰 섹션에는 primary, 작은 섹션에는 secondary컬러를 사용하시면 됩니다. (config 참고)

3. background <br/>
   primary는 노란색, chart는 회색, 기본 배경은 black입니다.

4. typography <br/>
   normal - "text-sm text-white" <br/> small - "text-xs text-secondary" <br/> highlight - "text-sm text-primary"
