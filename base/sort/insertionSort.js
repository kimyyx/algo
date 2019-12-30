/**
 * 插入排序
 * 时间复杂度 n^2
 * 平均时间复杂度 n^2
 * 空间复杂度 原地排序
 * 是否稳定？ 稳定
 * @param {list} array
 */
function insertionSort(array) {
  if (array instanceof Array) {
    var len = array.length

    if (len > 1) {
      for (var i = 1; i < len; i++) {
        var value = array[i]
        for (j = i - 1; j >= 0; j--) {
          if (value < array[j]) {
            array[j + 1] = array[j]
          } else {
            break
          }
        }
        array[j + 1] = value
      }
    }
    return array
  } else {
    return []
  }
}

require('./test')(insertionSort)
