# 📑 Project Refactor & Architectural Notes

This document outlines the technical improvements, architectural decisions, and performance optimizations implemented during the refactoring process for the Innoscripta Frontend Assessment.

---

## 🛠 Additional Utilities & Libraries

To elevate the project to production-ready standards, the following tools were integrated:
* **Web Vitals (v4):** Integrated to monitor real-time performance metrics (LCP, TTFB, CLS) with a specific focus on **INP** (Interaction to Next Paint) for folder tree responsiveness.
* **Prettier:** Configured with a `.prettierrc` file and pinned to version `11.0.2` for Cursor compatibility to ensure a consistent, "zero-diff" coding style.
* **Mantine UI:** Used to replace legacy CSS and native alerts with accessible, theme-consistent components and modals.

---

## 🏗 Major Areas Refactored & Fixed

### 1. Robust Error Handling Support 🛡️
Implemented a tiered error-resilience strategy:
* **React App-Level Boundary:** A top-level `ErrorBoundary` catches unexpected rendering crashes across the entire tree.
* **Router-Level Catching:** Utilized React Router’s `errorElement` on specific routes (like `/favorites`) to ensure a failure in one section doesn't break the navigation or the layout.
* **User Recovery:** Fallback UIs include "Try Again" mechanisms to reset the error state without requiring a full browser refresh.

### 2. Performance & User Experience (UX) 🚀
* **API Optimization:** Identified and resolved a bug where recurrent fetch calls were triggered by unstable object references (`{}`). Unified these into optimized, single-call patterns.
* **Client-Side Pagination:** Integrated pagination for the Grid and Table views to eliminate rendering lag when handling large file datasets.
* **Optimized Rendering:** Applied `React.memo`, `useMemo`, and `useCallback` to the recursive file tree to prevent expensive re-renders during folder expansion.
* **Lazy Loading:** Implemented `React.lazy` and `Suspense` for route-based code splitting, improving initial load times.
* **UX Polish:** Replaced disruptive browser `alerts` with Mantine Modals and added explicit Loading/Error states for all data-driven components.



### 3. Best Practices & Design Patterns 🧩
* **State Management:** Transitioned from "Prop Drilling" to **React Context** for cleaner, more maintainable global state sharing.
* **Clean Architecture:** Reorganized the folder structure to follow "Separation of Concerns" (splitting Features, Hooks, Utilities, and Types).
* **Type Safety:** Eliminated `any` types in favor of strict TypeScript interfaces to ensure compile-time safety and better developer tooling.
* **Import Standards:** Enforced a logical import order:
    1.  React/Core
    2.  Third-party libraries (Mantine, Router)
    3.  Internal components, hooks, and utilities.

### 4. DRY (Don't Repeat Yourself) & Reusability ♻️
* **Layout Extraction:** Separated the `Sidebar` and `Header` from the main `DefaultLayout` into standalone, reusable components.
* **Logic Abstraction:** Abstracted common functionality (like pagination and data fetching) into reusable custom hooks.
* **Centralized Assets:** Moved common functions, constants, and global types into a shared `utilities/` directory.

---

## 🚀 Further Improvements for Scalability
If this project were to scale further in a production environment, I would recommend:
* **TanStack Query (React Query):** For advanced server-state caching, background synchronization, and automatic re-fetching.
* **Redux Toolkit / Zustand:** To manage state once the global data complexity exceeds the capabilities of React Context.
* **Router Loaders:** To fetch data in parallel with route transitions, removing the need for post-navigation loading spinners.
* **Expanded Testing:** Introducing Unit tests for utility functions and Integration tests for the file-navigation logic using Vitest/React Testing Library.

---
*Created as part of the Innoscripta Frontend Engineering Assessment.*
