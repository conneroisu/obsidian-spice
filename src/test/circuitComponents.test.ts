import { circuitComponent } from '../ui/circuits/circuitComponent';

test("circuitComponent", () => {
    expect(circuitComponent).toBeDefined();
    }
);


test("Component Name Setting", () => {
    const component = new circuitComponent("Test", "Test", "Test", "Test");
    expect(component.name).toBe("Test");
    }
);
