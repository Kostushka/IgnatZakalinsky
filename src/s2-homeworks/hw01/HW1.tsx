import React from 'react';
import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from '../../s1-main/App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import avatar from './avatar.png';

/*
 * 5 - сделать стили в соответствии с дизайном
 * */

export type MessageType = {
    id: number;
    user: UserInMessageType;
    message: MessageInMessageType;
};

type UserInMessageType = {
    avatar: string;
    name: string;
};

type MessageInMessageType = {
    text: string;
    time: string;
};

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'John', // можно менять
    },
    message: {
        text: 'Привет, Alexandro, how are your English?', // можно менять
        time: '22:00', // можно менять
    },
};
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Alexandr', // можно менять
    },
    message: {
        text: 'So, so.', // можно менять
        time: '22:00', // можно менять
    },
};

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Hometask № 1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    );
};

export default HW1;
