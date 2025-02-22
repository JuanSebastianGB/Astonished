# Astonished Users Management

This project is a simple user management application built with React and Redux Toolkit. It allows users to add, edit, and delete users with their reactions. The application demonstrates the use of modern React hooks, Redux for state management, and CSS modules for styling.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: The official, recommended way to write Redux logic.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **CSS Modules**: A CSS file in which all class and animation names are scoped locally by default.

## Project Structure

The project is structured as follows:

```
/project
├── src
│   ├── app
│   │   ├── api.ts
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── features
│   │   └── users
│   │       ├── UsersList.module.css
│   │       ├── UsersList.tsx
│   │       └── usersSlice.ts
│   ├── hooks
│   │   └── useUsers.ts
│   ├── App.tsx
│   └── index.tsx
└── README.md
```

## Key Features

- **User Management**: Add, edit, and delete users.
- **State Management**: Utilizes Redux Toolkit for efficient state management.
- **Custom Hooks**: Implements custom hooks for fetching and managing user data.
- **Styling**: Uses CSS modules for scoped and maintainable styles.

## Demo
![Demo](https://github.com/user-attachments/assets/1f1340c9-5e95-4f17-bbe4-2014cbaa43a8)

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/astonished-users-management.git
   cd Astonished
   ```

2. **Install dependencies**:

   ```sh
   pnpm install
   ```

3. **Run the application**:

   ```sh
   pnpm start
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` to see the application in action.
