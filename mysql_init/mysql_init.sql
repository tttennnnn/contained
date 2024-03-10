CREATE TABLE user(
    user CHAR(32) NOT NULL DEFAULT '',
    authentication_string TEXT,
    PRIMARY KEY (user)
);

INSERT INTO user VALUES('user1', 'auth1');
INSERT INTO user VALUES('user2', 'auth2');
INSERT INTO user VALUES('user3', 'auth3');