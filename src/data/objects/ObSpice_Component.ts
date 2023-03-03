export default abstract class ObSpice_Component {
    name: string;
    type: string;
    value: number;
    unit: string;
    connections: string[];
    constructor(name: string, description: string, type: string, value: number, unit: string, connections: string[]) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.value = value;
        this.unit = unit;
        this.connections = connections;
    }
}
