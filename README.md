# PetStore Playwright TypeScript API Automation Test

A robust REST API test automation framework built with **Playwright** and **TypeScript**, specifically designed for testing the [PetStore Swagger API](https://petstore.swagger.io/). This project demonstrates best practices for API automation with strongly-typed request/response models, reusable controllers, and comprehensive test cases. 🚀

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Examples](#test-examples)
- [Contributing](#contributing)

## Features

✨ **Comprehensive API Testing**
- Full PetStore API coverage (Create, Read, Update operations)
- RESTful endpoint testing with strong TypeScript typing
- HTTP request/response validation

🎯 **Best Practices**
- Organized project structure with controllers and data classes
- Strongly-typed request and response models
- Reusable API client helper for common operations
- Clean separation of concerns

🔍 **Test Reporting**
- HTML test reports with Playwright
- Trace recordings on first retry
- Parallel test execution for faster feedback

## Tech Stack

- **Playwright** v1.61.1 - Modern web and API testing framework
- **TypeScript** - Strongly-typed JavaScript for safer code
- **Node.js** - JavaScript runtime
- **CommonJS** - Module system

## Project Structure

```
.
├── tests/
│   ├── api/
│   │   ├── helpers/
│   │   │   └── ApiClient.ts          # HTTP client for API requests
│   │   └── testcases/
│   │       ├── GetAvailablePets.spec.ts
│   │       ├── CreatePet.spec.ts
│   │       └── GetPetById.spec.ts
│   ├── controllers/
│   │   └── PetController.ts          # PetStore API controller
│   └── dataclasses/
│       ├── request/
│       │   └── PetRequest.ts         # Request models
│       └── response/
│           └── PetResponse.ts        # Response models
├── playwright.config.ts               # Playwright configuration
├── package.json                       # Project dependencies
└── README.md                          # This file
```

## Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrmanojrana431/petstore-playWright-typescript-API-automation-test.git
   cd petstore-playWright-typescript-API-automation-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npx playwright --version
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/api/testcases/GetAvailablePets.spec.ts
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Generate and open HTML report
```bash
npx playwright show-report
```

## Test Examples

### Get Available Pets
Tests retrieval of all available pets from the PetStore API:
```
tests/api/testcases/GetAvailablePets.spec.ts
```

### Create Pet
Tests creating a new pet in the PetStore:
```
tests/api/testcases/CreatePet.spec.ts
```

### Get Pet by ID
Tests retrieving a specific pet by its ID:
```
tests/api/testcases/GetPetById.spec.ts
```

## Key Components

### ApiClient (`tests/api/helpers/ApiClient.ts`)
Reusable HTTP client for making API requests with proper error handling and response validation.

### PetController (`tests/controllers/PetController.ts`)
Controller class that abstracts PetStore API operations with business logic methods.

### Data Classes
Strongly-typed TypeScript models for request and response validation, ensuring type safety throughout the test suite.

## Configuration

The `playwright.config.ts` file includes:
- Base URL: `https://petstore.swagger.io/`
- Test directory: `./tests`
- Reporter: HTML
- Parallel execution enabled
- Chromium browser configured

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request to improve the test coverage or add new features.

## License

ISC
