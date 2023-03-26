# canvas-confetti

This is a cheat sheet for the [canvas-confetti](https://www.kirilv.com/canvas-confetti/) library

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

## Resources

- [canvas-confetti](https://www.kirilv.com/canvas-confetti/)
- [canvas-confetti on npm](https://www.npmjs.com/package/canvas-confetti)
