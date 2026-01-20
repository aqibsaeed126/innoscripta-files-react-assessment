# 📑 Project Refactor & Architectural Notes

This document outlines the technical improvements, architectural decisions, and performance optimizations implemented during the refactoring process for the Innoscripta Frontend Assessment.

---

## 🛠 Additional Utilities & Libraries

To elevate the project to production-ready standards, the following tools were integrated:
* **Web Vitals (v4):** Integrated to monitor real-time performance metrics (LCP, TTFB, CLS).
* **Prettier:** Configured with a `.prettierrc` file and pinned to version `11.0.2` for Cursor compatibility.
* **Mantine UI:** Used to replace legacy JSX/CSS and native alerts with accessible, theme-consistent components and modals.

---

## 🏗 Major Areas Refactored & Fixed

### 1. Robust Error Handling Support 🛡️
Implemented a tiered error-resilience strategy:
* **React App-Level Boundary:** A top-level `ErrorBoundary` catches unexpected rendering crashes across the entire tree.
* **Specific Router-Level Catching:** Utilized React Router’s `errorElement` on specific routes (like `/favorites`) to ensure a failure in one section doesn't break the navigation or the layout.
* **General Router-Level Catching:**  used at Top level route Object.
* **User Recovery:** Fallback UIs 


### 2. Performance & User Experience (UX) 🚀
* **API Optimization:** Identified and resolved a bug where recurrent fetch calls were triggered by unstable object references (`{}`). Unified these into optimized, single-call patterns.
* **Browser Navigation:** Replaced route level navigations to use SPA powers , instead of browser navigation
* **Client-Side Pagination:** Integrated pagination for the Grid and Table views to eliminate rendering lag when handling large file datasets.
* **Optimized Rendering:** Applied `React.memo`, `useMemo`, and `useCallback` to prevent expensive re-renders
* **Lazy Loading:** Implemented `React.lazy` and `Suspense` for route-based code splitting, improving initial load times.
* **UX Polish:** Replaced browser `alerts` with Mantine Modals and added explicit Loading/Error states.



### 3. Best Practices & Design Patterns 🧩
* **State Management:** Transitioned from "Prop Drilling" to **React Context** for cleaner, more maintainable global state sharing.
* **Clean Architecture:** Reorganized the folder structure to follow "Separation of Concerns" (splitting Features, Hooks, Utilities, and Types).
* **Type Safety:** Tried Eliminated `any` types in favor of strict TypeScript interfaces and types.
* **Import Standards:** Enforced a logical import order: React/Core -> 3rd Party -> internal components/hooks
* **Styling:** Usage of Mantine theme to enhance consistent Styles across app. and Avoid usage of Inline Styling ( applied at some places )


### 4. DRY & Reusability & Functionality ♻️
* **Layout Extraction:** Separated the `Sidebar` from the main `DefaultLayout` into standalone, reusable components.
* **Logic Abstraction:** Abstracted common functionality (like pagination and data fetching) into reusable custom hooks.
* **Centralized Assets:** Moved common functions, constants, and global types into a shared `utils/` directory. ( dateTime , const , routes )
* **Functional Changes:** Implemented remove Favorite logic ( similarly other can be write )

---

## 🚀 Further Improvements for Scalability
If this project were to scale further in a production environment, I would recommend:
* **TanStack Query (React Query):** For advanced server-state caching, background synchronization, and automatic re-fetching.
* **Redux Toolkit / Zustand:** To manage state once the global data complexity exceeds the capabilities of React Context.
* **Router Loaders:** To fetch data in parallel with route transitions, removing the need for post-navigation loading spinners.
* **Expanded Testing:** Introducing Unit tests for utility functions and Integration tests.
* * **Linting:** ES Linting to standardize the codebase with common set of rules.

---

<img width="1892" height="529" alt="image" src="https://github.com/user-attachments/assets/e64b9f62-165e-4841-93c5-aae4065eaad0" />

