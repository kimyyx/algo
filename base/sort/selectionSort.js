/**
 * 选择排序
 * 时间复杂度 n^2
 * 平均时间复杂度 n^2
 * 空间复杂度 原地排序
 * 是否稳定？ 不稳定
 * @param {list} array
 */
function selectionSort(array) {
  if (array instanceof Array) {
    var len = array.length

    for (var i = 0; i < len; i++) {
      var minIdx = i
      for (var j = i + 1; j < len; j++) {
        if (array[j] < array[minIdx]) {
          minIdx = j
        }
      }
      var temp = array[i]
      array[i] = array[minIdx]
      array[minIdx] = temp
    }
    return array
  } else {
    return []
  }
}

require('./test')(selectionSort)
