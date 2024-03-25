const express = require('express');
const router = express.Router();

//Loader Service model
const Service = require('../../models/Service');

//@router POST api/services/createProduct
router.post('/createProduct', (req, res) => {
    // const newService = new Service({
    //     image: req.body.image,
    //     inner_image: req.body.inner_image,
    //     images: req.body.forEach((item)=>{
    //         item.inner_image.images
    //     }),
    //     description:req.body.forEach((item)=>{
    //         item.inner_image.description
    //     }),
    //     inner_info: req.body.forEach((item)=>{
    //         item.inner_image.inner_info
    //     }),
    //     text: req.body.forEach(()=>{
            
    //     })
    // })

    
    req.body.forEach((item) => {
        console.log(item.inner_image);
        //values for inner image
        item.inner_image.forEach((inner_item)=>{
            console.log(inner_item.imges)
            console.log(inner_item.description)
            console.log(inner_item.inner_info)
            //valuse for inner info
            inner_item.inner_info.forEach((inner_phone)=>{
                console.log(inner_phone.text)
                console.log(inner_phone.phone)
                //values for phone inner
                inner_phone.phone.forEach((countryindex)=>{
                    console.log(countryindex.phone_type)
                    console.log(countryindex.country_price)
                    //values for country_price
                    countryindex.country_price.forEach((price)=>{
                        console.log(price.text)
                    })
                })
            })
        })
    });
    res.send(req.body.inner_info)
    // newService.save()
    //     .then(user => res.send("1"))
    //     .catch(err => console.log(err));
})
// res.json({msg:"working"})
// })


module.exports = router;