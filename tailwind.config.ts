import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const UIKitColors = {
  red: {
    light: '#FF3B30',
    dark: '#FF453A',
  },
  orange: {
    light: '#FF9500',
    dark: '#FF9F0A',
  },
  yellow: {
    light: '#FFCC00',
    dark: '#FFD60A',
  },
  green: {
    light: '#34C759',
    dark: '#30D158',
  },
  mint: {
    light: '#00C7BE',
    dark: '#63E6E2',
  },
  teal: {
    light: '#30B0C7',
    dark: '#40CBE0',
  },
  cyan: {
    light: '#32ADE6',
    dark: '#64D2FF',
  },
  blue: {
    light: '#007AFF',
    dark: '#0A84FF',
  },
  indigo: {
    light: '#5856D6',
    dark: '#5E5CE6',
  },
  purple: {
    light: '#AF52DE',
    dark: '#BF5AF2',
  },
  pink: {
    light: '#FF2D55',
    dark: '#FF375F',
  },
  brown: {
    light: '#A2845E',
    dark: '#AC8E68',
  },
  grey: {
    light: '#8E8E93',
    dark: '#8E8E93',
  },
  grey2: {
    light: '#AEAEB2',
    dark: '#636366',
  },
  grey3: {
    light: '#C7C7CC',
    dark: '#48484A',
  },
  grey4: {
    light: '#D1D1D6',
    dark: '#3A3A3C',
  },
  gray5: {
    light: '#E5E5EA',
    dark: '#2C2C2E',
  },
  grey6: {
    light: '#F2F2F7',
    dark: '#1C1C1E',
  },

  // Separator
  separator: {
    opaque: {
      light: '#C6C6C8',
      dark: '#38383A',
    },
    non_opaque: {
      light: 'rgba(60, 60, 67, 0.36)',
      dark: 'rgba(84, 84, 88, 0.65)',
    },
  },

  // Label
  label: {
    primary: {
      dark: '#FFF',
      light: '#000',
    },
    secondary: {
      light: '#3C3C4399',
      dark: '#EBEBF599',
    },
    tertiary: {
      light: '#3C3C434D',
      dark: '#EBEBF54D',
    },
    quarternary: {
      light: '#3C3C432E',
      dark: '#EBEBF529',
    },
  },

  // Background
  background: {
    primary: {
      light: '#fff',
      dark: '#1C1C1E',
    },
    secondary: {
      light: '#F2F2F7',
      dark: '#2C2C2E',
    },
    tertiary: {
      light: '#FFFFFF',
      dark: '#3A3A3C',
    },
  },

  // Grouped Background
  grouped: {
    primary: {
      light: '#F2F2F7',
      dark: '#1C1C1E',
    },
    secondary: {
      light: '#FFFFFF',
      dark: '#2C2C2E',
    },
    tertiary: {
      light: '#F2F2F7',
      dark: '#3A3A3C',
    },
  },

  // Fill
  fill: {
    primary: {
      light: '#78788033',
      dark: '#7878805C',
    },
    secondary: {
      light: '#78788029',
      dark: '#78788052',
    },
    tertiary: {
      light: '#7676801F',
      dark: '#7676803D',
    },
    quarternary: {
      light: '#74748014',
      dark: '#7474802E',
    },
  },
}

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: ["var(--font-ubuntuMono)"],
    },
    extend: {
      colors: {
        uk: UIKitColors,
        themed: {
          bg_opacity: 'var(--bg-opacity)',
        },
      }
    }
  },
  plugins: [
    typography,
    // ...
  ],
};

export default config;