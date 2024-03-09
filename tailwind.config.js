/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                bodyFont: ['Poppins', 'sans-serif'],
                titleFont: ['Montserrat', 'sans-serif'],
            },
            colors: {
                bodyColor: '#fafafa',
                lighText: '#050505',
                boxBackground: 'linear-gradient(#e66465, #9198e5);',
                designColor: '#ff014f',
            },
            boxShadow: {
                shadowOne: '0px 0px 0px , -0px -0px 0px ',
            },
        },
    },
    plugins: [],
};
