import React, { useRef, useState } from 'react';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

export default function Contact() {
    const[messageSent, setMessageSent] = useState("");
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[subject, setSubject] = useState("");
    const[message, setMessage] = useState("");
    const[nameApproved, setNameApproved] = useState<boolean>(false);
    const[emailApproved, setEmailApproved] = useState<boolean>(false);
    const[subjectApproved, setSubjectApproved] = useState<boolean>(false);
    const[messageApproved, setMessageApproved] = useState<boolean>(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.sendForm('service_tlhahdm', 'template_pcbi67x', e.currentTarget, 'kx3NlwbweLe-uRaUj')
        .then((result) => {
            console.log("sent");
        }, (error) => {
            console.log("not sent");
        });
        e.currentTarget.reset();
    };

    function approveName(){
        let spacesInName = 0;
        for(let i = 0; i < name.length; i++) {
            if(name[i] === " "){
                spacesInName += 1;
            }
        }
        if(spacesInName !== name.length) {
            setNameApproved(true);
            console.log(spacesInName);
        } else if(spacesInName === name.length) {
            setNameApproved(false);
            setMessageSent("Please type in a name.");
        }
        console.log('name approved: ' + nameApproved);
    }

    function approveEmail(){
        let atInEmail = 0;
        for(let i = 0; i < email.length; i++) {
            if(email[i] === "@"){
                atInEmail += 1;
            }
        }
        if(atInEmail === 1) {
            setEmailApproved(true);
        } else {
            setEmailApproved(false);
            setMessageSent("Please type in a proper email.");
        }
        console.log('email approved: ' + emailApproved);
    }

    function approveSubject(){
        let spacesInSubject = 0;
        for(let i = 0; i < subject.length; i++) {
            if(subject[i] === " "){
                spacesInSubject += 1
            }
        }
        if(spacesInSubject !== subject.length) {
            setSubjectApproved(true);
        } else {
            setSubjectApproved(false);
            setMessageSent("Please type in a subject.");
        }
        console.log('subject approved: ' + subjectApproved);
    }

    function approveMessage(){
        let spacesInMessage = 0;
        for(let i = 0; i < message.length; i++) {
            if(message[i] === " "){
                spacesInMessage += 1
            }
        }
        if(spacesInMessage !== message.length) {
            setMessageApproved(true);
        } else {
            setMessageApproved(false);
            setMessageSent("Please type in a message.");
        }
        console.log('message approved: ' + messageApproved);
    }
    
    return (
        <div className='Contact'>
            <h1>Contact Me</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                approveName();
                approveEmail();
                approveSubject();
                approveMessage();
                if(nameApproved === true && emailApproved === true && subjectApproved === true && messageApproved === true){
                    sendEmail(e);
                    setMessageSent("Message Sent!");
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                } else {
                    console.log("Message Not Sent");
                }
                }}>
                <label htmlFor="name"></label>
                <input className="reg-input" id="name" type="text" placeholder='Enter your name here' name="name" onChange={(e) => {setName(e.target.value); setMessageSent("");}}/>
                <label htmlFor="email"></label>
                <input className="reg-input" id="email" type="text" placeholder='Enter your email here' name="email" onChange={(e) => {setEmail(e.target.value); setMessageSent("");}}/>
                <label htmlFor="subject"></label>
                <input className="reg-input" id="subject" type="text" placeholder='Subject' name="subject" onChange={(e) => {setSubject(e.target.value); setMessageSent("");}}/>
                <label htmlFor="message"></label>
                <textarea name="message" id="message" cols={30} rows={10} placeholder='Type message here' onChange={(e) => {setMessage(e.target.value); setMessageSent("");}}></textarea>
                <input type="submit" value="Send Message"/>
            </form>
            <p>{messageSent}</p>
        </div>
    )
}
