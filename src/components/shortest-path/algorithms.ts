export interface CellType {
    isWall: boolean;
    isStart: boolean;
    isEnd: boolean;
    isVisited: boolean;
    isPath: boolean;
}

const getNeighbors = (index: number, NB_ROWS: number, NB_COLS: number) => {
    const neighbors = [];
    const row = Math.floor(index / NB_COLS);
    const col = index % NB_COLS;

    if (row > 0) neighbors.push(index - NB_COLS); // Top neighbor
    if (row < NB_ROWS - 1) neighbors.push(index + NB_COLS); // Bottom neighbor
    if (col > 0) neighbors.push(index - 1); // Left neighbor
    if (col < NB_COLS - 1) neighbors.push(index + 1); // Right neighbor

    return neighbors;
};

export const runDijkstra = async (maze: CellType[], NB_ROWS: number, NB_COLS: number, speed: number) => {
    const startIdx = maze.findIndex(cell => cell.isStart);
    const endIdx = maze.findIndex(cell => cell.isEnd);

    const distances = Array(NB_ROWS * NB_COLS).fill(Infinity);
    const previous = Array(NB_ROWS * NB_COLS).fill(null);
    const visited = new Set<number>();
    distances[startIdx] = 0;

    const queue = new Set<number>([startIdx]);

    while (queue.size > 0) {
        let currentIdx = null;
        let smallestDistance = Infinity;

        for (const idx of queue) {
            if (distances[idx] < smallestDistance) {
                smallestDistance = distances[idx];
                currentIdx = idx;
            }
        }

        if (currentIdx === null) break;

        queue.delete(currentIdx);
        visited.add(currentIdx);

        if (currentIdx === endIdx) break;

        for (const neighbor of getNeighbors(currentIdx, NB_ROWS, NB_COLS)) {
            if (visited.has(neighbor) || maze[neighbor].isWall) continue;

            const altDistance = distances[currentIdx] + 1;
            if (altDistance < distances[neighbor]) {
                distances[neighbor] = altDistance;
                previous[neighbor] = currentIdx;
                queue.add(neighbor);

                maze[neighbor].isVisited = true;
                await new Promise(resolve => setTimeout(resolve, speed));
            }
        }
    }

    let pathIdx = endIdx;
    while (previous[pathIdx] !== null) {
        maze[pathIdx].isPath = true;
        pathIdx = previous[pathIdx];
        await new Promise(resolve => setTimeout(resolve, speed));
    }
};

export const runAStar = async (maze: CellType[], NB_ROWS: number, NB_COLS: number, speed: number) => {
    const startIdx = maze.findIndex(cell => cell.isStart);
    const endIdx = maze.findIndex(cell => cell.isEnd);

    const distances = Array(NB_ROWS * NB_COLS).fill(Infinity);
    const heuristics = Array(NB_ROWS * NB_COLS).fill(Infinity);
    const previous = Array(NB_ROWS * NB_COLS).fill(null);
    const visited = new Set<number>();
    distances[startIdx] = 0;
    heuristics[startIdx] = 0;

    const queue = new Set<number>([startIdx]);

    const heuristic = (a: number, b: number) => {
        const [ax, ay] = [Math.floor(a / NB_COLS), a % NB_COLS];
        const [bx, by] = [Math.floor(b / NB_COLS), b % NB_COLS];
        return Math.abs(ax - bx) + Math.abs(ay - by);
    };

    while (queue.size > 0) {
        let currentIdx = null;
        let smallestHeuristic = Infinity;

        for (const idx of queue) {
            if (heuristics[idx] < smallestHeuristic) {
                smallestHeuristic = heuristics[idx];
                currentIdx = idx;
            }
        }

        if (currentIdx === null) break;

        queue.delete(currentIdx);
        visited.add(currentIdx);

        if (currentIdx === endIdx) break;

        for (const neighbor of getNeighbors(currentIdx, NB_ROWS, NB_COLS)) {
            if (visited.has(neighbor) || maze[neighbor].isWall) continue;

            const altDistance = distances[currentIdx] + 1;
            if (altDistance < distances[neighbor]) {
                distances[neighbor] = altDistance;
                previous[neighbor] = currentIdx;
                heuristics[neighbor] = distances[neighbor] + heuristic(neighbor, endIdx);
                queue.add(neighbor);

                maze[neighbor].isVisited = true;
                await new Promise(resolve => setTimeout(resolve, speed));
            }
        }
    }

    let pathIdx = endIdx;
    while (previous[pathIdx] !== null) {
        maze[pathIdx].isPath = true;
        pathIdx = previous[pathIdx];
        await new Promise(resolve => setTimeout(resolve, speed));
    }
};
