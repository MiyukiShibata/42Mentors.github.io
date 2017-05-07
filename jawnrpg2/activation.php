<?PHP

require_once(__DIR__."/config/database.php");

if (isset($_GET) && isset($_GET['user']) && isset($_GET['hash'])) {
	$user = $_GET['user'];
	$hash = $_GET['hash'];
	if ($camUser->verify($user, $hash)) {
		$camUser->redirect("login.php");
	}
}

?>

<html>
	<head>
	</head>
	<body>
	 <?PHP if (isset($_SESSION['error'])) {
	 		echo "<p>";
	 		echo $_SESSION['error'];
	 		echo "</p>";
	 	}
	 ?>
	</body>
</html>