SELECT *
FROM teams

SELECT id as "Team_Id",
       name as "Team_Name"
FROM teams

SELECT i.id as "TEAM_ID",
i.name as "TEAM_NAME",
p.fname || ' ' || p.lname as "FullName"
FROM teams i
LEFT JOIN players p
ON (i.id = p.TEAM_ID)

