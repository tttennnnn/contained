CREATE TABLE user(
    user CHAR(32) NOT NULL DEFAULT '',
    authentication_string TEXT,
    PRIMARY KEY (user)
);