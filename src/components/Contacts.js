import React from 'react';
import update from 'react-addons-update'; // ES6
import ContactCreator from './ContactCreator';

class Contacts extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            contractData:[
                {name:"Abet", phone: "010-0000-0001"},
                {name:"Betty", phone: "010-0000-0002"},
                {name:"Charlie", phone: "010-0000-0003"},
                {name:"David", phone: "010-0000-0004"}
            ]
        }   

    }

    _insertContact(name, phone){
        
        console.log("name : " + name + "  phone : " + phone);
 
        let newState = update(this.state, {
            contactData: {
                $push: [{"name": name, "phone": phone}]
            }
        });
 
        this.setState(newState);

    }

    clickListNode(){
        alert("click Li");
    }

    render(){
        return (
            <div>
                <h1>Contacts</h1>
                <ContactCreator onInsert={this._insertContact.bind(this)} />
                <ul>
                    {this.state.contractData.map((contract,i ) =>{
                        return(<ContactInfo name={contract.name} phone={contract.phone} key={i} />);
                    })}
                </ul>
            </div>
        );
    }

}

class ContactInfo extends React.Component{
    render(){
        return(
            <li>{this.props.name} {this.props.phone}</li>
        )
    }
}

export default Contacts;