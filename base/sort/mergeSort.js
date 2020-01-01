/**
 * 归并排序
 * 时间复杂度 nlogn 最好、最坏、平均都是这个复杂度
 * 空间复杂度 n 不是原地排序，需要申请额外一个数组用于合并时排序
 * 是否稳定？ 稳定
 * @param {list} array
 */
function mergeSort(array) {
  return array instanceof Array && array.length > 1
    ? mergeSortResolve(array)
    : []
}

function mergeSortResolve(array) {
  var length = array.length
  if (length === 1) {
    return array
  }

  var middle = Math.ceil(length / 2)
  var arrayLeft = mergeSortResolve(array.slice(0, middle))
  var arrayRight = mergeSortResolve(array.slice(middle, length))

  return mergeSortMerge(arrayLeft, arrayRight)
}

function mergeSortMerge(left, right) {
  var array = [],
    i = 0,
    j = 0

  while (i < left.length || j < right.length) {
    if (!left[i] || left[i] > right[j]) {
      array.push(right[j])
      j++
    } else if (!right[j] || left[i] <= right[j]) {
      array.push(left[i])
      i++
    } else {
      console.log(left[i], right[j])
    }
  }

  return array
}

require('./test')(mergeSort)
