# Figr - Metalworks and Crane Construction Website

This project is a front-end implementation for a website specializing in metalworks and crane construction. It was built using React, Vite, TypeScript, SCSS, and React-Bootstrap.

## Overview

The Figr website showcases a range of services related to metalworks and crane construction. It provides detailed information about the company's expertise, products, and contact details. Additionally, visitors to the website will have the capability to submit inquiries or requests for quotes, explore a portfolio of past projects for inspiration, and gain insights into the various services offered. The platform serves as a comprehensive resource for clients seeking top-quality metalwork solutions and expert crane construction services.

## Technologies Used

- React
- Vite
- TypeScript
- SCSS
- React-Bootstrap
- Firebase
- Other react libraries

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/delimka/Figr.git`
2. Navigate to the project directory: `cd Figr`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Usage

Once the development server is running, open your web browser and go to `http://localhost:3000` to view the website,
or check the terminal with suitable link.

## Link
https://figr-delima.web.app/

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)

## Contact

For any inquiries or feedback, please contact us at [delimka](mailto:delima021@gmail.com).

-----------------------------------------------------



## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
