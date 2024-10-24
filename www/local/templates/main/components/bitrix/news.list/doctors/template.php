<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>

<?php if(!empty($arResult['ITEMS'])):?>
    <div class="container">
        <h2 class="section__title"><?=$arResult["NAME"]?></h2>
        <ul class="doctors-list">
            <?php foreach($arResult["ITEMS"] as $arItem):?>
            <li class="doctors-list__item">
                <a class="doctors-list__item-link" href="<?= $arItem["DETAIL_PAGE_URL"]?>">
                    <?php if($arItem["PREVIEW_PICTURE"]):?>
                    <div class="doctors-list__item-img-box">
                        <img class="doctors-list__item-img"
                            src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arItem["PREVIEW_PICTURE"]["ALT"]?>">
                    </div>
                    <?endif;?>
                    <div class="doctors-list__item-content">
                        <h3 class="doctors-list__item-title"><?=isset($arItem["NAME"]) ? $arItem["NAME"]: ""?></h3>
                        <div class="doctors-list__item-degree"><?=$arItem["PREVIEW_TEXT"]?></div>
                        <div class="doctors-list__item-experience"><?=$arItem["PROPERTIES"]["EXPERIENCE"]["VALUE"]?>
                        </div>
                        <div class="doctors-list__item-btn-more btn btn__more"><?=$arItem["DETAIL_TEXT"]?></div>
                    </div>
                </a>
            </li>
            <?endforeach;?>
        </ul>
		<a class="doctors__btn btn btn__primary" href="javascript:;"><?=GetMessage("SEE_ALL")?></a>
    </div>
<?endif?>
