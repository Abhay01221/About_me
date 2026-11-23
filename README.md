# Abhay Sawale's Portfolio

A Next.js and TypeScript portfolio featuring selected projects, interactive demo previews, technical skills, and a downloadable résumé.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- Update profile links, project descriptions, demo URLs, and skills in [lib/portfolio.ts](lib/portfolio.ts).
- Edit page sections in [components/Portfolio.tsx](components/Portfolio.tsx) and appearance in [app/globals.css](app/globals.css).
- Update page metadata in [app/layout.tsx](app/layout.tsx).
- Replace [public/Abhay-Sawale-Resume.pdf](public/Abhay-Sawale-Resume.pdf) to update the résumé download.

## Build and deploy

```bash
npm run lint
npm run build
npm start
```

To deploy on Vercel, import the repository as a Next.js project. Set `NEXT_PUBLIC_SITE_URL` to the deployed origin so the sitemap and robots metadata can use it. See the [VoidStream embedding guide](docs/voidstream-embedding.md) if the live preview needs to allow a new portfolio origin.

## License

This project is available under the MIT License.

## Contact

- Email [abhaysawale9011@gmail.com](mailto:abhaysawale9011@gmail.com)
- [GitHub](https://github.com/Abhay01221)
- [LinkedIn](https://www.linkedin.com/in/abhay-sawale-47856628a/)
