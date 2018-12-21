-- SELECT * FROM users_posts;

SELECT *
FROM users_posts
JOIN users on users.id = users_posts.man_id;