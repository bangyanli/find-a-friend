import React from "react"
import { AppBar, Grid, Toolbar,Paper, Avatar, TextField, Button, Typography,Link} from "@material-ui/core";
import {Redirect} from "react-router-dom";

const gridStyle = {
    width:"100%",
    margin:"0px"
}
const leftPaperStyle={
    width:"100%",
    backgroundColor:"#405185"
}
const h3Style={
    color:"#FFFFFF",
    padding: "20px"
}
const rightPaperStyle ={
    padding:"20px",
    height:"60vh",
    width:"280px",
    margin:"20px auto"
}
const buttonStyle = {
    margin:"10px 0"
}
class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:"",
            firstname:"",
            lastname:"",
            success: false,
            login:false
        }; 
        this.handleChange=this.handleChange.bind(this);
        this.redirectToLogIn = this.redirectToLogIn.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    redirectToLogIn(){
        this.setState({login:true});
    }
    render(){
        if(this.state.login){
            return <Redirect to = './login'/>
        }
        return(
        <div>
            <AppBar position = "static">
                <Toolbar>
                    <h1>Find-A-Friend</h1>
                </Toolbar>
            </AppBar>
            <Grid container style ={gridStyle} spacing = {2}>
                <Grid item xs={9}>
                <Paper style={leftPaperStyle}>
                <div>
                    <h3 style = {h3Style}>
                    1231231231
                    </h3>
                    <img alt = "heart" src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fartistic-blossom-bright-clouds-207962%2F&psig=AOvVaw2ltdkppDa1590yBGNPhIlE&ust=1616394671691000&source=images&cd=vfe&ved=0CAYQjRxqFwoTCNDCzMThwO8CFQAAAAAdAAAAABAD"/>
                </div>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper style={rightPaperStyle} elevation = {10}>
                <Grid align="center">
                    <Avatar></Avatar>
                    <h2>Sign up</h2>
                </Grid>
                <form>
                    <TextField label="First name" placeholder="John" name="firstname" id ="firstname" fullWidth required autoFocus onChange={this.handleChange}
                    value = {this.state.firstname}/>
                    <TextField label="Last name" name="lastname" placeholder="Appleseed"id ="lastname" fullWidth required onChange={this.handleChange}
                    value = {this.state.lastname}/>
                    <TextField label="email" name="email" placeholder="email"id ="email" fullWidth required onChange={this.handleChange}
                    value = {this.state.email}/>
                    <TextField label="password" name="password" placeholder="password"id ="password" fullWidth required type="password" onChange={this.handleChange}
                    value = {this.state.password}/>
                    <Button type="submit" color = "primary" variant="contained" fullWidth style={buttonStyle}>Sign up</Button>

                </form>
                <Typography>
                    Already have an account?{" "}<Link href="" onClick={this.redirectToLogIn}>Log in</Link>
                </Typography>
                </Paper>
                </Grid>
            </Grid>
        </div>
        )
    } 
}

export default SignUp;