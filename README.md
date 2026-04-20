# 🚀 Workflow Designer (React Flow + Zustand)

An interactive workflow builder built using React Flow and Zustand that allows users to design, simulate, and manage workflows visually.

---

## 🔥 Features

### 🎯 Core Features
- Add nodes (Start, Task, Approval, End)
- Connect nodes visually
- Drag and rearrange workflow
- Edit node properties dynamically
- Delete nodes with automatic edge cleanup

---

### ⚙️ Advanced Features
- ✅ JSON Export / Import (Save & Load workflows)
- 🔥 Workflow Simulation (step-by-step execution)
- 🎯 Visual Node Highlighting during execution
- ❗ Validation (only one Start node allowed)
- ⚠️ Cycle detection & error handling

---

### 🎨 UI/UX Features
- Clean dark-themed UI
- Interactive sidebar controls
- Profile card integration
- Smooth animations & transitions

---

## 🧠 Tech Stack

- React (Vite)
- React Flow (graph visualization)
- Zustand (state management)
- TypeScript
- CSS / Inline styling

---

## 📂 Project Structure
src/
├── components/
│ ├── Canvas.tsx
│ ├── Sidebar.tsx
│ ├── NodePanel.tsx
│ ├── SimulationPanel.tsx
│
├── nodes/
│ ├── StartNode.tsx
│ ├── TaskNode.tsx
│ ├── ApprovalNode.tsx
│ ├── EndNode.tsx
│
├── store/
│ └── workflowStore.ts
│
├── utils/
│ ├── simulateWorkflow.ts
│ └── workflowUtils.ts


---

## ▶️ How It Works

1. Add nodes from sidebar  
2. Connect them visually  
3. Edit node properties  
4. Click **Run Workflow**  
5. Nodes execute step-by-step with highlighting  

---

## 💾 Save & Load

- Export workflow as JSON  
- Import JSON to restore workflow  

---

## 🧪 Validation

- Only one Start node allowed  
- Detects cycles in workflow  
- Handles broken connections  

---

## 👨‍💻 Author

**Felix Mathew**

- 📧 Email: felixsparrow561@gmail.com  
- 💻 GitHub: https://github.com/FelixMathew  
- 🔗 LinkedIn: https://www.linkedin.com/in/felixmathew07/  
- 🌐 Portfolio: https://felixmathew.github.io/my-portfolio/

---

## 🚀 Future Improvements

- Multi-branch workflows  
- Conditional logic (if/else)  
- Backend integration  
- Real-time collaboration  

---

## ⭐ Why This Project Stands Out

This project demonstrates:

- Graph-based UI design  
- State management using Zustand  
- Workflow execution engine  
- Data persistence (JSON)  
- Real-world system design thinking  

---

⭐ If you like this project, consider starring it!