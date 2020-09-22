<div align="center">
    <h1>chayns-react-template</h1>
    <p>A starter template for developing <a href="https://chayns.org/">chayns®</a> Pages with React.</p>
</div>

---

## Overview

-   [Quick Start](#quick-start)
-   [Detailed Guide](#detailed-guide)
    -   [System Requirements](#system-requirements)
    -   [Get Up and Running](#get-up-and-running)

## Quick Start

1. `npm install`
2. `npm run dev` to start a dev server on `http://localhost:1234/`
3. `npm run build` to create a production bundle

You should also replace the values with your own:

-   `name`-field in `package.json`
-   Content of `<title>` in `src/index.html`

## Detailed Guide

### System Requirements

-   **Git**

    You must have Git installed on your system. If you do not already have it,
    get it [here](https://git-scm.com/downloads). You do not need to know much
    about git to start with this template.

-   **Node.js** >=12.10

    You must also have Node.js version 12.10 or greater installed. If you do not
    already have it, get it [here](https://nodejs.org/).

### Get Up and Running

#### 1. Open a terminal in the directory you want to develop in

On windows this can be done with `Shift + Right-Click` in the explorer and
`Open PowerShell here`. On macOS, right-click the parent folder and choose
`Open Terminal here`.

#### 2. Clone the repository

You should have Git installed by now, so in the newly opened window just run
`git clone https://github.com/TobitSoftware/chayns-react-template.git my-project`.
You can replace `my-project` in the command with the name of your project.

After a short process the project files can be found in the `my-project` folder
(or whatever you named it).

#### 3. Open the project in a code editor

If you do not already have a code editor,
[Visual Studio Code](https://code.visualstudio.com/) is a good one.

You can open a folder in Visual Studio Code via `File > Open Folder...` in the
top menu.

#### 4. Install `npm` packages

Run `npm install` in the project directory. In Visual Studio Code, you can get a
terminal in the current folder via `Terminal > New Terminal` in the top menu.

#### 5. Run `npm run dev`

To start developing your custom page, run the `npm run dev` command. Add a page
with the URL `http://localhost:1234/` to your chayns-Site. You will see your
page running there.

> Be aware that this is only a local version of your page, so no other devices
> can access your development server.
