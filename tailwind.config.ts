// Importing Config Type From TailwindCSS Itself
import type {Config} from 'tailwindcss'

// Setting Up TailwindCSS Configs
const config: Config = {
    content: [
        './app/*.{ts,tsx}',
        './component/*.{ts,tsx}',
        './component/**/*.{ts,tsx}',
        './chunk/*.{ts,tsx}',
        './chunk/**/*.{ts,tsx}',
    ],
    theme: {},
    plugins: [],
}

// Exporting Configs
export default config;
