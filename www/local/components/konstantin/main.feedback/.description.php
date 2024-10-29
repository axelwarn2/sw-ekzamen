<?php

use Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}

$arComponentDescription = [
	"NAME" => Loc::getMessage("MAIN_FEEDBACK_COMPONENT_NAME"),
	"DESCRIPTION" => Loc::getMessage("MAIN_FEEDBACK_COMPONENT_DESCR"),
	"ICON" => "/images/feedback.gif",
	"PATH" => [
		"ID" => "utility",
	],
];
