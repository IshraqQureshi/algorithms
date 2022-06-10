class Node
{
    constructor(data)
    {
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

const generateTrees = (n) => {
    if(n <= 0) return [];
    return genTree(1, n);
}

const genTree = (start, end) => {

    const list = [];

    if(start > end){
        list.push(null);
        return list
    }

    for (let i = start; i <= end; i++) {
        const leftSubTree = genTree(start, i - 1);
        const rightSubTree = genTree(i + 1, end);
        for(let j = 0;j < leftSubTree.length; j++) {
            const left = leftSubTree[j];
            for( let k = 0; k < rightSubTree.length; k++ ) {
                const right = rightSubTree[k];
                const node = new Node(i);
                node.left = left;
                node.right = right
                list.push(node);
            }
        }
    }

    return list;

}

function preorder(root)
{
    if (root != null)
    {
        console.log(root);
        preorder(root.left);
        preorder(root.right);
    }
}

const trees = generateTrees(3)

for (let i = 0; i < trees.length; i++)
{
    preorder(trees[i]);
}