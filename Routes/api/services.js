const express = require('express');
const router = express.Router();

//Loader Service model
const Service = require('../../models/Service');

//@router POST api/services/createProduct
router.post('/createProduct', (req, res) => {
    req.body.forEach((product) => {
        const newService = new Service({
            id: product.id,
            image: product.image,
            inner_image: product.inner_image.map((innerImage) => ({
                id: innerImage.id,
                images: innerImage.images,
                description: innerImage.description,
                inner_info: innerImage.inner_info.map((info) => ({
                    id: info.id,
                    text: info.text,
                    phone_inner: info.phone.map((phone_inner) => ({
                        id: phone_inner.id,
                        phone_type: phone_inner.phone_type,
                        country_price: phone_inner.country_price.map((country_price) => ({
                            id: country_price.id,
                            price: country_price.price
                        }))
                    }))
                }))
            }))
        });

        newService.save()
            .then(product => console.log(product))
            .catch(err => console.error(err));
    });
    res.send('Products saved successfully');
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