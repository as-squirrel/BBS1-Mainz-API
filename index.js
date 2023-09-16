const PORT = 8080
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

const articles = []

app.get('/', (req, res) => {
    res.json('Das ist eine API für BBS1 Mainz Website')
})


app.get('/news', (req, res) => {

    axios.get('https://www.bbs1-mainz.com/aktuelles/news/')
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html);

            const articles = [];
            
            $('section.elementor-section.elementor-element').each(function() {
                const title = $(this).find('h2.elementor-heading-title.elementor-size-default').text();

                const url = $(this).find('a').attr('href');
            
                const date = $(this).find('h5.elementor-heading-title.elementor-size-default').text();

                const imageUrl = $(this).find('img').attr('src');

            
                if (date.trim() !== '') {
                    articles.push({
                        title,
                        url,
                        date,
                        imageUrl 
                    });
                }
            });
            
            res.json(articles);
            
            
            
            
            
        })

})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
