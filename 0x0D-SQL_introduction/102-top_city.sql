-- Assuming you have already created the necessary table structure
USE hbtn_0c_0;

-- Import the table dump (replace 'dump_filename.sql' with the actual filename)
SOURCE /path/to/dump_filename.sql;

-- Query to display the top 3 cities' temperatures during July and August
SELECT city, AVG(temperature) as avg_temp
FROM temperatures
WHERE month IN ('July', 'August')
GROUP BY city
ORDER BY avg_temp DESC
LIMIT 3;
