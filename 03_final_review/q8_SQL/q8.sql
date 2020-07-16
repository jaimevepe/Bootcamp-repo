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


-- Feedback:

-- This works. However the CASE statement which
-- calculates whether the player is Heavy or Medium
-- based on weight is not provided. Nor is his weight
-- I'll give you 1.5/3.0 on this.