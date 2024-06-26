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
        "326":"326px",
        "320":"320px",
        "289": "289px",
        "237": "237px",
        "194":"194px",
        "192":"192px",
        "180":"180px",
        "134":"134px",
        "106":"106.67px",
        "88":"88px",
        "82":"82px",
        "80":"80px",        
        "44":"44px",
        "41":"41px",
        "40":"40px",
        "25":"25px",
        "20":"20px",
        "16": "16px",
        "12":"12px",
        "8/53": "8.53px",
      },
      height: {
        "591":"591px",
        "328":"328px",
        "134":"134px",
        "80":"80px",        
        "50": "50px",
        "48": "48px",
        "40": "40px",
        "36":"36px",
        "32":"32px",
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
        "whiteBlue":"#EDF3FD",
        "greyBlue":"#37465A",
        "greySky":"#CFCFCF",
        "hf": "#252F3D",
        "hf2": "#2C7EF8",
        "LoremP": "#4D5254",
        "blueText": "#2C7EF8",
        "Verify": "#5BB59A",
        "GreyClean": "#969696",
        "redAlert":"#F82C2C",
        "greenBt":"#59AE43",
      },
      fontSize: {
        "48": "48px",
        "32": "32px",
        "24": "24px",
        "22": "22px",
        "20": "20px",
        "18": "18px",
        "16": "16px",
        "14":"14px",
        "12": "12px",
        "10": "10px",
      },
      screens:{
        "Res0":{"max":"1155px"},
        "Res-0":{"max":"1107px"},
        "ResB":{"max":"914px"},
        "Res0.1":{"max":"649px"},
        "Res1":{"max":"562px"},
        "Res2":{"max":"528px"},
        "Res3":{"max":"492px"}
      }
    },
  },
  plugins: [],
}

