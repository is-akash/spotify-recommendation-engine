# Spotify Recommendation Engine

## Project Overview

The Spotify Recommendation Engine is a web application designed to provide users with personalized music recommendations based on their selections. This project leverages various modern web development technologies and libraries to deliver a seamless and engaging user experience.

## Features

-   **Personalized Music Recommendations**: Get tailored music suggestions based on your inputs and selections.
-   **Responsive Design**: Optimized for both desktop and mobile viewing.
-   **State Management**: Efficient state management using Redux and Redux Toolkit.
-   **Persistent State**: Uses redux-persist to save and reload state across sessions.
-   **Routing**: Client-side routing using React Router DOM.
-   **Sass Support**: Styles are written using Sass for better modularity and maintainability.

## Tech Stack

-   **Frontend**: React, React DOM, React Router DOM
-   **State Management**: Redux, Redux Toolkit, React Redux, redux-persist
-   **Styling**: Sass (node-sass)
-   **Utilities**: Axios, Lodash
-   **Build Tools**: Vite, TypeScript

## Getting Started

### Prerequisites

Make sure you have the following installed:

-   [Node.js](https://nodejs.org/) (v14 or later)
-   [npm](https://www.npmjs.com/) (v6 or later) or [Yarn](https://yarnpkg.com/) (v1 or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/skies-codes/spotify-recommendation-engine.git
    cd spotify-recommendation-engine
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

This will start the Vite development server and you can view the application at `http://localhost:5173`.

### Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

The output will be in the `dist` directory.

## Project Structure

```plaintext
spotify-recommendation-engine/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
|   ├── context/         # React Context
|   ├── interfaces       # All interfaces and types
│   ├── store/           # Redux store configuration & Redux slices
│   ├── utils/           # Utils, libs etc.
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
├── .eslintrc.js         # ESLint configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project metadata and scripts
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

-   [Spotify API](https://developer.spotify.com/documentation/web-api/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [Vite](https://vitejs.dev/)

---

Happy coding! 🎵
<br>
@skies-codes
