<?php

$username = $_POST['name'];
$usertel = $_POST['tel'];
$useremail = $_POST['email'];

$userdate = date('Y-m-d H:i:s');

echo ' username ' . $username;
echo ' usertel ' .  $usertel;
echo ' useremail ' .  $useremail;
