import React, {component} from "react";
class EventHandlers extends React.Component {
    constructor(){
        super();
        this.stste = {
            person : {name :"" , city : ""}
        
    };
}
ComponentDidMount(){
    //make ajax request
    this.setState({
        person : { name: "priyan" , city: "nelliady"   }
    });
}
ComponentDidUpdate() {
    console.log()
}
