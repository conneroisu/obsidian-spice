import { render, screen } from '@testing-library/svelte';
import { circuitComponent } from 'src/ui/circuits/circuitComponent';

import App from './App.svelte';

test("says 'hello world!'", () => {
    render(App);
    const node = screen.queryByText("Hello world!");
    expect(node).toBeNull();
})
test("circuitComponent", () => {
    expect(circuitComponent).toBeDefined();
    }
);

test("Component Name Setting", () => {
    const component = new circuitComponent("Test", "Test", "Test", "Test");
    expect(component.name).toBe("Test");
    }
);
