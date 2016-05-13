import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import CommunicationChatBubble from 'material-ui/lib/svg-icons/communication/chat-bubble';
import Colors from 'material-ui/lib/styles/colors';
const ListExampleSimple = () => (
    <div>
        <List>
            <ListItem
                primaryText="James Anderson" 
                secondaryText="Jan 20, 2014"
                rightIcon={<CommunicationChatBubble />}
                leftAvatar={<Avatar src="../../assets/Chrysanthemum.jpg" />}
                />
            <ListItem
                primaryText="Adelle Charles"
                leftAvatar={
                    <Avatar
                        color={Colors.pinkA200} backgroundColor={Colors.transparent}
                        style={{ left: 8 }}
                        >
                        A
                    </Avatar>
                }
                />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        </List>
        <Divider />
        <List>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
        </List>
    </div>
);

export default ListExampleSimple;