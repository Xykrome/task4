
function collectPuzzle(...puzzles) {
    // TODO:在这里写入具体的实现逻辑
    // 对所有的碎片进行收集，获取不同拼图类型的结果，并返回
    //  根据html文件可知：如果 resultPuzzles 数组的长度等于 arr 数组的长度，并且 resultPuzzles 数组中的所有元素都在 arr 数组中，则认为所有碎片都已集齐。
    //  第一步：定义一个新数组，内容为三个数组的合并,  第二步:去除重复项（new Set会将数组变为一个没有重复项对象）， 第三步：array from返回数组
  let allPuzzles = redPuzzles.concat(bluePuzzles).concat(greenPuzzles);

  return Array.from(new Set(allPuzzles))
}
  
