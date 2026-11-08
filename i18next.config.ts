export default {
  locales: [
    "ru"
  ],
  extract: {
    input: "src/**/*.{js,jsx,mjs,ts,tsx}",
    output: "public/locales/{{language}}/{{namespace}}.json"
  }
}