const { TreeNode, BalanceTree } = require('./main.js');

describe('BalanceTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BalanceTree();
  });

  function prettyPrintTree(node, prefix = '', isLeft = true) {
    if (!node) return '';

    let result = '';
    result += `${prefix}${isLeft ? 'L── ' : 'R── '}${node.name}\n`;
    result += prettyPrintTree(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    result += prettyPrintTree(node.right, `${prefix}${isLeft ? '    ' : '│   '}`, false);
    return result;
  }

  function runTest(testFn) {
    try {
      testFn();
    } catch (error) {
     console.log('Tree structure after failed test:');
     console.log(prettyPrintTree(tree.root));
      throw error;
    }
  }

  test('should create an empty tree', () => {
    runTest(() => {
      expect(tree.root).toBeNull();
      expect(tree.nodes).toEqual([]);
    });
  });

  test('should add nodes correctly', () => {
    runTest(() => {
      tree.addNode('Kakashi');
      tree.addNode('Naruto');
      expect(tree.nodes).toEqual(['Kakashi', 'Naruto']);
    });
  });

  test('should build a balanced tree', () => {
    runTest(() => {
      tree.addNode('Kakashi');
      tree.addNode('Naruto');
      tree.addNode('Sasuke');
      tree.buildBalanceTree();

      expect(tree.root.name).toBe('Naruto');
      expect(tree.root.left.name).toBe('Kakashi');
      expect(tree.root.right.name).toBe('Sasuke');
    });
  });

  test('should handle an odd number of nodes', () => {
    runTest(() => {
      tree.addNode('Kakashi');
      tree.addNode('Naruto');
      tree.addNode('Sasuke');
      tree.addNode('Sakura');
      tree.addNode('Sai');
      tree.buildBalanceTree();

      expect(tree.root.name).toBe('Sai');
      expect(tree.root.left.name).toBe('Kakashi');
      expect(tree.root.left.right.name).toBe('Naruto');
      expect(tree.root.right.name).toBe('Sakura');
      expect(tree.root.right.right.name).toBe('Sasuke');
    });
  });

  test('inorderPathway should return names in alphabetical order', () => {
    runTest(() => {
      tree.addNode('Kakashi');
      tree.addNode('Naruto');
      tree.addNode('Sasuke');
      tree.buildBalanceTree();
      const result = tree.inorderPathway(tree.root);

      expect(result).toEqual(['Kakashi', 'Naruto', 'Sasuke']);
    });
  });

  test('inorderPathway should handle an empty tree', () => {
    runTest(() => {
      const result = tree.inorderPathway(tree.root);
      expect(result).toEqual([]);
    });
  });

  test('should handle duplicate names', () => {
    runTest(() => {
      tree.addNode('Naruto');
      tree.addNode('Sasuke');
      tree.addNode('Naruto');
      tree.buildBalanceTree();

      const result = tree.inorderPathway(tree.root);
      expect(result).toEqual(['Naruto', 'Naruto', 'Sasuke']);
      expect(tree.root.name).toBe('Naruto');
      expect(tree.root.right.name).toBe('Sasuke');
      expect(tree.root.left.name).toBe('Naruto');
    });
  });

  test('should handle a large number of nodes', () => {
    runTest(() => {
      const characters = ['Naruto', 'Sasuke', 'Sakura', 'Kakashi', 'Hinata', 'Shikamaru', 'Ino', 'Choji', 'Neji', 'Rock Lee', 'Tenten', 'Gaara', 'Temari', 'Kankuro'];
      characters.forEach(char => tree.addNode(char));
      tree.buildBalanceTree();

      const result = tree.inorderPathway(tree.root);
      expect(result).toEqual(characters.sort());
      expect(tree.root.name).toBe('Naruto');
      expect(tree.root.left.name).toBe('Hinata');
      expect(tree.root.right.name).toBe('Sasuke');
    });
  });

  test('should remove a node correctly', () => {
    runTest(() => {
      tree.addNode('Naruto');
      tree.addNode('Sasuke');
      tree.addNode('Sakura');
      tree.buildBalanceTree();
      
      tree.removeNode('Sasuke');
      tree.buildBalanceTree();

      const result = tree.inorderPathway(tree.root);
      expect(result).toEqual(['Naruto', 'Sakura']);
      expect(tree.root.name).toBe('Naruto');
      expect(tree.root.left).toBeNull();
      expect(tree.root.right.name).toBe('Sakura');
    });
  });
});
