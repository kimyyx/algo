module.exports = function main(sort) {
  var test = []

  for (var i = 0; i < 100; i++) {
    test[i] = Math.floor(Math.random() * 1000) + 1
  }

  console.log(test)
  var st = Date.now()
  console.log(sort(test))
  console.log('cost time: ' + (Date.now() - st) + 'ms')
}
