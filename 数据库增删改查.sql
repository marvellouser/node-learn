
-- 增
INSERT INTO `student` (`name`, `age`, `class`)
VALUES('Dan', 18, 1),
('Sam', 18, 2),
('Joy', 20, 2);

-- 改
UPDATE student SET `name` = 'Tom'
WHERE id=9;

-- 删
DELETE FROM student
WHERE `class`=1;

-- 查询
-- select, from
SELECT `id`, `name` from `student`;

SELECT `id`, `name` as `学生名字` from `student`;

SELECT DISTINCT `name` FROM `student` 

SELECT * from `student`;

SELECT CASE sex
	WHEN 0 THEN
		'女'
	WHEN 1 THEN
		'男'
	ELSE '人妖'
END as sex from student;

-- where

SELECT * from student
WHERE sex = 0;

SELECT * from student
WHERE `name` like '%R%';

SELECT * from student
WHERE `name` like '%R%'
and sex = 1;

SELECT * from student
WHERE `name` like '%R%'
or sex = 0;


-- order by
-- DESC 降序 ASC升序;
SELECT * from student
ORDER BY sex DESC;

-- limit
-- limit m, n
-- 跳过m条取n条
SELECT * from student
LIMIT 2, 3;

运行顺序
from => where => select => order by => limit;


-- 联表查询

-- left join => on 左侧表必选出
SELECT * 
FROM student AS s LEFT JOIN class AS c
ON s.class = c.id

-- right join => on 右侧表必选出
SELECT * from
class RIGHT JOIN student
on class.id = student.class

-- inner join
SELECT * from 
student INNER JOIN class
on student.class = class.id

