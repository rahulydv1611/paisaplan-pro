# PaisaPlan Pro

A responsive React + Vite personal finance dashboard for planning monthly salary, tracking actual spending, reviewing past expenses across a 12-month dashboard, savings goals, and EMI estimates.

## Run locally
1. Install Node.js (LTS).
2. Extract the ZIP and open a terminal in this folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL Vite prints, usually `http://localhost:5173`.

## Build for deployment
```bash
npm run build
npm run preview
```
The production site is created in `dist/`. On Netlify, import the GitHub repo and use build command `npm run build` and publish directory `dist`.

## Features
- React + Vite project structure
- Dashboard charts for monthly spend and allocation
- 12-month year dashboard with historical income, expenses, savings, monthly table, category breakdown, and 3/6/12-month filters
- Month selector and previous/next month navigation
- Monthly salary, other income, savings target, and editable budget categories
- Add/delete income and expense transactions
- Search and filter transactions
- Savings goals with progress and quick contributions
- EMI calculator with reducing-balance and flat-rate estimates
- JSON backup/restore and CSV transaction export
- Responsive mobile sidebar
- Local browser storage; no server or bank connection required

## Important
First launch seeds sample historical transactions so the year dashboard is not empty. These are clearly marked as demo-style sample data in the history UI. Replace them with real records before relying on the totals. Data is stored in `localStorage` on the current browser/device; use Backup regularly. The demo profile is not secure authentication, and no real bank accounts are connected.
- Salary adjustment: enter expected salary and unpaid leave days (30-day calculation); the dashboard estimates salary after unpaid leave.
- Actual salary received can be entered to override the estimate for that month.
- Other income remains separate and is added to the adjusted/actual salary.
- Each month's salary and leave settings are saved independently, preserving monthly history.
"# paisaplan-pro" 
