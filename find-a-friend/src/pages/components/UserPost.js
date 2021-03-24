import React from 'react';
import {Grid,Avatar,Paper,ListItemText,ListItemAvatar} from '@material-ui/core';

const postStyle = {
    padding:"25px"
}
const postImageStyle = {
    padding:"5px",
    maxHeight:"500px",
    maxWidth:"90vw"
}
const postTextStyle = {
    padding:"10px"
}

class UserPost extends React.Component {
    render(){
        return(
            <Paper style={postStyle} elevation ={2}>
            <Grid container>
                <ListItemAvatar>
                <Avatar alt={this.props.username src={this.props.userAvatar}></Avatar>
                </ListItemAvatar>
                <h3>{this.props.username}</h3>
            </Grid>
            <Grid container justify='center'>
                <img src = {this.props.postImage} alt={this.props.postImageAlt} style = {postImageStyle}/>
            </Grid>
            <Grid>
            <ListItemText primary ={this.props.postText} secondary ={this.props.postDate}/>
            </Grid>
            </Paper>

        )
    }
}
export default UserPost;