# My portfolio website

## General

This is my portfolio project. It resembles an OS and contains folders, which display information about me, similar to a CV.

Currently running at https://gxgb9f3n-5173.euw.devtunnels.ms. This is a developer tunnel, so a warning screen is shown when visited the first time. 
Obtaining an actual domain is under progress.

## Installation

### Prerequisites

- **Node.js**: Version 18+ or 20+
- **npm**: Version 10.5 or higher (bundled with Node.js)
- **Vite**: Version 6.0.1 or higher

Lower versions can work as well, but these are the versions this project uses.
Updgrade if your package manager warns about it.

### Steps

1. Clone this repository:
  ```bash
  git clone https://github.com/jaakkomaenpaa/portfolio.git
  ```
2. Navigate to project:
  ```bash
  cd portfolio
  ```
3. Install dependencies:
  ```bash
  npm install
  ```
4. Start the development server:
  ```bash
  npm run dev
  ```
5. Project will start in http://localhost:5173 (or the port displayed in the terminal).

## Usage

Changes are stored in local storage, at least for now.

Local storage contains the selected theme, wallpaper, desktop items, and taskbar items.

### Items

The desktop contains some items (folders, files, apps) by default.

- Open an item in a new window by **double-click**.
- Open context menu by **right-click**.

All items can be found in *explorer*, which contains the file tree.

Taskbar contains *explorer* and *command line* by default.

Items are draggable inside the desktop. An item can be added to desktop by dragging it from explorer.

Items in taskbar and explorer are opened by **left-click**.

### Command line

Cmd handles basic commands, such as `ls`, `cd`, and `open`. 

Commands and their instructions can be checked with `help`. 

Previous commands can be navigated using **arrow-up** and **arrow-down**.

`cat` only displays the content key associated with the item. This is because item contents are React Nodes, 
which cannot be stored in local storage. Opening an item is done with `open`.



