APP OVERVIEW: 

Login / Registration Page for Sales reps & Manager (Email & Password Registration). Need managers to have access to separate back-end dashboard/tools (Manager will have heightened permissions).

Sales rep dashboard following functionality: Input customers into CRM (see and edit previous customers), ability to select a customer to apply a sale to (choose customer from CRM tool, and select product that's being sold). There needs to be a separate product database that includes products and commission for selling the product, which is used to calculate the sales rep commission (Manager controls products in this database & commission for each product from his dashboard. The commission needs to be updated when a product is sold, and displayable in total commission by (day, week, month, current pay period, previous pay period) using previous and current rep product sales data in the sales reps dashboard. The reps also need the ability to logout of their dashboard after logging in.

Manager dashboard functionality: Read/write permissions of sales rep CRM customer data, and ability to select products that can be chosen to be sold by sales rep. Ability to see ALL customers that have been inputted by the sales reps (a 'master crm'). Ability to see sales history of the sales rep by Rep ID (each sales rep will have a unique ID so that sales data belongs to that sales rep / ID alone), and the company as a whole (all rep sales data, organized neatly). Ability to organize product sales and commission data by time period for individual reps, and the company as a whole (daily, weekly, monthly, this pay period, etc.) Ability to add/remove sales reps from the database, but keep their customer data in the 'master crm' before deleting the sales rep from the database. Manager will also need a logout from dashboard.


CURRENT FILES / FUNCTIONS: 

src/firebase.js: Firebase configuration file

src/App.js: Main application file with routing and role context

src/contexts/RoleContext.js: Context for storing the user's role (sales rep or manager)

src/components/Login.js: Component for user login with role selection

src/components/ProtectedRoute.js: Component for protecting routes based on authentication

src/components/Dashboard.js: Component to display different dashboard content based on the user's role

src/components/CustomerInput.js: Component for sales reps to input and edit customer information

src/components/ProductSalesInput.js: Component for sales reps to input product sales

src/components/SalesDataTable.js: Component for displaying the sales rep's customer data in a table

src/components/Logout.js: Component to handle user logout

src/components/CommissionDisplay.js: Component to display the sales rep's commission by day, week, and month

src/components/ManagerDashboard.js: Component for the manager's dashboard layout and components

src/components/AllCustomers.js: Component to display all customers in the 'master CRM' for the manager

src/components/ProductManager.js: Component to manage products that can be chosen to be sold by sales reps

src/components/SalesHistory.js: Component to display sales history by Rep ID and for the company as a whole

src/components/SalesRepManager.js: Component to add/remove sales reps from the database while preserving their customer data in the 'master CRM'

