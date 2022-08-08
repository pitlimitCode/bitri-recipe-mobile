# bitri-recipe-mobile
Recipes sharing web app by Bitri Recipe, for Mobile Device Users.

### .env.local example:  
API_DOMAIN=http://localhost:8000/
      
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
- [ ] Deploy, VerCel
- [ ] Upload/push ke github dan gunakan nama yang profesional
- [x] Presentasikan
- [ ] Teori (NextJS, SSR, & CSR)
- [ ] Authentification (optional 1)
- [ ] SSR (optional 2)
- [ ] REDUX (opsional 2)
- [ ] Refresh token (opsional 2)
- [ ] User activation via email (opsional 2)
- [ ] Unit testing (opsional 2)
- [ ] Realtime chat user (opsional +)
- [ ] Forgot password (opsional +)

https://www.figma.com/file/SUbBTYCq1e4ngRt20lSdqr/Food-Recipe-Mobile?node-id=0%3A1



### routes :
	/login
		/index
		/forgot-password
	/register
		/index
		/code
	/(home)
	/popular:type(recipe) [!+ backend]
	/detail
		/:id(recipe)
	/search
		/:name(recipe)
	/profile
		/:id(user)
			/edit
			/my-recipes
			/saved-recipes
			/liked-recipes
	/chat
		/index
		/:id(users)
	/add-recipe

### documentation :
create nextJS: npx create-next-app folder-name  
running nextJS: npm run dev

database:
	category recipe: | sup | daging | makanan laut | makanan ringan |
	table like : id menu relasi ke id user yang ngelike
	table saved: id menu relasi ke id user yang ngesave
	table star bintang 5
	tabs di detail resep belum beres
	cara rekomendasi resep popular untuk user yang sedang aktiv ????

	opsi B:
	fitur rating bintang diganti menjadi jumlah like


Developing rules:
	slicing for mobile device, like UI figma
	reusable component / atomic design
	use english named on: class, id, and function
	CRUD: REDUX (opti, but i'll try it) (?persist, thunk, ..., ect?)
	
non-mandatory/optional:
	learn and practice: deploy frontend in Versel
	authentification
	slicing: forgot/reset password
	slicing: change password (like reset password)
	api popular menu
	slicing realtime chat
	realtime chat (socket.io) (*materi tambahan?)
	SSR server side rendering (*materi tambahan?)


### Change nextJS port :
(in package.json:)  
	"scripts": {  
		"dev": "next dev -p 8080", // for dev   
		"start": "next start -p 8080" // for prod  
},  


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
