-- Using the TEAMS and PLAYERS tables, write a query that lists all teams and their players from the hr schema in
-- the acc software bootcamp database given in class.
-- 1) Displays team name, player last name (comma) first name (ex - Doe, John), position, and height using the following format - '7ft 8in'
-- 2) All column names should make sense so you may need aliases for display purposes. For example, headings should show "Full Name", "Height" or "Hire Date".
-- 3) Order the results by player's last name.
-- 4) Only display those players who are pitchers and over 6ft tall
-- 5) Make sure that players without teams are displayed first

SELECT teams.name,
    CONCAT(
        players.lname, 
        ', ' ,
        players.fname) 
        AS "Full name"
FROM teams INNER JOIN 
     players
     ON teams.id = players.team_id
WHERE players.position = 'Pitcher'
AND players.height >= '6'

SELECT height
FROM players