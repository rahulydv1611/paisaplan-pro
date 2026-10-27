# PaisaPlan Pro

A responsive React + Vite personal finance dashboard for planning monthly salary, tracking actual spending, reviewing past expenses across a 12-month dashboard, savings goals, and EMI estimates. User accounts and cloud data are powered by Supabase; the frontend can be deployed on Netlify.

## Supabase setup
1. Create a Supabase project.
2. In the Supabase SQL Editor, run [`supabase/schema.sql`](./supabase/schema.sql). It creates the per-user data table and row-level security policies. Do not disable RLS.
3. In Supabase **Authentication → URL Configuration**, set the Site URL to your deployed Netlify URL and add your local development URL (for example `http://localhost:5173`) to the allowed redirect URLs. Configure the email provider and confirmation behavior to suit your project.
4. Copy the project URL and its public publishable/anon key. Never use a `service_role` key in this frontend.

## Run locally
Create `.env.local` from `.env.example` and set:
```text
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-publishable-or-anon-key
```
Then run:
```bash
npm install
npm run dev
```

## Build for deployment
```bash
npm run build
npm run preview
```
The production site is created in `dist/`. Vite splits React, charts, Supabase, and icons into separate vendor chunks to keep each generated JavaScript file within the configured bundle warning threshold. On Netlify, import the GitHub repo and use build command `npm run build` and publish directory `dist`. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` under **Site configuration → Environment variables** in Netlify, then trigger a new deploy. These variables are embedded in the frontend build; only use the public Supabase key and rely on the included row-level security policies to protect user records.

## Features
- React + Vite project structure
- Dashboard charts for monthly spend and allocation
- 12-month year dashboard with historical income, expenses, savings, monthly table, category breakdown, and 3/6/12-month filters
- Month selector and previous/next month navigation
- Monthly salary, other income, savings target, and editable budget categories
- New-account salary, PF, savings, and category-budget amounts start at ₹0
- Monthly fixed PF contribution is withheld from gross salary and tracked as savings
- Overview shows lifetime PF contributions separately from all-time savings. All-time savings combines PF with savings transactions; monthly savings targets are not counted as saved money
- Add a Savings transaction any time to update that month's saved/target progress and the all-time savings total
- Saved monthly plans become defaults for newly created months; salary and category names, icons, and budgets can be customized
- Add/delete income, expense, and savings transactions
- Search and filter transactions
- Savings goals with progress and quick contributions
- EMI calculator with reducing-balance and flat-rate estimates
- JSON backup/restore and CSV transaction export
- Email/password accounts, password reset, and per-account cloud sync across devices
- Custom profile photo, chosen initial, or blank avatar synced with the account
- One-time option to import existing browser data into a new account
- Responsive mobile sidebar
- Supabase-backed account data; no bank connection

## Important
New accounts start with an empty plan. Existing data from this browser is offered for import the first time a user signs in without existing cloud data; choosing not to import leaves the browser copy untouched. Use Backup regularly as an additional export. If the Supabase environment variables or SQL schema are missing, sign-in or cloud sync will not work. No real bank accounts are connected.
- Salary adjustment: enter expected salary and unpaid leave days (30-day calculation); the dashboard estimates salary after unpaid leave.
- Actual gross salary before PF can be entered to override the estimate for that month.
- PF savings are subtracted from gross salary (capped at the gross amount) before calculating income available for budgeting. Each month's PF value is saved separately.
- Record money saved with a Savings transaction at any time during the month. Monthly savings progress and all-time savings update from these transactions; the all-time total uses actual recorded savings plus PF, never the target amount.
- Other income remains separate and is added to the adjusted/actual salary.
- Each month's salary, PF, and leave settings are saved independently, preserving monthly history. Existing saved finance data is not reset when these defaults change.
"# paisaplan-pro" 
