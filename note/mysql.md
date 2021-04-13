ER_NOT_SUPPORTED_AUTH_MODE:  Client does not support authentication protocol requested by server; consider upgrading MySQL client
> you need to handle the privilige in docker mysql
> : ALTER USER 'user' IDENTIFIED WITH mysql_native_password BY 'ThinkPad'
> or try: ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ThinkPad'
