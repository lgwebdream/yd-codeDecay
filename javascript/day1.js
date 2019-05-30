//day.1 代码残局
/**
 * 要求：
 * 1.完善memoize函数并考虑可扩展性
 * 2.执行结果要求console.log("memoize")只执行一次
 */
const memoize = fn => {
  //✍️代码书写位
};
function yideng() {
  if (self.self == self) {
    console.log("memoize");
    return "京程一灯";
  }
}
const result = memoize(yideng);
console.log(result());
console.log(result());
console.log(result());
//========答案=============
const memoize = fn => {
  const cache = new Map();
  const cached = function(val) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};
