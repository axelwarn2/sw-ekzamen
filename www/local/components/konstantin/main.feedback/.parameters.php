<?php

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}

use Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);

$site = ($_REQUEST["site"] ?? ($_REQUEST["src_site"] ?? false));
$arFilter = [
	"TYPE_ID" => "FEEDBACK_FORM",
	"ACTIVE" => "Y"
];

if ($site !== false) {
	$arFilter["LID"] = $site;
}

$arEvent = [];
$dbType = CEventMessage::GetList("id", "desc", $arFilter);
while ($arType = $dbType->GetNext()) {
	$arEvent[$arType["ID"]] = "[" . $arType["ID"] . "] " . $arType["SUBJECT"];
}

$arComponentParameters = [
	"PARAMETERS" => [
		"USE_CAPTCHA" => [
			"NAME" => Loc::getMessage("MFP_CAPTCHA"),
			"TYPE" => "CHECKBOX",
			"DEFAULT" => "Y",
			"PARENT" => "BASE",
		],
		"OK_TEXT" => [
			"NAME" => Loc::getMessage("MFP_OK_MESSAGE"),
			"TYPE" => "STRING",
			"DEFAULT" => Loc::getMessage("MFP_OK_TEXT"),
			"PARENT" => "BASE",
		],
		"EMAIL_TO" => [
			"NAME" => Loc::getMessage("MFP_EMAIL_TO"),
			"TYPE" => "STRING",
			"DEFAULT" => htmlspecialcharsbx(COption::GetOptionString("main", "email_from")),
			"PARENT" => "BASE",
		],
		"REQUIRED_FIELDS" => [
			"NAME" => Loc::getMessage("MFP_REQUIRED_FIELDS"),
			"TYPE" => "LIST",
			"MULTIPLE" => "Y",
			"VALUES" => [
				"NONE" => Loc::getMessage("MFP_ALL_REQ"),
				"NAME" => Loc::getMessage("MFP_NAME"),
				"EMAIL" => "E-mail",
				"MESSAGE" => Loc::getMessage("MFP_MESSAGE")
			],
			"DEFAULT" => "",
			"COLS" => 25,
			"PARENT" => "BASE",
		],

		"EVENT_MESSAGE_ID" => [
			"NAME" => Loc::getMessage("MFP_EMAIL_TEMPLATES"),
			"TYPE" => "LIST",
			"VALUES" => $arEvent,
			"DEFAULT" => "",
			"MULTIPLE" => "Y",
			"COLS" => 25,
			"PARENT" => "BASE",
		],
	],
];
