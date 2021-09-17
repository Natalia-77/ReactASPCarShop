
import React from "react";

class Chat extends React.Component{

    constructor(){
        super();
        this.state={
            count:0,
            comment:[]
        }

        this.myRef=React.createRef();
    }



    addComment=()=>{

        let comment=this.myRef.current.value;
        let comments=this.state.comment;
        comments.push(comment);
        this.setState({
            'comments':comments
        });
        this.myRef.current.value='';
    }
render(){
    return(
        <>
        <div>
            <textarea ref={this.myRef}></textarea>
        </div>
        <div>
            <button onClick={this.addComment}>Додати коментар</button>
        </div>
        <div>
            <ul>
             {this.state.comment.map((item,index)=><li key={index.toString()}>{item}</li>)}
            </ul>
        </div>
        </>
    );
}

}


export default Chat;