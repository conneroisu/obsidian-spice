import { componentslogo, obspicesvg, schematiclogo, simulationlogo } from '../ui/assets/obspicelogos';

// import { obspicesvg, simulationlogo } from '../ui/assets/obspicelogos';

// ensure that the logo is defined
test("obspicesvg", () => {
    expect(obspicesvg).toBeDefined();
}
);

// ensure that the logo is defined
test("simulationlogo", () => {
    expect(simulationlogo).toBeDefined();
}
);

// ensure that the logo is defined
test("schematiclogo", () => {
    expect(schematiclogo).toBeDefined();
}
);

// ensure that the logo is defined
test("componentslogo", () => {
    expect(componentslogo).toBeDefined();
}
);
