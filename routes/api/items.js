const express = require('express')
const router = express.Router()
//Routing refers to how an application's endpoints(URIS) respond to client requests
const auth = require('../../middleware/auth')

//Item Model
const Item = require('../../models/Item')

//@route  GET api/items
//@desc    GET All items
//@access  Public 
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})


//@route  POST api/items
//@desc   Create an item
//@access  Private
router.post('/', auth,(req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item))
})

//@route   DELETE api/items/:id
//@desc    Detele an item
//@access  Private
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router