BEGIN;

INSERT INTO cats (title)
VALUES
('Organization Type'),
('Audience'),
('Funding'),
('Focus area / Theme');

INSERT INTO sub_cats (title, parent_cat)
VALUES
('Not-for-profit / charity', 1),
('Community organization', 1),
('Academia / education', 1),
('Events and community', 1),
('Accelerator', 1),
('Media', 1),
('Events', 1),
('Investment / funding', 1),
('Business', 1),
('International organization', 1),
('Professionals', 2),
('Students - College / University', 2),
('Students - Primary to High School', 2),
('Girls (Age 7-27)', 2),
('Women of Color', 2),
('LGBT+', 2),
('Founders', 2),
('CEOs', 2),
('Angel Investing', 3),
('VC funding', 3),
('Scholarships', 3),
('Learning to Code', 4),
('Education', 4),
('Accelerators', 4),
('Investors', 4),
('For girls', 4),
('Professional networking', 4),
('Alliances', 4),
('Blockchain', 4),
('Digital Identity', 4),
('Data', 4),
('Mentoring', 4),
('JavaScript', 4),
('Ruby', 4),
('Rails', 4),
('Python', 4),
('Social impact', 4),
('Infosec', 4),
('STEM', 4),
('Founders', 4);

INSERT INTO orgs (name, website, description, operating, country, city, cat, comments)
VALUES
('Astia', 'http://www.astia.org/', 'A not-for-profit organization that offers paid, week-long programs to help female entrepreneurs in technology, life sciences, and clean tech to learn skills for revenue generation, sales, and fundraising. Includes a support network of over 200 investors and 300 startup executives.', 'International', 'United States', 'California', 1, 'This is a testery comment, it exists for building purposes.'),
('C.W. Developers', 'http://www.cwdevs.com/', 'Classes and events in Chicago for female programmers. They are in the middle of their Summer Apps Program, a series of three courses to transform your idea into a web and mobile app. They also host weekly open hack nights on Thursday (#XXHACK), where anyone can show up and get help on coding', 'Locally', 'United States', 'Chicago', 2, 'This is a testery comment, it exists for building purposes.');

INSERT INTO orgs_sub_cats (org_id, sub_cat_id)
VALUES
(1, 1),
(1, 3),
(1, 40),
(2, 3),
(2, 4);

COMMIT;
