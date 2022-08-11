# ETHSeoul 2022 Submission: Scamscan
![Cover](https://user-images.githubusercontent.com/81923229/184147275-7630f75f-78c0-4251-9e74-2921d4cc8afc.png)

## Introduction
* Scamscan is a reputation platform using SBT with the quadratic burning mechanism. With Scamscan, you could track someone's reputation for interaction, which could prevent user's malicious actions.

## Features
* Positive / Negative Reputation Points
* Verifying tx log
* Quadratic Burning

## Fee Mechanism
* We would charge 10 MATIC as a constant fee to prevent malicious distortion of reputation with a low fee. We could express the total fee as below.
* p = reputation quadratic burning
* c = constant fee = 10 MATIC 
* r = gas fee
* R = total fee = p^2 + c + r

## Give: SBT minting + signing (amount, comment) + sending
1. Verify whether the opponent is give-able (SBT minting + signing)
2. If eligible => send SBT + MATIC (or other tokens) to be burnt (by signing Metamask wallet)
3. Check: Search by specific addresses then check SBT list and score sum
4. MyPage: Check the list of received & sent SBT tokens (which requires additional signature)

## Demonstration Video
https://drive.google.com/file/d/1bwGjGstn-IYZNQftPZEfoDuDP6-OtB9f/view?usp=sharing

## Dependencies 
```
"dependencies": {
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@metamask/providers": "^9.1.0",
    "daisyui": "^2.22.0",
    "emotion-reset": "^3.0.1",
    "ethers": "^5.6.9",
    "next": "12.1.6",
    "postcss": "^8.4.16",
    "react": "18.1.0",
    "react-dom": "18.1.0",
    "react-hook-form": "^7.34.0"
  },
  "devDependencies": {
    "@babel/core": "7.0.0",
    "@emotion/babel-plugin": "^11.9.2",
    "@stylelint/postcss-css-in-js": "^0.38.0",
    "@types/node": "17.0.38",
    "@types/react": "18.0.10",
    "@types/react-dom": "18.0.5",
    "@typescript-eslint/eslint-plugin": "^5.27.0",
    "@typescript-eslint/parser": "^5.27.0",
    "autoprefixer": "^10.0.2",
    "babel-plugin-inline-react-svg": "^2.0.1",
    "babel-plugin-module-resolver": "^4.1.0",
    "eslint": "^8.16.0",
    "eslint-config-next": "12.1.6",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.30.0",
    "eslint-plugin-react-hooks": "^4.5.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.1",
    "postcss": "8.4.16",
    "postcss-html": "^1.4.1",
    "postcss-syntax": "^0.36.2",
    "prettier": "^2.6.2",
    "stylelint": "^14.8.5",
    "stylelint-config-prettier": "^9.0.3",
    "stylelint-config-standard": "^25.0.0",
    "stylelint-config-styled-components": "^0.1.1",
    "tailwindcss": "^3.1.8",
    "typescript": "4.7.2"
  }
```
