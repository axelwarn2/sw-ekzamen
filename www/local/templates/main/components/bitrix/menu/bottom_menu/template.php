<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
    die(); ?>

<? if (!empty($arResult)): ?>
    <ul class="footer-nav__list">
        <?
        $previousLevel = 0;
        $inCombinedLi = false;

        foreach ($arResult as $arItem): ?>

            <? if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel): ?>
                <?= str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"])); ?>
            <? endif ?>

            <? if ($arItem["DEPTH_LEVEL"] == 1 && !$arItem["IS_PARENT"] && $arItem["PERMISSION"] > "D"): ?>

                <? if (!$inCombinedLi): ?>
                    <? $inCombinedLi = true; ?>
                    <li class="footer-nav__item">
                    <? endif ?>

                    <a href="<?= $arItem["LINK"] ?>" class="footer-nav__item-link"><?= $arItem["TEXT"] ?></a>

                <? else: ?>

                    <? if ($inCombinedLi): ?>
                        <? $inCombinedLi = false; ?>
                    </li>
                <? endif ?>

                <? if ($arItem["IS_PARENT"]): ?>
                    <? if ($arItem["DEPTH_LEVEL"] == 1): ?>
                        <li class="footer-nav__item">
                            <a href="<?= $arItem["LINK"] ?>" class="footer-nav__item-link">
                                <span></span> <?= $arItem["TEXT"] ?>
                            </a>
                            <ul class="footer-sub-nav__list">
                            <? else: ?>
                                <li class="footer-nav__item<? if ($arItem["SELECTED"]): ?> item-selected<? endif ?>">
                                    <a href="<?= $arItem["LINK"] ?>" class="footer-sub-nav__item-link"><?= $arItem["TEXT"] ?></a>
                                    <ul>
                                    <? endif ?>
                                <? else: ?>
                                    <? if ($arItem["PERMISSION"] > "D"): ?>
                                        <? if ($arItem["DEPTH_LEVEL"] == 1): ?>
                                            <li class="footer-nav__item-link">
                                                <a href="<?= $arItem["LINK"] ?>" class="footer-nav__item-link"><?= $arItem["TEXT"] ?></a>
                                            </li>
                                        <? else: ?>
                                            <li class="footer-sub-nav__item">
                                                <a href="<?= $arItem["LINK"] ?>" class="footer-sub-nav__item-link"><?= $arItem["TEXT"] ?></a>
                                            </li>
                                        <? endif ?>
                                    <? else: ?>
                                        <? if ($arItem["DEPTH_LEVEL"] == 1): ?>
                                            <li class="footer-nav__item-link">
                                                <a href="" class="nav__list-link"
                                                    title="<?= GetMessage("MENU_ITEM_ACCESS_DENIED") ?>"><?= $arItem["TEXT"] ?></a>
                                            </li>
                                        <? else: ?>
                                            <li class="footer-sub-nav__item">
                                                <a href="" class="denied"
                                                    title="<?= GetMessage("MENU_ITEM_ACCESS_DENIED") ?>"><?= $arItem["TEXT"] ?></a>
                                            </li>
                                        <? endif ?>
                                    <? endif ?>
                                <? endif ?>

                            <? endif ?>

                            <? $previousLevel = $arItem["DEPTH_LEVEL"]; ?>
                        <? endforeach ?>

                        <? if ($previousLevel > 1): ?>
                            <?= str_repeat("</ul></li>", ($previousLevel - 1)); ?>
                        <? endif ?>
                    </ul>
                <? endif ?>

