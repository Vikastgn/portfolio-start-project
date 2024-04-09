import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "../footer/Footer_Styles"

const socialItemData = [
    {
        iconId:"instagram",
    },
        {
        iconId:"telegram",
    },
        {
        iconId:"vk",
    },
        {
        iconId:"linkedin",
    },

]

export const Footer:React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
            <S.Name>Victoria</S.Name>
            <S.SocialList>

                {socialItemData.map((s,index)=> {
                    return (
                        <S.SocialLink key={index}>
                        <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                    </S.SocialLink>
                    )}
                )}
            </S.SocialList>
            <S.Copyright>© 2024 Victoria Stognieva, All Rights Reserved.</S.Copyright>
        </FlexWrapper>
        </S.Footer>
    );
};

