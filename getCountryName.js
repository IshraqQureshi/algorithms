'use strict';

const https = require('https');

async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
    let countryName;
    let page = 1;

    const options = {
        hostname: 'jsonmock.hackerrank.com',
        path: `api/countries?page=${page}`,
        method: 'GET'
    };
    const req = https.request(options, res => {

        res.on('data', async (chunk) => {
            console.log(chunk)
            const response = JSON.parse(chunk)
            for(const country of response.data) {
                if(country.alpha2Code == code) {
                    countryName = country.name
                    process.stdout.write(country.name);
                    return countryName
                    break;
                }
            }

            while(!countryName) {
                page += 1;
                await https.request(options, res => {
                    res.on('data', (chunk) => {
                        const response = JSON.parse(chunk)
                        for(const country of response.data) {
                            if(country.alpha2Code == code) {
                                countryName = country.name
                                process.stdout.write(country.name);
                                break;
                            }
                        }
                    });
                })
            }
        });
    })
    req.end()
    console.log('test')
    console.log(countryName)
}
async function main() {

  const name = await getCountryName('AF');
  console.log('Name:', name)

}

main()
