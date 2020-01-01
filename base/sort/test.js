module.exports = function main(sort, num = 10) {
  var test = []

  for (var i = 0; i < num; i++) {
    test[i] = Math.floor(Math.random() * num * 10) + 1
  }

  console.log(test.join(', '))
  var st = Date.now()
  console.log(sort(test).join(', '))
  console.log('cost time: ' + (Date.now() - st) + 'ms')
}
