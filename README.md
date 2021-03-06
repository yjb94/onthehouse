This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Personal Porfolio Website

### Environments

### `Front-end`

create-react-app / mobx / styled-component / Airbnb Style Guideline

### `Back-end`

Firebase cloud functions(TypeScript, RESTful) / firebase storage / firebase realtime database

### list of things i've done

1. create react app
>npx create-react-app onthehouse
2. install styled-component
> Yarn add styled-component
3. create firebase application in [Firebase Console](https://console.firebase.google.com).
4. firbase initialize [How to](https://medium.com/@bensigo/hosting-your-react-app-with-firebase-hosting-add1fa08c214)
> firebase init

**default setup**
select database / functions / hosting.
select project from step 3.

**database setup**
use database rules.

**functions setup**
use TypeScript
use TSLint
write all files and dependencies

**Hosting setup**
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

11. add react-router-dom
> yarn add react-router-dom

set rotuer files(see code)

12. install firebase into project
> yarn add firebase

adding this is for firebase app controlling

13. firebase + react router error fix

[reference](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually)

redirect widlcard(*) to /index.html

it's because of server side routing conflicts with client side routing

14. firebase functions to REST API
[reference](https://itnext.io/building-a-serverless-restful-api-with-cloud-functions-firestore-and-express-f917a305d4e6)

15. axios added for REST API control

> yarn add axios

16. localization added

> yarn add react-intl

17. added Authorization for request using firebase idtoken

18. font loading

korean fonts are extremely large. so we need good loading logic

[reference](http://wit.nts-corp.com/2017/02/13/4258)
[reference](https://nolboo.kim/blog/2013/10/22/google-web-font-faster-tip/)

19. uglify js for webpack 4

[reference](https://stackoverflow.com/questions/49053215/webpack-4-how-to-configure-minimize)

> yarn add uglifyjs-webpack-plugin