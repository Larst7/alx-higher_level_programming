-- Assuming you have already created the necessary table structure
USE hbtn_0c_0;

-- Query to display the top 3 cities' temperatures during July and August
SELECT city, temperature
FROM temperatures
WHERE month IN ('July', 'August')
ORDER BY temperature DESC
LIMIT 3;

