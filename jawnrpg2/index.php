<?PHP

require_once(__DIR__."/config/database.php");

if ($camUser->loginStatus()) {
	echo "fuck";
} else {
	$camUser->redirect("Login.php");
}

?>

<!DOCTYPE html>
<html>
<head>
	<title>FitQuest</title>
</head>
<body>
	<div className=>
		
	</div>
</body>
</html>