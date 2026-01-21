import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Ensure a fresh DOM for each test
afterEach(() => {
  cleanup();
});
