/**
 * 冒泡排序
 * 时间复杂度 n^2
 * 平均时间复杂度 n^2
 * 空间复杂度 原地排序
 * 是否稳定？ 稳定
 * @param {list} array
 */
function bubbleSort(array) {
  if (array instanceof Array) {
    var len = array.length

    if (len > 1) {
      for (var i = 0; i < len - 1; i++) {
        var sorted = false
        for (var j = 0; j < len - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            var temp = array[j + 1]
            array[j + 1] = array[j]
            array[j] = temp
            sorted = true
          }
        }

        if (!sorted) {
          break
        }
      }
    }

    return array
  } else {
    return []
  }
}

require('./test')(bubbleSort)
