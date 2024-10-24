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
<div class="articles__main">
    <ul class="articles-list">
        <?php foreach($arResult["ITEMS"] as $arItem):?>
        <li class="articles-list__item">
            <?php if($arItem["PREVIEW_PICTURE"]):?>
            <div class="articles-list__img-box">
                <a class="articles-list__img-link" href="<?= $arItem["DETAIL_PAGE_URL"]?>">
                    <img class="articles-list__img" loading="lazy"
                        src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arItem["PREVIEW_PICTURE"]["ALT"]?>">
                        
                </a>
            </div>
			<?endif;?>
            <div class="articles-list__content">
                <a class="articles-list__content-title-link" href="<?= $arItem["DETAIL_PAGE_URL"]?>">
                    <h3 class="articles-list__content-title"><?=$arItem["NAME"]?></h3>
                </a>
                <div class="articles-list__content-description">
                    <p><?=$arItem["PREVIEW_TEXT"]?></p>
                </div>
                <a class="articles-list__content-btn-link btn btn__more" href="<?= $arItem["DETAIL_PAGE_URL"]?>"><?=$arItem["DETAIL_TEXT"]?></a>
            </div>
        </li>
        <?endforeach?>
    </ul>
</div>
<?endif?>
