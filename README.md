# Obsidian Spice 

# Introduction

[![codebeat badge](https://codebeat.co/badges/9e9f2d7d-d560-4ce5-b48a-b2ddf9317efd)](https://codebeat.co/projects/github-com-conneroisu-obsidian-spice-master)

# Develop in your style in your favorite place!
"Code", "Visually Design", and "Draw" your circuit's with the ability to acheive spice quality simulations, components, sub-components, systems, and more. 

## Table of Contents

- [Obsidian Spice](#obsidian-spice)
- [Introduction](#introduction)
- [Develop in your style in your favorite place!](#develop-in-your-style-in-your-favorite-place)
  - [Table of Contents](#table-of-contents)
- [Obsidian Circuit Simulator](#obsidian-circuit-simulator)
- [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contact](#contact)




# Obsidian Circuit Simulator

Obsidian Circuit Simulator is a plugin that allows you to create and simulate electronic circuits in Obsidian notes. You can code your circuits using CircuitJS syntax¹, design them visually using Canvas Mode or Excalidraw², and run them interactively in each design mode. 


# Installation

To install Obsidian Circuit Simulator, follow these steps:

- Download the latest release from [GitHub](https://github.com/conneroisu/obsidian-spice/releases).
- Extract the zip file into your Obsidian vault's plugins folder.
- Enable Obsidian Circuit Simulator in Obsidian's settings.

## Usage

To use Obsidian Circuit Simulator, you need to create a code block with `circuit` as the language identifier. Then you can write your circuit code using CircuitJS syntax. For example:

```circuit
$ 1 0.000005 10.20027730826997 50 5 43
v 176 208 176 112 0 0 40 5 0 0 0.5
w 176 112 240 112
R 240 112 ...
```

When you switch to reading mode, Obsidian will replace the code block with an embedded CircuitJS instance with your circuit design. You can interact with it by dragging components, changing values, running simulations, etc.

You can also use Canvas Mode or Excalidraw to draw your circuits visually. To do so, you need to create an empty code block with `circuit` as the language identifier. Then you can switch to Canvas Mode or Excalidraw mode and draw your circuit using their tools.

Obsidian will convert your drawing into circuit code and run it using Angular2 and Snap.

## License

Obsidian Circuit Simulator is licensed under MIT License.

## Contact

If you have any questions or feedback about Obsidian Circuit Simulator, please contact me at conneroisu@outlook.com or open an issue on [GitHub](https://github.com/conneroisu/obsidian-spice/issues).


(2) GitHub - StevenGann/obsidian-circuitjs: Integrating CircuitJS into Obsidian. https://github.com/StevenGann/obsidian-circuitjs Accessed 2/21/2023.
(3) GitHub - conneroisu/obsidian-spice: A Circuit Simulator for Obsidian MD .... https://github.com/conneroisu/obsidian-spice Accessed 2/21/2023.
(4) GitHub - RC2202/circuit-simulator: Electrical Circuit simulation using .... https://github.com/RC2202/circuit-simulator Accessed 2/21/2023.
(5) Online circuit simulator & schematic editor - CircuitLab. https://www.circuitlab.com/ Accessed 2/21/2023.
(6) Naive Circuit Simulator - GitHub. https://github.com/FarahaniMehrshad/NaiveCircuitSimulator Accessed 2/21/2023.
(7) GitHub - drahnr/oregano: Schematic capture and circuit simulator. https://github.com/drahnr/oregano Accessed 2/21/2023.
(8) Online circuit simulator & schematic editor - CircuitLab. https://www.circuitlab.com/ Accessed 2/21/2023.
(9) ‪Circuit Construction Kit: DC‬ - PhET. https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html Accessed 2/21/2023.
(10) Readme: the file type simply explained with examples - IONOS. https://www.ionos.com/digitalguide/websites/web-development/readme-file/ Accessed 2/21/2023.
(11) How to create a README file - ProgrammerToday. https://programmertoday.com/how-to-create-a-readme-file/ Accessed 2/21/2023.
(12) Basic writing and formatting syntax - GitHub Docs. https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax Accessed 2/21/2023.
(13) How to Write a Good README File for Your GitHub Project. https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/ Accessed 2/21/2023.
