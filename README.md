# Automation testing Exercise

A starter repository for writing end-to-end tests using Playwright and Typescript

## What's Inside

- Playwright default setup
- Typescript setup for writing code for your tests
- Utilites function that is commonly used amongest different files

## Pre-requisities

- ‎>= Node 21 Required
- Run `npm install` to install node_modules

## To run the tests

- To run all the tests use command `npx playwright test` that will execute the whole `tests` folder
- To run a specific test only pass in the name of test file e.g. `npx playwright test login-spec.ts`

## Headless and Headed mode

- By default playwright will run the tests in a headless mode
- To view execution and run tests in headed mode, use the `--headed` flag e.g. `npx playwright test --headed`

## View Report

- You can view the HTML report of the tests from `/Playwright-report` folder
