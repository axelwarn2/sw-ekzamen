<?php

$arResult['ITEMS_COUNT'] = count($arResult['ITEMS']);

foreach($arResult['ITEMS'] as $key => $arItem) {
    $arTmpFile = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"]["ID"], 
    array('width' => 290, 'height' => 218), 
    BX_RESIZE_IMAGE_PROPORTIONAL, 
    true);

    $arResult['ITEMS'][$key]['PREVIEW_PICTURE']['SRC'] = $arTmpFile["src"];
}
