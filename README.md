# Price Dashboard

[Live demo](https://pricedashboard.leeshuzheng.io/)

This web app interacts with the CoinGecko API to provide up-to-date cryptocurrency information. It's designed to be a simple and intuitive tool for anyone looking to track market data with ease.

I bootstrapped this project using [Create Next App](https://nextjs.org/docs/pages/api-reference/cli/create-next-app) with Typescript, along with the following:

### Retrieving data: Tanstack Query

- I was familiar with [tanstack's react-query](https://tanstack.com/query/latest), and aside from the magic that came with declarative querying, I love that it manages loading, fetching and error states for API calls
- Handling the different states helps me build intentional and sensible UI for end users

### Tailwind CSS

I have to admit - as someone who got very used to writing raw CSS, I was not the biggest fan of Tailwind CSS at first. Having built a number of websites with the BEM and SASS method, it was unusual to apply styles in a different way. However, the from-the-ground-up approach to styling through Tailwind forces me to think about constructing UI through applying and using carefully thought out configuration.

### NextUI for <table>

I got the most bareboned installation of NextUI to get a basic table component up and running. It's a pain handling tables, and this is a great package for devs who have sufficient understanding of building UIs.

## To run this project locally

`cd` to the project directory and run `yarn`

Once `node_modules` are installed...

### `yarn dev`

Launches the app in [http://localhost:3000](http://localhost:3000) (or another port if you have an active port running).
