// The class object representing a circuit node in a circuit
export class ObSpice_Node {
    node: string;
    connections: string[];

    constructor(node: string, connections: string[]) {
        this.node = node;
        this.connections = connections;
    }
}
