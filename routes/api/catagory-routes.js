const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories

  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  }).then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  }).then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  }).then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    where: {
      id: req.params.id
    }
  }).then(data => res.json(data))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
      id: req.params.id
    }
  }).then(data => res.json(data))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

module.exports = router;
