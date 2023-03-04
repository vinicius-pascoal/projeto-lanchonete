const productsModel = require('../models/clientes')

async function get(req, res) {
  const { id } = req.params

  const obj = id ? { _id: id } : null

  //tambem pode ser feito dessa forma 
  //let obj = {}
  //if (id) {
  //obj._id = id
  //}

  const products = await productsModel.find(obj)
  res.send(products)
}

async function post(req, res) {
  const {
    name,
    email,
    phone,
    adress
  } = req.body;

  const product = new productsModel({
    name,
    email,
    phone,
    adress
  });

  product.save();

  res.json({
    message: 'success'
  });
}

async function put(req, res) {
  const { id } = req.params

  const product = await productsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

  res.send({
    message: 'success',
    product,
  })

  //metodo de update (forma alternativa)
  /*const product = await productsModel.findOne({ _id: id})
  await product.updateOne(req.body)
  */
}

async function remove(req, res) {
  const { id } = req.params;

  const remove = await productsModel.deleteOne({ _id: id });

  const message = remove.deletedCount > 0 ? 'success' : 'error';

  res.json({
    message
  });
}
module.exports = {
  get,
  post,
  put,
  remove,
}
