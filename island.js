function getNeighbors(row, col, graph) {
  let neighbors = [];
  // Check top
  if (row - 1 >= 0 && graph[row - 1][col] === 1) neighbors.push([row - 1, col]);
  // Check bottom
  if (row + 1 < graph.length && graph[row + 1][col] === 1) neighbors.push([row + 1, col]);
  // Check left
  if (col - 1 >= 0 && graph[row][col - 1] === 1) neighbors.push([row, col - 1]);
  // Check right
  if (col + 1 < graph[row].length && graph[row][col + 1] === 1) neighbors.push([row, col + 1]);
  // Return neighbors
  return neighbors

}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
  let visited = new Set();
  let stack = [[row, col]];
  visited.add(stack[0].toString())
  let size = 0;

  while (stack.length > 0){
    let currentNode = stack.pop();
    let neighbors = getNeighbors(currentNode[0], currentNode[1], graph);
    size++;

    for (let neighbor of neighbors){
      if (!visited.has(neighbor.toString())){
        visited.add(neighbor.toString());
        stack.push(neighbor);
      }
    }
  }

  return size
}

module.exports = [getNeighbors, islandSize];
