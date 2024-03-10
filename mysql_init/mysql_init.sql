CREATE TABLE user(
    user CHAR(32) NOT NULL DEFAULT '',
    authentication_string TEXT,
    PRIMARY KEY (user)
);

INSERT INTO user VALUES
('user1', 'auth1'),
('user2', 'auth2'),
('user3', 'auth3');