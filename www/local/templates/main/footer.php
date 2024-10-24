<?
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
    die();
?>

</main>

<footer class="footer">
    <div class="container">
        <div class="footer__wrapper">
            <div class="footer__top">
                <div class="footer__logo logo">
                    <a class="logo__link" href="/">
                        <img src="<?= SITE_TEMPLATE_PATH ?>/assets/images/logo--footer.svg"
                            alt="Логотип: Первая кардиоклиника">
                    </a>
                </div>
                <div class="footer__group">
                    <ul class="info-list">
                        <li class="info-list__item info-list__item--phone">
                            <div class="info-list__item-text">
                                <a class="info-list__item-link" href="tel:+73452562727">
                                    <? $APPLICATION->IncludeComponent(
                                        "bitrix:main.include",
                                        "",
                                        array(
                                            "AREA_FILE_SHOW" => "file",
                                            "PATH" => SITE_TEMPLATE_PATH . "/includes/footer_phone-one.php"
                                        )
                                    ); ?>
                                </a>
                            </div>
                        </li>
                        <li class="info-list__item info-list__item--phone">
                            <div class="info-list__item-text">
                                <a class="info-list__item-link" href="tel:+73452608628">
                                    <? $APPLICATION->IncludeComponent(
                                        "bitrix:main.include",
                                        "",
                                        array(
                                            "AREA_FILE_SHOW" => "file",
                                            "PATH" => SITE_TEMPLATE_PATH . "/includes/footer_phone-two.php"
                                        )
                                    ); ?>
                                </a>
                            </div>
                        </li>
                        <li class="info-list__item info-list__item--email">
                            <div class="info-list__item-text">
                                <a class="info-list__item-link" href="mailto:info@1cardioclinic.ru">
                                    <? $APPLICATION->IncludeComponent(
                                        "bitrix:main.include",
                                        "",
                                        array(
                                            "AREA_FILE_SHOW" => "file",
                                            "PATH" => SITE_TEMPLATE_PATH . "/includes/footer_email.php"
                                        )
                                    ); ?>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__bottom">
                <nav class="footer-nav">
                    <? $APPLICATION->IncludeComponent(
                        "bitrix:menu",
                        "bottom_menu",
                        array(
                            "ALLOW_MULTI_SELECT" => "N",	// Разрешить несколько активных пунктов одновременно
                            "CHILD_MENU_TYPE" => "subtop",	// Тип меню для остальных уровней
                            "DELAY" => "N",	// Откладывать выполнение шаблона меню
                            "MAX_LEVEL" => "2",	// Уровень вложенности меню
                            "MENU_CACHE_GET_VARS" => array(	// Значимые переменные запроса
                                0 => "",
                            ),
                            "MENU_CACHE_TIME" => "3600",	// Время кеширования (сек.)
                            "MENU_CACHE_TYPE" => "N",	// Тип кеширования
                            "MENU_CACHE_USE_GROUPS" => "Y",	// Учитывать права доступа
                            "ROOT_MENU_TYPE" => "top",	// Тип меню для первого уровня
                            "USE_EXT" => "Y",	// Подключать файлы с именами вида .тип_меню.menu_ext.php
                        ),
                        false
                    ); ?>
                </nav>
            </div>
            <div class="footer__watermark">
                <div class="footer__watermark-copyright">© <?= date("Y") ?> © ООО «Сибирь-Ассист»,Первая
                    Кардиоклиника.Все права
                    защищены.Информация на сайте не является публичной офертой.</div>
                <a class="footer__watermark-dev-link" href="javascript:;">
                    <img src="<?= SITE_TEMPLATE_PATH ?>/assets/images/dev-logo.svg"
                        alt="Наш надежный digital-партнер: SunWeb">
                </a>
            </div>
        </div>
    </div>
</footer>

<dialog class="modal modal--top-images" id="consultation">
    <div class="container">
        <div class="modal__content modal__search">
            <div class="modal__close">
                <div class="modal_close close nav_toggler active">
                    <div class="close__wrapper">
                    </div>
                </div>
            </div>
            <div class="modal__content-img-box">
                <? $APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    "",
                    array(
                        "AREA_FILE_SHOW" => "file",
                        "PATH" => SITE_TEMPLATE_PATH . "/includes/footer_modal-image.php"
                    )
                ); ?>
            </div>
            <div class="modal__content-wrapper">
                <div class="modal__content-text">
                    <p>
                        <? $APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            "",
                            array(
                                "AREA_FILE_SHOW" => "file",
                                "PATH" => SITE_TEMPLATE_PATH . "/includes/footer_modal-text.php"
                            )
                        ); ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</dialog>
</div>
</body>

</html>
