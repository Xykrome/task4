
function collectPuzzle(...puzzles) {
    // TODO:在这里写入具体的实现逻辑
    //  根据html文件可知：如果 resultPuzzles 数组的长度等于 arr 数组的长度，并且 resultPuzzles 数组中的所有元素都在 arr 数组中（即没有缺失的碎片），则认为所有碎片都已集齐。
    //  第一步：定义一个新数组，内容为三个数组的合并,  第二步:去除重复项（new Set会将数组变为对象）， 第三步：返回数组   （[...something] 创建一个新数组，并将 something 中的元素填充到这个新数组中。）

      let mixPuzzles = redPuzzles.concat(bluePuzzles).concat(greenPuzzles);
      let outPuzzles = [...new Set(mixPuzzles)];

      return outPuzzles;
}
// return [...new Set([...puzzles].flat())];可一步实现
// [...puzzles]：这里使用了扩展运算符（spread operator）... 来将 puzzles 参数展开成一个新的数组。多个数组组成的参数列表，它们会被合并成一个二维数组。
// .flat()：flat() 方法用于将嵌套的数组“扁平化”，即将其转换成一个一维数组。在这个例子中， puzzles 是由多个数组组成的，[...puzzles].flat() 会将它们合并成一个一维数组。
// new Set([...puzzles].flat())：创建了一个新的 Set 对象，Set 会自动去除数组中的重复元素。
// [...new Set([...puzzles].flat())]：使用扩展运算符将 Set 对象转换回数组形式
