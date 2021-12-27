var express = require('express');
var randomstring = require('randomstring');
const Link = require('../models/link');

var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Smiggle' })
});

router.post('/new', async (req, res, next) => {
  const url = req.body.url
  const code = await generateCode()

  const result = await Link.create({
    url,
    code
  })

  res.render('stats', result.dataValues)
});

router.get('/:code', async (req, res, next) => {
  const code = req.params.code;
  const result = await Link.findOne({ where: { code } })
  if (result) {
    result.hits++
    await result.save()

    return res.redirect(result.url)
  }

  res.render('error', {
    message: 'URL encurtada não encontrada pelo Smiggle',
    error: {}
  })
})

router.get('/:code/stats', async (req, res, next) => {
  const code = req.params.code
  const result = await Link.findOne({ where: { code } })
  if (result)
    return res.render('stats', result.dataValues)

  res.render('error', {
    message: 'URL encurtada não encontrada pelo Smiggle',
    error: {}
  })

})


async function generateCode(host, url) {
  return randomstring.generate({
    length: 5,
    charset: 'alphabetic'
  });
}

module.exports = router;
