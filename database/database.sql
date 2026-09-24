CREATE DATABASE LoginDB;
GO

USE LoginDB;
GO

CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(10) NOT NULL DEFAULT 'user',
    CONSTRAINT CK_Users_Role
        CHECK (role IN ('user', 'admin'))
);