module.exports = {
  content: [
    "./resources/**/*.blade.php", // For Laravel Blade files
    "./resources/**/*.js", // For React components in Laravel
    "./resources/**/*.jsx", // For React components in Laravel
    "./resources/**/*.vue", // If you’re using Vue with Laravel
    "./src/**/*.{js,jsx,ts,tsx}", // For React components in Vite
    "./public/**/*.html", // If you have static HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
