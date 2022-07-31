# bitri-recipe-mobile
Recipes sharing web app by Bitri Recipe, for Mobile Device Users.

### .env example:  
this_host=...  
be_deploy_url=...  
      
### Requirements:  
- [ ] Gunakan Bahasa Inggris untuk nama class, id, fungsi, dan komponen
- [ ] Buat semirip mungkin sesuai figma
- [ ] UI
- [ ] Responsive
- [ ] Reusable Component
- [ ] ENV
- [ ] Next component
- [ ] Navigation
- [ ] CRUD
- [ ] Search, sort, pagination
- [ ] Deploy
- [ ] Upload/push ke github dan gunakan nama yang profesional
- [ ] Presentasikan
- [ ] Teori (NextJS, SSR, & CSR)
- [ ] Authentification (optional)
- [ ] SSR (optional)
- [ ] REDUX (opsional)

- [ ] Realtime chat user
- [ ] Forgot password

- [x] checklist example


documentation:  
create next js: npx create-next-app folder-name  



developing with:
	slicing for mobile device, like UI figma
	reusable component / atomic design
	use english named on: class, id, and function
	CRUD: REDUX (opti, but i'll try it) (?persist, thunk, ..., ect?)
	
1: yang masuk akal dikerjakan sebelum DS senin pagi:
	name repo (private): bitri-recipe-mobile
	install and config:
		env
		bootstrap
		mobile-device-detect/responsive
		bootstrap-logo?
	mapping all route page
	Navigasi next component: next router & next link (jgn react router & react link)
	
	slicing + atomic design: 
		slicing: login, register, 
		slicing: password
		slicing: ?top icon: realtime, network local, network wifi, baterai.
		slicing: navigation navbar in bottom
		slicing: Home page v1.0 [Sort, Pagination(slide until newest 10)]
		slicing: searching
		slicing: detail recipe
			navbar: ingredients
			navbar: video step(youtube video)]
		slicing: add recipe
		slicing: user profile
			slicing: edit profile (edit profile picture quickly)
			slicing: change biodata
		slicing: popular menu
        


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
