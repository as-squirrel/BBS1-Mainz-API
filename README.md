# BBS1-Mainz-API

![1](https://github.com/as-squirrel/BBS1-Mainz-API/assets/114065413/99d8fada-5c11-4573-9301-21eeb24175a3)


# This is NOT an official API of BBS1 Mainz School!



![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/as-squirrel/BBS1-Mainz-API)
![GitHub issues](https://img.shields.io/github/issues/as-squirrel/BBS1-Mainz-API)
![GitHub pull requests](https://img.shields.io/github/issues-pr/as-squirrel/BBS1-Mainz-API)
![GitHub stars](https://img.shields.io/github/stars/as-squirrel/BBS1-Mainz-API)
![GitHub forks](https://img.shields.io/github/forks/as-squirrel/BBS1-Mainz-API)



## Introduction
The BBS1 Mainz News API is an tool that allows you to fetch the most recent news articles, from the BBS1 Mainz School website in a well organized and user friendly format. It's perfect for developers, researchers and enthusiasts who want to access the schools news section for updated information.

## Key Features
Seamless Integration; Effortlessly incorporate the API into your applications and projects using a few lines of code.

Structured Information; Retrieve news articles with their titles, publication dates, URLs and even image URLs to enhance your content experience.

Real Time Updates; Stay up to date with the news from BBS1 Mainz School soon as they are published on their website.

## Usage Instructions
To begin utilizing this feature simply send a GET request to the '/news' endpoint. You will then receive a JSON response containing all the news articles. You can also apply filters based on publication dates and access each articles URL, for reading.

## Example

```javascript
// Sample GET request using Axios
const axios = require('axios');

axios.get('https://your-api-url.com/news')
  .then((response) => {
    const newsArticles = response.data;
    console.log(newsArticles);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });

```
## Output
![Screenshot 2023-09-16 at 21-50-22 Screenshot](https://github.com/as-squirrel/BBS1-Mainz-API/assets/114065413/ed35609c-0f57-49a7-a62e-ee61e06c0794)
