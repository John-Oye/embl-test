# PDCM Finder gene expression

PDCM Finder gene expression frontend implementation in React, Typescript, React-Bootstrap, and Nivo.

[Demo](https://dash1.johnoye.com).

Link to the repo with the dataset: (https://github.com/PDCMFinder/expression-data-test).

## Requirements

- [Node 12.0+](https://nodejs.org/en/)
- [Yarn Classic](https://classic.yarnpkg.com/lang/en/)

## Setup development environment

1. Fork this repo using Github's user interface.
2. Clone your fork

```
git clone https://github.com/<YOUR_USERNAME>/embl-test
cd embl-test
yarn install
yarn start
```

Below is the structure the project src folder:

src
├── assets
│ └── images
├── components
│ ├── common
│ │ └── Accordion.tsx
│ │ └── Constants.ts
│ │ └── ExpressionSelector.tsx
│ │ └── Header.tsx
│ │ └── PreLoader.tsx
│ ├── context
│ │ └── apiContext.tsx
│ ├── Theme
│ │ └── themeContext.ts
│ │ └── themeToggle.tsx
│ └── MyResponsiveHeatMap.tsx
├── utility
│ └── DataUtilityClass.ts
├── App.css
├── App.tsx
├── index.css
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── package.json
├── tsconfig.json
└── yarn.lock

Code implementation by Johnson Oyeniyi (https://johnoye.com).
