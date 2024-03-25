const express = require('express');
const router = express.Router();

//Loader Service model
const Service = require('../../models/Service');

//@router POST api/services/createProduct
router.post('/createProduct', (req, res) => {

    const image = "";
    const images = "";
    const description = "";
    const text = "";
    const phone_type = "";
    const prices = "";


    req.body.forEach((item) => {
        image = item.inner_image;
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
                        prices = price.text
                    })
                })
            })
        })
    });
    res.send(req.body.inner_info)

    const newService = new Service({
        image: image,
        images: images,
        description: description,
        text: text,
        phone_type: phone_type,
        price:prices,
    })

    newService.save()
        .then(user => res.send("1"))
        .catch(err => console.log(err));
})


module.exports = router;