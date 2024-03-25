const express = require('express');
const router = express.Router();

//Loader Service model
const Service = require('../../models/Service');

//@router POST api/services/createProduct
router.post('/createProduct',(req, res)=>{
    const newService = new Service({
        image: req.body.image,
        inner_image: req.body.inner_image,
        images: req.body.inner_image.images
    })
    console.log(req.body.inner_image.images)
    // newService.save()
    //     .then(user => res.send("1"))
    //     .catch(err => console.log(err));
})


module.exports = router;