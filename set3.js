var isSymmetric = function(root) {
  if (root === null) return true;
  let helper = (left, right) => {
      if (!left && !right) return true;
      if (!left || !right) return false;
      if (left.val !== right.val) return false;
      
      return (helper(left.left, right.right) && helper(left.right, right.left));   
  }
  return helper(root.left, root.right);
};

var levelOrderBottom = function(root) {
  if (root === null) return [];
  let ret = [];
  let queue = [root];
  while (queue.length){
      let temp = [];
      let size = queue.length;
      for (let i = 0; i < size; i++){
          let curr = queue.shift();
          temp.push(curr.val);
          if (curr.left !== null) queue.push(curr.left);
          if (curr.right !== null) queue.push(curr.right);
      }
      ret.unshift(temp);
  }
  return ret;
};

var maxProfit = function(prices) {
  var profit = 0;
  var min = Infinity;
  for(var i = 0; i < prices.length; i++){
      if(min > prices[i]) min = prices[i];
      else if(min < prices[i]){
          profit += prices[i] - min;
          min = prices[i];
      } 
  }
  return profit;
};

var generate = function(numRows) {
  let result = [];
  for(let i = 1; i <= numRows; ++i) {
      let arr = [];
      for(let j = 0; j < i; ++j) {
          if(j == 0 || j == i - 1) {
              arr.push(1);
          } else {
              arr.push((result[i - 2][j - 1] + result[i - 2][j]));
          }
      }
      result.push(arr);
  }
  return result;
};