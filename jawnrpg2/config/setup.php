<?PHP

	$query = $DB_connect->exec("
	CREATE TABLE IF NOT EXISTS `UserAccounts` (
		`userID` INT(12) AUTO_INCREMENT,
		`username` VARCHAR(30) NOT NULL,
		`password` VARCHAR(128) NOT NULL,
		`email` VARCHAR(320) NOT NULL,
		`first_name` NVARCHAR(50),
		`last_name` NVARCHAR(50),
		`temphash` VARCHAR(32),
		`activated` VARCHAR(3) NOT NULL,
		PRIMARY KEY (`userID`)
		);");

	$query1 = $DB_connect->exec("
		CREATE TABLE IF NOT EXISTS `UserStats` (
		`username` VARCHAR(30) NOT NULL,
		`level` INT(20),
		`armXP` INT(20),
		`abXP` INT(20),
		`legXP` INT(20),
		`cardioXP` INT(20), 
		PRIMARY KEY (`username`)
		);");
?>