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

var deleteDuplicates = function(head) {
    
  if(!head) {
      return head;
  }
 var node = head.next;
 var prev = head;
 
 while (node) {
     if (node.val !== prev.val) {
         prev.next = node;
         prev = node;
     }
     node = node.next; 
 }
 prev.next = null;
 return head 
};

var rob = function(nums) {
  if(nums.length === 0) return 0;
  if(nums.length === 1) return nums[0];
  let totals = [nums[0], Math.max(nums[0], nums[1])];
  for(let i = 2; i < nums.length; i ++){
      totals[i] = Math.max(totals[i - 1], totals[i - 2] + nums[i]);
  }
  return totals[totals.length - 1];
};

var lengthOfLastWord = function(s) {
  if (s.length === 0) return 0;
  let arr = s.split(" ");
  let i = arr.length - 1;
  while (i >= 0){
      if (arr[i].length > 0) return arr[i].length;
      i--;
  }
  return 0;
};

var maxProfit = function(prices) {
    let ret = 0;
    let arr = [];
    for (let i = 0; i < prices.length - 1; i++){
        let max = 0;
        for (let j = i + 1; j < prices.length; j++){
            if (prices[j] > max) max = prices[j];
        }
        arr.push(max - prices[i]);
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > ret) ret = arr[i];
    }
    return ret;
};

var isBalanced = function(root) {
    if (root === null) return true;
    let lHeight = getHeight(root.left);
    let rHeight = getHeight(root.right);
    let res = true;
    if (Math.abs(lHeight - rHeight) > 1) res = false;
    return res && isBalanced(root.left) && isBalanced(root.right);
};

var getHeight = function(node) {
    if (node === null) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

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

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min
    this.stack.push({val: x, min: Math.min(min, x)})
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length > 0){
        this.stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0) {
        return this.stack[this.stack.length - 1].val
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length > 0) {
        return this.stack[this.stack.length - 1].min
    }
};

// grep -w '\(^[0-9]\{3\}\-[0-9]\{3\}\-[0-9]\{4\}\)\|\(^([0-9]\{3\})\s[0-9]\{3\}\-[0-9]\{4\}\)' file.txt

function twoNumberSum(array, targetSum) {
	let ret = [];
  for (let i = 0; i < array.length - 1; i++){
		for (let j = i+1; j < array.length; j++){
			if (array[i] + array[j] === targetSum) {
				ret.push(array[i]);
				ret.push(array[j]);
			}
		}
	}
	return ret;
}

function twoNumberSum(array, targetSum) {
	let arr = array.sort(function(a, b){return a-b});
	let left = 0;
	let right = arr.length - 1;
	let ret = [];
	while (left < right){
		let curr = arr[left] + arr[right];
		if (curr === targetSum) {
			ret.push(arr[left]);
			ret.push(arr[right]);
			return ret;
		}
		else if (curr < targetSum){
			left++;
		}
		else {
			right--;
		}
	}
	return ret;
}

function findClosestValueInBst(tree, target) {
      return helper(tree, target, Number.MAX_SAFE_INTEGER);
  }
  
  function helper(tree, target, closest){
      if (tree === null) return closest;
      if (Math.abs(target - closest) > Math.abs(target - tree.value))
          closest = tree.value;
      if (target < tree.value){
          return helper(tree.left, target, closest);
      } 
      else if (target > tree.value) {
          return helper(tree.right, target, closest);
      }
      else {
          return closest;
      }
  }

  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
      let sums = [];
      helper(root, 0, sums);
      return sums;
  }

  function helper(node, runningSum, sums){
	if (!node) return;
	let newRunningSum = runningSum + node.value;
	if (!node.left && !node.right) {
		sums.push(newRunningSum);
		return;
	}
	helper(node.left, newRunningSum, sums);
	helper(node.right, newRunningSum, sums);
}

function binarySearch(array, target) {
      if (array.length < 1) return -1;
      
      let midIdx = Math.floor(array.length/2);
      let mid = array[midIdx];
      if (mid === target) {
          return midIdx;
      } else if (mid < target) {
          return binarySearch(array.slice(0, midIdx), target)
      } else {
          let temp = binarySearch(array.slice(midIdx+1), target);
          return temp === -1 ? -1 : temp + midIdx + 1
      }
  }

  function productSum(array, multiplier = 1) {
	let s = 0
	for (let el of array) {
		if (Array.isArray(el)) {
			s += productSum(el, multiplier+1)
		} else {
			s += el				
		}
	}
	
	return s * multiplier;
}

function findThreeLargestNumbers(array) {
    // Write your code here.
      if (array.length < 3) return [];
      
      let first, second, third;
      first = Number.MIN_SAFE_INTEGER;
      second = Number.MIN_SAFE_INTEGER;
      third = Number.MIN_SAFE_INTEGER;
      
      
      for (let i = 0; i < array.length; i++) {
          if (array[i] >= first) {
              third = second;
              second = first
              first = array[i];
          } else if (array[i] >= second) {
              third = second;
              second = array[i];
          } else if (array[i] > third) {
              third = array[i]
          }
      }
      
      return [third,second,first]
  }

  var findDuplicates = function(nums) {
    let ret = [];
    for (let i = 0; i < nums.length; i++){
        let curr = Math.abs(nums[i]);
        if (nums[curr - 1] < 0) ret.push(curr);
        else nums[curr - 1] *= -1;
    }
    return ret;
};

//pramp problem
function getShortestUniqueSubstring(arr, str) {
    let headIndex = 0, result = "", uniqueCounter = 0, countMap = {};
    for (let i = 0; i < arr.length; i++){
      if (countMap[arr[i]] === undefined) countMap[arr[i]] = 0;
    }
    for (let tailIndex = 0; tailIndex < str.length; tailIndex++){
      let tailChar = str[tailIndex];
      if (countMap[tailChar] === undefined) continue;
      let tailCount = countMap[tailChar];
      if (tailCount === 0) uniqueCounter++;
      countMap[tailChar]++;
      
      while (uniqueCounter === arr.length){
        let tempLength = tailIndex - headIndex + 1;
        if (tempLength === arr.length) return str.substring(headIndex, tailIndex+1);
        if (result === "" || tempLength < result.length) result = str.substring(headIndex, tailIndex+1);
        let headChar = str[headIndex];
        if (countMap[headChar]){
          let headCount = countMap[headChar] - 1;
          if (headCount === 0) uniqueCounter--;
          countMap[headChar] = headCount;
        }
        headIndex++;
      }
    }
    return result;
  }