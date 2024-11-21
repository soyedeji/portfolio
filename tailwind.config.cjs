/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                // Masculine earthy tones and metallics
                darkStone: '#2B2D42',  // Dark grey-blue
                iron: '#606C76',       // Steel-like grey
                bronze: '#CD7F32',     // Metallic bronze
                hunterGreen: '#355E3B', // Deep green
                navy: '#1B3A5F',       // Navy blue
                sand: '#D2B48C',       // Light tan
                blackSmoke: '#1E1E1E', // Smoky black
                skySteel: '#4A6572',   // Muted blue-grey
                crimson: '#8B0000',    // Rich dark red
                goldAccent: '#FFD700', // Bright gold

                // Replacing semantic colors with a masculine touch
                background: '#1B1F23', // Dark muted background
                foreground: '#ECEFF4', // Light text for dark mode
                card: {
                    DEFAULT: '#2D3748', // Muted dark card
                    foreground: '#F7FAFC' // Card text
                },
                popover: {
                    DEFAULT: '#3C3F44', // Slightly lighter than card
                    foreground: '#F1F5F9' // Popover text
                },
                primary: {
                    DEFAULT: '#0D6EFD', // Deep blue for primary
                    foreground: '#FFFFFF' // White text
                },
                secondary: {
                    DEFAULT: '#6C757D', // Neutral grey for secondary
                    foreground: '#FFFFFF' // White text
                },
                muted: {
                    DEFAULT: '#4A4A4A', // Dark grey for muted elements
                    foreground: '#D1D1D1' // Light grey text
                },
                accent: {
                    DEFAULT: '#FF4500', // Vibrant orange for accents
                    foreground: '#FFFFFF' // White text
                },
                destructive: {
                    DEFAULT: '#B22222', // Dark red for destructive actions
                    foreground: '#FFFFFF' // White text
                },
                border: '#3B3B3B',      // Dark grey for borders
                input: '#1E293B',       // Dark blue for inputs
                ring: '#2563EB',        // Bright blue ring
                chart: {
                    '1': '#1B998B',      // Teal
                    '2': '#F46036',      // Burnt orange
                    '3': '#E71D36',      // Crimson
                    '4': '#2EC4B6',      // Bright green-blue
                    '5': '#011627'       // Midnight blue
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
