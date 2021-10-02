Configure the .env accordingly.

# Dev

For development

1. `yarn` or `npm install`
2. `sequelize db:migrate --env=DEVELOPMENT`
3. `yarn dev` or `npm run dev`

# Production

For Production purposes

2. `sequelize db:migrate --env=PRODUCTION`
3. `yarn build` or `npm run build` to build the project
4. `yarn serve` to run the built project

# Test

1. `yarn test`
