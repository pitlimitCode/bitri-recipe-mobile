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
- [ ] Realtime chat user (+ opsional)
- [ ] Forgot password (+ opsional)
- [x] checklist example

### routes :
	/login
		/forgot-password
	/register
		/code
	/(home)
	/popular:type(recipe) [!+ backend]
	/detail:id(recipe)
	/search:name(recipe)
	/profile
		/:id(user)
			/edit
			/my-recipes
			/saved-recipes
			/liked-recipes
	/chat
		/:id(users)
	/add-recipe

### documentation :
create nextJS: npx create-next-app folder-name  
running nextJS: npm run dev
package+ :
1. .env: 
    install: npm install dotenv
    import in file: require('dotenv').config();
2. bootstrap:
    install: npm install bootstrap
    import in file: import 'bootstrap/dist/css/bootstrap.css'
    install icons: npm i bootstrap-icons
    import icons in file: import 'bootstrap-icons/font/bootstrap-icons.css'

note:
1. zooming web% vs zooming figma%
	1 dev: 60% : 77%
	2 dev: 100% : 127%
2. revisi: tidak ada resep populer dari tipe resep, resep popular ditampilkan berdasarkan banyak yang like
3. figma copas:
		cari family-font nya
		4 logo di home page


REPORT DS ! :
done: 
	hard slicing register, navbar home page
	get id params
kendala: 
	pemakaian bootstrap
	bootstrap swipe right di home page
do after ds:  
	hard slicing: home, detail recipe, add recipe 
	bisa fetch ke api express: login, register, home, detail recipe, add recipe
?:
	default profile di auth untuk apa?
	6 code pin setelah register wajib?
	home page, popular, ikut logonya atau tampilin gambar degnan ukuran kecl?
	cara navbar yang static
	
	
Developing rules:
	slicing for mobile device, like UI figma
	reusable component / atomic design
	use english named on: class, id, and function
	CRUD: REDUX (opti, but i'll try it) (?persist, thunk, ..., ect?)
	

1: to do list for tomorrow DS:
	slicing + atomic design: 
		slicing: login, register, 
		slicing: password
		slicing: navigation navbar in bottom
		slicing: Home page v1.1 [Sort, Pagination(slide until newest 10)]
		slicing: searching
		
		slicing: detail recipe
			navbar: ingredients
			navbar: video step(youtube video)]
		slicing: add recipe
		slicing: user profile
			slicing: edit profile (edit profile picture quickly)
			slicing: change biodata
		slicing: popular menu
	Navigasi next component: next router & next link
		https://nextjs.org/docs/api-reference/next/router
 




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
