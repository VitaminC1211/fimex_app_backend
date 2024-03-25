const express = require('express');
const router = express.Router();

//Loader Service model
const Service = require('../../models/Service');

//@router POST api/services/createProduct
router.post('/createProduct', (req, res) => {

    let image;
    let images;
    let description;
    let text;
    let phone_type;
    let prices;

    image = req.body.image;
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
                        prices = price.text
                    })
                })
            })
        })
    });

    const newService = new Service({
        image: image,
        images: images,
        description: description,
        text: text,
        phone_type: phone_type,
        price:prices,
    })

    newService.save()
        .then(user => res.send(req.body))
        .catch(err => console.log(err));
})

//@router POST api/services/getAll
router.post('/getAll', (req, res) => {
    Service.find({}, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
          res.json(data)
        }
      });
})

module.exports = router;