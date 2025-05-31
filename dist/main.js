/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const teams = __webpack_require__(/*! ./teams.json */ \"./src/teams.json\")\r\nasync function loadLeaderboard() {\r\n      try {\r\n        const response = await fetch('https://corsproxy.io/?url=https://o76fno8oxh.execute-api.eu-central-1.amazonaws.com/api/leaderboard/c6b9993b-c065-4e9d-86f5-d60b7387ac00/rankings');\r\n        const json = await response.json();\r\n\r\n        const tbody = document.querySelector('#leaderboardTable tbody');\r\n        tbody.innerHTML = ''; // Clear any existing rows\r\n\r\n        json.data.forEach(entry => {\r\n          const attrs = entry.attributes;\r\n\r\n          const row = document.createElement('tr');\r\n          let scores = [attrs.match_1_score,attrs.match_2_score,attrs.match_3_score]\r\n          scores = scores.map((num) => (num <= 0 ? 'N/A' : num))\r\n          let teamName = `\r\n          <span class=\"teamName\">${attrs.number_name.slice(4)}</span>\r\n          <span class=\"teamCountry\">Country Unavailable</span>\r\n          `\r\n          \r\n          let team = teams[parseInt(attrs.number_name.slice(0,2))]\r\n          if(team){\r\n            teamName=`\r\n            <span class=\"teamName\">${team.name}</span>\r\n            <span class=\"teamCountry\">${team.Country}</span>`\r\n          }\r\n          \r\n          row.innerHTML = `\r\n            <td>\r\n                ${teamName}\r\n            </td>\r\n            <td>${attrs.rank}</td>\r\n            <td>${attrs.high_score}</td>\r\n            <td>${scores[0]}</td>\r\n            <td>${scores[1]}</td>\r\n            <td>${scores[2]}</td>\r\n          `;\r\n          tbody.appendChild(row);\r\n        });\r\n      } catch (error) {\r\n        console.error('Failed to load leaderboard:', error);\r\n      }\r\n    }\r\n\r\n    // Load leaderboard on page load\r\n    window.onload = loadLeaderboard;\n\n//# sourceURL=webpack://westedge/./src/index.js?");

/***/ }),

/***/ "./src/teams.json":
/*!************************!*\
  !*** ./src/teams.json ***!
  \************************/
/***/ ((module) => {

"use strict";
eval("module.exports = /*#__PURE__*/JSON.parse('{\"1\":{\"name\":\"Perpendicular Purple People Eaters\",\"Country\":\"California\"},\"2\":{\"name\":\"Sjögurkorna (Sea cucumbers)\",\"Country\":\"Sweden\"},\"3\":{\"name\":\"Sharon Tiger Techs\",\"Country\":\"Pennsylvania\"},\"4\":{\"name\":\"KMS Constructors\",\"Country\":\"Alaska\"},\"5\":{\"name\":\"Captioma Elementals\",\"Country\":\"Spain\"},\"6\":{\"name\":\"Rockin\\' Robotics\",\"Country\":\"Missouri\"},\"7\":{\"name\":\"Orcabotics\",\"Country\":\"California\"},\"8\":{\"name\":\"SF-Cubmarines\",\"Country\":\"Belgium\"},\"9\":{\"name\":\"Underwater Coder Robtoics\",\"Country\":\"Virgina/DC\"},\"10\":{\"name\":\"Operation T.A.C\",\"Country\":\"California\"},\"11\":{\"name\":\"The Lego Krafters\",\"Country\":\"Oregon\"},\"12\":{\"name\":\"Steampakt\",\"Country\":\"Morocco\"},\"13\":{\"name\":\"The Flaming Cyber Tigers\",\"Country\":\"Washington\"},\"14\":{\"name\":\"Eagle Tech Titans\",\"Country\":\"Texas\"},\"15\":{\"name\":\"Bunki Suru\",\"Country\":\"Chile\"},\"16\":{\"name\":\"Fuision - Bumblebee\",\"Country\":\"California\"},\"17\":{\"name\":\"The Honubots\",\"Country\":\"Hawaii\"},\"18\":{\"name\":\"Techno Titans\",\"Country\":\"Georgia\"},\"19\":{\"name\":\"Cosmic Lego F.O.R.C.E\",\"Country\":\"Illinois\"},\"20\":{\"name\":\"Huskies\",\"Country\":\"Québec\"},\"21\":{\"name\":\"Bartlett Robo Bears Red\",\"Country\":\"Michigan\"},\"22\":{\"name\":\"Cyber Dragons\",\"Country\":\"New Jersey\"},\"23\":{\"name\":\"Automaton Piscis\",\"Country\":\"Colorado\"},\"24\":{\"name\":\"iBots\",\"Country\":\"California\"},\"25\":{\"name\":\"HFG-RoboS\",\"Country\":\"Germany\"},\"26\":{\"name\":\"Abell Robotics- SEAGLES\",\"Country\":\"Texas\"},\"27\":{\"name\":\"Gear Squad\",\"Country\":\"New Mexico\"},\"28\":{\"name\":\"Venabots\",\"Country\":\"Mexico\"},\"29\":{\"name\":\"Trident Seekers\",\"Country\":\"Texas\"},\"30\":{\"name\":\"RZKW\",\"Country\":\"China\"},\"31\":{\"name\":\"Code Warriors\",\"Country\":\"California\"},\"32\":{\"name\":\"Grundstof\",\"Country\":\"Denmark\"},\"33\":{\"name\":\"Hydrone\",\"Country\":\"Ontario\"},\"34\":{\"name\":\"Robo-Divers\",\"Country\":\"Nevada\"},\"35\":{\"name\":\"Lighthouse Lego League\",\"Country\":\"Florida\"},\"36\":{\"name\":\"Coders of the caribbean\",\"Country\":\"British Columbia\"},\"37\":{\"name\":\"SPORKlings\",\"Country\":\"North California\"},\"38\":{\"name\":\"Salem Renegade Robots\",\"Country\":\"Michigan\"},\"39\":{\"name\":\"CA Phoenix Tech\",\"Country\":\"Australia\"},\"40\":{\"name\":\"Blue Bricks\",\"Country\":\"South Dakota\"},\"42\":{\"name\":\"NX36T\",\"Country\":\"Tennesse\"},\"43\":{\"name\":\"Dragon Racers\",\"Country\":\"New York\"},\"44\":{\"name\":\"les Brainstormeurs\",\"Country\":\"France\"},\"45\":{\"name\":\"Sacred Heart Storm\",\"Country\":\"Mississipi\"},\"46\":{\"name\":\"Alt + Tab\",\"Country\":\"Georgia\"},\"47\":{\"name\":\"Clover STEMs\",\"Country\":\"West Virginia\"},\"48\":{\"name\":\"RoboticAlienz\",\"Country\":\"Greece\"},\"49\":{\"name\":\"F.A.S.T Robotics\",\"Country\":\"Illinois\"},\"50\":{\"name\":\"GIPSY DANGER\",\"Country\":\"Brazil\"},\"51\":{\"name\":\"Technobots\",\"Country\":\"Wisconsin\"},\"52\":{\"name\":\"Saline Robothive\",\"Country\":\"Michigan\"},\"53\":{\"name\":\"Oceanic Outlaws\",\"Country\":\"Washington\"},\"54\":{\"name\":\"Electric Eagles\",\"Country\":\"Colorado\"},\"55\":{\"name\":\"Send Kelp!\",\"Country\":\"Oklahoma\"},\"56\":{\"name\":\"Team Sycago\",\"Country\":\"Israel\"},\"57\":{\"name\":\"The Shady Bunch\",\"Country\":\"Virgina/DC\"},\"58\":{\"name\":\"MASTERMINDZ\",\"Country\":\"Oregon\"},\"59\":{\"name\":\"Shooting  Stars\",\"Country\":\"Minnesota\"},\"60\":{\"name\":\"ROBOTIC RAPPER$\",\"Country\":\"Missouri\"},\"61\":{\"name\":\"Top Class\",\"Country\":\"Republic of Korea\"},\"62\":{\"name\":\"Cyber Sharks\",\"Country\":\"California\"},\"63\":{\"name\":\"Innobots\",\"Country\":\"Iowa\"},\"64\":{\"name\":\"Better Blake Bots\",\"Country\":\"Minnesota\"},\"65\":{\"name\":\"Nano\",\"Country\":\"Montana\"},\"66\":{\"name\":\"STEM Androids\",\"Country\":\"California\"},\"67\":{\"name\":\"Bright Byte Kidz\",\"Country\":\"Maryland\"},\"68\":{\"name\":\"Powell Paradoxs\",\"Country\":\"Wyoming\"},\"69\":{\"name\":\"Deep Sea Designers\",\"Country\":\"New Mexico\"},\"70\":{\"name\":\"Lego Legends\",\"Country\":\"Wisconsin\"},\"71\":{\"name\":\"The Garage Enginners\",\"Country\":\"California\"},\"72\":{\"name\":\"Sterling Galactic Gladiators\",\"Country\":\"South California\"},\"73\":{\"name\":\"Menlo Park Narleotters\",\"Country\":\"California\"},\"74\":{\"name\":\"H2O Bots\",\"Country\":\"California\"},\"75\":{\"name\":\"Reef Rangers\",\"Country\":\"Arizona\"},\"76\":{\"name\":\"Partners For Life\",\"Country\":\"Arizona\"},\"77\":{\"name\":\"Emerson Encoders\",\"Country\":\"Tennesse\"},\"78\":{\"name\":\"The Stripes\",\"Country\":\"California\"},\"79\":{\"name\":\"Brick Busters\",\"Country\":\"Ohio\"},\"80\":{\"name\":\"Código Fenix\",\"Country\":\"Mexico\"},\"81\":{\"name\":\"Sharpshooters\",\"Country\":\"South Africa\"}}');\n\n//# sourceURL=webpack://westedge/./src/teams.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;