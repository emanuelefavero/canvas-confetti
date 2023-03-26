# canvas-confetti

This is a cheat sheet for the [canvas-confetti](https://www.kirilv.com/canvas-confetti/) library

## Demo

- [https://emanuelefavero.github.io/canvas-confetti/](https://emanuelefavero.github.io/canvas-confetti/)

#### Screenshot

<img src="screenshot.png" alt="screenshot" width="300">

## How to use this repo

- Clone this repo and `cd` into it
- Run `npm install`
- Run `npm run dev`

## How to use canvas-confetti from this repo

- install the `canvas-confetti` library from npm: `npm install canvas-confetti`
- install types for the `canvas-confetti` library: `npm install --save-dev @types/canvas-confetti`
- copy the `canvas-confetti.ts` file from the `utils` folder into your project:

```ts
import canvasConfetti from 'canvas-confetti'

export default () => {
  canvasConfetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  })
}
```

- import the `canvas-confetti` function from the file:

```ts
import canvasConfetti from './utils/canvas-confetti.ts'
```

- call the `canvasConfetti` function:

```ts
canvasConfetti()
```

## How to deploy a vite app github pages

- go to `vite.config.ts` and set the `base` property to the name of your repo:

```ts
export default defineConfig({
  base: '/canvas-confetti/',
  plugins: [react()],
})
```

- run `npm run build`

- add dist folder to git: `git add dist -f`

> Note: the -f flag is needed because the dist folder is ignored by default

- commit: `git commit -m "add dist"`
- push to gh-pages: `git subtree push --prefix dist origin gh-pages`

> Note: This command pushes the contents of the "dist" folder to the "gh-pages" branch of the remote Git repository named "origin", using Git Subtree.
>
> More specifically, the git subtree push command is used to update a subtree of a Git repository with the changes made in another repository. In this case, the "dist" folder is treated as a subtree of the main repository, and the changes made to it will be pushed to the "gh-pages" branch of the "origin" repository.
>
> The --prefix dist option specifies the prefix path for the subtree to be pushed, which in this case is "dist". Finally, the "gh-pages" branch is typically used for hosting web pages on GitHub Pages, so this command may be used to update a website hosted on GitHub Pages with the contents of the "dist" folder.

## Resources

- [canvas-confetti](https://www.kirilv.com/canvas-confetti/)
- [canvas-confetti on npm](https://www.npmjs.com/package/canvas-confetti)
