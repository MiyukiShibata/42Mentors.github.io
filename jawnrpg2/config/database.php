<?PHP

session_start();

$DB_connect;
$host = "localhost";
$db = "fitQuest";
$port = "3306";
$user = "root";
$pass = "root";
$charset = "utf8";
$dsn = "mysql:host=$host;dbname=INFORMATION_SCHEMA;";
// $dsn = "mysql:host=$host";

try {
	$DB_connect = new PDO($dsn, $user, $pass);
	$DB_connect->exec("CREATE DATABASE IF NOT EXISTS fitQuest; USE fitQuest");
	$DB_connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$DB_connect->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
	$DB_connect->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

	include("setup.php");
} catch(PDOException $e) {
	echo $e->getMessage();
}

require_once(__DIR__ . '/User.class.php');
$camUser = new User($DB_connect);

?>