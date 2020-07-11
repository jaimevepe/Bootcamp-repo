-- 1)
-- Please find all employees that have a salary greater than 3000 and less than 4000
-- using AND operator
-- using BETWEEN operator
-- using AND
SELECT * FROM employees WHERE salary > 3000 AND salary < 4000;

-- using BETWEEN
SELECT * FROM employees WHERE salary BETWEEN 3000 AND 4000;

-- 2)
-- Please find all employees that have a salary greater than 8000, and those hired after 1996 (use implicit conversion of a date as a string to the DATE type).
-- Create a separate query to find the lowest salary in the company (look for a SQL math function from references or Google search which allows you find the minimum in a set or a column).
-- In the first query you wrote above, please also report the employee's total compensation (salary + commission, if any) as a percentage of the minimum salary in the company from the #2 above.
-- finds employees with last_name longer than six characters and then displays
-- query starting with ONLY the first 6 letters of last_name
SELECT
  LEFT(last_name, 6) AS "Last Name (first 6 letters)",
  job_id AS "Job Position",
  salary AS "Salary"
FROM employees
WHERE char_length(last_name) > 6;

-- 3)
-- employees hired after 1996 with salary greater than $8000
SELECT
  last_name,
  first_name,
  to_char(hire_date, 'DD-Mon-YYYY') AS "Hire Date",
  salary
FROM  employees
WHERE salary > 8000
  AND hire_date > '12/12/1996';

-- query for the lowest salary only
SELECT
  MIN(salary) AS "Lowest Salary"
FROM employees;

-- total compensation of employees making over $8000 AND hired after 1996 as a percent of min salary
SELECT
  last_name,
  first_name,
  to_char(hire_date, 'DD-Mon-YYYY') AS "Hire Date",
  salary,
-- forces commission_pct to 0 if null
  salary * coalesce(commission_pct, 0) AS "Total Commission",
-- adds result of salary * commission_pct to salary for a final total compensation
  salary + salary * coalesce(commission_pct, 0)  AS "Total Comp",
-- divides total compensation by the min salary of company displayed to 2 decimal precision
  ROUND((salary + salary * coalesce(commission_pct, 0))/
    (SELECT
      MIN(salary)
    FROM employees) * 100, 2) AS "% of Company Min Salary"
FROM employees
WHERE salary > 8000
  AND hire_date > '31-Dec-1996';

-- 4)
-- List the full names and their department names of the all employees in the "bootcamp" database. 
-- Do the same for the employees that work for department "Sales". Order the results by hiring date 
-- with the most recent hires at the top.

-- Hint: you may NOT look up the department_id of "Sales", but use the text "Sales" in the query. 
-- Do something like ... WHERE department_name = 'Sales'
SELECT
  CONCAT(first_name, ' ', last_name) AS "Full Name", -- concatenates for full name
  department_name AS "Department",
  to_char(hire_date, 'MON-DD-YYYY') as "Hire Date"
-- sets employees table to alias e
FROM employees e
-- sets departments table to alias d and JOINS to employees table
JOIN departments d
--   uses ON to join employees table to departments table using department_id
ON e.department_id = d.department_id
-- orders the results by hire date
ORDER BY hire_date DESC;


SELECT
  CONCAT(first_name, ' ', last_name) AS "Full Name", -- concatenates for full name
  department_name AS "Department",
  to_char(hire_date, 'MON-DD-YYYY') as "Hire Date"
-- sets employees table to alias e
FROM employees e
-- sets departments table to alias d and JOINS to employees table
JOIN departments d
--   uses ON to join employees table to departments table using department_id
ON e.department_id = d.department_id
-- specifically calls for only the Sales department
WHERE department_name = 'Sales'
-- orders the results by hire date
ORDER BY hire_date DESC;

-- 5)
-- List the first, last, email, department name and city of all employees that are Execs.

-- Hint: Join between EMPLOYEES, DEPARTMENTS and LOCATIONS using DEPARTMENT_NAME = 'appropriate department name'.
-- no matter from which tables, all SELECTS go here
SELECT
  first_name AS "FIRST",
  last_name AS "LAST",
  email AS "EMAIL",
  department_name AS "DEPT",
  city AS "CITY"
FROM employees e
-- joins employees table wth departments table using department id
JOIN departments d
  ON e.department_id = d.department_id
-- joins locations table with departments table using location id
JOIN locations l
  ON l.location_id = d.location_id
-- only returns data where dept name is Executive
WHERE department_name = 'Executive';


-- 6)
-- To the above query, add the manager's first name to the column list.

-- Hint: add a self join to the EMPLOYEES table all over again giving it a different alias.

-- Make changes so that all 22 employees are listed (for this requirement, think about using outer joins. You may wait till we have covered outer joins in class.)

-- Shows ALL employees with their dept, city and manager
-- no matter from which tables, all SELECTS go here
SELECT
  emp.first_name AS "FIRST",
  emp.last_name AS "LAST",
  emp.email AS "EMAIL",
  mgr.first_name AS "MANAGER",
  department_name AS "DEPT",
  city AS "CITY"
FROM employees emp
-- left join needed to catch any unmatched rows
-- in this case King has mgr id of 146 - there is NO emp id 146 so no match
LEFT JOIN employees mgr
  ON (mgr.employee_id = emp.manager_id)
-- joins employees table wth departments table using department id
JOIN departments d
  ON (emp.department_id = d.department_id)
-- joins locations table with departments table using location id
JOIN locations l
  ON (l.location_id = d.location_id)
-- only displays executives
WHERE department_name = 'Executive';




-- Shows ALL employees with their dept, city and manager
-- no matter from which tables, all SELECTS go here
SELECT
  emp.first_name AS "FIRST",
  emp.last_name AS "LAST",
  emp.email AS "EMAIL",
  mgr.first_name AS "MANAGER",
  department_name AS "DEPT",
  city AS "CITY"
FROM employees emp
-- need left joins on all three joins due to null values
LEFT JOIN employees mgr
  ON (mgr.employee_id = emp.manager_id)
-- joins employees table wth departments table using department id
LEFT JOIN departments d
  ON (emp.department_id = d.department_id)
-- joins locations table with departments table using location id
LEFT JOIN locations l
  ON (l.location_id = d.location_id)
ORDER BY "DEPT" NULLS FIRST;

-- 7)
-- Find out how many employees were hired in each year. List years and counts of employees hired in those years. See sample output below.

-- Hint: use grouping after extracting the year of hire.

-- Then leave out those who years where less than 2 employees were hired, while ordering the results chronologically.
SELECT
-- extracts just the year from the hire date and assigns alias
  EXTRACT(year FROM hire_date) AS year_of_hiring,
-- counts the extracts of years from hire date
  COUNT(EXTRACT(year FROM hire_date))
FROM employees
-- groups by hire_date alias
GROUP BY year_of_hiring
-- instead of where clause, use having clause to set conditions
HAVING COUNT(EXTRACT(year FROM hire_date)) > 1
-- orders by hire_date alias
ORDER BY year_of_hiring;

