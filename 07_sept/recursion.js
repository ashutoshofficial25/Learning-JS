//nodes

let n1 = {
  val: 1,
  left: null,
  right: null,
};

let n2 = {
  val: 2,
  left: null,
  right: null,
};

let n3 = {
  val: 3,
  left: null,
  right: null,
};

let n4 = {
  val: 4,
  left: null,
  right: null,
};

let n5 = {
  val: 5,
  left: null,
  right: null,
};

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

const printLeaf = (node) => {
  if (node.left == null && node.right == null) {
    console.log(node.val);
  }
  if (node.left != null) {
    printLeaf(node.left);
  }
  if (node.right !== null) {
    printLeaf(node.right);
  }
};
