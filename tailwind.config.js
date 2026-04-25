
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
 content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './features/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        command: {
          ink: '#07100f',
          panel: '#101b18',
          raised: '#15211e',
          fog: '#e9eee8',
          paper: '#fbfcf8',
          muted: '#66716b',
          success: '#45e1a5',
          warning: '#ffc567',
          danger: '#ff645f',
          info: '#7ab7ff',
        },
      },
      borderRadius: {
        command: '24px',
        'command-lg': '30px',
      },
    },
  },
  plugins: [],
}
