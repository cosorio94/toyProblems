var MedianStream = function () {
  // TODO: Implement!
  this.storage = [];
};

MedianStream.prototype = {
  insert: function (value) {
    this.storage.push(value);
    this.bubbleUp(this.size() - 1);
  },

  peekMedian: function () {
    if (this.size() === 0) {
      return null;
    } else if (this.size() % 2 === 0) {
      var firstMidPoint = this.size() / 2 - 1;
      var secondMidPoint = firstMidPoint + 1;
      return (this.storage[firstMidPoint] + this.storage[secondMidPoint]) / 2;
    } else {
      var midPoint = (this.size() - 1) / 2;
      return this.storage[midPoint];
    }
  },

  size: function () {
    return this.storage.length;
  },

  bubbleUp: function (index) {
    if (index === 0) {
      return;
    }
    var parentIndex = Math.floor((index + 1) / 2 - 1);
    var element = this.storage[index];
    if (this.storage[parentIndex] > element) {
      this.storage[index] = this.storage[parentIndex];
      this.storage[parentIndex] = element;
      this.swapSiblings(index);
      return this.bubbleUp(parentIndex);
    }
    return;
  },

  sinkDown: function (index) {
    var child2Index = (index + 1) * 2;
    var child1Index = child2Index - 1;
    if (!this.storage[child1Index]) {
      return;
    }
    var element = this.storage[index];
    var swap = null;
    var child1 = this.storage[child1Index];
    if (element > child1) {
      swap = child1Index;
    }
    if (!!this.storage[child2Index] && this.storage[child2Index] < (swap === null ? element : child1)) {
      swap = child2Index;
    }
    if (swap === null) {
      return;
    }
    this.storage[index] = this.storage[swap];
    this.storage[swap] = element;
    return this.sinkDown(swap);
  },

  swapSiblings: function (index) {
    if ((index + 1) % 2 === 1) {
      var sibling = index - 1;
      this.swap(sibling, index);
    } else if (index + 1 < this.size()) {
      var sibling = index + 1;
      this.swap(index, sibling);
    }
  },

  swap: function (index1, index2) {
    if (this.storage[index1] > this.storage[index2]) {
      var swap = this.storage[index2];
      this.storage[index2] = this.storage[index1];
      this.storage[index1] = swap;
    }
  }
};