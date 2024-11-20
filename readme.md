# Playwright Automation Tests for Saucedemo

This repository contains automated tests for the Saucedemo web application using Playwright with the Page Object Model (POM) design pattern. The goal is to ensure the reliability and efficiency of the testing process.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Introduction
This project automates the testing of the Saucedemo web application using [Playwright](https://playwright.dev/) for end-to-end testing. The Page Object Model design pattern is used to enhance test maintenance and reduce code duplication.

## Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm or yarn

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/SyifanIkhtiardi/swagLabs-playwright.git
   cd swagLabs-playwright

2. **Install dependencies:**
   ```sh
   npm install

3. **Install Playwright browsers:**
   ```sh
   npx playwright install

## Usage

1. **Run all test:**
   ```sh
   npx playwright test

2. **Run test for a specific file:**
   ```sh
   npx playwright test tests/example.spec.js

3. **View the test report:**
   ```sh
   npx playwright show-report

## Project Structure

```plaintext
.
├── tests
│   ├── example.spec.js     # Example test file
│   └── ...
├── pages
│   ├── basePage.js         # Base page object
│   ├── loginPage.js        # Page object for the login page
│   └── ...
├── playwright.config.js    # Playwright configuration file
├── package.json            # Project metadata and dependencies
└── README.md               # This file