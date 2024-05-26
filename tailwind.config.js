/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width: {
        "":"",
        "575": "575px",
        "550": "550px",
        "542": "542px",
        "441": "441px",
        "400": "400px",
        "320":"320px",
        "237": "237px",
        "40":"40px",
        "20":"20px",
        "16": "16px",
        "8/53": "8.53px",
      },
      height: {
        "591":"591px",
        "328":"328px",
        "50": "50px",
        "48": "48px",
        "40": "40px",
        "22": "22px",
        "20":"20px",
        "16": "16px",
        "8/53": "8.53px",
      },
      padding: {
        "24": "24px",
        "16": "16px",
        "12": "12px"
      },
      colors: {
        "greyBlue":"#37465A",
        "hf": "#252F3D",
        "hf2": "#2C7EF8",
        "LoremP": "#4D5254",
        "blueText": "#2C7EF8",
        "Verify": "#5BB59A",
        "GreyClean": "#969696"
      },
      fontSize: {
        "48": "48px",
        "32": "32px",
        "24": "24px",
        "22": "22px",
        "20": "20px",
        "16": "16px",
        "12": "12px"
      },
      screens:{
        "Res0":{"max":"1155px"},
        "Res-0":{"max":"1107px"},
        "ResB":{"max":"914px"},
        "Res0.1":{"max":"649px"},
        "Res1":{"max":"562px"},
        "Res2":{"max":"528px"},
      }
    },
  },
  plugins: [],
}

