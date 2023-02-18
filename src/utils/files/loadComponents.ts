import ObSpice from 'src/main';

import { circuitComponent } from '../../ui/circuits/circuitComponent';

// function to load components from the local plugin folder
/**
 *  loadComponents - loads circuit components from the local plugin folder
 * @param loadbool 
 * @returns 
 */
export const loadComponents = async (plugin: ObSpice ): Promise<circuitComponent[]> => {
	plugin.app.workspace.trigger("obspice:components-loading");
	const folder = plugin.settings.componentFolder;
	const files = await plugin.app.vault.getFiles();
	const componentFiles = files.filter((file) => file.path.startsWith(folder));
	const  components = [];
	for (const file of componentFiles) {
		const content = await plugin.app.vault.read(file);
		components.push(await loadComponent(plugin, content));
	}	
	// Event Trigger loaded event
	plugin.app.workspace.trigger("obspice:components-loaded", components);
	return components;
}

/**
 * Given a string, return a cComponent
 * @param plugin 
 * @param filename 
 */
export const loadComponent = async (plugin: ObSpice, content: string): Promise<circuitComponent> => {
let name = "unread component";
let description = "unread component description";
let image = "unread component image";
let path = "unread component path";
  for (const line of content.split("\n")) {
    if (line.startsWith("name:")) {
      name = line.split(":")[1].trim();
    }
  }
  for (const line of content.split("\n")) {
    if (line.startsWith("description:")) {
      description = line.split(":")[1].trim();
    }
  }
  for (const line of content.split("\n")) {
    if (line.startsWith("image:")) {
      image = line.split(":")[1].trim();
    }
  }
  for (const line of content.split("\n")) {
    if (line.startsWith("path:")) {
      path = line.split(":")[1].trim();
    }
  }
  return new circuitComponent(name, description, image, path);
}
