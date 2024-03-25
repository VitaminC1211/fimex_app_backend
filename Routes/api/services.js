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
    
    console.log(req.body.forEach((item)=>{
        item.inner_image.images
    }),)
    
    req.body.forEach((item) => {
        console.log(item.inner_image);
        item.inner_image.forEach((inner_item)=>{
            console.log(inner_item.inner_info)
            inner_item.inner_info.forEach((inner_phone)=>{
                console.log(inner_phone.phone)
                inner_phone.phone.forEach((countryindex)=>{
                    console.log(countryindex.country_price)
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