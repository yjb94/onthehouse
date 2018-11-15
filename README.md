This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Personal Porfolio Website

### Environments

### `Front-end`

create-react-app / mobx / styled-component

### `Back-end`

Firebase cloud functions(TypeScript) / firebase storage / firebase realtime database

### list of things i've done

1. create react app
>npx create-react-app onthehouse
2. install styled-component
> Yarn add styled-component
3. create firebase application in [Firebase Console](https://console.firebase.google.com).
4. firbase initialize [How to](https://medium.com/@bensigo/hosting-your-react-app-with-firebase-hosting-add1fa08c214)
> firebase init

#### default setup
select database / functions / hosting.

select project from step 3.
#### database setup
use database rules.
#### functions setup
use TypeScript

use TSLint

write all files and dependencies
#### Hosting setup
select **build** for your project's public directory

select no for SPA.

5. test deployment
> npm run build

> firebase deploy

then chekc if it works

6. install mobx [reference](https://velog.io/@velopert/MobX-2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-MobX-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-oejltas52z)

> yarn add mobx mobx-react
7. install plugin-proposal-decorators
> yarn eject

> yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators

8. Gabia + firebase domain connection

    first : go to [console hosting](https://console.firebase.google.com/u/0/project/onthe-house/hosting/main)
    
    second : add domain with setup and go to step 2 then copy the txt record

    third : go to gabia main site and go to DNS record setting

    fourth : add txt record with @ key

    fifth : confirm in firebase console and check it. (can take few minutes to wait)

    sixth : follow the steps in step 3. do as what you did before

9. add [react fontawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

> npm i --save @fortawesome/fontawesome-svg-core \
  npm i --save @fortawesome/free-solid-svg-icons \
  npm i --save @fortawesome/react-fontawesome

for somewhat reason this occured crash between @babel/plugin-proposal-decorators. so add this again if needed

> yarn add @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators


10. develop code for basic version

11. made script for deploy
> yarn buld \
firebase deploy

