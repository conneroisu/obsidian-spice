// The class the defines the circuit object for the circuit simulation
export class ObSpice_Circuit {
    netlist: string;
    netlist_comments: string[];
    circuitComponents: ObSpice_Component[];


    // Constructor
    constructor(circuitName: string, circuitDescription: string, circuitComponents: ObSpice_Component[], circuitConnections: ObSpice_Connection[], circuitResults: ObSpice_Result[]) {
        this.circuitName = circuitName;
        this.circuitDescription = circuitDescription;
        this.circuitComponents = circuitComponents;
        this.circuitConnections = circuitConnections;
        this.circuitResults = circuitResults;
    }
}
