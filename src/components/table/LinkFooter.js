import React from "react";
import CSS from './../../css/inlineCss'


function LinkFooter(props) {


    return (
        <table style={CSS.WidthLink}>
            <tbody style={CSS.colorTable}>
                <tr>
                    <td style={CSS.moreInfoFooter}>
                        Вы получили это письмо, поскольку прошли регистрацию <br /> в сервисе Ohi-s и
                        согласились получать сообщения на указанный<br /> при регистрации адрес электронной
                        почты.
                    </td>
                </tr>
                <tr>
                    <td style={CSS.moreInfoFooterUnp}>
                        ИНН 7708371044, КПП 770801001Москва, ул. Спасская Б, дом 8, эт.1 пом 51 оф 3Д, 129090
                    </td>
                </tr>
                <tr>
                    <td style={CSS.linksFooter}>
                        <a style={CSS.linkFooter} href="">Учетная запись</a> | <a style={CSS.linkFooter} href="">Поддержка</a> | <a style={CSS.linkFooter} href="">Отписаться от рассылки</a>
                    </td>
                </tr>

            </tbody>
        </table>
    )
}

export default LinkFooter;