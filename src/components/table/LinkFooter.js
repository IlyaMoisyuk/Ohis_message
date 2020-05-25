import React from "react";
import CSS from './../../css/inlineCss'


function LinkFooter(props) {


    return (
        <table style={CSS.WidthLink}>
            <tbody style={CSS.colorTable}>
                <tr>
                    <td style={CSS.logoFooter}>
                        <img style={{ maxWidth: '130px' }} src="https://ohi-s.com/wp-content/uploads/2020/05/Logo_Vektor.png" />
                    </td>
                </tr>
                <tr>
                    <td style={CSS.footerTitle}>
                        Стоматологический портал
                    </td>
                </tr>
                <tr>
                    <td style={CSS.containerImg}>
                        <a href="https://www.facebook.com/OhisStom/" target="_blank">
                            <img src="https://img.icons8.com/ios/100/000000/facebook-f.png"
                                style={CSS.imgLink} />
                        </a>
                        <a href="https://vk.com/ohisstom" target="_blank">
                            <img src="https://img.icons8.com/ios/50/000000/vk-com.png"
                                style={CSS.imgLink} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCee-e_2v1DxPCcU1jB3uZ7Q" target="_blank">
                            <img src="https://img.icons8.com/dotty/80/000000/youtube-play.png"
                                style={CSS.imgLink} />
                        </a>
                        <a href="https://www.instagram.com/ohisstom/" target="_blank">
                            <img src="https://img.icons8.com/ios/50/000000/instagram-new.png"
                                style={CSS.imgLink} />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style={CSS.moreInfoFooter}>
                        Вы получили это письмо, поскольку прошли регистрацию в сервисе Ohi-s и
                        согласились получать сообщения на указанный при регистрации адрес электронной
                        почты.
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default LinkFooter;