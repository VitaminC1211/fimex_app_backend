const express = require('express');
const router = express.Router();

//Loader Service model
const Service = require('../../models/Service');

//@router POST api/services/createProduct
router.post('/createProduct', (req, res) => {

    let img;
    let images;
    let description;
    let text;
    let phone_type;
    let prices;

    img = req.body.image
    req.body.forEach((item) => {
        //values for inner image
        item.inner_image.forEach((inner_item) => {
            images = inner_item.images
            description = inner_item.description
            //valuse for inner info
            inner_item.inner_info.forEach((inner_phone) => {
                text = inner_phone.text
                //values for phone inner
                inner_phone.phone.forEach((countryindex) => {
                    phone_type = countryindex.phone_type
                    //values for country_price
                    countryindex.country_price.forEach((price) => {
                        prices = price.price
                    })
                })
            })
        })
    });
    console.log(img);
    const newService = new Service({
        image: img,
        inner_image: [
            {
                images: images,
                description: description,
                inner_info: [
                    {
                        text: text,
                        phone_inner: [
                            {
                                phone_type: phone_type,
                                country_price: [
                                    {
                                        price: prices
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    });
    // Save the new Service instance to the database
    newService.save()
        .then(service => res.json(service))
        .catch(err => console.error(err));

})

//@router POST api/services/getAll
router.post('/getAll', (req, res) => {
    Service.find({})
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            console.error(err);
        });
})

module.exports = router;