# Price Dashboard

## This web app interacts with the CoinGecko API to provide up-to-date cryptocurrency information. It's designed to be a simple and intuitive tool for anyone looking to track market data with ease.

## [Live demo](https://pricedashboard.leeshuzheng.io/)

I bootstrapped this project using [Create Next App](https://nextjs.org/docs/pages/api-reference/cli/create-next-app) with Typescript, along with the following:

### Retrieving data: Tanstack Query

- I was familiar with [tanstack's react-query](https://tanstack.com/query/latest), and aside from the magic that came with declarative querying, I love that it manages loading, fetching and error states for API calls
- Handling the different states helps me build intentional and sensible UI for end users

### Tailwind CSS

I have to admit - as someone who got very used to writing raw CSS, I was not the biggest fan of Tailwind CSS at first. Having built a number of websites with the BEM and SASS method, it was unusual to apply styles in a different way. However, the from-the-ground-up approach to styling through Tailwind forces me to think about constructing UI through applying and using carefully thought out configuration.

### NextUI for tables

I got the most bareboned installation of NextUI to get a basic table component up and running. It's a pain handling tables, and this is a great package for devs who have sufficient understanding of building UIs.

## Assumptions

1. The list of cryptocurrencies is not exhaustive, or anything close to what CoinGecko has in their table. Adding more data to the table is a matter of adding more currencies to `env`.
2. We are not having a fallback for when the API call fails. Being rate-limited on the demo tier of CoinGecko's API, there is a limited number of requests I could make.
3. Given the need for up-to-date cryptocurrency data, I did not cache the /simple/api response.
4. If a user knows the ID for a cryptocurrency not shown in the table, they can enter it in the search bar for `/coins/[id]`.

## Design decisions I made

1. I used Brad Frost's [Atomic Design](https://atomicdesign.bradfrost.com/) methodology to build the UI. This meant seeing the UI as composable building blocks in `atoms`, `molecules`, and `organisms`.
2. I chose to follow the CoinGecko's color scheme overall, and mirrored closely Blockchain.com's [market data UI](https://www.blockchain.com/explorer/assets/BTC)
3. Wherever possible, I choose to extract constants and global variables into their own files. This is to ensure that the code is readable and maintainable.

## Finally, to run this project locally...

`cd` to the project directory and run `yarn`

Once `node_modules` are installed...

### `yarn dev`

Launches the app in [http://localhost:3000](http://localhost:3000) (or another port if you have an active port running).
